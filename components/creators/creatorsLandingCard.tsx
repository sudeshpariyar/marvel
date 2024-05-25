"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PencilLine } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CreatorsLandingCard = () => {
  const route = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex align-middle gap-2">
          <PencilLine className="text-red-600" />
          <span>Creators</span>
        </CardTitle>
        <CardDescription>Get List of the creators.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => route.push("/creators")}>List Creators</Button>
      </CardContent>
    </Card>
  );
};

export default CreatorsLandingCard;
