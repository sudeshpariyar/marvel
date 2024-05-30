import { getDataFromEventId } from "@/helperApiCallFunctions/events";
import { IAllSeries } from "@/types/series";
import React, { useEffect, useState } from "react";
import CustomSeries from "../series/customSeries";

interface ISeriesWithEventProps {
  eventId: number;
}

const SeriesWithEvent = ({ eventId }: ISeriesWithEventProps) => {
  const [allSeriesWithEvent, setAllSeriesWithEvent] = useState<IAllSeries>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [seriesName, setSeriesName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getDataFromEventId({
        eventId,
        resultLimit,
        currentPage,
        seriesName,
        path: "series",
      }).then((response) => {
        setLoading(false);
        setAllSeriesWithEvent(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, eventId, resultLimit, seriesName]);

  return (
    <CustomSeries
      allSeries={allSeriesWithEvent}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setSeriesName={setSeriesName}
      loading={loading}
    />
  );
};

export default SeriesWithEvent;
