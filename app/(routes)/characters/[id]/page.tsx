"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ICharacter } from "@/types/characters";
import IndividualSeries from "@/components/individualSeries";
import IndividualStory from "@/components/individualStory";
import ComicsWithCharacter from "@/components/characters/comicsWithCharacter";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import CustomShowHide from "@/components/customShowHide";
import EventsWithCharacter from "@/components/characters/eventsWithCharacter";
import { getSingelCharacter } from "@/helperApiCallFunctions/character";

const IndividuaCharacter = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [showComicList, setShowComicList] = useState(false);
  const [showEventList, setShowEventList] = useState(false);
  const [individualCharacter, setIndividualCharacter] = useState<ICharacter>();
  useEffect(() => {
    try {
      setLoading(true);
      getSingelCharacter({
        characterId: params.id as unknown as number,
      }).then((response) => {
        setLoading(false);
        setIndividualCharacter(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <>
      {individualCharacter && (
        <div className="flex flex-col gap-10">
          <CustomImageAndDescription
            thumbNailPath={individualCharacter.thumbnail.path}
            thumbnailExtension={individualCharacter.thumbnail.extension}
            title={individualCharacter.name}
            description={individualCharacter.description}
          />
          <div className="sm:px-4 md:px-16 lg:px-64 xl:124 flex flex-col gap-10">
            <div>
              <CustomShowHide
                list={showComicList}
                setList={setShowComicList}
                description={`Comics featuring ${individualCharacter.name}`}
              />
              {showComicList && (
                <ComicsWithCharacter
                  characterId={params.id as unknown as number}
                />
              )}
            </div>
            <div>
              <CustomShowHide
                list={showEventList}
                setList={setShowEventList}
                description={`Events featuring ${individualCharacter.name}`}
              />
              {showEventList && (
                <EventsWithCharacter
                  characterId={params.id as unknown as number}
                />
              )}
            </div>
            <div>
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
            <div>
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
