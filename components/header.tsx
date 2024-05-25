"use client";
import { useRouter } from "next/navigation";
import React from "react";
import FloatingNavBar from "./floatingNavBar";

const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-black text-red-600 py-6 px-4 sm:px-4 md:px-16 lg:px-64 xl:124 sticky top-0 z-10">
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
    </div>
  );
};

export default Header;
