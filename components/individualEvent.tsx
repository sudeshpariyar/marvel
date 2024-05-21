import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { IIndividualEvent } from "@/types/common";

const IndividualEvent = ({ event }: { event: IIndividualEvent }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-gray-600">{event.name}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default IndividualEvent;
