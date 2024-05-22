"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { IComic } from "@/types/comics";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CharactersWithinComics from "@/components/comics/charactersWithinComics";

const IndividualComic = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [characterList, setCharacterList] = useState(false);
  const [individualComic, setIndividualComic] = useState<IComic>();

  useEffect(() => {
    const getIndividualComic = async () => {
      setLoading(true);
      try {
        await axios
          .get(
            `/comics/${params.id}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
          )
          .then((response) => {
            setLoading(false);
            setIndividualComic(response.data.data.results[0]);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getIndividualComic();
  }, []);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <>
      {individualComic && (
        <div className="flex flex-col gap-10">
          <div className="h-dvh flex flex-col gap-10">
            <div className="relative h-4/5">
              <Image
                alt="Comic cover"
                src={`${individualComic?.thumbnail.path}/landscape_incredible.${individualComic.thumbnail.extension}`}
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>
            <div className="sm:px-4 md:px-16 lg:px-64 xl:124">
              <div className="text-5xl font-bold">{individualComic.title}</div>
              <div className="text-lg text-gray-500 pt-4 leading-1.5">
                {individualComic.description}
              </div>
            </div>
          </div>
          <div className="sm:px-4 md:px-16 lg:px-64 xl:124 flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-2">
                <Button onClick={() => setCharacterList(!characterList)}>
                  {characterList ? "Hide" : "List"}
                </Button>
                <span className="text-2xl">
                  Characters featuring in {individualComic.title}.
                </span>
              </div>
              {characterList && (
                <CharactersWithinComics
                  comicId={params.id as unknown as number}
                />
              )}
            </div>
            <div>This is the end</div>
            <div>This is the end</div>
            <div>This is the end</div>
            <div>This is the end</div>
            <div>This is the end</div>
            <div>This is the end</div>
            <div>This is the end</div>
            <div>This is the end</div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualComic;
