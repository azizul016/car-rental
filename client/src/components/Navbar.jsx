import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets, menuLinks } from "../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  //   console.log(location, "location");
  return (
    <div
      className={`flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-grey-600 border-b border-borderColor relative transition-all ${
        location.pathname === "/" && "bg-light"
      }`}
    >
      <Link>
        <img src={assets.logo} alt="logo" className="h-8" />
      </Link>
      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm: top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row max-sm:items-start items-center   gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          location.pathname === "/" ? "bg-light" : "bg-white"
        } ${open ? "max-sm: trnslate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks?.map((link) => (
          <Link to={link.name}>{link.name}</Link>
        ))}
        <div className="hidden lg:flex items-center rounded-full border border-borderColor text-sm gap 2 px-3 mx-w-56">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Products"
            className="w-full items-center outline-none bg-transparent placeholder-grey-400 py-1.5"
          />
          <img src={assets.search_icon} alt="search" />
        </div>
        <div className="flex max-sm:flex-col items-start sm:items-center  gap-6">
          <button className="cursor-pointer" onClick={() => navigate("/owner")}>
            Dashboard
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
      {/* mobile screen menu icon */}
      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <img src={open ? assets.menu_icon : assets.close_icon} alt="menu" />
      </button>
    </div>
  );
};

export default Navbar;
