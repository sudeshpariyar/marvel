import React, { useEffect, useState } from "react";
import CustomShowHide from "../customShowHide";
import { getDataFromComicId } from "@/helperApiCallFunctions/comics";
import { IAllEvents } from "@/types/events";
import CustomEvent from "../events/customEvent";

interface IEventsWithinComics {
  comicTitle: string;
  comicId: number;
}
const EventsWithinComics = ({ comicTitle, comicId }: IEventsWithinComics) => {
  const [allEventsInComic, setAllEventsInComic] = useState<IAllEvents>();
  const [listEvents, setListEvents] = useState(false);
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
  if (loading) {
    return <div className="mt-5"> Loading...</div>;
  }
  return (
    <>
      <CustomShowHide
        list={listEvents}
        setList={setListEvents}
        description={`Events appearing in ${comicTitle}`}
      />
      {listEvents && (
        <CustomEvent
          allEvents={allEventsInComic}
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

export default EventsWithinComics;
