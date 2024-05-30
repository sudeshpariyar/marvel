import { getDataFromCharacterId } from "@/helperApiCallFunctions/character";
import { IAllStories } from "@/types/stories";
import React, { useEffect, useState } from "react";
import CustomStories from "../stories/customStories";

interface IStoriesWithCharacterProps {
  characterId: number;
}

const StoriesWithCharacer = ({ characterId }: IStoriesWithCharacterProps) => {
  const [allStoriesWithCharacter, setAllStoriesWithCharacter] =
    useState<IAllStories>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromCharacterId({
        characterId,
        resultLimit,
        currentPage,
        path: "stories",
      }).then((response) => {
        setLoading(false);
        setAllStoriesWithCharacter(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [characterId, currentPage, resultLimit]);
  return (
    <CustomStories
      allStories={allStoriesWithCharacter}
      loading={loading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
    />
  );
};

export default StoriesWithCharacer;
