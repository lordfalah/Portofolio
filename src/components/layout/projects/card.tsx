import Badge from "@/components/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type TCard = {
  title: string;
  description: string;
  imageSrc: string;
  createdAt: Date | string;
  visitProject: string;
  sourceCode: string | null;
  techs: { name: string; color: string }[];
};

const Card = ({
  title,
  description,
  imageSrc,
  createdAt,
  visitProject,
  sourceCode,
  techs,
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

        <div className="mx-auto flex flex-col justify-center space-y-3 p-4 md:p-2 lg:basis-1/2">
          <div>
            <h2 className="">{title}</h2>
            <p className="text-xs text-[#58524D] md:text-sm">
              {createdAt.toString()}
            </p>
          </div>
          <p className="text-sm md:text-base">{description}</p>

          <div className="flex flex-wrap gap-2">
            {techs.map(({ color, name }, idx) => (
              <Badge style={{ backgroundColor: color }} key={idx}>
                {name}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2 font-medium md:text-lg">
            <div className="flex items-center gap-2.5">
              <ArrowRight />
              <Link
                target="_blank"
                href={visitProject}
                className="hover:underline"
              >
                Visit Project
              </Link>
            </div>

            {sourceCode && (
              <div className="flex items-center gap-2.5">
                <ArrowRight />
                <Link
                  target="_blank"
                  href={sourceCode}
                  className="hover:underline"
                >
                  Source Code
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
