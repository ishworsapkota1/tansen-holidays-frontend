import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type bannerprops = {
  img: string;
  title?: string | ReactNode;
  className?: string;
  button?: string;
};
const Banner = ({ img, title, className, button }: bannerprops) => {
  return (
    <div className={`relative w-full h-[50vh] md:h-[60vh] overflow-hidden ${className}`}>
      <Image
        src={img}
        alt="Tansen Holidays Services"
        layout="fill"
        objectFit="cover"
        quality={85}
        className="brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-indigo-600/20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mt-4 max-w-3xl">
          Discover seamless travel with Tansen Holidays—offering reliable, comfortable, and modern transportation across Nepal.
        </p>
        {button && (<Link
          href="/our-services"
          className="mt-6 bg-white text-indigo-600 py-3 px-8 rounded-full text-base font-medium hover:bg-indigo-100 transition-colors duration-300"
        >
          Explore Services
        </Link>)}
      </div>
    </div>
  );
};

export default Banner;