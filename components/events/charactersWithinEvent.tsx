"use client";
import React, { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { IAllCharacters } from "@/types/characters";
import CusotmCharacter from "../characters/cusotmCharacter";

const CharactersWithinEvent = ({ eventId }: { eventId: number }) => {
  const [allCharactersInEvent, setAllCharacterInEvent] =
    useState<IAllCharacters>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [resultLimit, setResultLimit] = useState(10);
  const [characterName, setCharacterName] = useState("");
  useEffect(() => {
    const getCharactersInEvent = async () => {
      setLoading(true);
      await axios
        .get(
          `/events/${eventId}/characters?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
          {
            params: {
              offset: currentPage * resultLimit,
              limit: resultLimit,
              nameStartsWith: characterName ? characterName : null,
            },
          }
        )
        .then((response) => {
          setLoading(false);
          setAllCharacterInEvent(response.data.data);
        });
    };
    getCharactersInEvent();
  }, [currentPage, eventId, resultLimit, characterName]);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <>
      <CusotmCharacter
        allCharacters={allCharactersInEvent}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        resultLimit={resultLimit}
        setResultLimit={setResultLimit}
        setCharacterName={setCharacterName}
      />
    </>
  );
};

export default CharactersWithinEvent;
