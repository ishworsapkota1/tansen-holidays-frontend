/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Itenary = ({ item, index }: { item: any; index: number }) => {
  return (
    <div
      key={index}
      className="w-full  py-4 md:py-2  overflow-hidden    items-center flex flex-col justify-between"
    >
      <div className="w-full h-[4rem] flex  justify-between items-center">
        <div className="flex gap-4 items-center">
          {/* day */}
          <div className="font-bold justify-center items-center min-w-[3rem] leading-none h-[3rem] rounded-full overflow-hidden  text-primary-400  border-primary-300 border   text-[12px] flex flex-col gap-1">
            <span>{item.day}</span>
          </div>
          {/* title */}
          <span className="text-sm font-medium">{item.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Itenary;
