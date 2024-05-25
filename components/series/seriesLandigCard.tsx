"use client";
import { Clapperboard } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { useRouter } from "next/navigation";

const SeriesLandigCard = () => {
  const route = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex align-middle gap-2">
          <Clapperboard className="text-red-600" />
          <span>Series</span>
        </CardTitle>
        <CardDescription>Get List of the Marvel Series.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => route.push("/series")}>List Series</Button>
      </CardContent>
    </Card>
  );
};

export default SeriesLandigCard;
