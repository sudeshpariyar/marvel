"use client";
import React, { useEffect, useState } from "react";
import CustomShowHide from "../customShowHide";
import { IAllCreators } from "@/types/creator";
import { getDataFromComicId } from "@/helperApiCallFunctions/comics";
import CustomCreator from "../creators/customCreator";

interface ICreatorsWithinComics {
  comicTitle: string;
  comicId: number;
}

const CreatorsWithComics = ({ comicTitle, comicId }: ICreatorsWithinComics) => {
  const [allCreatorsWithComics, setAllCreatorsWithComics] =
    useState<IAllCreators>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [creatorName, setCreatorName] = useState("");
  const [creatorList, setCreatorList] = useState(false);
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
    return <div>Loading...</div>;
  }
  return (
    <>
      <CustomShowHide
        list={creatorList}
        setList={setCreatorList}
        description={`Creators whose work appear in ${comicTitle}`}
      />
      {creatorList && (
        <CustomCreator
          allCreators={allCreatorsWithComics}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
          setCreatorName={setCreatorName}
        />
      )}
    </>
  );
};

export default CreatorsWithComics;
