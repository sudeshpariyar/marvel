"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSingleCreator } from "@/helperApiCallFunctions/creator";
import { ICreator } from "@/types/creator";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import ComicsWithCreator from "@/components/creators/comicsWithCreator";
import EventWithCreator from "@/components/creators/eventWithCreator";
import CustomBreakPoint from "@/components/customBreakPoint";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import CustomLoading from "@/components/customLoading";
import SeriesWithCreators from "@/components/creators/seriesWithCreators";
import StoriesWithCreator from "@/components/creators/storiesWithCreator";

const IndividualCreatorPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [individualCreator, setIndividualCreator] = useState<ICreator>();
  useEffect(() => {
    try {
      setLoading(true);
      getSingleCreator({ creatorId: params.id as unknown as number }).then(
        (response) => {
          console.log(response);
          setLoading(false);
          setIndividualCreator(response);
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
      {individualCreator && (
        <div className=" flex flex-col gap-10">
          <CustomImageAndDescription
            thumbNailPath={individualCreator.thumbnail.path}
            thumbnailExtension={individualCreator.thumbnail.extension}
            title={individualCreator.fullName}
            description=""
          />
          <CustomBreakPoint>
            <Tabs defaultValue="comics">
              <TabsList>
                <TabsTrigger value="comics">Comics</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="series">Series</TabsTrigger>
                <TabsTrigger value="stories">Stories</TabsTrigger>
              </TabsList>
              <TabsContent value="comics">
                <Card className="p-4">
                  <ComicsWithCreator creatorId={individualCreator.id} />
                </Card>
              </TabsContent>
              <TabsContent value="events">
                <Card className="p-4">
                  <EventWithCreator creatorId={individualCreator.id} />
                </Card>
              </TabsContent>
              <TabsContent value="series">
                <Card className="p-4">
                  <SeriesWithCreators creatorId={individualCreator.id} />
                </Card>
              </TabsContent>
              <TabsContent value="stories">
                <Card className="p-4">
                  <StoriesWithCreator creatorId={individualCreator.id} />
                </Card>
              </TabsContent>
            </Tabs>
          </CustomBreakPoint>
        </div>
      )}
    </>
  );
};

export default IndividualCreatorPage;
