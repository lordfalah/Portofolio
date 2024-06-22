import Project from "@/components/layout/projects";
import { type Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Hello everyone, my name is Irfin Falah.",
};

const ProjectPage = () => {
  return (
    <section className="mx-auto max-w-md lg:max-w-screen-lg">
      <Project />
    </section>
  );
};

export default ProjectPage;
