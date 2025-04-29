import Link from "next/link";
import React from "react";

type CTAProps = {
  title: string;
  desc?: string;
  button: string;
};

const CTA = ({ title, desc, button }: CTAProps) => {
  return (
    <section className="relative w-full h-[40vh] mb-10 flex flex-col justify-center bg-[url(/roads.png)] bg-center items-center  mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        {desc && (
          <p className="text-lg text-white max-w-2xl mx-auto mb-6">{desc}</p>
        )}
        <Link
          href="/booking"
          className="inline-block bg-purple-800 text-white py-3 px-8 rounded-full text-base font-medium hover:bg-indigo-600 transition-colors duration-300"
        >
          {button}
        </Link>
      </div>
    </section>
  );
};

export default CTA;
