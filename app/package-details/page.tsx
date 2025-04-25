import React from "react";
import Image from "next/image";
// import { Link as ScrollLink } from "react-scroll";
// import { Icon } from "@iconify/react/dist/iconify.js";
import PackageOverview from "@/components/PackageDetails/Overview";
import Itenary from "@/components/PackageDetails/Itinerary";
import PackageInclusion from "@/components/PackageDetails/Inclusion";
import PackageExclusion from "@/components/PackageDetails/Exclusion";
import PackageGallery from "@/components/PackageDetails/Gallery";
import Link from "next/link";
import PackageReview from "@/components/PackageDetails/Review";


// Mock data (replace with actual data imports)
// const buttonLabels = [
//   { label: "Overview", icon: "mdi:information-outline" },
//   { label: "Itinerary", icon: "mdi:map-outline" },
//   { label: "Route Map", icon: "mdi:map-marker-path" },
//   { label: "Inclusions", icon: "mdi:check-circle-outline" },
//   { label: "Exclusions", icon: "mdi:close-circle-outline" },
//   { label: "Gallery", icon: "mdi:image-multiple-outline" },
//   { label: "Fixed Dates", icon: "mdi:calendar" },
//   { label: "Reviews", icon: "mdi:star-outline" },
// ];

const ItineraryData = [
  { day: "Day 1", description: "Arrive in Kathmandu" },
  { day: "Day 2", description: "Trek to Everest Base Camp" },
];

const Inclusion = [{ item: "Accommodation" }, { item: "Meals" }];

const Exclusion = [{ item: "Personal expenses" }, { item: "Travel insurance" }];

// Offset for ScrollLink (adjust as needed)
// const offset = -100;

