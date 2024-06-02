import Image from "next/image";
import React from "react";
import CustomBreakPoint from "./customBreakPoint";

interface ICustomImageAndDescriptionProps {
  thumbNailPath: string;
  thumbnailExtension: string;
  title: string;
  description: string;
  alt?: string | null;
}

const CustomImageAndDescription = ({
  thumbNailPath,
  thumbnailExtension,
  title,
  description,
  alt,
}: ICustomImageAndDescriptionProps) => {
  return (
    <CustomBreakPoint>
      <div className="mt-10 flex flex-col gap-10">
        <div className="text-3xl lg:text-5xl font-bold text-red-600">
          {title}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <Image
            alt={alt ? alt : "Cover"}
            src={`${thumbNailPath}/landscape_incredible.${thumbnailExtension}`}
            className="border border-gray-300 object-cover rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-black/40 "
            height={261}
            width={464}
            priority
          />
          {description && (
            <span className="lg:text-lg text-gray-500 leading-1.5">
              {description}
            </span>
          )}
        </div>
      </div>
    </CustomBreakPoint>
  );
};

export default CustomImageAndDescription;
