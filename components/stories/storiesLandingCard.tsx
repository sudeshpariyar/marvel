"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Clapperboard } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const StoriesLandingCard = () => {
  const route = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex align-middle gap-2">
          <Clapperboard className="text-red-600" />
          <span>Stories</span>
        </CardTitle>
        <CardDescription>Get List of the Marvel Stories.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => route.push("/stories")}>List Stories</Button>
      </CardContent>
    </Card>
  );
};
export default StoriesLandingCard;
