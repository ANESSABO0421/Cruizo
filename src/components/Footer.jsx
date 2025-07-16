import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-white bg-black">
      <div className="flex flex-wrap justify-between items-center gap-8 pb-6 border-borderColor">
        <div className="max-w-80">
          <img src={assets.Cruizo} alt="logo" className="h-[200px] w-[200px]" />
          <p className="max-w-8- mt-6">
            From city rides to road trips, we’re here to fuel your journey with
            premium vehicles and exceptional service.{" "}
          </p>
          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <a href="#">
              <img
                src={assets.instagram_logo}
                alt="insta"
                className="h-5 w-5"
              />
            </a>
            {/* Facebook */}
            <a href="#">
              <img src={assets.facebook_logo} alt="insta" className="h-5 w-5" />
            </a>
            {/* Twitter */}
            <a href="#">
              <img src={assets.twitter_logo} alt="insta" className="h-5 w-5" />
            </a>
            {/* LinkedIn */}
            <a href="#">
              <img src={assets.gmail_logo} alt="insta" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* quick Links */}
        <div>
          <h2 className="text-lg font-medium text-yellow-500">Quick Links</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">List Your Car</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-medium text-yellow-500">Resources</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms Of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <h2 className="text-lg font-medium text-yellow-500">Contact</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <p>
              Chemmankadavu,
              <br />
              Kodur,
              <br />
              Malappuram,
              <br />
              Kerala, India
            </p>
          </ul>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()} <a href="#">Cruizo</a>. All rights
          reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Terms </a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
