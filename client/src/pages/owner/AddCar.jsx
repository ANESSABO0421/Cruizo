import React, { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";

const AddCar = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    Model: "",
    Year: "",
    priceperday: "",
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: "",
    Location: "",
    Description: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted car details:", car);
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subtitle="Bring Your Car into the Spotlight of Rentals"
      />

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-6 text-sm mt-6 max-w-4xl"
      >
        {/* Image Upload */}
        <div className="flex items-center gap-4">
          <label htmlFor="car-image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt={image ? "Selected car image" : "Upload icon"}
              className="h-14 w-14 rounded object-cover border"
            />
          </label>
          <input
            type="file"
            id="car-image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          <p className="text-gray-500">Upload picture of your car</p>
        </div>

        {/* Brand & Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label>Brand</label>
            <input
              type="text"
              placeholder="Car brand name"
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none w-full"
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Model</label>
            <input
              type="text"
              placeholder="Car model"
              value={car.Model}
              onChange={(e) => setCar({ ...car, Model: e.target.value })}
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none w-full"
            />
          </div>
        </div>

        {/* Year, Daily Price, Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Year</label>
            <input
              type="number"
              placeholder="Year of manufacture"
              value={car.Year}
              onChange={(e) => setCar({ ...car, Year: e.target.value })}
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none w-full"
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Daily Price ({currency})</label>
            <input
              type="number"
              placeholder="Price per day"
              value={car.priceperday}
              onChange={(e) => setCar({ ...car, priceperday: e.target.value })}
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none w-full"
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Category</label>
            <select
              value={car.category}
              onChange={(e) => setCar({ ...car, category: e.target.value })}
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none w-full"
            >
              <option value="">Select a Category</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Compact">Compact</option>
              <option value="Hypercar">Hypercar</option>
            </select>
          </div>
        </div>

        {/* Transmission, Fuel Type, Seating Capacity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Transmission</label>
            <select
              value={car.transmission}
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none w-full"
            >
              <option value="">Select Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label>Fuel Type</label>
            <select
              value={car.fuel_type}
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none w-full"
            >
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="CNG">CNG</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label>Seating Capacity</label>
            <input
              type="number"
              placeholder="No. of seats"
              value={car.seating_capacity}
              onChange={(e) =>
                setCar({ ...car, seating_capacity: e.target.value })
              }
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none w-full"
            />
          </div>
        </div>

        {/* Location & Description  change it in select*/}
        <div className="flex flex-col w-full">
          <label>Location</label>
          <select
            className="appearance-none px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            value={car.Location}
            onChange={(e) => setCar({ ...car, Location: e.target.value })}
            required
          >
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Houston">Houston</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>

        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
            placeholder="Describe the car, features, etc."
            value={car.Description}
            onChange={(e) => setCar({ ...car, Description: e.target.value })}
            rows={4}
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center px-4 py-2.5 mt-4 gap-1 w-max bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-medium transition duration-300"
        >
         <img src={assets.tick_icon} alt="" />
          List your Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
