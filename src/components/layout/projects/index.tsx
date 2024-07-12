import React from "react";
import Card, { type TCard } from "@/components/layout/projects/card";
import { generateNewColor } from "@/libs/utils";

const images: TCard[] = [
  {
    title: "Auth",
    imageSrc: "/image/projects/auth.png",
    description:
      "Simple authentication that uses Oauth from google and implements password reset from resend",
    visitProject: "https://next-auth-six-jade.vercel.app/auth/login",
    sourceCode: "https://github.com/lordfalah/next-auth.git",
    createdAt: "Created at May 2024",
    techs: [
      { name: "Next", color: generateNewColor() },
      { name: "Auth", color: generateNewColor() },
      { name: "Postgress", color: generateNewColor() },
    ],
  },

  {
    title: "Finplan",
    imageSrc: "/image/projects/finplan.png",
    description:
      "A platform that provides services to help financial planning and investment. Built using vue and quasar technology",
    visitProject: "https://finplan.id/",
    sourceCode: null,
    createdAt: "Created at May 2024",
    techs: [
      { name: "Next", color: generateNewColor() },
      { name: "Auth", color: generateNewColor() },
      { name: "Postgress", color: generateNewColor() },
    ],
  },

  {
    title: "Smartpath",
    imageSrc: "/image/projects/smartpath.png",
    description:
      "An educational technology platform that provides a variety of learning programs to assist students and professionals in developing their skills. Which is built using React, Next, Typescript",
    visitProject: "https://smartpath.id/",
    sourceCode: null,
    createdAt: "Created at May 2024",
    techs: [
      { name: "Next", color: generateNewColor() },
      { name: "Auth", color: generateNewColor() },
      { name: "Postgress", color: generateNewColor() },
    ],
  },
];

const Project = () => {
  return (
    <div className="my-10 space-y-6">
      <h1 className="text-4xl font-semibold md:text-6xl">Projects</h1>

      <div className="space-y-3.5">
        <p>Some collection of my past works</p>
        {images.map(
          (
            { description, imageSrc, title, sourceCode, visitProject, techs },
            idx,
          ) => (
            <Card
              key={idx}
              imageSrc={imageSrc}
              title={title}
              description={description}
              createdAt="Created at may 2024"
              sourceCode={sourceCode}
              visitProject={visitProject}
              techs={techs}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Project;
