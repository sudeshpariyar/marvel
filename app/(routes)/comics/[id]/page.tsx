"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IComic } from "@/types/comics";
import CharactersWithinComics from "@/components/comics/charactersWithinComics";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import { getSingleComic } from "@/helperApiCallFunctions/comics";
import EventsWithinComics from "@/components/comics/eventsWithinComics";
import CustomBreakPoint from "@/components/customBreakPoint";
import CreatorsWithComics from "@/components/comics/creatorsWithComics";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomLoading from "@/components/customLoading";
import StoriesWithinCoics from "@/components/comics/storiesWithinCoics";
import { Baby, CalendarFold, PencilLine, SquareLibrary } from "lucide-react";

const IndividualComic = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [individualComic, setIndividualComic] = useState<IComic>();

  useEffect(() => {
    try {
      setLoading(true);
      getSingleComic({ comicId: params.id as unknown as number }).then(
        (response) => {
          setLoading(false);
          setIndividualComic(response);
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
      {individualComic && (
        <div className="flex flex-col gap-10">
          <CustomImageAndDescription
            thumbNailPath={individualComic.thumbnail.path}
            thumbnailExtension={individualComic.thumbnail.extension}
            title={individualComic.title}
            description={individualComic.description}
          />
          <CustomBreakPoint>
            <Tabs defaultValue="characters">
              <TabsList className="w-full sm:w-auto">
                <div className="flex overflow-x-auto ">
                  <TabsTrigger value="characters">
                    <Baby className="text-red-600 mr-1" />
                    Characters
                  </TabsTrigger>
                  <TabsTrigger value="events">
                    <CalendarFold className="text-red-600 mr-1" />
                    Events
                  </TabsTrigger>
                  <TabsTrigger value="creator">
                    <PencilLine className="text-red-600 mr-1" />
                    Creator
                  </TabsTrigger>
                  <TabsTrigger value="stories">
                    <SquareLibrary className="text-red-600 mr-1" />
                    Stories
                  </TabsTrigger>
                </div>
              </TabsList>
              <TabsContent value="characters">
                <Card className="p-4">
                  <CharactersWithinComics comicId={individualComic.id} />
                </Card>
              </TabsContent>
              <TabsContent value="events">
                <Card className="p-4">
                  <EventsWithinComics comicId={individualComic.id} />
                </Card>
              </TabsContent>
              <TabsContent value="creator">
                <Card className="p-4">
                  <CreatorsWithComics comicId={individualComic.id} />
                </Card>
              </TabsContent>
              <TabsContent value="stories">
                <Card className="p-4">
                  <StoriesWithinCoics comicId={individualComic.id} />
                </Card>
              </TabsContent>
            </Tabs>
          </CustomBreakPoint>
        </div>
      )}
    </>
  );
};

export default IndividualComic;
