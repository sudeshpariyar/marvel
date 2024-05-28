import { IAllComics } from "@/types/comics";
import React, { useEffect, useState } from "react";
import CustomComic from "../comics/customComic";
import { getDataFromCharacterId } from "@/helperApiCallFunctions/character";
import CustomLoading from "../customLoading";

interface IComicsWithCharacter {
  characterId: number;
}
const ComicsWithCharacter = ({ characterId }: IComicsWithCharacter) => {
  const [allComicsWithCharacter, setAllComicsWithCharacter] =
    useState<IAllComics>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicName, setComicName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
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

  return (
    <CustomComic
      allComics={allComicsWithCharacter}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setComicName={setComicName}
      loading={loading}
    />
  );
};

export default ComicsWithCharacter;
