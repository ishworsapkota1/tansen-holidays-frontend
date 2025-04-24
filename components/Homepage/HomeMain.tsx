import React from "react";
import HeroSection from "./Hero";
import { WhyChooseTansen } from "./whyChooseUs";
import { HolidayPackages } from "./ourPackages";
import ChooseVehicle from "./chooseVehicle";
import Link from "next/link";

const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <ChooseVehicle />
      <WhyChooseTansen />
      <HolidayPackages />
      <section className="relative w-full h-[40vh] mb-10 flex flex-col justify-center bg-[url(/roads.png)] items-center  mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
      <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="w-11/12 z-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Plan Your Return Trip
          </h2>
          <Link href="/return-trip">
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300">
              Book a Return Trip
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeMain;
