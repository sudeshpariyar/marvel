import React, { useState } from "react";
import { IEvent } from "@/types/events";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useRouter } from "next/navigation";

const IndividualEventCard = ({ event }: { event: IEvent }) => {
  const route = useRouter();
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle> {event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {showDescription ? (
          <CardDescription>{event.description}</CardDescription>
        ) : (
          <Image
            src={`${event.thumbnail.path}/landscape_incredible.${event.thumbnail.extension}`}
            alt="event"
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
          disabled={!event.description ? true : false}
          onClick={() => setShowDescription(!showDescription)}
        >
          {event.description
            ? showDescription
              ? "Show Image"
              : "Show Description"
            : "No Description"}
        </Button>
        <Button onClick={() => route.push(`/events/${event.id}`)}>GoTo</Button>
      </CardFooter>
    </Card>
  );
};

export default IndividualEventCard;
