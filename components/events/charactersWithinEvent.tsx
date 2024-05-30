"use client";
import React, { useEffect, useState } from "react";
import { IAllCharacters } from "@/types/characters";
import CusotmCharacter from "../characters/cusotmCharacter";
import { getDataFromEventId } from "@/helperApiCallFunctions/events";

interface ICharacterWithEvent {
  eventId: number;
}

const CharactersWithinEvent = ({ eventId }: ICharacterWithEvent) => {
  const [allCharactersInEvent, setAllCharacterInEvent] =
    useState<IAllCharacters>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [resultLimit, setResultLimit] = useState(10);
  const [characterName, setCharacterName] = useState("");
  useEffect(() => {
    try {
      setLoading(true);
      getDataFromEventId({
        eventId,
        currentPage,
        resultLimit,
        characterName,
        path: "characters",
      }).then((response) => {
        setLoading(false);
        setAllCharacterInEvent(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, eventId, resultLimit, characterName]);

  return (
    <CusotmCharacter
      allCharacters={allCharactersInEvent}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setCharacterName={setCharacterName}
      loading={loading}
    />
  );
};

export default CharactersWithinEvent;
