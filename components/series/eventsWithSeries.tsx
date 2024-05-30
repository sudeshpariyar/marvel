import { getDataFromSeriesId } from "@/helperApiCallFunctions/series";
import { IAllEvents } from "@/types/events";
import React, { useEffect, useState } from "react";
import CustomEvent from "../events/customEvent";

interface IEventsWithSeriesProps {
  seriesId: number;
}
const EventsWithSeries = ({ seriesId }: IEventsWithSeriesProps) => {
  const [allEventsWithSeries, setAllEventsWithSeries] = useState<IAllEvents>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [eventName, setEventName] = useState("");
  const [resultLimit, setResultLimit] = useState(10);

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromSeriesId({
        seriesId,
        resultLimit,
        currentPage,
        eventName,
        path: "events",
      }).then((response) => {
        setLoading(false);
        setAllEventsWithSeries(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, eventName, resultLimit, seriesId]);
  return (
    <CustomEvent
      allEvents={allEventsWithSeries}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setEventName={setEventName}
      loading={loading}
    />
  );
};

export default EventsWithSeries;
