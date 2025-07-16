import React from "react";
import Hero from "../components/Hero";
import CarCards from "../components/CarCards";
import FeaturedSection from "../components/FeaturedSection";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedSection />
      <Banner/>
    </div>
  );
};

export default Home;
