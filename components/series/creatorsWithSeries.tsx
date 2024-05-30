import { getDataFromSeriesId } from "@/helperApiCallFunctions/series";
import { IAllCreators } from "@/types/creator";
import React, { useEffect, useState } from "react";
import CustomCreator from "../creators/customCreator";

interface ICreatorsWithSeriesProps {
  seriesId: number;
}

const CreatorsWithSeries = ({ seriesId }: ICreatorsWithSeriesProps) => {
  const [allCreatorsWhitSeries, setAllCreatorsWhitSeries] =
    useState<IAllCreators>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [creatorName, setCreatorName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromSeriesId({
        seriesId,
        currentPage,
        resultLimit,
        creatorName,
        path: "creators",
      }).then((response) => {
        setLoading(false);
        setAllCreatorsWhitSeries(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [creatorName, currentPage, resultLimit, seriesId]);
  return (
    <CustomCreator
      allCreators={allCreatorsWhitSeries}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setCreatorName={setCreatorName}
      loading={loading}
    />
  );
};

export default CreatorsWithSeries;
