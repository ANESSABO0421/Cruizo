import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import MyBooking from "./pages/MyBooking";
import CarDetails from "./pages/CarDetails";
import Footer from "./components/Footer";

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
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
