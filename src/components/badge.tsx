import Link from "next/link";
import React from "react";

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-fit rounded-sm bg-slate-600 px-1 py-0.5 text-[10px] font-bold uppercase text-neutral-100 hover:opacity-80 md:text-xs">
      <Link href={"/"}>{children}</Link>
    </div>
  );
};

export default Badge;
