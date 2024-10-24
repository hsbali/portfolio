"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type ProjectCardPropTypes = {
  imgSrc: StaticImageData | string;
  title: string;
  description: string;
};

export default function ProjectCard({
  imgSrc,
  title,
  description,
}: ProjectCardPropTypes) {
  const [isShowFullDescription, setIsShowFullDescription] = useState(false);

  return (
    <div
      className="relative border rounded-lg overflow-hidden p-6"
      onClick={() => setIsShowFullDescription((prev) => !prev)}
    >
      <Image
        src={imgSrc}
        className="rounded-lg mb-4"
        alt="monk-project-cover"
      />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p
        className={cn(
          "text-sm text-muted-foreground",
          !isShowFullDescription && "line-clamp-3"
        )}
      >
        {!isShowFullDescription ? description.slice(0, 100) : description}
      </p>
      {!isShowFullDescription && (
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-background to-transparent w-full h-16" />
      )}
    </div>
  );
}
