import React, { useEffect, useState } from "react";
import { IAllCharacters } from "@/types/characters";
import CusotmCharacter from "../characters/cusotmCharacter";
import { getDataFromComicId } from "@/helperApiCallFunctions/comics";
import CustomShowHide from "../customShowHide";

interface ICharacterWithInComics {
  comicId: number;
  comicTitle: string;
}

const CharactersWithinComics = ({
  comicId,
  comicTitle,
}: ICharacterWithInComics) => {
  const [allCharactersInComics, setAllCharacterInComics] =
    useState<IAllCharacters>();
  const [currentPage, setCurrentPage] = useState(0);
  const [resultLimit, setResultLimit] = useState(10);
  const [characterName, setCharacterName] = useState("");
  const [loading, setLoading] = useState(false);
  const [characterList, setCharacterList] = useState(false);

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
    <>
      <CustomShowHide
        list={characterList}
        setList={setCharacterList}
        description={`Characters featuring in ${comicTitle}.`}
      />
      {characterList && (
        <CusotmCharacter
          allCharacters={allCharactersInComics}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
          setCharacterName={setCharacterName}
        />
      )}
    </>
  );
};

export default CharactersWithinComics;
