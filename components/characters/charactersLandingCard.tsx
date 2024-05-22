"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Baby } from "lucide-react";

const Characters = () => {
  const route = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex align-middle gap-2">
          <Baby className="text-red-600" />
          <span>Characters</span>
        </CardTitle>
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
