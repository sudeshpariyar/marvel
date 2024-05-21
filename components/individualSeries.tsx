import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { ISeriesItem } from "@/types/common";

const IndividualSeries = ({ indSeries }: { indSeries: ISeriesItem }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-gray-600">
          {indSeries.name}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default IndividualSeries;
