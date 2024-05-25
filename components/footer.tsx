import React from "react";
import CustomBreakPoint from "./customBreakPoint";
import {
  Baby,
  BookOpenText,
  CalendarFold,
  Clapperboard,
  PencilLine,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-black text-gray-500 py-6">
      <CustomBreakPoint>
        <div className="text-2xl font-bold text-red-700">Marvel</div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-2">
            <Baby className="text-red-600" />
            Characters
          </div>
          <div className="flex items-center gap-2">
            <BookOpenText className="text-red-600" />
            Comics
          </div>
          <div className="flex items-center gap-2">
            <CalendarFold className="text-red-600" />
            Events
          </div>
          <div className="flex items-center gap-2">
            <PencilLine className="text-red-600" />
            Creators
          </div>
          <div className="flex items-center gap-2">
            <Clapperboard className="text-red-600" />
            Series
          </div>
        </div>
      </CustomBreakPoint>
    </footer>
  );
};

export default Footer;
