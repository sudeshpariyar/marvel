import { IStory } from "@/types/stories";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const IndividualStoriesCard = ({ story }: { story: IStory }) => {
  const route = useRouter();

  const [showDescription, setShowDescription] = useState(false);
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-gray-600"> {story.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {showDescription ? (
          <CardDescription>{story.description}</CardDescription>
        ) : story.thumbnail ? (
          <Image
            src={`${story.thumbnail.path}/landscape_incredible.${story.thumbnail.extension}`}
            alt="series"
            width={100}
            height={100}
            unoptimized
            className="object-cover h-full w-full  transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            priority
          />
        ) : (
          <div className="text-gray-500">No Image</div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          disabled={!story.description ? true : false}
          onClick={() => setShowDescription(!showDescription)}
        >
          {story.description
            ? showDescription
              ? "Show Image"
              : "Show Description"
            : "No Description"}
        </Button>
        <Button onClick={() => route.push(`/stories/${story.id}`)}>GoTo</Button>
      </CardFooter>
    </Card>
  );
};

export default IndividualStoriesCard;
