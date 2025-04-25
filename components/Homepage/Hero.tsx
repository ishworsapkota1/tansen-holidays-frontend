"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MapPinIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-500"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const StarIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-yellow-400"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const ChevronDownIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-500 ml-1"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

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
      <div className="relative h-[85vh] bg-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/heroimage.png"
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
              <div className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-lg">
                <p className="text-white text-sm font-medium mb-2">Popular Routes:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {popularRoutes.map((route, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelectRoute(route.from, route.to)}
                      className="px-3 py-1 text-xs bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
                    >
                      {route.from} — {route.to}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center mb-6">
              <p className="text-orange-400 font-medium mb-2">
                Find your travel partner
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Book your bus seat now!
              </h1>
              <p className="text-white/80">Safe, comfortable, and affordable bus travel across Nepal</p>
            </div>

            {/* Booking Form */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                {/* From Location Selector */}
                <div className="relative flex-1">
                  <div 
                    className="bg-white rounded-md flex items-center p-3 cursor-pointer"
                    onClick={() => setShowFromDropdown(!showFromDropdown)}
                  >
                    <MapPinIcon />
                    <div className="flex flex-1 items-center justify-between ml-2">
                      <span className="text-gray-500 text-sm">From:</span>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-800">{fromLocation}</span>
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>
                  
                  {/* From Dropdown */}
                  {showFromDropdown && (
                    <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                      {routes.map((route, index) => (
                        <div 
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
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
                  <div className="hidden md:flex w-8 h-8 bg-orange-500 rounded-full items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* To Location Selector */}
                <div className="relative flex-1">
                  <div 
                    className="bg-white rounded-md flex items-center p-3 cursor-pointer"
                    onClick={() => setShowToDropdown(!showToDropdown)}
                  >
                    <MapPinIcon />
                    <div className="flex flex-1 items-center justify-between ml-2">
                      <span className="text-gray-500 text-sm">To:</span>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-800">{toLocation}</span>
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>
                  
                  {/* To Dropdown */}
                  {showToDropdown && (
                    <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                      {routes.map((route, index) => (
                        <div 
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
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
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex-shrink-0"
                >
                  Check Seat Availability
                </button>
                </Link>
              </div>

              {/* Ratings and Trust Indicators */}
              <div className="flex flex-wrap items-center justify-between mt-6 pt-4 border-t border-white/20">
                {/* User Avatars */}
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
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
                  <div className="text-white text-sm">+2K satisfied travelers</div>
                </div>

                {/* Star Ratings */}
                <div className="flex items-center mt-2 md:mt-0">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                    <span className="ml-1 text-white text-sm">5/5 Ratings</span>
                  </div>

                  {/* Payment Security */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Payment/esewa1.jpeg"
                      alt="eSewa"
                      className="w-8 h-8 object-cover rounded"
                      height={100}
                      width={100}
                    />
                    <Image
                      src="/Payment/khalti1.png"
                      alt="Khalti"
                      className="w-8 h-8 object-cover rounded"
                      height={100}
                      width={100}
                    />
                    <span className="text-xs text-white">Secured Payment</span>
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