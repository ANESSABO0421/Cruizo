import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation(); //to know the current locatio of user and change the background color
  const [open, setOpen] = useState(false); //nav bar in mobile
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center max-sm:h-16 justify-between px-6 md:px-16 lg:px-24 xl:px-32 text-gray-600 border-b border-borderColor relative transition-all ${
        location.pathname === "/" && "bg-light"
      }`} //when the path is / returns true then apply the bg color
    >
      <Link>
        <img src={assets.logo} alt="logo" className="h-8" />
      </Link>

      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 sm:p-4 transition-all duration-300 z-56  max-sm:px-6 ${
          location.pathname === "/" ? "bg-light" : "bg-white"
        } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {/*max-sm less than 640px  this is mobile nav*/}
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/my-bookings">My Bookings</Link>
        {/*input box */}
        <div className="hidden lg:flex items-center text-sm gap-2  rounded-full border border-borderColor max-w-56 px-3">
          <input
            type="text"
            className="py-1.5 placeholder-gray-500 outline-none w-full  px-4"
            placeholder="Search your Ride"
          />
          <img src={assets.search_icon} alt="search icon" />
        </div>
        {/*buttons */}
        <div className="flex max-sm:flex-col max-sm:items-start items-start gap-5">
          <button
            onClick={() => navigate("/owner")}
            className=" rounded-[5px] py-2  "
          >
            Dashboard
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="bg-blue-700 rounded-[5px] py-2 px-3  text-white  hover:bg-blue-600 cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>

      {/*button for menu icon in mobile*/}
      <button onClick={() => setOpen(!open)}>
        {/*is menu open then show close icon else menu icon */}
        <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
      </button>
    </div>
  );
};

export default Navbar;
