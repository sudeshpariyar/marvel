import { getDataFromSeriesId } from "@/helperApiCallFunctions/series";
import { IAllStories } from "@/types/stories";
import React, { useEffect, useState } from "react";
import CustomStories from "../stories/customStories";

interface IStoriesWithSeriesProps {
  seriesId: number;
}
const StoriesWithSeries = ({ seriesId }: IStoriesWithSeriesProps) => {
  const [allStoriesWithSeries, setAllStoriesWithSeries] =
    useState<IAllStories>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromSeriesId({
        seriesId,
        resultLimit,
        currentPage,
        path: "stories",
      }).then((response) => {
        setLoading(false);
        setAllStoriesWithSeries(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, resultLimit, seriesId]);
  return (
    <CustomStories
      allStories={allStoriesWithSeries}
      loading={loading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
    />
  );
};

export default StoriesWithSeries;
