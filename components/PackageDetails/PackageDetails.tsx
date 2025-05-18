"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { Icon } from "@iconify/react/dist/iconify.js";
import PackageOverview from "@/components/PackageDetails/Overview";
import Itenary from "@/components/PackageDetails/Itinerary";
import PackageInclusion from "@/components/PackageDetails/Inclusion";
import PackageExclusion from "@/components/PackageDetails/Exclusion";
import PackageGallery from "@/components/PackageDetails/Gallery";
import Link from "next/link";
import PackageReview from "@/components/PackageDetails/Review";

// Mock data (replace with actual data imports)
const buttonLabels = [
  { label: "Overview", icon: "mdi:information-outline" },
  { label: "Itinerary", icon: "mdi:map-outline" },
  // { label: "Route Map", icon: "mdi:map-marker-path" },
  { label: "Inclusions", icon: "mdi:check-circle-outline" },
  { label: "Exclusions", icon: "mdi:close-circle-outline" },
  { label: "Gallery", icon: "mdi:image-multiple-outline" },
  { label: "Fixed Dates", icon: "mdi:calendar" },
  { label: "Reviews", icon: "mdi:star-outline" },
];

const ItineraryData = [
  { day: "Day 1", description: "Arrive in Kathmandu" },
  { day: "Day 2", description: "Drive to Muktinath" },
  {
    day: "Day 3",
    description: "Drive to Muktinath kjbdfvie jsbdfbcedjdbsofjc  ieubfjb iubfb",
  },
  {
    day: "Day 4",
    description: "Drive to Muktinath kjbdfvie jsbdfbcedjdbsofjc  ieubfjb iubfb",
  },
  {
    day: "Day 5",
    description: "Drive to Muktinath kjbdfvie jsbdfbcedjdbsofjc  ieubfjb iubfb",
  },
  {
    day: "Day 6",
    description:
      "Drive to Muktinath kjbdfvie jsbdfbcedjdbsofjc  ieubfjb iubfb jkbfre iwepfibn nwiehfnier iwhpefnc wiehfner iphwfne epiehfnerk eioerfhniev epihfio",
  },
  {
    day: "Day 7",
    description: "Drive to Muktinath kjbdfvie jsbdfbcedjdbsofjc  ieubfjb iubfb",
  },
  {
    day: "Day 8",
    description: "Drive to Muktinath kjbdfvie jsbdfbcedjdbsofjc  ieubfjb iubfb",
  },
];

const Inclusion = [{ item: "Accommodation" }, { item: "Meals" }];

const Exclusion = [{ item: "Personal expenses" }, { item: "Travel insurance" }];

// Offset for ScrollLink
const offset = -100;

