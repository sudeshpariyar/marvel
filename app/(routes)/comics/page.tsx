"use client";
import { IAllComics } from "@/types/comics";
import axios from "@/lib/axios";
import React, { useEffect, useState } from "react";
import CustomComic from "@/components/comics/customComic";
import { getAllComics } from "@/helperApiCallFunctions/comics";

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
    <div className="sm:px-4 md:px-16 lg:px-64 xl:124 my-10">
      <CustomComic
        allComics={allComics}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        resultLimit={resultLimit}
        setResultLimit={setResultLimit}
        setComicName={setComicName}
      />
    </div>
  );
};

export default ComicsPage;
