import React from "react";
import HeroSection from "./Hero";
import { WhyChooseTansen } from "./whyChooseUs";
import { HolidayPackages } from "./ourPackages";
import ChooseVehicle from "./chooseVehicle";
import CTA from "../shared/CTA";

const HomeMain = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <ChooseVehicle />
      <WhyChooseTansen />
      <HolidayPackages />
      <CTA title="Plan Your Return Trip" button="Book a Return Trip" path="/return-trip" />
    </div>
  );
};

export default HomeMain;
