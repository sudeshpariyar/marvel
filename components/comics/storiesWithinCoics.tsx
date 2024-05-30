import { getDataFromComicId } from "@/helperApiCallFunctions/comics";
import { IAllStories } from "@/types/stories";
import React, { useEffect, useState } from "react";
import CustomStories from "../stories/customStories";

interface IStoriesWithinComicsProps {
  comicId: number;
}
const StoriesWithinCoics = ({ comicId }: IStoriesWithinComicsProps) => {
  const [allStoriesWithComic, setAllStoriesWithComic] = useState<IAllStories>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromComicId({
        comicId,
        resultLimit,
        currentPage,
        path: "stories",
      }).then((response) => {
        setLoading(false);
        setAllStoriesWithComic(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [comicId, currentPage, resultLimit]);
  return (
    <CustomStories
      allStories={allStoriesWithComic}
      loading={loading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
    />
  );
};

export default StoriesWithinCoics;
