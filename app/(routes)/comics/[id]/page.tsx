"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IComic } from "@/types/comics";
import CharactersWithinComics from "@/components/comics/charactersWithinComics";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import { getSingleComic } from "@/helperApiCallFunctions/comics";
import EventsWithinComics from "@/components/comics/eventsWithinComics";
import CustomBreakPoint from "@/components/customBreakPoint";
import CreatorsWithComics from "@/components/comics/creatorsWithComics";

const IndividualComic = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
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
    return <div>Loading...</div>;
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
          <CustomBreakPoint>
            <div className="flex flex-col gap-10">
              <CharactersWithinComics
                comicId={params.id as unknown as number}
                comicTitle={individualComic.title}
              />
              <EventsWithinComics
                comicTitle={individualComic.title}
                comicId={params.id as unknown as number}
              />
              <CreatorsWithComics
                comicTitle={individualComic.title}
                comicId={params.id as unknown as number}
              />
            </div>
          </CustomBreakPoint>
        </div>
      )}
    </>
  );
};

export default IndividualComic;
