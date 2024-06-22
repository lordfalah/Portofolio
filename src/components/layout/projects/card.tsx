import Badge from "@/components/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type TCard = {
  title: string;
  deskription: string;
  imageSrc: string;
  createdAt: Date | string;
  visitProject: string;
  sourceCode: string;
};

const Card = ({
  title,
  deskription,
  imageSrc,
  createdAt,
  visitProject,
  sourceCode,
}: TCard) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-[#F9F9F9]">
      <div className="flex flex-col lg:flex-row">
        <div className="group relative h-[200px] w-full overflow-hidden p-2 shadow-md contain-size sm:h-[254px] lg:h-auto lg:basis-1/2">
          <Image
            alt="project"
            className="w-full rounded-xl p-2 transition-transform duration-150 ease-in-out group-hover:scale-125"
            sizes="500px"
            src={imageSrc}
            style={{ objectFit: "fill" }}
            objectPosition="center"
            fill
          />
        </div>

        <div className="flex flex-col justify-center space-y-3 p-4 md:p-6 lg:basis-1/2">
          <div>
            <h4>{title}</h4>
            <p className="text-xs text-[#58524D] md:text-sm">
              {createdAt.toString()}
            </p>
          </div>
          <p className="text-sm md:text-base">{deskription}</p>

          <div className="flex gap-2">
            <Badge>NextJS</Badge>
            <Badge>NextJS</Badge>
            <Badge>NextJS</Badge>
            <Badge>NextJS</Badge>
            <Badge>NextJS</Badge>
          </div>

          <div className="flex gap-4 pt-2 font-medium md:text-lg">
            <div className="flex items-center gap-2.5">
              <ArrowRight />
              <Link href={visitProject} className="hover:underline">
                Visit Project
              </Link>
            </div>

            <div className="flex items-center gap-2.5">
              <ArrowRight />
              <Link href={sourceCode} className="hover:underline">
                Source Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
