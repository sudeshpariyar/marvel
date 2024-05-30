import Characters from "@/components/characters/charactersLandingCard";
import ComicsLandingCard from "@/components/comics/comicsLandingCard";
import CreatorsLandingCard from "@/components/creators/creatorsLandingCard";
import CustomBreakPoint from "@/components/customBreakPoint";
import EventsLandingCard from "@/components/events/eventsLandingCard";
import SeriesLandigCard from "@/components/series/seriesLandigCard";
import StoriesLandingCard from "@/components/stories/storiesLandingCard";
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
      <CustomBreakPoint>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Characters />
          <ComicsLandingCard />
          <EventsLandingCard />
          <CreatorsLandingCard />
          <SeriesLandigCard />
          <StoriesLandingCard />
        </div>
      </CustomBreakPoint>
    </div>
  );
};

export default LandingPage;
