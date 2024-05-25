import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Label } from "./ui/label";
import {
  Baby,
  BookOpenText,
  CalendarFold,
  Clapperboard,
  Menu,
  PencilLine,
} from "lucide-react";
import { useRouter } from "next/navigation";

const FloatingNavBar = () => {
  const router = useRouter();
  const handleRoute = (path: string) => {
    console.log("handleRoute");
    router.push(`/${path}`);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-black text-white">
        <SheetHeader>
          <SheetTitle className="text-red-600 ">Marvel</SheetTitle>
        </SheetHeader>
        <div className="mt-10 flex flex-col gap-8">
          <Label
            className="flex items-center gap-4"
            onClick={() => handleRoute("characters")}
          >
            <Baby className="text-red-600" />
            <span className="text-gray-400"> Character</span>
          </Label>
          <Label
            className="flex items-center gap-4"
            onClick={() => handleRoute("comics")}
          >
            <BookOpenText className="text-red-600" />
            <span className="text-gray-400"> Comics</span>
          </Label>
          <Label
            className="flex items-center gap-4"
            onClick={() => handleRoute("events")}
          >
            <CalendarFold className="text-red-600" />
            <span className="text-gray-400">Events</span>
          </Label>
          <Label
            className="flex items-center gap-4"
            onClick={() => handleRoute("creators")}
          >
            <PencilLine className="text-red-600" />
            <span className="text-gray-400">Creators</span>
          </Label>
          <Label
            className="flex items-center gap-4"
            onClick={() => handleRoute("series")}
          >
            <Clapperboard className="text-red-600" />
            <span className="text-gray-400">Series</span>
          </Label>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FloatingNavBar;
