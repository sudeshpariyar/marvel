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
              <TabsList>
                <TabsTrigger value="character">Character</TabsTrigger>
                <TabsTrigger value="comic">Comics</TabsTrigger>
                <TabsTrigger value="creator">Creator</TabsTrigger>
              </TabsList>
              <TabsContent value="character">
                <Card className="p-4">
                  <CharactersWithinEvent
                    eventId={params.id as unknown as number}
                  />
                </Card>
              </TabsContent>
              <TabsContent value="comic">
                <Card className="p-4">
                  <ComicsWithinEvent eventId={params.id as unknown as number} />
                </Card>
              </TabsContent>
              <TabsContent value="creator">
                <Card className="p-4">
                  <CreatorsOfEvents eventId={params.id as unknown as number} />
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
