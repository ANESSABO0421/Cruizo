import React from "react";
import { assets, dummyUserData } from "../../assets/assets";
import { Link } from "react-router-dom";

const NavbarOwner = () => {
  const user = dummyUserData;

  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-2 text-gray-500 bg-black border-borderColor relative transition-all">
      <Link to="/">
        <img
          src={assets.Cruizo}
          alt="Cruizo Logo"
          className="h-[80px] w-auto -my-2"
        />
      </Link>
      {/*if user is present he is the owner*/}
      <p className="text-white">Welcome, {user.name || "owner"}</p>
    </div>
  );
};

export default NavbarOwner;
