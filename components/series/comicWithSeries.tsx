import { getDataFromSeriesId } from "@/helperApiCallFunctions/series";
import { IAllComics } from "@/types/comics";
import React, { useEffect, useState } from "react";
import CustomComic from "../comics/customComic";

interface IComicWithSeriesProps {
  seriesId: number;
}
const ComicWithSeries = ({ seriesId }: IComicWithSeriesProps) => {
  const [allComicWithSeries, setAllCommicsWithSeries] = useState<IAllComics>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicName, setComicName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromSeriesId({
        seriesId,
        currentPage,
        resultLimit,
        comicName,
        path: "comics",
      }).then((response) => {
        setLoading(false);
        setAllCommicsWithSeries(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [comicName, currentPage, resultLimit, seriesId]);
  return (
    <CustomComic
      allComics={allComicWithSeries}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setComicName={setComicName}
      loading={loading}
    />
  );
};

export default ComicWithSeries;
