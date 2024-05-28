"use client";
import React from "react";
import CustomBreakPoint from "./customBreakPoint";
import {
  Baby,
  BookOpenText,
  CalendarFold,
  Clapperboard,
  PencilLine,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const handleRoute = (path: string) => {
    console.log("handleRoute");
    router.push(`/${path}`);
  };
  return (
    <footer className=" bg-black text-gray-500 py-6">
      <CustomBreakPoint>
        <div className="text-2xl font-bold text-red-800">Marvel</div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-2 ">
            <Baby className="text-red-800" />
            <span
              onClick={() => handleRoute("characters")}
              className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
            >
              Characters
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpenText className="text-red-800" />
            <span
              onClick={() => handleRoute("comics")}
              className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
            >
              Comics
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarFold className="text-red-800" />
            <span
              onClick={() => handleRoute("events")}
              className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
            >
              Events
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PencilLine className="text-red-800" />
            <span
              onClick={() => handleRoute("creators")}
              className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
            >
              Events
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clapperboard className="text-red-800" />
            <span
              onClick={() => handleRoute("series")}
              className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
            >
              Series
            </span>
          </div>
        </div>
      </CustomBreakPoint>
    </footer>
  );
};

export default Footer;
