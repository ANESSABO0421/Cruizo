import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-100 max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden">
      {/* text */}
      <div className="text-black">
        <h1 className="text-3xl font-medium">
          Got a Car Sitting Idle? Turn It Into Income!
        </h1>
        <p className="mt-2">
          Join CRUIZO and rent out your vehicle with full control and zero
          hassle.
        </p>
        <p className="max-w-130">
          We handle driver screening, payments, and support — you enjoy the
          profits.
        </p>
        <button className="flex justify-center items-center gap-2 px-6 py-2 border border-borderColor transition-all duration-200 ease-out text-white bg-black hover:bg-white hover:text-black rounded-md mt-2 cursor-pointer ">
          List your Car
        </button>
      </div>
      {/* image */}
      <img src={assets.Ferrari} alt="banner-img" className="max-h-45 mt-10" />
    </div>
  );
};

export default Banner;
