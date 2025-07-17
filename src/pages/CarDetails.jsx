import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import Loader from "../components/Loader";

const CarDetails = () => {
  const { id } = useParams(); //dynamic routing
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;
  const handleSubmit=async(e)=>{
    e.preventDefault()
  }

  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);

  return car ? ( //if car exist only display else show loading
    <div className=" px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
      >
        <img
          src={assets.arrow_icon}
          alt="arrow"
          className="rotate-180 opacity-65"
        />
        Back to All Cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* left car image and details */}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt=""
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
          />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} • {car.year}
              </p>
            </div>
            <hr className="border-borderColor my-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: assets.users_icon,
                  text: `${car.seating_capacity} Seats`,
                },
                { icon: assets.fuel_icon, text: car.fuel_type },
                { icon: assets.carIcon, text: car.transmission },
                { icon: assets.location_icon, text: car.location },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-yellow-500 text-black items-center p-4 rounded-lg"
                >
                  <img src={item.icon} alt="icon" className="h-5 mb-2 " />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            {/* Descriptions */}
            <div>
              <h1 className="text-xl font-medium mb-3">Description</h1>
              <p>{car.description}</p>
            </div>
            {/* features */}
            <div>
              <h1 className="text-xl font-medium mb-3">Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "360 Camera",
                  "Bluetooth",
                  "GPS",
                  "Heated Seats",
                  "Rear View Mirror", //given as an array of features
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <img src={assets.check_icon} alt="" className="h-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* booking form */}
        <form onSubmit={handleSubmit} className="shadow-lg/30 h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500">
          {" "}
          {/*sticky will not work until a  top is given*/}
          <p className="flex justify-between items-center text-2xl text-gray-800 font-semibold">
            {currency}
            {car.pricePerDay}
            <span className="text-black">/day</span>
          </p>
          <hr className="border-borderColor my-6" />
          <div className="flex flex-col gap-3">
            <label htmlFor="pickup-date">Pickup Date:</label>
            <input
              type="date"
              className="border border-borderColor px-3 py-2 rounded-lg"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="return-date">Return Date:</label>
            <input
              type="date"
              className="border border-borderColor px-3 py-2 rounded-lg"
              id="return-date"
              required
            />
          </div>
          <button className="w-full bg-primary rounded-lg px-4 py-3 hover:bg-yellow-600 transition-all ease-out duration-500 text-white hover:-translate-y-1 hover:shadow-xl/30">Book Now</button>
          <p className="text-sm flex items-center justify-center">No Credit Card required to reserve</p>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
