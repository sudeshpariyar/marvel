import { ISeries } from "@/types/series";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const IndividualSeriesCard = ({ series }: { series: ISeries }) => {
  const route = useRouter();

  const [showDescription, setShowDescription] = useState(false);

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle> {series.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {showDescription ? (
          <CardDescription>{series.description}</CardDescription>
        ) : (
          <Image
            src={`${series.thumbnail.path}/landscape_incredible.${series.thumbnail.extension}`}
            alt="series"
            width={100}
            height={100}
            unoptimized
            className="object-cover h-full w-full  transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            priority
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          disabled={!series.description ? true : false}
          onClick={() => setShowDescription(!showDescription)}
        >
          {series.description
            ? showDescription
              ? "Show Image"
              : "Show Description"
            : "No Description"}
        </Button>
        <Button onClick={() => route.push(`/series/${series.id}`)}>GoTo</Button>
      </CardFooter>
    </Card>
  );
};

export default IndividualSeriesCard;
