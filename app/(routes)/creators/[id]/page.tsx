"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSingleCreator } from "@/helperApiCallFunctions/creator";
import { ICreator } from "@/types/creator";
import CustomImageAndDescription from "@/components/customImageAndDescription";
import ComicsWithCreator from "@/components/creators/comicsWithCreator";
import EventWithCreator from "@/components/creators/eventWithCreator";
import CustomBreakPoint from "@/components/customBreakPoint";

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
    return <div className="h-dvh">Loading...</div>;
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
            <div className="flex flex-col gap-10">
              <ComicsWithCreator
                creatorName={individualCreator.fullName}
                creatorId={params.id as unknown as number}
              />
              <EventWithCreator
                creatorName={individualCreator.fullName}
                creatorId={params.id as unknown as number}
              />
            </div>
          </CustomBreakPoint>
        </div>
      )}
    </>
  );
};

export default IndividualCreatorPage;
