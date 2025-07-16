import React from "react";
import Title from "./Title";
import { assets, dummyCarData } from "../assets/assets";
import CarCards from "./CarCards";
import { useNavigate } from "react-router-dom";

const FeaturedSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <div>
        <Title
          title="featured"
          subtitle="Road-Tested Favorites, Ready When You Are"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {dummyCarData.slice(0, 6).map((car) => {
          //only 6 data are needed
          return (
            <div key={car._id}>
              <CarCards car={car} />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          navigate("/cars");
          scrollTo(0, 0);
        }}
        className="flex justify-center items-center gap-2 px-6 py-2 border border-borderColor transition-all duration-200 ease-out text-white bg-primary hover:bg-yellow-600 rounded-md mt-18 cursor-pointer "
      >
        Explore All Cars <img src={assets.arrow_icon} alt="arrow" />
      </button>
    </div>
  );
};

export default FeaturedSection;
