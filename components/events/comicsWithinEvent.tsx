import { getDataFromEventId } from "@/helperApiCallFunctions/events";
import { IAllComics } from "@/types/comics";
import React, { useEffect, useState } from "react";
import CustomComic from "../comics/customComic";
import CustomShowHide from "../customShowHide";

interface IComicWithEvent {
  eventId: number;
  eventTitle: string;
}

const ComicsWithinEvent = ({ eventId, eventTitle }: IComicWithEvent) => {
  const [allComicsWithEvent, setAllComicsWithEvent] = useState<IAllComics>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicName, setComicName] = useState("");
  const [comicList, setComicList] = useState(false);

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
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <CustomShowHide
        list={comicList}
        setList={setComicList}
        description={`Comics which takes place during ${eventTitle}`}
      />
      {comicList && (
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
