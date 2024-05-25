import Image from "next/image";
import React from "react";
import CustomBreakPoint from "./customBreakPoint";

interface ICustomImageAndDescriptionProps {
  thumbNailPath: string;
  thumbnailExtension: string;
  title: string;
  description: string;
}

const CustomImageAndDescription = ({
  thumbNailPath,
  thumbnailExtension,
  title,
  description,
}: ICustomImageAndDescriptionProps) => {
  return (
    <div className="h-dvh flex flex-col gap-10">
      <div className="relative h-4/5">
        <Image
          alt="Event Cover"
          src={`${thumbNailPath}/landscape_incredible.${thumbnailExtension}`}
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
      <CustomBreakPoint>
        <div className="text-5xl font-bold">{title}</div>
        {description && (
          <div className="text-lg text-gray-500 pt-4 leading-1.5">
            {description}
          </div>
        )}
      </CustomBreakPoint>
    </div>
  );
};

export default CustomImageAndDescription;
