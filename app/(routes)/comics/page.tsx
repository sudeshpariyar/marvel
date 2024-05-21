"use client";
import IndividualComic from "@/components/individualComicCard";
import { IAllComics } from "@/types/comics";
import axios from "@/lib/axios";
import React, { useEffect, useState } from "react";

const ComicsPage = () => {
  const [allComics, setAllComics] = useState<IAllComics>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getComics = async () => {
      setLoading(true);
      try {
        await axios
          .get(`/comics?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`)
          .then((response) => {
            setAllComics(response.data.data);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getComics();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="sm:px-4 md:px-16 lg:px-64 xl:124 my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {allComics?.results.length &&
        allComics.results.map((comic) => (
          <IndividualComic key={comic.id} comic={comic} />
        ))}
    </div>
  );
};

export default ComicsPage;
