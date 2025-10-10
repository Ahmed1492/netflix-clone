import React from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
const Navbar = () => {
  return (
    <div className="navbar px-[7%] py-[2rem] flex items-center justify-between text-[#e5e5e5] ">
      {/* LEFT */}
      <div className="flex items-center gap-[3rem]">
        <img src={logo} alt="logo" className="w-22" />
        <ul className="flex items-center gap-5">
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      {/* RIGHT */}
      <div className="flex items-center gap-5">
        <img
          src={search_icon}
          alt="search_icon"
          className="w-5 cursor-pointer"
        />
        <p>Children</p>
        <img src={bell_icon} alt="bell_icon" className="w-5 cursor-pointer" />
        <div className="flex items-center nav-drop-down-icon relative gap-2">
          <img
            src={profile_img}
            alt="profile_img"
            className="w-10 cursor-pointer rounded-lg "
          />
          <img
            src={caret_icon}
            alt="caret_icon"
            className="w-3 cursor-pointer "
          />
          <div className="bg-gray-900  absolute nav-drop-down  rounded-md ">
            <p className="cursor-pointer  border-b w-max text-center m-auto">Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
