import { getDataFromSeriesId } from "@/helperApiCallFunctions/series";
import { IAllCharacters } from "@/types/characters";
import React, { useEffect, useState } from "react";
import CusotmCharacter from "../characters/cusotmCharacter";

interface ICharacterWithSeries {
  seriesId: number;
}

const CharacterWithSeries = ({ seriesId }: ICharacterWithSeries) => {
  const [allCharacterInSeries, setAllcharacterInSeries] =
    useState<IAllCharacters>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [resultLimit, setResultLimit] = useState(10);
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromSeriesId({
        seriesId,
        currentPage,
        resultLimit,
        characterName,
        path: "characters",
      }).then((response) => {
        setLoading(false);
        setAllcharacterInSeries(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [characterName, currentPage, resultLimit, seriesId]);
  return (
    <CusotmCharacter
      allCharacters={allCharacterInSeries}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setCharacterName={setCharacterName}
      loading={loading}
    />
  );
};

export default CharacterWithSeries;
