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
    <div className="w-full overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-[#F9F9F9] dark:bg-[#0F0F0F]/50">
      <div className="flex flex-col lg:flex-row">
        <Image
          alt="project"
          className="basis-1/2 rounded-xl p-2 transition-transform duration-150 ease-in-out group-hover:scale-125"
          width="489"
          height="256"
          src={imageSrc}
          style={{ objectFit: "contain", objectPosition: "center" }}
          priority
        />

        {/* <div className="group relative h-[225px] overflow-hidden p-2 shadow-md sm:h-[254px] lg:h-[256px] lg:basis-[489px]">
          <Image
            alt="project"
            className="w-full rounded-xl object-contain p-2 transition-transform duration-150 ease-in-out group-hover:scale-125 sm:object-fill"
            sizes="500px"
            src={imageSrc}
            style={{ objectPosition: "center" }}
            priority
            fill
          />
        </div> */}

        <div className="mx-auto flex flex-col justify-center space-y-3 p-4 md:p-2 lg:basis-1/2">
          <div>
            <h2 className="">{title}</h2>
            <p className="text-xs text-[#58524D] md:text-sm">
              {createdAt.toString()}
            </p>
          </div>
          <p className="text-sm md:text-base">{deskription}</p>

          <div className="flex flex-wrap gap-2">
            <Badge>NextJS</Badge>
            <Badge>NextJS</Badge>
            <Badge>NextJS</Badge>
            <Badge>NextJS</Badge>
            <Badge>NextJS</Badge>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 font-medium md:text-lg">
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
