import { getDataFromStoryId } from "@/helperApiCallFunctions/stories";
import { IAllComics } from "@/types/comics";
import React, { useEffect, useState } from "react";
import CustomComic from "../comics/customComic";

interface IComicWithStory {
  storyId: number;
}

const ComicsWithStory = ({ storyId }: IComicWithStory) => {
  const [allComicWithStory, setAllComicWithStory] = useState<IAllComics>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicName, setComicName] = useState("");
  const [resultLimit, setResultLimit] = useState(10);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromStoryId({
        storyId,
        resultLimit,
        currentPage,
        comicName,
        path: "comics",
      }).then((response) => {
        console.log(response);
        setLoading(false);
        setAllComicWithStory(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [comicName, currentPage, resultLimit, storyId]);

  return (
    <CustomComic
      allComics={allComicWithStory}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setComicName={setComicName}
      loading={loading}
    />
  );
};
export default ComicsWithStory;
