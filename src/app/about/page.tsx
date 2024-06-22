import Blob from "@/components/blob";
import About from "@/components/layout/about";
import Contact from "@/components/layout/about/contact";
import { type Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Hello everyone, my name is Irfin Falah.",
};

const AboutPage = () => {
  return (
    <section className="mx-auto max-w-screen-md">
      <Blob />
      <About />
      <Contact />
    </section>
  );
};

export default AboutPage;
