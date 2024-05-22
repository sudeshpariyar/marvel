"use client";
import React, { useEffect, useState } from "react";
import { IAllCharacters } from "@/types/characters";
import CusotmCharacter from "@/components/characters/cusotmCharacter";
import { getAllCharacters } from "@/helperFunctions/character";

const CharacterPage = () => {
  const [allCharacters, setAllCharacters] = useState<IAllCharacters>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [resultLimit, setResultLimit] = useState(10);
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getAllCharacters(currentPage, resultLimit, characterName).then(
        (response) => {
          setLoading(false);
          setAllCharacters(response.data.data);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, resultLimit, characterName]);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <div className="sm:px-4 md:px-16 lg:px-64 xl:124 my-10 ">
      <CusotmCharacter
        allCharacters={allCharacters}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        resultLimit={resultLimit}
        setResultLimit={setResultLimit}
        setCharacterName={setCharacterName}
      />
    </div>
  );
};

export default CharacterPage;
