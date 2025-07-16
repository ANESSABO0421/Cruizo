import React from "react";
import Title from "./Title";
import { dummyCarData } from "../assets/assets";
import CarCards from "./CarCards";

const FeaturedSection = () => {
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
    </div>
  );
};

export default FeaturedSection;
