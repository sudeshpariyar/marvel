import React, { useEffect, useState } from "react";
import CustomShowHide from "../customShowHide";
import { getDataFromComicId } from "@/helperApiCallFunctions/comics";
import { IAllEvents } from "@/types/events";
import CustomEvent from "../events/customEvent";
import CustomLoading from "../customLoading";

interface IEventsWithinComics {
  comicId: number;
}
const EventsWithinComics = ({ comicId }: IEventsWithinComics) => {
  const [allEventsInComic, setAllEventsInComic] = useState<IAllEvents>();
  const [currentPage, setCurrentPage] = useState(0);
  const [resultLimit, setResultLimit] = useState(10);
  const [eventName, setEventName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromComicId({
        comicId,
        resultLimit,
        currentPage,
        eventName,
        path: "events",
      }).then((response) => {
        setLoading(false);
        setAllEventsInComic(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [resultLimit, currentPage, eventName, comicId]);

  return (
    <CustomEvent
      allEvents={allEventsInComic}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setEventName={setEventName}
      loading={loading}
    />
  );
};

export default EventsWithinComics;
