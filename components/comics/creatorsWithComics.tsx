"use client";
import React, { useEffect, useState } from "react";
import { IAllCreators } from "@/types/creator";
import { getDataFromComicId } from "@/helperApiCallFunctions/comics";
import CustomCreator from "../creators/customCreator";

interface ICreatorsWithinComics {
  comicId: number;
}

const CreatorsWithComics = ({ comicId }: ICreatorsWithinComics) => {
  const [allCreatorsWithComics, setAllCreatorsWithComics] =
    useState<IAllCreators>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [creatorName, setCreatorName] = useState("");
  useEffect(() => {
    try {
      setLoading(true);
      getDataFromComicId({
        comicId,
        currentPage,
        resultLimit,
        creatorName,
        path: "creators",
      }).then((response) => {
        setLoading(false);
        setAllCreatorsWithComics(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [comicId, creatorName, currentPage, resultLimit]);

  return (
    <CustomCreator
      allCreators={allCreatorsWithComics}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setCreatorName={setCreatorName}
      loading={loading}
    />
  );
};

export default CreatorsWithComics;
