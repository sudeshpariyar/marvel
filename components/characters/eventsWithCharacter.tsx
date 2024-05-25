import React, { useEffect, useState } from "react";
import { IAllEvents } from "@/types/events";
import CustomEvent from "../events/customEvent";
import { getDataFromCharacterId } from "@/helperApiCallFunctions/character";
import CustomShowHide from "../customShowHide";

interface IEventsWithCharacterProps {
  characterId: number;
  characterName: string;
}
const EventsWithCharacter = ({
  characterId,
  characterName,
}: IEventsWithCharacterProps) => {
  const [allEventsWithCharacter, setAllEventsWithCharacter] =
    useState<IAllEvents>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [eventName, setEventName] = useState("");
  const [showEventList, setShowEventList] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      getDataFromCharacterId({
        characterId,
        resultLimit,
        currentPage,
        eventName,
        path: "events",
      }).then((response) => {
        setLoading(false);
        setAllEventsWithCharacter(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [resultLimit, currentPage, eventName, characterId]);
  if (loading) {
    return <div className="mt-5"> Loading...</div>;
  }
  return (
    <>
      <CustomShowHide
        list={showEventList}
        setList={setShowEventList}
        description={`Events featuring ${characterName}`}
      />
      {showEventList && (
        <CustomEvent
          allEvents={allEventsWithCharacter}
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

export default EventsWithCharacter;
