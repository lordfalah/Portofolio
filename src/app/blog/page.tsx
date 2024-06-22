import { type Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Hello everyone, my name is Irfin Falah.",
};

const Blog = () => {
  return (
    <section className="flex items-center justify-center">
      <div>
        <h1 className="mb-8 animate-pulse text-5xl font-bold text-black">
          Coming Soon
        </h1>
        <p className="mb-8 text-lg text-black">
          We`re working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default Blog;
