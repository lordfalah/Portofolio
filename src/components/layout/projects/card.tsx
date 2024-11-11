"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Badge from "@/components/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { TCard } from "@/types/index.type";

const Card: React.FC<
  Omit<TCard, "imageSrc"> & { children: React.ReactNode }
> = ({
  title,
  description,
  createdAt,
  visitProject,
  sourceCode,
  techs,
  children,
}) => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y });
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      className="relative w-full overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-[#F9F9F9] hover:cursor-pointer dark:bg-[#0F0F0F]/50"
    >
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
        style={{
          background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, ${theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}, transparent 80%)`,
          opacity: isHovered ? 1 : 0,
          pointerEvents: "none",
        }}
      />

      <div className="flex flex-col lg:flex-row">
        {children}

        <div className="mx-auto flex flex-col justify-center space-y-3 p-4 md:p-2 lg:basis-1/2">
          <div>
            <h2 className="">{title}</h2>
            <p className="text-xs text-[#58524D] md:text-sm">
              {createdAt.toString()}
            </p>
          </div>
          <p className="text-sm md:text-base">{description}</p>

          <div className="flex flex-wrap gap-2">
            {techs.map(({ color, name }, idx) => (
              <Badge style={{ backgroundColor: color }} key={idx}>
                {name}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2 font-medium md:text-lg">
            <div className="flex items-center gap-2.5">
              <ArrowRight />
              <Link
                target="_blank"
                href={visitProject}
                className="hover:underline"
              >
                Visit Project
              </Link>
            </div>

            {sourceCode && (
              <div className="flex items-center gap-2.5">
                <ArrowRight />
                <Link
                  target="_blank"
                  href={sourceCode}
                  className="hover:underline"
                >
                  Source Code
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