function PackageDetail() {
  return (
    <main>
      <div className="md:py-[5rem] py-[2rem] w-full flex flex-col justify-center relative items-center gap-3 mx-auto">
        {/* Sticky navigation with gradient background */}
        {/* <div className="h-auto w-11/12 bg-gradient-to-r from-yellow-400 to-amber-500 gap-2 backdrop-blur-sm sticky top-[4.4rem] lg:top-[4.8rem] overflow-x-scroll left-0 flex font-medium items-center z-[3] rounded-md">
          <div className="w-full py-1 overflow-x-scroll flex gap-2 font-medium items-center">
            {buttonLabels.map((item, index) => (
              <ScrollLink
                key={index}
                activeClass="active"
                to={item.label.replace(/\s+/g, "-").toLowerCase()}
                smooth={true}
                duration={500}
                offset={offset}
                spy={true}
                className="cursor-pointer w-full flex items-center lg:justify-start justify-center gap-4 text-nowrap text-white hover:scale-105 duration-300 md:px-4 py-3 text-sm drop-shadow-md"
              >
                <Icon
                  icon={item.icon}
                  className="md:w-6 md:h-6 w-5 h-5 text-white"
                />
                <h2 className="lg:block hidden xl:text-sm lg:text-[10px] font-medium">
                  {item.label}
                </h2>
              </ScrollLink>
            ))}
          </div>
        </div> */}

        {/* Main content */}
        <div className="w-11/12 flex gap-2 justify-center">
          <div className="w-full lg:w-[75%] flex flex-col gap-2">
            {/* Overview */}
            <div
              id="overview"
              className="w-full mx-auto p-3 md:p-10 rounded-md border bg-primary-50/20"
            >
              <h2 className="text-2xl relative tracking-wider font-palker mb-6 text-secondary-500">
                Overview
              </h2>
              <Image
                src="https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlcmVzdHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Activities"
                width={1000}
                height={1000}
                className="mb-5 rounded-md"
              />
              <PackageOverview />
            </div>

            {/* Itinerary */}
            <div
              id="itinerary"
              className="w-full mx-auto p-3 md:p-10 border bg-primary-50/20 rounded-md"
            >
              <h2 className="text-2xl relative tracking-wider font-palker mb-6 text-secondary-500">
                Itinerary
              </h2>
              <div className="w-full h-full flex flex-col gap-2">
                {ItineraryData.map((item, index) => (
                  <Itenary key={index} index={index} item={item} />
                ))}
              </div>
            </div>

            {/* Route Map */}
            <div
              id="route-map"
              className="w-full mx-auto p-3 md:p-10 border bg-primary-50/20 rounded-md"
            >
              <h2 className="text-2xl relative tracking-wider font-palker mb-6 text-secondary-500">
                Route Map
              </h2>
              <Image
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full object-cover object-center max-h-[70vh] rounded-md my-4"
                alt="Route Map"
              />
            </div>

            {/* Inclusions */}
            <div
              id="inclusions"
              className="w-full mx-auto p-3 md:p-10 border bg-primary-50/20 rounded-md"
            >
              <h2 className="text-2xl relative tracking-wider font-palker mb-6 text-secondary-500">
                Inclusions
              </h2>
              <div className="w-full h-full flex flex-col gap-2">
                {Inclusion.map((item, index) => (
                  <PackageInclusion key={index} index={index} item={item} />
                ))}
              </div>
            </div>

            {/* Exclusions */}
            <div
              id="exclusions"
              className="w-full mx-auto p-3 md:p-10 border bg-primary-50/20 rounded-md"
            >
              <h2 className="text-2xl relative tracking-wider font-palker mb-6 text-secondary-500">
                Exclusions
              </h2>
              <div className="w-full h-full flex flex-col gap-2">
                {Exclusion.map((item, index) => (
                  <PackageExclusion key={index} index={index} item={item} />
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div
              id="gallery"
              className="w-full mx-auto p-3 md:p-10 border bg-primary-50/20 rounded-md"
            >
              <h2 className="text-2xl relative tracking-wider font-palker mb-6 text-secondary-500">
                Gallery
              </h2>
              <PackageGallery />
            </div>

            {/* Fixed Dates */}
            <div
              id="fixed-dates"
              className="w-full mx-auto p-3 md:p-10 bg-primary-50/20 border rounded-md"
            >
              <h2 className="text-2xl relative tracking-wider font-palker mb-6 text-secondary-500">
                Fixed Date
              </h2>
              <div className="w-full h-full flex flex-col gap-2">
                <div className="w-full py-5 overflow-x-auto px-3 lg:px-10">
                  <table className="w-full min-w-[600px] text-sm md:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-primary-400 h-[3rem] whitespace-nowrap text-left">
                        <th className="px-2 md:px-4">Date</th>
                        <th className="px-2 md:px-4">Days</th>
                        <th className="px-2 md:px-4">Status</th>
                        <th className="px-2 md:px-4">Price</th>
                        <th className="px-2 md:px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-primary-400 text-secondary-400 text-sm align-top">
                        <td className="px-2 md:px-4 py-4">
                          <div className="whitespace-nowrap">
                            <span className="font-semibold text-secondary-500">
                              Start:{" "}
                            </span>
                            2024-09-01
                          </div>
                          <div>
                            <span className="font-semibold text-secondary-500">
                              End:{" "}
                            </span>
                            2024-09-07
                          </div>
                        </td>
                        <td className="px-2 md:px-4 py-4 whitespace-nowrap">
                          45 days
                        </td>
                        <td className="px-2 md:px-4 py-4 whitespace-nowrap">
                          Booking Open
                        </td>
                        <td className="px-2 md:px-4 py-4">$499</td>
                        <td className="px-2 md:px-4 py-4 flex items-center justify-end">
                          <Link href="/booking">
                            <button className="py-2 whitespace-nowrap w-fit text-sm">
                              Book Now
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div
              id="reviews"
              className="w-full mx-auto p-3 md:p-10 border bg-primary-50/20 rounded-md"
            >
              <h2 className="text-2xl relative tracking-wider font-palker mb-6 text-secondary-500">
                Client Reviews
              </h2>
              <PackageReview />
            </div>
          </div>

          {/* Sticky pricing table */}
          {/* <div className="max-w-2xl h-fit sticky top-[9rem] mx-auto p-6 border bg-primary-50/20 rounded-md border-gray-200 lg:block hidden">
            <table className="w-full text-left border-collapse rounded-md overflow-hidden">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wide">
                    No. of Person
                  </th>
                  <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wide">
                    Price per PAX
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { persons: "1 - 1", price: "$350" },
                  { persons: "1 - 3", price: "$420" },
                  { persons: "1 - 5", price: "$500" },
                  { persons: "1 - 10", price: "$380" },
                  { persons: "1 - 20", price: "$300" },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                    } hover:bg-gray-300 transition-colors`}
                  >
                    <td className="py-3 px-6 text-black">{row.persons}</td>
                    <td className="py-3 px-6 text-black">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6">
              <ScrollLink
                to="fixed-dates"
                smooth={true}
                duration={500}
                offset={offset}
                className="cursor-pointer w-full flex items-center lg:justify-start justify-center gap-4 text-nowrap text-secondary-500 hover:scale-105 duration-300 text-sm"
              >
                <button className="w-full max-w-xs py-3 px-4 bg-black text-white font-semibold rounded-md hover:bg-sky-600 transition-colors">
                  View Dates
                </button>
              </ScrollLink>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default PackageDetail;

