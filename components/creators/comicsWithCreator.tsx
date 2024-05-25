import React, { useEffect, useState } from "react";
import CustomShowHide from "../customShowHide";
import { IAllComics } from "@/types/comics";
import { getDataFromCreatorId } from "@/helperApiCallFunctions/creator";
import CustomComic from "../comics/customComic";

interface IComicsWithCreator {
  creatorName: string;
  creatorId: number;
}
const ComicsWithCreator = ({ creatorName, creatorId }: IComicsWithCreator) => {
  const [allComicWithCreator, setAllComicWithCreator] = useState<IAllComics>();
  const [listComics, setListComics] = useState(false);
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
  if (loading) {
    return <div className="mt-5"> Loading...</div>;
  }
  return (
    <>
      <CustomShowHide
        list={listComics}
        setList={setListComics}
        description={`Comics in which the work of a ${creatorName} appears`}
      />
      {listComics && (
        <CustomComic
          allComics={allComicWithCreator}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
          setComicName={setComicName}
        />
      )}
    </>
  );
};

export default ComicsWithCreator;
