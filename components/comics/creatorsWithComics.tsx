"use client";
import React, { useEffect, useState } from "react";
import CustomShowHide from "../customShowHide";
import { IAllCreators } from "@/types/creator";
import { getDataFromComicId } from "@/helperApiCallFunctions/comics";
import CustomCreator from "../creators/customCreator";
import CustomLoading from "../customLoading";

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
        console.log("all creators in comics", response);
        setLoading(false);
        setAllCreatorsWithComics(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [comicId, creatorName, currentPage, resultLimit]);
  if (loading) {
    return <CustomLoading />;
  }
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
