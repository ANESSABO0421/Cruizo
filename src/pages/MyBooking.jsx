import React, { useEffect, useState } from "react";
import { assets, dummyMyBookingsData } from "../assets/assets";
import Title from "../components/Title";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const currency = import.meta.env.VITE_CURRENCY;

  const fetchMyBooking = async () => {
    setBookings(dummyMyBookingsData);
  };

  useEffect(() => {
    fetchMyBooking();
  }, []);

  return (
    <div className="px-6 sm:px-16 md:px-24 lg:px-32 2xl:px-48 mt-16 text-sm">
      <Title
        title="Your Booked Rides"
        subtitle="Manage all your car bookings easily and stay on track"
        align="left"
      />
      <div>
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border-borderColor rounded-lg mt-5 first:mt-12 border-1 bg-black text-white"
          >
            {/* car image and info 1st column*/}
            <div className="md:col-span-1">
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  src={booking.car.image}
                  alt="booking-car-image"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <p className="text-lg font-medium mt-2">
                {booking.car.brand} {booking.car.model}
              </p>
              <p className="text-white">
                {booking.car.year} • {booking.car.category} •{" "}
                {booking.car.location}
              </p>
            </div>

            {/* booking info  2nd column*/}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <p className="px-3 py-1.5 bg-primary rounded">
                  Booking #{index + 1} {/*as it starts with 1 */}
                </p>
                <p
                  className={` rounded-2xl px-3 py-1.5 ${
                    booking.status == "confirmed"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {booking.status}
                </p>
              </div>

              {/* booking infos rental */}
              <div className="flex items-start gap-2 mt-3">
                <img
                  src={assets.calendar_icon_colored}
                  alt="calender"
                  className="w-4 h-4 "
                />
                {/* booking rental period */}
                <div>
                  <p className="text-gray-200">Rental Period</p>
                  <p>
                    {booking.pickupDate.split("T")[0]} To{" "}
                    {booking.returnDate.split("T")[0]}
                  </p>
                </div>
              </div>

              {/* booking pickup location */}
              <div className="flex items-start gap-2 mt-3">
                <img
                  src={assets.location_icon_colored}
                  alt="calender"
                  className="w-4 h-4 "
                />
                {/* booking rental period */}
                <div>
                  <p className="text-gray-200">Pickup Location</p>
                  <p>{booking.car.location}</p>
                </div>
              </div>

              {/*booking pickup location  */}
              <div className="flex items-start gap-2 mt-3">
                <img
                  src={assets.location_icon_colored}
                  alt="calender"
                  className="w-4 h-4 "
                />
                {/* booking rental period */}
                <div>
                  <p className="text-gray-200">Pickup Location</p>
                  <p>{booking.car.location}</p>
                </div>
              </div>
            </div>

            {/*Price section 3rd column*/}
            <div>
              <div className="md:col-span-1 flex flex-col justify-between ">
                <p>Total Price</p>
                <h1 className="text-yellow-300 text-[40px]">
                  {currency}{booking.price}
                </h1>
                <p className="text-white">Booked on {booking.createdAt.split('T')[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
