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
import CustomBreakPoint from "@/components/customBreakPoint";

const IndividuaCharacter = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
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
          <CustomBreakPoint>
            <div className="flex flex-col gap-10">
              <ComicsWithCharacter
                characterId={params.id as unknown as number}
                characterName={individualCharacter.name}
              />
              <EventsWithCharacter
                characterId={params.id as unknown as number}
                characterName={individualCharacter.name}
              />
            </div>
          </CustomBreakPoint>
        </div>
      )}
    </>
  );
};

export default IndividuaCharacter;
