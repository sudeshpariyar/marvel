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
import { BookOpenText } from "lucide-react";

const ComicsLandingCard = () => {
  const route = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex align-middle gap-2">
          <BookOpenText className="text-red-600" />
          <span>Comics</span>
        </CardTitle>
        <CardDescription>Get List of the Marvel comics.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => route.push("/comics")}>List Comics</Button>
      </CardContent>
    </Card>
  );
};
export default ComicsLandingCard;
