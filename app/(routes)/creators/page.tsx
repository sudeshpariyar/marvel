"use client";
import CustomCreator from "@/components/creators/customCreator";
import { getAllCreators } from "@/helperApiCallFunctions/creator";
import { IAllCreators } from "@/types/creator";
import React, { useEffect, useState } from "react";

const CreatorPage = () => {
  const [allCreators, setAllCreators] = useState<IAllCreators>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [creatorName, setCreatorName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getAllCreators({ resultLimit, currentPage, creatorName }).then(
        (response) => {
          setLoading(false);
          setAllCreators(response);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [resultLimit, currentPage, creatorName]);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <div className="sm:px-4 md:px-16 lg:px-64 xl:124 mt-10">
      <CustomCreator
        allCreators={allCreators}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        resultLimit={resultLimit}
        setResultLimit={setResultLimit}
        setCreatorName={setCreatorName}
      />
    </div>
  );
};

export default CreatorPage;
