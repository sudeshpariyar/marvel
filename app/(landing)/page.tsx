import Characters from "@/components/characters/charactersLandingCard";
import ComicsLandingCard from "@/components/comics/comicsLandingCard";
import CreatorsLandingCard from "@/components/creators/creatorsLandingCard";
import EventsLandingCard from "@/components/events/eventsLandingCard";
import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="relative h-svh">
        <Image
          alt="Mountains"
          src="/marvel.png"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="px-4 sm:px-4 md:px-16 lg:px-64 xl:124 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Characters />
        <ComicsLandingCard />
        <EventsLandingCard />
        <CreatorsLandingCard />
      </div>
    </div>
  );
};

export default LandingPage;
