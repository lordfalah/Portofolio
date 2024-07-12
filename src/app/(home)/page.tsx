import { Doodle1, Doodle2 } from "@/components/doodles";
import Link from "next/link";
import dynamic from "next/dynamic";
const CharacterPeep = dynamic(() => import("@/app/(home)/character"), {
  ssr: false,
});

export default function Home() {
  return (
    <section className="cursor-pencil dark:cursor-pencil-dark relative flex h-full items-center justify-center pb-6 md:w-screen md:pb-0 md:pr-2.5">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <CharacterPeep />

        <div className="flex flex-col items-center justify-center space-y-4 md:ml-4 md:items-start">
          <h1 className="font-doodle mt-1 text-3xl md:text-4xl">
            It&apos;s me,
            <span className="relative mx-1.5">
              Fal.
              <Doodle2 className="absolute -bottom-2 -right-4 hidden w-24 stroke-[#ffd55a]/70 dark:block md:w-28" />
              <Doodle2 className="absolute -bottom-2 -right-4 block w-24 stroke-[#a3a3a3]/70 dark:hidden md:w-28" />
            </span>
            <span className="animate-pulse">👾</span>
          </h1>
          <p className="text-md max-w-[500px] text-center md:text-left md:text-lg">
            A self-taught programmer based in Pontianak. Love to explore
            anything about web development.
          </p>
          <p className="text-md max-w-[500px] text-center md:text-left md:text-lg">
            {"Peek my "}
            <Link
              className="relative z-20 font-semibold underline"
              href="/projects"
            >
              past works
            </Link>
            {", and learn more "}
            <Link
              href="/about"
              className="relative z-20 font-semibold underline"
            >
              about me
            </Link>
            .
          </p>
        </div>
      </div>
      {/* <Canvas /> */}
    </section>
  );
}
