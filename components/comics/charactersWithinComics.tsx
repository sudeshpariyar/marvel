import React, { useEffect, useState } from "react";
import { IAllCharacters } from "@/types/characters";
import CusotmCharacter from "../characters/cusotmCharacter";
import { getDataFromComicId } from "@/helperApiCallFunctions/comics";

const CharactersWithinComics = ({ comicId }: { comicId: number }) => {
  const [allCharactersInComics, setAllCharacterInComics] =
    useState<IAllCharacters>();
  const [currentPage, setCurrentPage] = useState(0);
  const [resultLimit, setResultLimit] = useState(10);
  const [characterName, setCharacterName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      getDataFromComicId({
        comicId,
        currentPage,
        resultLimit,
        characterName,
        path: "characters",
      }).then((response) => {
        setLoading(false);
        setAllCharacterInComics(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [characterName, comicId, currentPage, resultLimit]);
  if (loading) {
    return <div className="mt-5">Loading...</div>;
  }
  return (
    <div className=" mt-5">
      {allCharactersInComics?.results.length ? (
        <CusotmCharacter
          allCharacters={allCharactersInComics}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
          setCharacterName={setCharacterName}
        />
      ) : (
        <div className="text-gray-500 ml-10">No Characters found.</div>
      )}
    </div>
  );
};

export default CharactersWithinComics;
