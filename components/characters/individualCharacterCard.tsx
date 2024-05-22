import { ICharacter } from "@/types/characters";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const IndividualCharacterCard = ({ character }: { character: ICharacter }) => {
  const route = useRouter();
  const [showDescription, setShowDescription] = useState(false);
  const handleDescription = () => {
    setShowDescription(!showDescription);
  };
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle> {character.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {showDescription ? (
          <CardDescription>{character.description}</CardDescription>
        ) : (
          <Image
            src={`${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`}
            alt="Character"
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
          disabled={!character.description ? true : false}
          onClick={handleDescription}
        >
          {character.description
            ? showDescription
              ? "Show Image"
              : "Show Description"
            : "No Description"}
        </Button>
        <Button onClick={() => route.push(`/characters/${character.id}`)}>
          GoTo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IndividualCharacterCard;
