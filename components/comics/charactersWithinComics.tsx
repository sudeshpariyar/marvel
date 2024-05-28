import React, { useEffect, useState } from "react";
import { IAllCharacters } from "@/types/characters";
import CusotmCharacter from "../characters/cusotmCharacter";
import { getDataFromComicId } from "@/helperApiCallFunctions/comics";
import CustomLoading from "../customLoading";

interface ICharacterWithInComics {
  comicId: number;
}

const CharactersWithinComics = ({ comicId }: ICharacterWithInComics) => {
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

  return (
    <CusotmCharacter
      allCharacters={allCharactersInComics}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setCharacterName={setCharacterName}
      loading={loading}
    />
  );
};

export default CharactersWithinComics;
