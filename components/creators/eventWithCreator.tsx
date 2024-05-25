import React, { useEffect, useState } from "react";
import CustomShowHide from "../customShowHide";
import { getDataFromCreatorId } from "@/helperApiCallFunctions/creator";
import { IAllEvents } from "@/types/events";
import CustomEvent from "../events/customEvent";

interface IEventWithCreator {
  creatorName: string;
  creatorId: number;
}

const EventWithCreator = ({ creatorName, creatorId }: IEventWithCreator) => {
  const [allEventsWithCreator, setAllEventsWithCreator] =
    useState<IAllEvents>();
  const [listEvent, setListEvent] = useState(false);
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

  if (loading) {
    return <div className="mt-5"> Loading...</div>;
  }
  return (
    <>
      <CustomShowHide
        list={listEvent}
        setList={setListEvent}
        description={`Events in which the work of a ${creatorName} appears`}
      />
      {listEvent && (
        <CustomEvent
          allEvents={allEventsWithCreator}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
          setEventName={setEventName}
        />
      )}
    </>
  );
};

export default EventWithCreator;
