import React, { useEffect, useState } from "react";
import { getDataFromEventId } from "@/helperApiCallFunctions/events";
import { IAllCreators } from "@/types/creator";
import CustomCreator from "../creators/customCreator";
import CustomLoading from "../customLoading";

interface ICreatorsOfEventsProps {
  eventId: number;
}

const CreatorsOfEvents = ({ eventId }: ICreatorsOfEventsProps) => {
  const [allCreatorsWhitEvent, setAllCreatorsWhitEvent] =
    useState<IAllCreators>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [creatorName, setCreatorName] = useState("");

  useEffect(() => {
    setLoading(true);
    getDataFromEventId({
      eventId,
      resultLimit,
      currentPage,
      creatorName,
      path: "creators",
    }).then((response) => {
      console.log(response);
      setLoading(false);
      setAllCreatorsWhitEvent(response);
    });
  }, [creatorName, currentPage, eventId, resultLimit]);

  return (
    <CustomCreator
      allCreators={allCreatorsWhitEvent}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setCreatorName={setCreatorName}
      loading={loading}
    />
  );
};

export default CreatorsOfEvents;
