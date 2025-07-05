import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ setShowMenu }) => {
  const handleClose = () => {
    setShowMenu(false);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Best Places", path: "/places" },
  ];

  return (
    <>
      {/* Inline animation */}
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }

          .animate-slide-in {
            animation: slideIn 0.3s ease forwards;
          }
        `}
      </style>

      <div className="fixed inset-0 z-[9999] flex">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-40"
          onClick={handleClose}
        ></div>

        {/* Sidebar */}
        <div className="w-[260px] h-full bg-white shadow-lg p-6 animate-slide-in relative z-50">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-8">
            <FaUserCircle className="text-4xl text-gray-600" />
            <div>
              <p className="font-semibold">Hello User</p>
              <p className="text-sm text-gray-500">Premium user</p>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={handleClose}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-primary"
                      : "text-gray-700 hover:text-primary"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;

