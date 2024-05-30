import { getDataFromCreatorId } from "@/helperApiCallFunctions/creator";
import { IAllStories } from "@/types/stories";
import React, { useEffect, useState } from "react";
import CustomStories from "../stories/customStories";

interface IStoriesWithCreatorProps {
  creatorId: number;
}
const StoriesWithCreator = ({ creatorId }: IStoriesWithCreatorProps) => {
  const [allStoriesWithCreator, setAllStoriesWithCreator] =
    useState<IAllStories>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromCreatorId({
        creatorId,
        resultLimit,
        currentPage,
        path: "stories",
      }).then((response) => {
        setLoading(false);
        setAllStoriesWithCreator(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [creatorId, currentPage, resultLimit]);
  return (
    <CustomStories
      allStories={allStoriesWithCreator}
      loading={loading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
    />
  );
};

export default StoriesWithCreator;
