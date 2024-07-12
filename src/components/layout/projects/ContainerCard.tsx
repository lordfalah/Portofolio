import React from "react";

const ContainerCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-[#F9F9F9] dark:bg-[#0F0F0F]/50">
      <div className="flex flex-col lg:flex-row">{children}</div>
    </div>
  );
};

export default ContainerCard;
