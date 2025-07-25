import React from "react";
import { assets, cityList } from "../assets/assets";
import { useState } from "react";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    <div className="h-screen pt-[100px] flex flex-col justify-center items-center gap-14 text-center bg-light">
      <h1 className="text-4xl md:text-5xl font-semibold">
        Drive Your Dream Car Today
      </h1>
      <form className="flex flex-col lg:flex-row  md:flex-row items-start md:items-center justify-around p-6 rounded-lg md:rounded-full bg-white  w-full max-w-80 md:max-w-200 shadow-xl/50">
        <div className="flex flex-col md:flex-row md:items-center lg:flex-row gap-10 min-md:ml-8">
          {/* pickup location */}
          <div className="flex flex-col items-start gap-2">
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="" className="flex justify-start">
                Pickup Location
              </option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p>{pickupLocation ? pickupLocation : "select a location"}</p>
            {/*if location selected view else not */}
          </div>
          <div className="flex flex-col items-start gap-2">
            {/* pickup date */}
            <label htmlFor="pickup-date">Pickup Date:</label>
            <input
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            {/*return date*/}
            <label htmlFor="return-date">Return Date:</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              id="return-date"
              className="text-sm text-gray-500"
              required
            />
          </div>
        </div>
        {/* search button*/}
        <button className="hover:bg-yellow-600 duration-300 ease-out flex  bg-[#EDAC1A] text-white h-[50px] w-[150px] rounded-2xl items-center justify-center gap-2">
          <img
            src={assets.search_icon}
            alt="search icon"
            className="h-[20px] flex"
          />
          Search
        </button>
      </form>
      <img
        src="/Honda.png"
        alt="main_car"
        className="flex items-center justify-center h-[400px] w-[800px]"
      />
    </div>
  );
};

export default Hero;
