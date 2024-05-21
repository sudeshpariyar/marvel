import { IAllComics } from "@/types/comics";
import axios from "@/lib/axios";
import React, { useEffect, useState } from "react";
import IndividualComic from "./individualComicCard";

const ComicsWithCharacter = ({ characterId }: { characterId: number }) => {
  const [allComicsWithCharacter, setAllComicsWithCharacter] =
    useState<IAllComics>();
  useEffect(() => {
    const handleComic = async () => {
      try {
        await axios
          .get(
            `/characters/${characterId}/comics?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
          )
          .then((response) => {
            setAllComicsWithCharacter(response.data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    handleComic();
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
      {allComicsWithCharacter?.results.length &&
        allComicsWithCharacter.results.map((comic) => (
          <IndividualComic key={comic.id} comic={comic} />
        ))}
    </div>
  );
};

export default ComicsWithCharacter;
