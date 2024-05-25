import React, { useState } from "react";
import { IComic } from "@/types/comics";
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
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useRouter } from "next/navigation";

const IndividualComic = ({ comic }: { comic: IComic }) => {
  const route = useRouter();
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-lg text-gray-600  text-clip">
          {comic.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {showDescription ? (
          <CardDescription>{comic.description}</CardDescription>
        ) : (
          <div>
            {comic.images.length ? (
              <Carousel>
                <CarouselContent>
                  {comic.images.map((img) => (
                    <Image
                      key={img.path}
                      src={`${img.path}/landscape_incredible.${img.extension}`}
                      alt="Comic"
                      width={50}
                      height={50}
                      unoptimized
                      className="object-cover object-bottom h-full w-full transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                      priority
                    />
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-7" />
                <CarouselNext className="mr-7" />
              </Carousel>
            ) : (
              <Image
                src={`${comic.thumbnail.path}/landscape_incredible.${comic.thumbnail.extension}`}
                alt="Comic"
                width={50}
                height={50}
                unoptimized
                className="object-cover object-bottom h-full w-full transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                priority
              />
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          disabled={!comic.description ? true : false}
          onClick={() => setShowDescription(!showDescription)}
        >
          {comic.description
            ? showDescription
              ? "Show Image"
              : "Show Description"
            : "No Description"}
        </Button>
        <Button onClick={() => route.push(`/comics/${comic.id}`)}>GoTo</Button>
      </CardFooter>
    </Card>
  );
};

export default IndividualComic;
