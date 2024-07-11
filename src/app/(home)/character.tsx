"use client";

import { Doodle1 } from "@/components/doodles";
import { useTheme } from "next-themes";
import Image from "next/image";

const CharacterPeep = () => {
  const { theme } = useTheme();

  return (
    <div className="relative grid w-[350px] place-items-center md:w-[400px]">
      <Image
        style={{
          filter:
            theme === "dark"
              ? "drop-shadow(10px 4px 5px rgb(255 255 255 / 0.4))"
              : "drop-shadow(10px 4px 5px rgb(0 0 0 / 0.4))",
        }}
        alt="doodle"
        width={500}
        height={500}
        src={"/default/peep.svg"}
        priority
      />
      <Doodle1 className="absolute bottom-0 stroke-[#a3a3a3]/70" />
    </div>
  );
};

export default CharacterPeep;
