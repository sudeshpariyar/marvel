"use client";
import React, { useEffect, useState } from "react";
import { IAllEvents } from "@/types/events";
import CustomEvent from "@/components/events/customEvent";
import { getAllEvents } from "@/helperApiCallFunctions/events";

const EventsPage = () => {
  const [allEvents, setAllEvents] = useState<IAllEvents>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [eventName, setEventName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getAllEvents({ resultLimit, currentPage, eventName }).then((response) => {
        setLoading(false);
        setAllEvents(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [resultLimit, currentPage, eventName]);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <div className="sm:px-4 md:px-16 lg:px-64 xl:124 mt-10">
      <CustomEvent
        allEvents={allEvents}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        resultLimit={resultLimit}
        setResultLimit={setResultLimit}
        setEventName={setEventName}
      />
    </div>
  );
};

export default EventsPage;
