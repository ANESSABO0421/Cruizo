import React, { useState } from "react";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";


const Sidebar = () => {
  const [image, setImage] = useState("");
  const user = dummyUserData;
  const location = useLocation(); //knowing where the current user is now

  const updateImage = async () => {
    user.image = URL.createObjectURL(image); //updating the user selected image and mak its url to preview
    setImage("");
  };

  return (
    // side bar and its content
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm">
      <div className="group relative">
        <label htmlFor="image">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  "https://www.citypng.com/public/uploads/small/11639594308azjskddoutgi296zaayuhyuspofhahhfa4ezuhne7vcflkjlnicxnewkf17enf0janiemum3o1eikv5x9r1s6wst2obumnv3rmxj.png"
            }
            alt="user-image"
            className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"
          />
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
          />

          {/*only at hover show edit icon else not */}
          {/* edit icon */}
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/10 hidden rounded-full group-hover:flex items-center justify-center cursor-pointer">
            <img src={assets.edit_icon} alt="edit-icon" />
          </div>
        </label>
      </div>
      {/* to save it after pic an image */}
      {image && (
        <button className="absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-yellow cursor-pointer">
          Save{" "}
          <img
            src={assets.check_icon}
            width={13}
            alt=""
            onClick={updateImage}
          />
        </button>
      )}
      <p className="text-black mt-2 max-md:hidden">{user.name}</p>

      {/* side bar link */}
      <div className="w-full">
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${
              link.path === location.pathname
                ? "bg-primary/50 text-black" //selected item  with  color and selected color
                : "text-gray-600"//not sleected with gray
            }`}
          >
            <img
              src={
                link.path === location.pathname ? link.coloredIcon : link.icon
              }
              alt="car-icon"
            />
            <span className="max-md:hiddem ">{link.name}</span>
            <div
              className={`${
                link.path === location.pathname && "bg-primary"//small rounded iconthat we selected
              } w-1.5 h-8 rounded-l right-0 absolute`}
            ></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
