import React, { useEffect, useState } from "react";
import CustomShowHide from "../customShowHide";
import { getDataFromEventId } from "@/helperApiCallFunctions/events";
import { IAllCreators } from "@/types/creator";
import CustomCreator from "../creators/customCreator";

interface ICreatorsOfEventsProps {
  eventId: number;
  eventTitle: string;
}

const CreatorsOfEvents = ({ eventId, eventTitle }: ICreatorsOfEventsProps) => {
  const [allCreatorsWhitEvent, setAllCreatorsWhitEvent] =
    useState<IAllCreators>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [creatorName, setCreatorName] = useState("");
  const [creatorList, setCreatorList] = useState(false);

  useEffect(() => {
    setLoading(false);
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
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <CustomShowHide
        list={creatorList}
        setList={setCreatorList}
        description={`Creators whose work appears in ${eventTitle}`}
      />
      {creatorList && (
        <CustomCreator
          allCreators={allCreatorsWhitEvent}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
          setCreatorName={setCreatorName}
        />
      )}
    </>
  );
};

export default CreatorsOfEvents;
