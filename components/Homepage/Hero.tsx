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
    "Pokhara"
  ];

  // Popular route combinations
  const popularRoutes: PopularRoute[] = [
    { from: "Tansen", to: "Bairabhwa" },
    { from: "Tansen", to: "Kathmandu" },
    { from: "Kathmandu", to: "Tansen" },
    { from: "Bairabhwa", to: "Tansen" },
    { from: "Pokhara", to: "Tansen" }
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
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Background with Bus Image */}
      <div className="relative h-[100vh] bg-white">
        {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-800/40 to-primary-100/40 z-10"></div> */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/Vehivle/heroimage.png"
          alt="Luxury bus in mountain landscape"
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div className="w-11/12 max-w-4xl mx-auto">
            {/* Top Popular Routes */}
            <div className="mb-8 flex justify-center">
              <div className="px-6 py-4 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                <p className="text-white text-sm font-medium mb-3">Popular Routes:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {popularRoutes.map((route, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelectRoute(route.from, route.to)}
                      className="px-4 py-1.5 text-xs bg-purple-800/30 hover:bg-blue-600/10 text-white rounded-lg transition-all duration-300 border border-blue-400/30 shadow-sm"
                    >
                      {route.from} — {route.to}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center mb-8">
              <p className="text-white font-medium mb-3 tracking-wide">
                FIND YOUR TRAVEL PARTNER
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-shadow-lg">
                Book your bus seat now!
              </h1>
              <p className="text-blue-100 text-lg">Safe, comfortable, and affordable bus travel across Nepal</p>
            </div>

            {/* Booking Form */}
            <div className="bg-white/15 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                {/* From Location Selector */}
                <div className="relative flex-1">
                  <div 
                    className="bg-white/90 rounded-lg flex items-center p-4 cursor-pointer hover:bg-white transition-all duration-300 shadow-sm"
                    onClick={() => setShowFromDropdown(!showFromDropdown)}
                  >
                    <div className="text-primary-100">
                      <Icon icon="iconamoon:location-pin-fill" />
                    </div>
                    <div className="flex flex-1 items-center justify-between ml-3">
                      <span className="text-blue-800 text-sm font-medium">From:</span>
                      <div className="flex items-center">
                        <span className="font-semibold text-blue-900">{fromLocation}</span>
                        <div className="ml-2 text-blue-500">
                          <Icon icon="ChevronDown" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* From Dropdown */}
                  {showFromDropdown && (
                    <div className="absolute mt-2 w-full bg-white rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto border border-blue-100">
                      {routes.map((route, index) => (
                        <div 
                          key={index}
                          className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-blue-800 border-b border-blue-50 last:border-0"
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
                  <div className="hidden md:flex w-10 h-10 bg-primary-100 rounded-full text-white text-2xl items-center justify-center shadow-md">
                    <Icon icon="clarity:two-way-arrows-line" />
                  </div>
                </div>

                {/* To Location Selector */}
                <div className="relative flex-1">
                  <div 
                    className="bg-white/90 rounded-lg flex items-center p-4 cursor-pointer hover:bg-white transition-all duration-300 shadow-sm"
                    onClick={() => setShowToDropdown(!showToDropdown)}
                  >
                    <div className="text-primary-100">
                      <Icon icon="iconamoon:location-pin-fill" />
                    </div>
                    <div className="flex flex-1 items-center justify-between ml-3">
                      <span className="text-blue-800 text-sm font-medium">To:</span>
                      <div className="flex items-center">
                        <span className="font-semibold text-blue-900">{toLocation}</span>
                        <div className="ml-2 text-blue-500">
                          <Icon icon="ChevronDown" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* To Dropdown */}
                  {showToDropdown && (
                    <div className="absolute mt-2 w-full bg-white rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto border border-blue-100">
                      {routes.map((route, index) => (
                        <div 
                          key={index}
                          className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-blue-800 border-b border-blue-50 last:border-0"
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
                  <button
                    className="bg-primary-100 hover:bg-indigo-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0"
                  >
                    Check Seat Availability
                  </button>
                </Link>
              </div>

              {/* Ratings and Trust Indicators */}
              <div className="flex flex-wrap items-center justify-between mt-8 pt-6 border-t border-white/20">
                {/* User Avatars */}
                <div className="flex items-center">
                  <div className="flex -space-x-3 mr-4">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white overflow-hidden shadow-md"
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
                  <div className="text-white text-sm font-medium">+2K satisfied travelers</div>
                </div>

                {/* Star Ratings */}
                <div className="flex items-center mt-3 md:mt-0">
                  <div className="flex items-center mr-5">
                    <div className="flex text-yellow-300">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} icon="fluent-color:star-24" />
                      ))}
                    </div>
                    <span className="ml-2 text-white text-sm font-medium">5/5 Ratings</span>
                  </div>

                  {/* Payment Security */}
                  <div className="flex items-center gap-3 bg-white/20 px-3 py-1.5 rounded-lg">
                    <Image
                      src="/Payment/esewa1.jpeg"
                      alt="eSewa"
                      className="w-8 h-8 object-cover rounded shadow-sm"
                      height={100}
                      width={100}
                    />
                    <Image
                      src="/Payment/khalti1.png"
                      alt="Khalti"
                      className="w-8 h-8 object-cover rounded shadow-sm"
                      height={100}
                      width={100}
                    />
                    <span className="text-xs text-white font-medium">Secured Payment</span>
                  </div>
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