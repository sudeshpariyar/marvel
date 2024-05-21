import { IIndividualStory } from "@/types/common";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const IndividualStory = ({ story }: { story: IIndividualStory }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-gray-600">{story.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{story.type}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default IndividualStory;
