import { getDataFromEventId } from "@/helperApiCallFunctions/events";
import { IAllComics } from "@/types/comics";
import React, { useEffect, useState } from "react";
import CustomComic from "../comics/customComic";
import CustomLoading from "../customLoading";

interface IComicWithEvent {
  eventId: number;
}

const ComicsWithinEvent = ({ eventId }: IComicWithEvent) => {
  const [allComicsWithEvent, setAllComicsWithEvent] = useState<IAllComics>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicName, setComicName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
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
    <CustomComic
      allComics={allComicsWithEvent}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      resultLimit={resultLimit}
      setResultLimit={setResultLimit}
      setComicName={setComicName}
      loading={loading}
    />
  );
};

export default ComicsWithinEvent;
