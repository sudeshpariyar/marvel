import Image from "next/image";
import React from "react";

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
      <div className="sm:px-4 md:px-16 lg:px-64 xl:124">
        <div className="text-5xl font-bold">{title}</div>
        {description && (
          <div className="text-lg text-gray-500 pt-4 leading-1.5">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomImageAndDescription;
