import React from "react";

import facebook_icon from "../assets/facebook_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import youtube_icon from "../assets/youtube_icon.png";

const Footer = () => {
  return (
    <div className="px-[20%] py-[2rem]">
      <div className="  flex items-center justify-between ">
        <ul className="flex flex-col gap-3">
          <div className="flex items-center gap-4 mb-[22px]">
            <img src={facebook_icon} alt="facebook_icon" className="w-7" />
            <img src={instagram_icon} alt="instagram_icon" className="w-7" />
            <img src={twitter_icon} alt="twitter_icon" className="w-7" />
            <img src={youtube_icon} alt="youtube_icon" className="w-7" />
          </div>
          <li>Audio Description</li>
          <li>Investor Relation</li>
          <li>Legal Notices</li>
        </ul>
        <ul className="flex flex-col  gap-3 self-end">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        <ul className="flex flex-col gap-3 self-end">
          <li>Gift Cards</li>
          <li>Terms Of Use</li>
          <li>Carporate Information</li>
        </ul>
        <ul className="flex flex-col gap-3 self-end">
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <p className="text-gray-600 mt-4">@1997-2025 Netflix,Inc.</p>
    </div>
  );
};

export default Footer;
