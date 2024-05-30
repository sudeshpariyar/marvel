import { getDataFromEventId } from "@/helperApiCallFunctions/events";
import { IAllStories } from "@/types/stories";
import React, { useEffect, useState } from "react";
import CustomStories from "../stories/customStories";
interface IStoriesWithEventProps {
  eventId: number;
}
const StoriesWithEvent = ({ eventId }: IStoriesWithEventProps) => {
  const [allStoriesWithEvent, setAllStoriesWithEvent] = useState<IAllStories>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromEventId({
        eventId,
        resultLimit,
        currentPage,
        path: "stories",
      }).then((response) => {
        setLoading(false);
        setAllStoriesWithEvent(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, eventId, resultLimit]);
  return (
    <CustomStories
      allStories={allStoriesWithEvent}
      loading={loading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
    />
  );
};

export default StoriesWithEvent;
