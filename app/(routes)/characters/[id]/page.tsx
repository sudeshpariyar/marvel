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
        <div className="flex flex-col">
          <CustomImageAndDescription
            thumbNailPath={individualCharacter.thumbnail.path}
            thumbnailExtension={individualCharacter.thumbnail.extension}
            title={individualCharacter.name}
            description={individualCharacter.description}
          />
          <CustomBreakPoint>
            <Tabs defaultValue="comics">
              <TabsList>
                <TabsTrigger value="comics">Comics</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
              <TabsContent value="comics">
                <Card className="p-4">
                  <ComicsWithCharacter
                    characterId={params.id as unknown as number}
                  />
                </Card>
              </TabsContent>
              <TabsContent value="events">
                <Card className="p-4">
                  <EventsWithCharacter
                    characterId={params.id as unknown as number}
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

export default IndividuaCharacter;
