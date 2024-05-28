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
              <TabsList>
                <TabsTrigger value="characters">Characters</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="creator">Creator</TabsTrigger>
              </TabsList>
              <TabsContent value="characters">
                <Card className="p-4">
                  <CharactersWithinComics
                    comicId={params.id as unknown as number}
                  />
                </Card>
              </TabsContent>
              <TabsContent value="events">
                <Card className="p-4">
                  <EventsWithinComics
                    comicId={params.id as unknown as number}
                  />
                </Card>
              </TabsContent>
              <TabsContent value="creator">
                <Card className="p-4">
                  <CreatorsWithComics
                    comicId={params.id as unknown as number}
                  />
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
