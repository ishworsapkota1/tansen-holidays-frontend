import Image from "next/image";
import React, { ReactNode } from "react";

type bannerprops = {
  img: string;
  title?: string | ReactNode;
  className?: string;
};
const Banner = ({ img, title, className }: bannerprops) => {
  return (
    <div className="h-[60vh] relative">
      <div className="absolute z-[4] inset-0 w-full h-80 bg-gradient-to-b from-black via-black/50 to-transparent" />
      <Image
        src={img}
        alt="country-img"
        width={1000}
        height={1000}
        className="w-full h-full object-cover "
      />
      {/* <Image
        width={1000}
        height={1000}
        src="/pattern.png"
        alt="expedition-image"
        className=" absolute -bottom-2 w-full h-20 z-[4]"
      /> */}
      {/* dot overlay */}
      {/* <div className="absolute top-0  h-full w-full bg-[radial-gradient(#ffffff23_1px,#f3f3f311_1px)] bg-[size:4px_4px] z-[2]" /> */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[4]">
        <h1
          className={`font-palker lg:text-[5.5vw] md:text-5xl text-2xl text-white uppercase tracking-wider whitespace-nowrap ${className}`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
