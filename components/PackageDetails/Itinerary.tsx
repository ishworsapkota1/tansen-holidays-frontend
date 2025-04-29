/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Itinerary = ({ item, index }: { item: any; index: number }) => {
  return (
    <div
      key={index}
      className="w-full py-4 md:py-3 overflow-hidden transition-colors duration-200 border-b border-gray-100"
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-3 items-center w-full overflow-hidden">

          <span className="font-bold text-gray-800 text-base w-18 flex-shrink-0 text-center">
            {item.day}
          </span>
          
          <div className="h-6 w-px bg-gray-200"></div>
          
          <span className="text-sm text-gray-800 font-semibold flex-1">
            {item.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;