"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IEvent } from "@/types/events";
import CharactersWithinEvent from "@/components/events/charactersWithinEvent";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import { getIndividualEvent } from "@/helperApiCallFunctions/events";
import ComicsWithinEvent from "@/components/events/comicsWithinEvent";

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
    return <div className="h-dvh">Loading...</div>;
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
          <div className="sm:px-4 md:px-16 lg:px-64 xl:124 flex flex-col gap-10">
            <CharactersWithinEvent
              eventId={params.id as unknown as number}
              eventTitle={individualEvent.title}
            />
            <ComicsWithinEvent
              eventId={params.id as unknown as number}
              eventTitle={individualEvent.title}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualEventPage;
