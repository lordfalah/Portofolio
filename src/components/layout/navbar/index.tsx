"use client";

import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

const navigation = [
  { text: "Falah.dev", route: "/" },
  { text: "Projects", route: "/projects" },
  { text: "About", route: "/about" },
  { text: "Blog", route: "/blog" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <Fragment>
      <header className="md:hidden"></header>
      <header className="fixed bottom-5 left-1/2 z-50 w-[95%] -translate-x-1/2 rounded-md border-2 border-dashed border-gray-200 bg-white px-2 md:sticky md:left-auto md:top-0 md:w-full md:-translate-x-0 md:rounded-none md:border-x-0 md:border-b-2 md:border-t-0">
        <nav className="mx-auto flex max-w-5xl items-center justify-between overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 md:w-full">
          <ul className="flex items-center text-center text-sm font-semibold text-black transition">
            {navigation.map(({ route, text }, idx) => (
              <Link
                key={idx}
                href={route}
                className={cn(
                  "relative min-w-16 rounded-sm px-2 py-4 duration-200 ease-in-out hover:bg-gray-300 md:py-5",
                  {
                    "border-b-2 border-black bg-gray-300 md:border-b-0":
                      pathName === route,
                  },
                )}
              >
                {text}
              </Link>
            ))}
          </ul>

          <div className="">
            <button
              className="inline-flex h-6 w-11 items-center rounded-full bg-gray-200 md:relative"
              role="switch"
              type="button"
              tabIndex={1}
              aria-checked="false"
            >
              <span className="sr-only">Enable dark mode</span>
              <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full text-yellow-500 transition duration-150 ease-in-out dark:text-yellow-400">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
                </svg>
              </span>
            </button>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navbar;
