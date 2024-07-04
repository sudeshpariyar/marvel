"use client";
import React from "react";
import { IAllStories } from "@/types/stories";
import CustomLoading from "../customLoading";
import CustomNoResultFound from "../customNoResultFound";
import IndividualStoriesCard from "./individualStoriesCard";
import CustomPagination from "../customPagination";
import CustomDropDown from "../customDropDown";

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
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <span> Total stories {allStories?.total}.</span>
        <div className="flex gap-2">
          <CustomDropDown
            resultLimit={resultLimit}
            setResultLimit={setResultLimit}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      {loading ? (
        <CustomLoading />
      ) : (
        <>
          {allStories?.results.length ? (
            <div className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {allStories.results.map((story) => (
                  <IndividualStoriesCard key={story.id} story={story} />
                ))}
              </div>
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