function PackageDetail() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <main className="bg-gray-50">
      <div className="max-w-11/12 mx-auto md:py-20 py-8 px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="mb-8 relative rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1619463206719-f87a692cdd7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzdGFuZyUyMG5lcGFsfGVufDB8fDB8fHww"
            alt="Everest Trek"
            width={1200}
            height={600}
            className="w-full h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
            <h1 className="text-4xl font-bold text-white mb-2">Mustang Tour</h1>
            <div className="flex items-center gap-4 text-white">
              <span className="flex items-center gap-1">
                <Icon icon="mdi:clock-outline" className="w-5 h-5" />
                14 days
              </span>
              <span className="flex items-center gap-1">
                <Icon icon="mdi:map-marker" className="w-5 h-5" />
                Nepal
              </span>
              <span className="flex items-center gap-1">
                <Icon icon="mdi:currency-usd" className="w-5 h-5" />
                From $499
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="sticky top-[4.55rem] z-10 bg-white shadow-md rounded-lg mb-8">
          <div className="flex justify-between overflow-x-auto scrollbar-hide">
            {buttonLabels.map((item) => (
              <ScrollLink
                key={item.label}
                activeClass="active"
                to={item.label.replace(/\s+/g, "-").toLowerCase()}
                smooth={true}
                duration={500}
                offset={offset}
                spy={true}
                onSetActive={() =>
                  setActiveSection(
                    item.label.replace(/\s+/g, "-").toLowerCase()
                  )
                }
                className={`flex items-center  gap-2 px-4 py-4 whitespace-nowrap transition-all ${
                  activeSection ===
                  item.label.replace(/\s+/g, "-").toLowerCase()
                    ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                <Icon icon={item.icon} className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </ScrollLink>
            ))}
          </div>
        </div>

        {/* Main content + Sidebar layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Overview */}
            <section
              id="overview"
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon
                    icon="mdi:information-outline"
                    className="w-6 h-6 mr-2 text-blue-600"
                  />
                  Overview
                </h2>
                <PackageOverview />
              </div>
            </section>

            {/* Itinerary */}
            <section
              id="itinerary"
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon
                    icon="mdi:map-outline"
                    className="w-6 h-6 mr-2 text-blue-600"
                  />
                  Itinerary
                </h2>
                <div className="space-y-4">
                  {ItineraryData.map((item, index) => (
                    <Itenary key={index} index={index} item={item} />
                  ))}
                </div>
              </div>
            </section>

            {/* Route Map */}
            {/* <section
              id="route-map"
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon icon="mdi:map-marker-path" className="w-6 h-6 mr-2 text-blue-600" />
                  Route Map
                </h2>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    width={1000}
                    height={600}
                    src="https://images.unsplash.com/photo-1540876508220-988a11575ed6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzdGFuZyUyMG5lcGFsfGVufDB8fDB8fHww"
                    className="w-full object-cover h-80"
                    alt="Route Map"
                  />
                </div>
              </div>
            </section> */}

            {/* Inclusions */}
            <section
              id="inclusions"
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon
                    icon="mdi:check-circle-outline"
                    className="w-6 h-6 mr-2 text-blue-600"
                  />
                  Inclusions
                </h2>
                <div className="space-y-2">
                  {Inclusion.map((item, index) => (
                    <PackageInclusion key={index} index={index} item={item} />
                  ))}
                </div>
              </div>
            </section>

            {/* Exclusions */}
            <section
              id="exclusions"
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon
                    icon="mdi:close-circle-outline"
                    className="w-6 h-6 mr-2 text-blue-600"
                  />
                  Exclusions
                </h2>
                <div className="space-y-2">
                  {Exclusion.map((item, index) => (
                    <PackageExclusion key={index} index={index} item={item} />
                  ))}
                </div>
              </div>
            </section>

            {/* Gallery */}
            <section
              id="gallery"
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon
                    icon="mdi:image-multiple-outline"
                    className="w-6 h-6 mr-2 text-blue-600"
                  />
                  Gallery
                </h2>
                <PackageGallery />
              </div>
            </section>

            {/* Fixed Dates */}
            <section
              id="fixed-dates"
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon
                    icon="mdi:calendar"
                    className="w-6 h-6 mr-2 text-blue-600"
                  />
                  Fixed Dates
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50">
                      <tr className="text-gray-600">
                        <th className="px-4 py-3 font-medium">Date</th>
                        <th className="px-4 py-3 font-medium">Duration</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                        <th className="px-4 py-3 font-medium">Price</th>
                        <th className="px-4 py-3 font-medium text-right">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <div className="font-medium">Sep 1 - Sep 7, 2024</div>
                        </td>
                        <td className="px-4 py-4">45 days</td>
                        <td className="px-4 py-4">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Booking Open
                          </span>
                        </td>
                        <td className="px-4 py-4 font-medium">$499</td>
                        <td className="px-4 py-4 text-right">
                          <Link href="/booking">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                              Book Now
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section
              id="reviews"
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon
                    icon="mdi:star-outline"
                    className="w-6 h-6 mr-2 text-blue-600"
                  />
                  Client Reviews
                </h2>
                <PackageReview />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pricing
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">1 person</span>
                    <span className="font-medium text-gray-900">$350</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">1 - 3 persons</span>
                    <span className="font-medium text-gray-900">$420</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">1 - 5 persons</span>
                    <span className="font-medium text-gray-900">$500</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">1 - 10 persons</span>
                    <span className="font-medium text-gray-900">$380</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">1 - 20 persons</span>
                    <span className="font-medium text-gray-900">$300</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  <Link href="/booking">
                    <button className="w-full bg-purple-800 hover:bg-primary-100 text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center gap-2">
                      <Icon icon="mdi:check" className="w-5 h-5" />
                      Book This Trip
                    </button>
                  </Link>

                  <ScrollLink
                    to="fixed-dates"
                    smooth={true}
                    duration={500}
                    offset={offset}
                    className="cursor-pointer w-full"
                  >
                    <button className="w-full border border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center gap-2">
                      <Icon icon="mdi:calendar" className="w-5 h-5" />
                      View Available Dates
                    </button>
                  </ScrollLink>
                </div>

                <div className="mt-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                      <Icon
                        icon="mdi:help-circle-outline"
                        className="w-5 h-5"
                      />
                      Need Help?
                    </h4>
                    <p className="text-sm text-blue-700 mb-3">
                      Our travel experts are available 24/7 to assist you with
                      your booking.
                    </p>
                    <button className="flex items-center gap-2 text-blue-700 font-medium text-sm">
                      <Icon icon="mdi:phone" className="w-4 h-4" />
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PackageDetail;
