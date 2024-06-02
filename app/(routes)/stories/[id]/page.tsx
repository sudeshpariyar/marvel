"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CustomBreakPoint from "@/components/customBreakPoint";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import CustomLoading from "@/components/customLoading";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getIndividualStory } from "@/helperApiCallFunctions/stories";
import { IStory } from "@/types/stories";
import {
  Baby,
  BookOpenText,
  PencilLine,
  CalendarFold,
  Clapperboard,
} from "lucide-react";
import CharacterWithStory from "@/components/stories/characterWithStory";
import ComicsWithStory from "@/components/stories/comicsWithStory";
import CreatorWithStory from "@/components/stories/creatorWithStory";
import EventWithStory from "@/components/stories/eventWithStory";
import SeriesWithStory from "@/components/stories/seriesWithStory";

const IndividualStoryPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [individualStories, setIndividualStories] = useState<IStory>();

  useEffect(() => {
    try {
      setLoading(true);
      getIndividualStory({ storyId: params.id as unknown as number }).then(
        (response) => {
          setLoading(false);
          setIndividualStories(response);
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
      {individualStories && (
        <div className="flex flex-col gap-10">
          <CustomImageAndDescription
            thumbNailPath={
              individualStories.thumbnail
                ? individualStories.thumbnail.path
                : ""
            }
            thumbnailExtension={
              individualStories.thumbnail
                ? individualStories.thumbnail.extension
                : ""
            }
            title={individualStories.title}
            description={individualStories.description}
            alt={individualStories.thumbnail ? null : "No image found"}
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
                  <TabsTrigger value="series">
                    <Clapperboard className="text-red-600 mr-1" />
                    Series
                  </TabsTrigger>
                </div>
              </TabsList>
              <TabsContent value="character">
                <Card className="p-4">
                  <CharacterWithStory storyId={individualStories.id} />
                </Card>
              </TabsContent>
              <TabsContent value="comic">
                <Card className="p-4">
                  <ComicsWithStory storyId={individualStories.id} />
                </Card>
              </TabsContent>
              <TabsContent value="creator">
                <Card className="p-4">
                  <CreatorWithStory storyId={individualStories.id} />{" "}
                </Card>
              </TabsContent>
              <TabsContent value="events">
                <Card className="p-4">
                  <EventWithStory storyId={individualStories.id} />
                </Card>
              </TabsContent>
              <TabsContent value="series">
                <Card className="p-4">
                  <SeriesWithStory storyId={individualStories.id} />{" "}
                </Card>
              </TabsContent>
            </Tabs>
          </CustomBreakPoint>
        </div>
      )}
    </>
  );
};

export default IndividualStoryPage;
