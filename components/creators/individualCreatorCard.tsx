import { ICreator } from "@/types/creator";
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

const IndividualCreatorCard = ({ creator }: { creator: ICreator }) => {
  const route = useRouter();
  const [showComics, setShowComics] = useState(false);
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle> {creator.fullName}</CardTitle>
      </CardHeader>
      <CardContent>
        {showComics ? (
          <CardDescription>
            <span className="text-red-600 font-bold">
              Commic which features work by {creator.fullName}
            </span>
            {creator.comics.items.length &&
              creator.comics.items.map((comic) => (
                <div key={comic.resourceURI}>{comic.name}</div>
              ))}
          </CardDescription>
        ) : (
          <Image
            src={`${creator.thumbnail.path}/landscape_incredible.${creator.thumbnail.extension}`}
            alt="creator"
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
          disabled={creator.comics.items.length ? false : true}
          onClick={() => setShowComics(!showComics)}
        >
          {showComics
            ? "Show Image"
            : creator.comics.available
            ? "List Comics"
            : "Not Availabele"}
        </Button>
        <Button onClick={() => route.push(`/creators/${creator.id}`)}>
          GoTo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IndividualCreatorCard;
