import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import { assets, dummyCarData } from "../assets/assets";
import CarCards from "../components/CarCards";

const Cars = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(); //cursor focus

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      {/* Title */}
      <div className="flex flex-col items-center justify-center bg-light py-20 max-md:px-4">
        <Title
          title="Find Your Perfect Ride"
          subtitle="Explore our wide range of available cars tailored for every journey"
        />
        <div className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <img
            src={assets.search_icon}
            alt="search-icon"
            className="h-4 w-4 mr-2"
          />
          <input
            type="text"
            className="w-full h-full outline-none"
            placeholder="Where’s your next ride taking you?...."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            ref={inputRef}
          />
          <img
            src={assets.filter_icon}
            alt="search-icon"
            className="h-4 w-4 ml-2"
          />
        </div>
      </div>
      {/* Total Cars display */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p>Showing {dummyCarData.length} Cars</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dummyCarData.map((car, index) => (
            <div key={index}>
              <CarCards car={car}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
