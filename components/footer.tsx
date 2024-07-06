"use client";
import React from "react";
import CustomBreakPoint from "./customBreakPoint";
import {
  Baby,
  BookOpenText,
  CalendarFold,
  Clapperboard,
  PencilLine,
  SquareLibrary,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  const handleRoute = (path: string) => {
    console.log("handleRoute");
    router.push(`/${path}`);
  };
  return (
    <footer className=" bg-black text-gray-500 py-6">
      <CustomBreakPoint>
        <div className="text-2xl font-bold text-red-600">Marvel</div>
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-2 ">
              <Baby className="text-red-600" />
              <span
                onClick={() => handleRoute("characters")}
                className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
              >
                Characters
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpenText className="text-red-600" />
              <span
                onClick={() => handleRoute("comics")}
                className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
              >
                Comics
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarFold className="text-red-600" />
              <span
                onClick={() => handleRoute("events")}
                className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
              >
                Events
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PencilLine className="text-red-600" />
              <span
                onClick={() => handleRoute("creators")}
                className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
              >
                Creators
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clapperboard className="text-red-600" />
              <span
                onClick={() => handleRoute("series")}
                className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
              >
                Series
              </span>
            </div>
            <div className="flex items-center gap-2">
              <SquareLibrary className="text-red-600" />
              <span
                onClick={() => handleRoute("stories")}
                className="cursor-pointer hover:translate-x-1 hover:font-bold hover:text-gray-300"
              >
                Stories
              </span>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <Image
              alt="footer"
              src="/footer.jpg"
              height={140}
              width={140}
              className="rounded-2xl"
            />
            Get your all infarmation about Marvel universe...
          </div>
        </div>
      </CustomBreakPoint>
    </footer>
  );
};

export default Footer;
