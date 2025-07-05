import React, { useState, useEffect } from "react";
import HeroImage from "../assets/nature.jpg";
import Hero from "../components/Hero";
import Places from "../components/Places";
import Bannerimg from "../components/Bannerimg";
import poster from "../assets/poster.png";
import Blogs from "./Blogs";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import Popup from "../components/Popup";
import ShimmerHome from "../components/ShimmerHome"; 

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <ShimmerHome />;

  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <img
            src={HeroImage}
            alt="Hero Background"
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          />
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <Bannerimg img={poster} />
        <Blogs />
        <Banner />
        <Bannerimg img={poster} />
        <Testimonial />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;

