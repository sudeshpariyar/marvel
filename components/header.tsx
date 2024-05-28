"use client";
import { useRouter } from "next/navigation";
import React from "react";
import FloatingNavBar from "./floatingNavBar";
import CustomBreakPoint from "./customBreakPoint";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-black text-red-800 py-6 sticky top-0 z-10">
      <CustomBreakPoint>
        <div className="flex flex-row items-center justify-between">
          <div
            className="font-bold text-3xl cursor-pointer"
            onClick={() => router.push("/")}
          >
            MARVEL
          </div>
          <div className="sm:hidden ">
            <FloatingNavBar />
          </div>
        </div>
      </CustomBreakPoint>
    </header>
  );
};

export default Header;
