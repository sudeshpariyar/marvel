"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Characters = () => {
  const route = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Characters</CardTitle>
        <CardDescription>Get List of the Marvel characters.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => route.push("/characters")}>
          List Characters
        </Button>
      </CardContent>
    </Card>
  );
};

export default Characters;
