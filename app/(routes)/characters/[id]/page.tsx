"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ICharacter } from "@/types/characters";
import Image from "next/image";
import IndividualEvent from "@/components/individualEvent";
import IndividualSeries from "@/components/individualSeries";
import IndividualStory from "@/components/individualStory";
import { Button } from "@/components/ui/button";
import ComicsWithCharacter from "@/components/comicsWithCharacter";
import axios from "@/lib/axios";

const IndividuaCharacter = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [comicList, setComicList] = useState(false);
  const [individualCharacter, setIndividualCharacter] = useState<ICharacter>();
  useEffect(() => {
    const getIndividualCharacter = async () => {
      try {
        await axios
          .get(
            `/characters/${params.id}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
          )
          .then((response) => {
            setIndividualCharacter(response.data.data.results[0]);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getIndividualCharacter();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {individualCharacter && (
        <div className="h-screen">
          <div className="relative h-4/5">
            <Image
              alt="Mountains"
              src={`${individualCharacter?.thumbnail.path}/landscape_incredible.${individualCharacter.thumbnail.extension}`}
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="sm:px-4 md:px-16 lg:px-64 xl:124 my-10">
            <div className="text-5xl font-bold">{individualCharacter.name}</div>
            <div className="text-lg text-gray-500 pt-4 leading-1.5">
              {individualCharacter.description}
            </div>
            <div className="my-10">
              <div className="flex items-center gap-2">
                <Button onClick={() => setComicList(!comicList)}>
                  {comicList ? "Hide" : "List"}
                </Button>
                <span className="text-2xl">
                  Comics featuring {individualCharacter.name}.
                </span>
              </div>

              <div>
                {comicList && (
                  <ComicsWithCharacter
                    characterId={params.id as unknown as number}
                  />
                )}
              </div>
            </div>
            <div className="my-10">
              <span className="text-2xl">
                Events featuring {individualCharacter.name}.
              </span>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
                {individualCharacter.events.items &&
                  individualCharacter.events.items.map((event) => (
                    <IndividualEvent key={event.resourceURI} event={event} />
                  ))}
              </div>
            </div>
            <div className="my-10">
              <span className="text-2xl">
                Series featuring {individualCharacter.name}.
              </span>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
                {individualCharacter.series.items &&
                  individualCharacter.series.items.map((indSeries) => (
                    <IndividualSeries
                      key={indSeries.resourceURI}
                      indSeries={indSeries}
                    />
                  ))}
              </div>
            </div>
            <div className="my-10">
              <span className="text-2xl">
                Stories featuring {individualCharacter.name}.
              </span>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
                {individualCharacter.stories.items &&
                  individualCharacter.stories.items.map((story) => (
                    <IndividualStory key={story.resourceURI} story={story} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividuaCharacter;
