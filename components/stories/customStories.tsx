"use client";
import React, { useState } from "react";
import { IAllStories } from "@/types/stories";
import CustomLoading from "../customLoading";
import CustomNoResultFound from "../customNoResultFound";
import IndividualStoriesCard from "./individualStoriesCard";
import CustomPagination from "../customPagination";
import CustomDropDown from "../customDropDown";
import CustomTotalFormDropDownWrapper from "../customTotalFormDropDownWrapper";
import StoriesTable from "./storiesTable";

interface ICustomSeriesProps {
  allStories?: IAllStories;
  loading: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  resultLimit: number;
  setResultLimit: (limit: number) => void;
}
const CustomStories = ({
  allStories,
  loading,
  currentPage,
  setCurrentPage,
  resultLimit,
  setResultLimit,
}: ICustomSeriesProps) => {
  const [displayGrid, setDisplayGrid] = useState("grid");

  return (
    <div className="flex flex-col gap-4">
      <CustomTotalFormDropDownWrapper
        totalResult={allStories?.total}
        setDisplayGrid={setDisplayGrid}
      >
        <CustomDropDown
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
          setCurrentPage={setCurrentPage}
        />
      </CustomTotalFormDropDownWrapper>

      {loading ? (
        <CustomLoading />
      ) : (
        <>
          {allStories?.results.length ? (
            <div className="flex flex-col gap-4">
              {displayGrid === "grid" ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {allStories.results.map((story) => (
                    <IndividualStoriesCard key={story.id} story={story} />
                  ))}
                </div>
              ) : (
                <StoriesTable stories={allStories} />
              )}

              <CustomPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalResult={allStories.total as unknown as number}
                resultLimit={resultLimit}
              />
            </div>
          ) : (
            <CustomNoResultFound />
          )}
        </>
      )}
    </div>
  );
};

export default CustomStories;
