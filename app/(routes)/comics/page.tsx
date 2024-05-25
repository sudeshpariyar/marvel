"use client";
import { IAllComics } from "@/types/comics";
import React, { useEffect, useState } from "react";
import CustomComic from "@/components/comics/customComic";
import { getAllComics } from "@/helperApiCallFunctions/comics";
import CustomBreakPoint from "@/components/customBreakPoint";

const ComicsPage = () => {
  const [allComics, setAllComics] = useState<IAllComics>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicName, setComicName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getAllComics({ resultLimit, currentPage, comicName }).then((response) => {
        setAllComics(response);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [resultLimit, currentPage, comicName]);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <CustomBreakPoint>
      <div className="mt-10">
        <CustomComic
          allComics={allComics}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
          setComicName={setComicName}
        />
      </div>
    </CustomBreakPoint>
  );
};

export default ComicsPage;
