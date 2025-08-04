import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets, menuLinks } from "../assets/assets";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

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
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm: top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          location.pathname === "/" ? "bg-light" : "bg-white"
        } ${open ? "max-sm: trnslate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks?.map((link) => (
          <Link to={link.name}>{link.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
