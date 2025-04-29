"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Define route type
type RouteLocation = string;

// Define popular route type
interface PopularRoute {
  from: RouteLocation;
  to: RouteLocation;
}

const HeroSection = () => {
  // Available routes
  const routes: RouteLocation[] = [
    "Tansen",
    "Kathmandu",
    "Bairabhwa",
    "Pokhara",
  ];

  // Popular route combinations
  const popularRoutes: PopularRoute[] = [
    { from: "Tansen", to: "Bairabhwa" },
    { from: "Tansen", to: "Kathmandu" },
    { from: "Kathmandu", to: "Tansen" },
    { from: "Bairabhwa", to: "Tansen" },
    { from: "Pokhara", to: "Tansen" },
  ];

  const [fromLocation, setFromLocation] = useState<RouteLocation>("Tansen");
  const [toLocation, setToLocation] = useState<RouteLocation>("Kathmandu");
  const [showFromDropdown, setShowFromDropdown] = useState<boolean>(false);
  const [showToDropdown, setShowToDropdown] = useState<boolean>(false);

  // Handle selecting the complete route
  const handleSelectRoute = (from: RouteLocation, to: RouteLocation): void => {
    setFromLocation(from);
    setToLocation(to);
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="relative h-[80vh]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/Vehivle/heroimage.png"
          alt="Luxury bus in mountain landscape"
          height={1000}
          width={1000}
          className="w-full h-full object-cover object-center"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div className="w-11/12 max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <p className="text-white font-medium mb-2 tracking-wide text-sm">
              FIND YOUR TRAVEL PARTNER
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Book your bus seat now!
            </h1>
            <p className="text-blue-100 text-base">
              Safe, comfortable, and affordable bus travel across Nepal
            </p>

            {/* Top Popular Routes */}
            <div className="mt-6 flex justify-center">
              <div className="px-4 py-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                <p className="text-white text-xs font-medium mb-2">
                  Popular Routes:
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {popularRoutes.map((route, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelectRoute(route.from, route.to)}
                      className="px-3 py-1 text-xs bg-purple-800/30 hover:bg-blue-600/10 text-white rounded-lg transition-all duration-300 border border-blue-400/30"
                    >
                      {route.from} — {route.to}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto -mt-16 relative z-30">
          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4">
              {/* From Location Selector */}
              <div className="relative flex-1">
                <div
                  className="bg-gray-50 rounded-lg flex items-center p-3 cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                  onClick={() => setShowFromDropdown(!showFromDropdown)}
                >
                  <div className="text-primary-100">
                    <Icon icon="iconamoon:location-pin-fill" />
                  </div>
                  <div className="flex flex-1 items-center justify-between ml-2">
                    <span className="text-blue-800 text-xs font-medium">
                      From:
                    </span>
                    <div className="flex items-center">
                      <span className="font-semibold text-blue-900 text-sm">
                        {fromLocation}
                      </span>
                      <div className="ml-2 text-blue-500">
                        <Icon icon="ChevronDown" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* From Dropdown */}
                {showFromDropdown && (
                  <div className="absolute mt-1 w-full bg-white rounded-lg shadow-xl z-50 max-h-40 overflow-y-auto border border-gray-200">
                    {routes.map((route, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-blue-800 border-b border-gray-100 text-sm last:border-0"
                        onClick={() => {
                          setFromLocation(route);
                          setShowFromDropdown(false);
                        }}
                      >
                        {route}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Arrow icon for direction */}
              <div className="flex items-center justify-center">
                <div className="hidden md:flex w-8 h-8 bg-primary-100 rounded-full text-white text-lg items-center justify-center shadow-md">
                  <Icon icon="clarity:two-way-arrows-line" />
                </div>
              </div>

              {/* To Location Selector */}
              <div className="relative flex-1">
                <div
                  className="bg-gray-50 rounded-lg flex items-center p-3 cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                  onClick={() => setShowToDropdown(!showToDropdown)}
                >
                  <div className="text-primary-100">
                    <Icon icon="iconamoon:location-pin-fill" />
                  </div>
                  <div className="flex flex-1 items-center justify-between ml-2">
                    <span className="text-blue-800 text-xs font-medium">
                      To:
                    </span>
                    <div className="flex items-center">
                      <span className="font-semibold text-blue-900 text-sm">
                        {toLocation}
                      </span>
                      <div className="ml-2 text-blue-500">
                        <Icon icon="ChevronDown" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* To Dropdown */}
                {showToDropdown && (
                  <div className="absolute mt-1 w-full bg-white rounded-lg shadow-xl z-50 max-h-40 overflow-y-auto border border-gray-200">
                    {routes.map((route, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-blue-800 border-b border-gray-100 text-sm last:border-0"
                        onClick={() => {
                          setToLocation(route);
                          setShowToDropdown(false);
                        }}
                      >
                        {route}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Call to Action Button */}
              <Link href="/booking">
                <button className="bg-primary-100 hover:bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0 text-sm">
                  Check Seat Availability
                </button>
              </Link>
            </div>

            {/* Ratings and Trust Indicators */}
            <div className="flex flex-wrap items-center justify-between mt-6 pt-4 border-t border-gray-100">
              {/* User Avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white overflow-hidden shadow-sm"
                    >
                      <Image
                        src="/avatar.jpg"
                        alt="User"
                        className="w-full h-full object-cover"
                        height={100}
                        width={100}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-gray-600 text-xs font-medium">
                  +2K satisfied travelers
                </div>
              </div>

              {/* Star Ratings */}
              <div className="flex items-center mt-2 md:mt-0">
                <div className="flex items-center mr-4">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} icon="fluent-color:star-24" />
                    ))}
                  </div>
                  <span className="ml-1 text-gray-600 text-xs font-medium">
                    5/5 Ratings
                  </span>
                </div>

                {/* Payment Security */}
                <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                  <Image
                    src="/Payment/esewa1.jpeg"
                    alt="eSewa"
                    className="w-6 h-6 object-cover rounded shadow-sm"
                    height={100}
                    width={100}
                  />
                  <Image
                    src="/Payment/khalti1.png"
                    alt="Khalti"
                    className="w-6 h-6 object-cover rounded shadow-sm"
                    height={100}
                    width={100}
                  />
                  <span className="text-xs text-gray-600 font-medium">
                    Secured Payment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
