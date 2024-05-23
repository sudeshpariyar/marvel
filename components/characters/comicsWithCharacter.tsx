import { IAllComics } from "@/types/comics";
import React, { useEffect, useState } from "react";
import CustomComic from "../comics/customComic";
import { getDataFromCharacterId } from "@/helperApiCallFunctions/character";

const ComicsWithCharacter = ({ characterId }: { characterId: number }) => {
  const [allComicsWithCharacter, setAllComicsWithCharacter] =
    useState<IAllComics>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicName, setComicName] = useState("");
  useEffect(() => {
    try {
      getDataFromCharacterId({
        characterId,
        resultLimit,
        currentPage,
        comicName,
        path: "comics",
      }).then((response) => {
        setLoading(false);
        setAllComicsWithCharacter(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [resultLimit, currentPage, comicName, characterId]);
  if (loading) {
    return <div className="mt-5"> Loading...</div>;
  }
  return (
    <>
      {allComicsWithCharacter?.results.length && (
        <CustomComic
          allComics={allComicsWithCharacter}
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

export default ComicsWithCharacter;
