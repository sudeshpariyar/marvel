"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IEvent } from "@/types/events";
import CharactersWithinEvent from "@/components/events/charactersWithinEvent";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import { getIndividualEvent } from "@/helperApiCallFunctions/events";
import ComicsWithinEvent from "@/components/events/comicsWithinEvent";
import CustomBreakPoint from "@/components/customBreakPoint";
import CreatorsOfEvents from "@/components/events/creatorsOfEvents";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomLoading from "@/components/customLoading";
import SeriesWithEvent from "@/components/events/seriesWithEvent";
import StoriesWithEvent from "@/components/events/storiesWithEvent";
import {
  Baby,
  BookOpenText,
  PencilLine,
  Clapperboard,
  SquareLibrary,
} from "lucide-react";

const IndividualEventPage = () => {
  const params = useParams();
  const [individualEvent, setIndividualEvent] = useState<IEvent>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getIndividualEvent({ eventId: params.id as unknown as number }).then(
        (response) => {
          setLoading(false);
          setIndividualEvent(response);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);
  if (loading) {
    return <CustomLoading />;
  }
  return (
    <>
      {individualEvent && (
        <div className="flex flex-col gap-10">
          <CustomImageAndDescription
            thumbNailPath={individualEvent.thumbnail.path}
            thumbnailExtension={individualEvent.thumbnail.extension}
            title={individualEvent.title}
            description={individualEvent.description}
          />
          <CustomBreakPoint>
            <Tabs defaultValue="character">
              <TabsList className="w-full sm:w-auto">
                <div className="flex overflow-x-auto ">
                  <TabsTrigger value="character">
                    <Baby className="text-red-600 mr-1" />
                    Character
                  </TabsTrigger>
                  <TabsTrigger value="comic">
                    <BookOpenText className="text-red-600 mr-1" />
                    Comics
                  </TabsTrigger>
                  <TabsTrigger value="creator">
                    <PencilLine className="text-red-600 mr-1" />
                    Creator
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
              <TabsContent value="character">
                <Card className="p-4">
                  <CharactersWithinEvent eventId={individualEvent.id} />
                </Card>
              </TabsContent>
              <TabsContent value="comic">
                <Card className="p-4">
                  <ComicsWithinEvent eventId={individualEvent.id} />
                </Card>
              </TabsContent>
              <TabsContent value="creator">
                <Card className="p-4">
                  <CreatorsOfEvents eventId={individualEvent.id} />
                </Card>
              </TabsContent>
              <TabsContent value="series">
                <Card className="p-4">
                  <SeriesWithEvent eventId={individualEvent.id} />
                </Card>
              </TabsContent>
              <TabsContent value="stories">
                <Card className="p-4">
                  <StoriesWithEvent eventId={individualEvent.id} />
                </Card>
              </TabsContent>
            </Tabs>
          </CustomBreakPoint>
        </div>
      )}
    </>
  );
};

export default IndividualEventPage;
