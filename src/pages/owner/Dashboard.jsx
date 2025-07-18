import React, { useEffect, useState } from "react";
import { assets, dummyCarData, dummyDashboardData } from "../../assets/assets";
import Title from "../../components/owner/Title";

const currency = import.meta.env.VITE_CURRENCY;

const Dashboard = () => {
  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  const dashBoardCards = [
    //data inside each card
    { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
    {
      title: "Total Bookings",
      value: data.totalBookings,
      icon: assets.listIconColored,
    },
    {
      title: "Pending",
      value: data.pendingBookings,
      icon: assets.cautionIconColored,
    },
    {
      title: "Confirmed",
      value: data.completedBookings,
      icon: assets.listIconColored,
    },
  ];

  useEffect(() => {
    setData(dummyDashboardData);
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 flex-1 ">
      <Title
        title="Admin Dashboard"
        subtitle="Cruizo Command Center — Stay in the Driver's Seat of Your Business."
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
        {dashBoardCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-4 rounded-md border bg-black text-white border-borderColor"
          >
            {/*content inside alignment */}
            <div>
              <h1 className="text-xs text-white">{card.title}</h1>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-300">
              <img src={card.icon} alt="" className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
        {/* recent booking */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full bg-black text-white">
          <h1 className="text-lg font-medium">Recent Bookings</h1>
          <p className="text-lg font-medium">Latest customer Bookings</p>
          {data.recentBookings.map((booking, index) => (
            <div key={index} className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center justify-center  w-12 h-12 rounded-full bg-yellow-300">
                  <img
                    src={assets.listIconColored}
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <div>
                  <p className="text-sm text-white">
                    {booking.createdAt.split("T")[0]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-medium">
                <p className="text-sm text-white">
                  {currency}
                  {booking.price}
                </p>
                <p className={`px-3 py-0.5 border border-borderColor rounded-full text-sm ${booking.status==="confirmed"?"bg-green-500":"bg-red-500"}`}>
                  {booking.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* monthly revenue card */}
        <div className="p-4 md:p-6 mb-6 border bg-black text-white border-borderColor rounded-md w-full md:max-w-xs">
          <h1 className="text-lg font-medium">Monthly Revenue</h1>
          <p className="text-white">Revenue for current month</p>
          <p className="text-3xl mt-6 font-semibold text-primary">
            {currency}
            {data.monthlyRevenue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
