"use client";

import { handleAnimationThemeToggle } from "@/libs/animation-theme";
import { cn } from "@/libs/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useRef } from "react";
import { Sun, Moon } from "lucide-react";

const navigation = [
  { text: "Falah.dev", route: "/" },
  { text: "Projects", route: "/projects" },
  { text: "About", route: "/about" },
  { text: "Blog", route: "/blog" },
];

const Navbar = () => {
  const pathName = usePathname();
  const { setTheme, theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Fragment>
      <header className="md:hidden"></header>
      <header className="bg-[rgba(255, 255, 255, 0.05)] fixed bottom-5 left-1/2 z-50 w-[95%] -translate-x-1/2 rounded-md border-2 border-dashed border-gray-200 pl-0 pr-2 shadow-md dark:shadow-2xl dark:shadow-black md:sticky md:left-auto md:top-0 md:w-full md:-translate-x-0 md:rounded-none md:border-x-0 md:border-b-2 md:border-t-0 md:px-2 md:backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between overflow-x-auto backdrop-blur scrollbar-thin scrollbar-thumb-gray-300 md:w-full">
          <ul className="flex items-center text-center text-sm font-semibold transition">
            {navigation.map(({ route, text }, idx) => (
              <Link
                key={idx}
                href={route}
                className={cn(
                  "relative min-w-16 rounded-sm px-2 py-4 duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-white/5 md:py-5",
                  {
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 after:border-black after:content-[''] after:dark:border-white md:after:top-0 md:after:border-b-0 md:after:border-t-2":
                      pathName === route,
                  },
                )}
              >
                {text}
              </Link>
            ))}
          </ul>

          <button
            type="button"
            className="h-7 w-14 items-center rounded-full bg-gray-200 px-1 shadow-inner shadow-black/30 dark:bg-[#0F0F0F]/80 dark:shadow-white/40"
            role="switch"
            aria-checked="false"
            onClick={() =>
              handleAnimationThemeToggle({ elementDiv: ref, setTheme, theme })
            }
          >
            <span className="sr-only">Enable dark mode</span>

            <div ref={ref} className="h-full w-full md:relative">
              <Moon
                fill="#F59E0B"
                className="absolute right-0 top-1/2 hidden -translate-y-1/2 stroke-none dark:block"
              />

              <Sun
                fill="#F59E0B"
                color="#F59E0B"
                className="absolute top-1/2 block -translate-y-1/2 dark:hidden"
              />
            </div>
          </button>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navbar;
