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

const ComicsLandingCard = () => {
  const route = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comics</CardTitle>
        <CardDescription>Get List of the Marvel comics.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => route.push("/comics")}>List Comics</Button>
      </CardContent>
    </Card>
  );
};
export default ComicsLandingCard;
