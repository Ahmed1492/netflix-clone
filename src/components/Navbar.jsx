import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { signout } from "../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Handle scroll background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("bg-gray-800");
      } else {
        navRef.current.classList.remove("bg-gray-800");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className="navbar px-[7%] fixed w-full top-0 py-[20px] flex items-center justify-between text-[#e5e5e5] z-30 transition-colors duration-300"
    >
      {/* LEFT */}
      <div className="flex items-center gap-[3rem]">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          className="w-22 cursor-pointer"
        />
        <ul className="hidden md:flex justify-center   md:flex-wrap   text-sm lg:text-base items-center gap-5">
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-5 relative">
        <img
          src={search_icon}
          alt="search_icon"
          className="w-4 sm:w-5 cursor-pointer"
        />
        <p className="text-sm lg:text-base">Children</p>
        <img
          src={bell_icon}
          alt="bell_icon"
          className="w-4 sm:w-5 cursor-pointer"
        />

        {/* Profile dropdown */}
        <div className="relative group flex items-center gap-2 cursor-pointer">
          <img
            src={profile_img}
            alt="profile_img"
            className="w-6 sm:w-10 rounded-lg"
          />
          <img
            src={caret_icon}
            alt="caret_icon"
            className="w-3 sm:w-4 transition-transform duration-200 group-hover:rotate-180"
          />
          <div className="absolute right-0 top-[31px] mt-2 hidden group-hover:flex flex-col bg-gray-900 rounded-md p-3 w-max text-sm">
            <p
              onClick={() => signout()}
              className="cursor-pointer hover:text-red-400 border-b border-gray-700 pb-1"
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="md:hidden flex flex-col items-center gap-1 cursor-pointer"
        >
          <span className="w-[20px] h-[2px] bg-white"></span>
          <span className="w-[20px] h-[2px] bg-white"></span>
          <span className="w-[20px] h-[2px] bg-white"></span>
        </div>

        {/* Mobile Menu */}
        {isOpenMenu && (
          <ul className="absolute flex flex-col items-center left-0 top-[60px] w-full bg-gray-900 py-6 gap-6 md:hidden transition-all duration-300">
            <li onClick={() => setIsOpenMenu(false)}>Home</li>
            <li onClick={() => setIsOpenMenu(false)}>Tv Shows</li>
            <li onClick={() => setIsOpenMenu(false)}>Movies</li>
            <li onClick={() => setIsOpenMenu(false)}>News & Popular</li>
            <li onClick={() => setIsOpenMenu(false)}>My List</li>
            <li onClick={() => setIsOpenMenu(false)}>Browse by Languages</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
