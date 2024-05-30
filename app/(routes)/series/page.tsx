"use client";
import React, { useEffect, useState } from "react";
import CustomBreakPoint from "@/components/customBreakPoint";
import CustomSeries from "@/components/series/customSeries";
import { getAllSeries } from "@/helperApiCallFunctions/series";
import { IAllSeries } from "@/types/series";

const SeriesPage = () => {
  const [allSeries, setAllSeries] = useState<IAllSeries>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [seriesName, setSeriesName] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      getAllSeries({ resultLimit, currentPage, seriesName }).then(
        (response) => {
          setLoading(false);
          setAllSeries(response);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, resultLimit, seriesName]);

  return (
    <CustomBreakPoint>
      <div className="mt-10">
        <CustomSeries
          allSeries={allSeries}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
          setSeriesName={setSeriesName}
          loading={loading}
        />
      </div>
    </CustomBreakPoint>
  );
};

export default SeriesPage;
