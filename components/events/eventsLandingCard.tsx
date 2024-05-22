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
import { CalendarFold } from "lucide-react";

const EventsLandingCard = () => {
  const route = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex align-middle gap-2">
          <CalendarFold className="text-red-600" />
          <span>Events</span>
        </CardTitle>
        <CardDescription>Get List of the Marvel Events.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => route.push("/events")}>List Events</Button>
      </CardContent>
    </Card>
  );
};

export default EventsLandingCard;
