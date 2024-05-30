import { getDataFromCharacterId } from "@/helperApiCallFunctions/character";
import { IAllSeries } from "@/types/series";
import React, { useEffect, useState } from "react";
import CustomSeries from "../series/customSeries";

interface ISeriesWithCharacterProps {
  characterId: number;
}

const SeriesWithCharacter = ({ characterId }: ISeriesWithCharacterProps) => {
  const [allSeriesWithCharacter, setAllSeriesWithCharacter] =
    useState<IAllSeries>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [seriesName, setSeriesName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromCharacterId({
        characterId,
        resultLimit,
        currentPage,
        seriesName,
        path: "series",
      }).then((response) => {
        setLoading(false);
        setAllSeriesWithCharacter(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [characterId, currentPage, resultLimit, seriesName]);

  return (
    <CustomSeries
      allSeries={allSeriesWithCharacter}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setSeriesName={setSeriesName}
      loading={loading}
    />
  );
};

export default SeriesWithCharacter;
