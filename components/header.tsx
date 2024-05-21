"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-black text-red-600 py-6 sm:px-4 md:px-16 lg:px-64 xl:124 sticky top-0 z-10">
      <div
        className="font-bold text-3xl cursor-pointer"
        onClick={() => router.push("/")}
      >
        MARVEL
      </div>
    </div>
  );
};

export default Header;
