import { getDataFromCreatorId } from "@/helperApiCallFunctions/creator";
import { IAllSeries } from "@/types/series";
import React, { useEffect, useState } from "react";
import CustomSeries from "../series/customSeries";

interface ISeriesWithCreators {
  creatorId: number;
}

const SeriesWithCreators = ({ creatorId }: ISeriesWithCreators) => {
  const [allSeriesWithCreator, setAllSeriesWithCreator] =
    useState<IAllSeries>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [seriesName, setSeriesName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromCreatorId({
        creatorId,
        resultLimit,
        currentPage,
        seriesName,
        path: "series",
      }).then((response) => {
        setLoading(false);
        setAllSeriesWithCreator(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [creatorId, currentPage, resultLimit, seriesName]);
  return (
    <CustomSeries
      allSeries={allSeriesWithCreator}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setSeriesName={setSeriesName}
      loading={loading}
    />
  );
};
export default SeriesWithCreators;
