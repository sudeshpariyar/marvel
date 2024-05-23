import { getDataFromEventId } from "@/helperApiCallFunctions/events";
import { IAllComics } from "@/types/comics";
import React, { useEffect, useState } from "react";
import CustomComic from "../comics/customComic";

const ComicsWithinEvent = ({ eventId }: { eventId: number }) => {
  const [allComicsWithEvent, setAllComicsWithEvent] = useState<IAllComics>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicName, setComicName] = useState("");
  useEffect(() => {
    try {
      getDataFromEventId({
        eventId,
        resultLimit,
        currentPage,
        comicName,
        path: "comics",
      }).then((response) => {
        setLoading(false);
        setAllComicsWithEvent(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [resultLimit, currentPage, comicName, eventId]);
  return (
    <>
      {allComicsWithEvent?.results.length && (
        <CustomComic
          allComics={allComicsWithEvent}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
          setComicName={setComicName}
        />
      )}
    </>
  );
};

export default ComicsWithinEvent;
