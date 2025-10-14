import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCard from "../components/TitleCard";

const Home = () => {
  return (
    <>
      <Navbar />
    <div className="bg-hero ">
      <div className="px-[3%] flex flex-col gap-5 justify-center  h-[95%]">
        <img src={hero_title} alt="hero_title" className="w-[10rem] sm:w-[22rem]" />
        <p className="max-w-2xl text-sm sm:text-base">
          Discovering his ties to a secret ancient order, a young man living in
          modern Istanbul embarks on a quest to save the city from an immortal
          enemy.
        </p>
        <div className="flex z-20 items-center gap-2 text-sm sm:text-base">
          <button className=" cursor-pointer flex items-center gap-2  bg-white hover:bg-[#666666bf] text-black font-semibold px-5 py-2 rounded-xl">
            <img src={play_icon} alt="play_icon" className="w-3 sm:w-[5]" />
            Play
          </button>
          <button className=" cursor-pointer flex items-center gap-2 text-white hover:bg-[#6d6d6e66] bg-[#6d6d6eb3]   font-semibold px-5 py-2 rounded-xl">
            <img src={info_icon} alt="info_icon" className="w-3 sm:w-[5]" />
            More Info
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[2rem]">
     
      </div>

        <TitleCard category="top_rated" title="Popular On Netflix" />
        <TitleCard category="popular" title="Blockbuster Movies" />
        <TitleCard category="upcoming" title="Only On Netflix" />
        <TitleCard category="now_playing" title="Upcoming" />
      <Footer />
    </div>
    </>
  );
};

export default Home;
