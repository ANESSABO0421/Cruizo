import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import MyBooking from "./pages/MyBooking";
import CarDetails from "./pages/CarDetails";
import Footer from "./components/Footer";
import Layout from "./pages/owner/Layout";
import AddCar from "./pages/owner/AddCar";
import Dashboard from "./pages/owner/Dashboard";
import ManageBookings from "./pages/owner/ManageBookings";
import ManageCars from "./pages/owner/ManageCars";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner"); //if we click the dashboard as owner we have to remove the navbar

  return (
    <>
      {/*passing  the first setShowlogin to navbar as prop and the {setShowLogin} as the state to update*/}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      {/*if it is not owner path then dot show the navbar */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car-details/:id" element={<CarDetails />} />{" "}
        {/*//passing id for dynamic routing */}
        <Route path="/mybooking" element={<MyBooking />} />
        
        {/* owner path nested */}
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
