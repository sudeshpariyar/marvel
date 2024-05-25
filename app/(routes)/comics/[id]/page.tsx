"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IComic } from "@/types/comics";
import CharactersWithinComics from "@/components/comics/charactersWithinComics";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import CustomShowHide from "@/components/customShowHide";
import { getSingleComic } from "@/helperApiCallFunctions/comics";
import EventsWithinComics from "@/components/comics/eventsWithinComics";

const IndividualComic = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  // const [characterList, setCharacterList] = useState(false);
  const [individualComic, setIndividualComic] = useState<IComic>();

  useEffect(() => {
    try {
      setLoading(true);
      getSingleComic({ comicId: params.id as unknown as number }).then(
        (response) => {
          setLoading(false);
          setIndividualComic(response);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <>
      {individualComic && (
        <div className="flex flex-col gap-10">
          <CustomImageAndDescription
            thumbNailPath={individualComic.thumbnail.path}
            thumbnailExtension={individualComic.thumbnail.extension}
            title={individualComic.title}
            description={individualComic.description}
          />
          <div className="sm:px-4 md:px-16 lg:px-64 xl:124 flex flex-col gap-10">
            <CharactersWithinComics
              comicId={params.id as unknown as number}
              comicTitle={individualComic.title}
            />
            <EventsWithinComics
              comicTitle={individualComic.title}
              comicId={params.id as unknown as number}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualComic;
