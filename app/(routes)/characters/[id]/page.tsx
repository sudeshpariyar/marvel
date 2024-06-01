"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ICharacter } from "@/types/characters";
import ComicsWithCharacter from "@/components/characters/comicsWithCharacter";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import EventsWithCharacter from "@/components/characters/eventsWithCharacter";
import { getSingelCharacter } from "@/helperApiCallFunctions/character";
import CustomBreakPoint from "@/components/customBreakPoint";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import CustomLoading from "@/components/customLoading";
import SeriesWithCharacter from "@/components/characters/seriesWithCharacter";
import StoriesWithCharacer from "@/components/characters/storiesWithCharacer";
import {
  BookOpenText,
  CalendarFold,
  Clapperboard,
  SquareLibrary,
} from "lucide-react";

const IndividuaCharacter = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [individualCharacter, setIndividualCharacter] = useState<ICharacter>();
  useEffect(() => {
    try {
      setLoading(true);
      getSingelCharacter({
        characterId: params.id as unknown as number,
      }).then((response) => {
        setLoading(false);
        setIndividualCharacter(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);
  if (loading) {
    return <CustomLoading />;
  }
  return (
    <>
      {individualCharacter && (
        <div className="flex flex-col gap-10">
          <CustomImageAndDescription
            thumbNailPath={individualCharacter.thumbnail.path}
            thumbnailExtension={individualCharacter.thumbnail.extension}
            title={individualCharacter.name}
            description={individualCharacter.description}
          />
          <CustomBreakPoint>
            <Tabs defaultValue="comics">
              <TabsList className="w-full sm:w-auto">
                <div className="flex overflow-x-auto ">
                  <TabsTrigger value="comics">
                    <BookOpenText className="text-red-600 mr-1" />
                    Comics
                  </TabsTrigger>
                  <TabsTrigger value="events">
                    <CalendarFold className="text-red-600 mr-1" />
                    Events
                  </TabsTrigger>
                  <TabsTrigger value="series">
                    <Clapperboard className="text-red-600 mr-1" />
                    Series
                  </TabsTrigger>
                  <TabsTrigger value="stories">
                    <SquareLibrary className="text-red-600 mr-1" />
                    Stories
                  </TabsTrigger>
                </div>
              </TabsList>
              <TabsContent value="comics">
                <Card className="p-4">
                  <ComicsWithCharacter characterId={individualCharacter.id} />
                </Card>
              </TabsContent>
              <TabsContent value="events">
                <Card className="p-4">
                  <EventsWithCharacter characterId={individualCharacter.id} />
                </Card>
              </TabsContent>
              <TabsContent value="series">
                <Card className="p-4">
                  <SeriesWithCharacter characterId={individualCharacter.id} />
                </Card>
              </TabsContent>
              <TabsContent value="stories">
                <Card className="p-4">
                  <StoriesWithCharacer characterId={individualCharacter.id} />
                </Card>
              </TabsContent>
            </Tabs>
          </CustomBreakPoint>
        </div>
      )}
    </>
  );
};

export default IndividuaCharacter;
