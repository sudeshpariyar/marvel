"use client";
import CustomBreakPoint from "@/components/customBreakPoint";
import CustomStories from "@/components/stories/customStories";
import { getAllStories } from "@/helperApiCallFunctions/stories";
import { IAllStories } from "@/types/stories";
import React, { useEffect, useState } from "react";

const StoriesPage = () => {
  const [allStories, setAllStories] = useState<IAllStories>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      getAllStories({ resultLimit, currentPage }).then((response) => {
        setLoading(false);
        setAllStories(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, resultLimit]);
  return (
    <CustomBreakPoint>
      <div className="mt-10">
        <CustomStories
          allStories={allStories}
          loading={loading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
        />
      </div>
    </CustomBreakPoint>
  );
};

export default StoriesPage;
