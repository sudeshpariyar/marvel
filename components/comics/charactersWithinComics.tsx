import React, { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { IAllCharacters } from "@/types/characters";
import IndividualCharacterCard from "../characters/individualCharacterCard";

const CharactersWithinComics = ({ comicId }: { comicId: number }) => {
  const [allCharactersInComics, setAllCharacterInComics] =
    useState<IAllCharacters>();
  useEffect(() => {
    const getCharactersInComics = async () => {
      try {
        await axios
          .get(
            `/comics/${comicId}/characters?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
            {
              params: {
                orderBy: "name",
              },
            }
          )
          .then((response) => {
            setAllCharacterInComics(response.data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getCharactersInComics();
  }, []);
  return (
    <div className=" mt-5">
      {allCharactersInComics?.results.length ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCharactersInComics?.results.length &&
            allCharactersInComics.results.map((character) => (
              <IndividualCharacterCard
                key={character.id}
                character={character}
              />
            ))}
        </div>
      ) : (
        <div className="text-gray-500 ml-10">No Characters found.</div>
      )}
    </div>
  );
};

export default CharactersWithinComics;
