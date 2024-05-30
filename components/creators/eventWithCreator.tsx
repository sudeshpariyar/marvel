import React, { useEffect, useState } from "react";
import { getDataFromCreatorId } from "@/helperApiCallFunctions/creator";
import { IAllEvents } from "@/types/events";
import CustomEvent from "../events/customEvent";

interface IEventWithCreator {
  creatorId: number;
}

const EventWithCreator = ({ creatorId }: IEventWithCreator) => {
  const [allEventsWithCreator, setAllEventsWithCreator] =
    useState<IAllEvents>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [eventName, setEventName] = useState("");

  const [resultLimit, setResultLimit] = useState(10);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromCreatorId({
        creatorId,
        resultLimit,
        currentPage,
        eventName,
        path: "events",
      }).then((response) => {
        console.log("ecents in creator", response);
        setLoading(false);
        setAllEventsWithCreator(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [creatorId, currentPage, eventName, resultLimit]);

  return (
    <CustomEvent
      allEvents={allEventsWithCreator}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setEventName={setEventName}
      loading={loading}
    />
  );
};

export default EventWithCreator;
