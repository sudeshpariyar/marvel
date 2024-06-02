import { getDataFromStoryId } from "@/helperApiCallFunctions/stories";
import { IAllCharacters } from "@/types/characters";
import React, { useEffect, useState } from "react";
import CusotmCharacter from "../characters/cusotmCharacter";

interface ICharacterWitStory {
  storyId: number;
}

const CharacterWithStory = ({ storyId }: ICharacterWitStory) => {
  const [allCharacterWithStory, setAllCharacterWithStory] =
    useState<IAllCharacters>();
  const [currentPage, setCurrentPage] = useState(0);
  const [resultLimit, setResultLimit] = useState(10);
  const [characterName, setCharacterName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromStoryId({
        storyId,
        currentPage,
        resultLimit,
        characterName,
        path: "characters",
      }).then((response) => {
        setLoading(false);
        setAllCharacterWithStory(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [characterName, currentPage, resultLimit, storyId]);

  return (
    <CusotmCharacter
      allCharacters={allCharacterWithStory}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setCharacterName={setCharacterName}
      loading={loading}
    />
  );
};
export default CharacterWithStory;
