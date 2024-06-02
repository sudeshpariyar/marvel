import { getDataFromStoryId } from "@/helperApiCallFunctions/stories";
import { IAllEvents } from "@/types/events";
import React, { useEffect, useState } from "react";
import CustomEvent from "../events/customEvent";

interface IEventWithStory {
  storyId: number;
}
const EventWithStory = ({ storyId }: IEventWithStory) => {
  const [allEventsWithStory, setAllEventsWithStory] = useState<IAllEvents>();
  const [currentPage, setCurrentPage] = useState(0);
  const [resultLimit, setResultLimit] = useState(10);
  const [eventName, setEventName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromStoryId({
        storyId,
        resultLimit,
        currentPage,
        eventName,
        path: "events",
      }).then((response) => {
        setLoading(false);
        setAllEventsWithStory(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [resultLimit, currentPage, eventName, storyId]);

  return (
    <CustomEvent
      allEvents={allEventsWithStory}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setEventName={setEventName}
      loading={loading}
    />
  );
};

export default EventWithStory;
