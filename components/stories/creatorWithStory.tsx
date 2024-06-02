import { getDataFromStoryId } from "@/helperApiCallFunctions/stories";
import { IAllCreators } from "@/types/creator";
import React, { useEffect, useState } from "react";
import CustomCreator from "../creators/customCreator";

interface ICreateWithStory {
  storyId: number;
}

const CreatorWithStory = ({ storyId }: ICreateWithStory) => {
  const [allCreatorsWithStory, setAllCreatorsWithStory] =
    useState<IAllCreators>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [creatorName, setCreatorName] = useState("");
  useEffect(() => {
    try {
      setLoading(true);
      getDataFromStoryId({
        storyId,
        currentPage,
        resultLimit,
        creatorName,
        path: "creators",
      }).then((response) => {
        setLoading(false);
        setAllCreatorsWithStory(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [creatorName, currentPage, resultLimit, storyId]);

  return (
    <CustomCreator
      allCreators={allCreatorsWithStory}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setCreatorName={setCreatorName}
      loading={loading}
    />
  );
};

export default CreatorWithStory;
