import { getDataFromStoryId } from "@/helperApiCallFunctions/stories";
import { IAllSeries } from "@/types/series";
import React, { useEffect, useState } from "react";
import CustomSeries from "../series/customSeries";
interface ISeriesWithStory {
  storyId: number;
}

const SeriesWithStory = ({ storyId }: ISeriesWithStory) => {
  const [allSeriesWithStory, setAllSeriesWithStory] = useState<IAllSeries>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [seriesName, setSeriesName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromStoryId({
        storyId,
        resultLimit,
        currentPage,
        seriesName,
        path: "series",
      }).then((response) => {
        setLoading(false);
        setAllSeriesWithStory(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, resultLimit, seriesName, storyId]);
  return (
    <CustomSeries
      allSeries={allSeriesWithStory}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setSeriesName={setSeriesName}
      loading={loading}
    />
  );
};

export default SeriesWithStory;
