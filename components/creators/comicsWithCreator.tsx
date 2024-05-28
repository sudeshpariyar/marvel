import React, { useEffect, useState } from "react";
import { IAllComics } from "@/types/comics";
import { getDataFromCreatorId } from "@/helperApiCallFunctions/creator";
import CustomComic from "../comics/customComic";
import CustomLoading from "../customLoading";

interface IComicsWithCreator {
  creatorId: number;
}
const ComicsWithCreator = ({ creatorId }: IComicsWithCreator) => {
  const [allComicWithCreator, setAllComicWithCreator] = useState<IAllComics>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicName, setComicName] = useState("");
  const [resultLimit, setResultLimit] = useState(10);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromCreatorId({
        creatorId,
        resultLimit,
        currentPage,
        comicName,
        path: "comics",
      }).then((response) => {
        console.log(response);
        setLoading(false);
        setAllComicWithCreator(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [comicName, creatorId, currentPage, resultLimit]);

  return (
    <CustomComic
      allComics={allComicWithCreator}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setComicName={setComicName}
      loading={loading}
    />
  );
};

export default ComicsWithCreator;
