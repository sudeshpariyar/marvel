import Characters from "@/components/charactersLandingCard";
import ComicsLandingCard from "@/components/comicsLandingCard";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="relative h-svh">
        <Image
          alt="Mountains"
          src="/marvel.png"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="sm:px-4 md:px-16 lg:px-64 xl:124 mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pb-10">
        <Characters />
        <ComicsLandingCard />
      </div>
    </div>
  );
};

export default LandingPage;
