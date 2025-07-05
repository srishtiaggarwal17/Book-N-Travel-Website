
import React, { useEffect } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaMobileAlt, FaLocationArrow } from "react-icons/fa";
import logo from "../assets/logo.png";
import nature from "../assets/nature.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/UseOnlineStatus";
import { toast } from "react-toastify";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Best Places", link: "/places" },
  { title: "Blogs", link: "/blogs" },
];

const Footer = () => {

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    if (onlineStatus === false) {
      toast.error("Connection failed. You are offline!")
    } else {
      toast.dismiss("offline-toast");
    }
  }, [onlineStatus]);

  if (onlineStatus === false) {
  console.log("Rerendering");
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white z-50">
      <div className="container py-[2px] sm:block hidden">
        <div className="flex justify-between items-center">
          <p className="text-sm sm:text-base">🔴 You are offline. Waiting for Internet Connection...</p>
          <p className="text-sm sm:text-base">We'll reconnect automatically.</p>
        </div>
      </div>
    </div>
  );
  }

  return (
    <div className="py-10 relative overflow-hidden">
      <img
        src={nature}
        alt="footer background"
        className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
      />
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          {/* Logo + Info */}
          <div className="py-8 px-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={logo} alt="logo" className="max-h-[60px]" />
            </h1>
            <p className="text-sm mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis voluptas harum accusantium quas sit provident quis aut labore consectetur veniam iste ex magni suscipit mollitia repudiandae, quia quidem?
            </p>
            <div className="flex items-center gap-3 mt-4">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <FaMobileAlt />
              <p>+91 9463051822</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#"><FaInstagram className="text-3xl" /></a>
              <a href="#"><FaFacebook className="text-3xl" /></a>
              <a href="#"><FaLinkedin className="text-3xl" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                <ul>
                  {FooterLinks.map(({ title, link }, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700"
                    >
                      <Link to={link} onClick={() => window.scrollTo(0, 0)}>
                        <span>➤</span> <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
          &copy; 2024 All rights reserved || Made with ❤️ by TCJ
        </div>
      </div>
    </div>
  );
};

export default Footer;








