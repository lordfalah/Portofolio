import React from "react";
import Card from "@/components/layout/projects/card";
import Image from "next/image";
import { getImage } from "@/hooks/use-plaiceholder";
import { projects } from "@/libs/data";

const Project: React.FC = () => {
  return (
    <div className="my-10 space-y-6">
      <h1 className="text-4xl font-semibold md:text-6xl">Projects</h1>

      <div className="space-y-3.5">
        <p>Some collection of my past works</p>
        {projects.map(
          async (
            { description, imageSrc, title, sourceCode, visitProject, techs },
            idx,
          ) => {
            const base64 = await getImage(imageSrc);

            return (
              <Card
                key={idx}
                title={title}
                description={description}
                createdAt="Created at may 2024"
                sourceCode={sourceCode}
                visitProject={visitProject}
                techs={techs}
              >
                <Image
                  alt="project"
                  className="basis-1/2 rounded-xl p-2 transition-transform duration-150 ease-in-out group-hover:scale-125"
                  width="489"
                  height="256"
                  src={imageSrc}
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  blurDataURL={base64}
                  placeholder="blur"
                />
              </Card>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Project;
