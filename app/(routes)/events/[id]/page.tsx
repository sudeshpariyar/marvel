"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { IEvent } from "@/types/events";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CharactersWithinEvent from "@/components/events/charactersWithinEvent";

const IndividualEventPage = () => {
  const params = useParams();
  const [individualEvent, setIndividualEvent] = useState<IEvent>();
  const [loading, setLoading] = useState(false);
  const [characterList, setCharacterList] = useState(false);

  useEffect(() => {
    const getIndividualEvent = async () => {
      setLoading(true);
      try {
        await axios
          .get(
            `events/${params.id}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
          )
          .then((response) => {
            setLoading(false);
            setIndividualEvent(response.data.data.results[0]);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getIndividualEvent();
  }, []);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <>
      {individualEvent && (
        <div className="flex flex-col gap-10">
          <div className="h-dvh flex flex-col gap-10">
            <div className="relative h-4/5">
              <Image
                alt="Event Cover"
                src={`${individualEvent?.thumbnail.path}/landscape_incredible.${individualEvent.thumbnail.extension}`}
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>
            <div className="sm:px-4 md:px-16 lg:px-64 xl:124">
              <div className="text-5xl font-bold">{individualEvent.title}</div>
              <div className="text-lg text-gray-500 pt-4 leading-1.5">
                {individualEvent.description}
              </div>
            </div>
          </div>
          <div className="sm:px-4 md:px-16 lg:px-64 xl:124 flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-2">
                <Button onClick={() => setCharacterList(!characterList)}>
                  {characterList ? "Hide" : "Show"}
                </Button>
                <span className="text-2xl">
                  Characters involved in event {individualEvent.title}
                </span>
              </div>
              {characterList && (
                <CharactersWithinEvent
                  eventId={params.id as unknown as number}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualEventPage;
