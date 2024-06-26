"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getIndividualSeries } from "@/helperApiCallFunctions/series";
import { ISeries } from "@/types/series";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import CustomLoading from "@/components/customLoading";
import CustomBreakPoint from "@/components/customBreakPoint";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import CharacterWithSeries from "@/components/series/characterWithSeries";
import ComicWithSeries from "@/components/series/comicWithSeries";
import CreatorsWithSeries from "@/components/series/creatorsWithSeries";
import EventsWithSeries from "@/components/series/eventsWithSeries";
import StoriesWithSeries from "@/components/series/storiesWithSeries";
import {
  Baby,
  BookOpenText,
  PencilLine,
  CalendarFold,
  SquareLibrary,
} from "lucide-react";

const IndividualSeriePage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [individualSerise, setIndividualSeries] = useState<ISeries>();

  useEffect(() => {
    try {
      setLoading(true);
      getIndividualSeries({ seriesId: params.id as unknown as number }).then(
        (response) => {
          setLoading(false);
          setIndividualSeries(response);
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
      {individualSerise && (
        <div className="flex flex-col gap-10">
          <CustomImageAndDescription
            thumbNailPath={individualSerise.thumbnail.path}
            thumbnailExtension={individualSerise.thumbnail.extension}
            title={individualSerise.title}
            description={individualSerise.description}
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
                  <TabsTrigger value="events">
                    <CalendarFold className="text-red-600 mr-1" />
                    Events
                  </TabsTrigger>
                  <TabsTrigger value="stories">
                    <SquareLibrary className="text-red-600 mr-1" />
                    Stories
                  </TabsTrigger>
                </div>
              </TabsList>
              <TabsContent value="character">
                <Card className="p-4">
                  <CharacterWithSeries seriesId={individualSerise.id} />
                </Card>
              </TabsContent>
              <TabsContent value="comic">
                <Card className="p-4">
                  <ComicWithSeries seriesId={individualSerise.id} />
                </Card>
              </TabsContent>
              <TabsContent value="creator">
                <Card className="p-4">
                  <CreatorsWithSeries seriesId={individualSerise.id} />
                </Card>
              </TabsContent>
              <TabsContent value="events">
                <Card className="p-4">
                  <EventsWithSeries seriesId={individualSerise.id} />
                </Card>
              </TabsContent>
              <TabsContent value="stories">
                <Card className="p-4">
                  <StoriesWithSeries seriesId={individualSerise.id} />
                </Card>
              </TabsContent>
            </Tabs>
          </CustomBreakPoint>
        </div>
      )}
    </>
  );
};

export default IndividualSeriePage;
