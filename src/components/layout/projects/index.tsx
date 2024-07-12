import React from "react";
import Card from "@/components/layout/projects/card";

const images = [
  {
    title: "Smartpath",
    source: "/image/projects/smartpath.png",
    description: "smmasdmad",
  },

  {
    title: "Finplan",
    source: "/image/projects/finplan.png",
    description: "smmasdmad",
  },

  {
    title: "Smartpath",
    source: "/image/projects/smartpath.png",
    description: "smmasdmad",
  },
];

const Project = () => {
  return (
    <div className="my-10 space-y-6">
      <h1 className="text-4xl font-semibold md:text-6xl">Projects</h1>

      <div className="space-y-3.5">
        <p>Some collection of my past works</p>
        {images.map(({ description, source, title }, idx) => (
          <Card
            key={idx}
            imageSrc={source}
            title="Auth"
            deskription="Simple OLX-inspired commerce built with PostgreSQL, and Vercel
                    Blob."
            createdAt="Created at may 2024"
            sourceCode="/"
            visitProject="/"
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
