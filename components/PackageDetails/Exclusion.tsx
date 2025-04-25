/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const PackageExclusion = ({ index, item }: { index: number; item: any }) => {
  return (
    <div
      key={index}
      className="w-full  py-4 md:py-2  overflow-hidden   flex justify-center items-center "
    >
      <div className=" w-full flex justify-start gap-2 items-center">
        {/* day */}
        <div className="font-bold justify-center items-center min-w-[3rem] p-3 leading-none min-h-[3rem] rounded-full overflow-hidden ">
          <Icon
            icon="fluent-emoji-flat:cross-mark"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* title */}
        <div className="font-medium text-[15px]">
          <span className="font-semibold">{item.title}:</span>{" "}
          <span className="text-secondary-400">{item.description}</span>
        </div>
      </div>
    </div>
  );
};

export default PackageExclusion;
