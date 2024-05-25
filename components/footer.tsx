import React from "react";
import CustomBreakPoint from "./customBreakPoint";

const Footer = () => {
  return (
    <footer className=" bg-black text-gray-500 py-6">
      <CustomBreakPoint>
        <div className="text-2xl font-bold text-red-700">Marvel</div>
        <div>Characters</div>
        <div>Comics</div>
        <div>Events</div>
        <div>Creators</div>
      </CustomBreakPoint>
    </footer>
  );
};

export default Footer;
