/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const PackageInclusion = ({ index, item }: { index: number; item: any }) => {
  return (
    <div
      key={index}
      className="w-full  py-4 md:py-2  overflow-hidden   flex justify-center lg:items-center items-start  "
    >
      <div className=" w-full flex justify-start gap-2 items-center">
        {/* day */}
        <div className="font-bold justify-center items-center min-w-[3rem] p-3 leading-none min-h-[3rem] rounded-full overflow-hidden ">
          <Icon
            icon="subway:tick"
            className="text-green-600 w-full h-full object-cover object-center"
          />
        </div>
        {/* title */}
        <div className="font-medium text-[15px]">
          <span className="font-semibold">{item.item}</span>{" "}
          {/* <span className="text-secondary-400">{item.description}</span> */}
        </div>
      </div>
    </div>
  );
};

export default PackageInclusion;
