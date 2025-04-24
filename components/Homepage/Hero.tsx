"use client";
import Image from "next/image";
import React from "react";

// Icons as SVG components to avoid external dependencies
const MapPinIcon = () => (
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

const StarIcon = () => (
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

const ChevronDownIcon = () => (
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
    className="text-gray-500 ml-2"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// Hero Section Component
const HeroSection = () => {
  // const [fromLocation, setFromLocation] = useState("Tansen");
  // const [toLocation, setToLocation] = useState("Kathmandu");

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Background with Bus Image */}
      <div className="relative  h-[60vh] bg-white">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div> */}
        <Image
          src="/heroimage.png"
          alt="Luxury bus in snowy landscape"
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="w-11/12 mx-auto absolute inset-0 z-20 flex flex-col justify-center p-8">
          <p className="text-orange-500 font-medium mb-2">
            Find your travel partner
          </p>
          <h1 className="text-4xl font-bold text-purple-800 mb-6">
            Book your bus seat now!
          </h1>

          {/* Ratings */}
          <div className="flex items-center mb-8">
            {/* User Avatars */}
            <div className="flex -space-x-3 mr-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                >
                  <Image
                    src="/avatar.jpg"
                    alt="User"
                    className="w-full h-full object-cover"
                    height={1000}
                    width={1000}
                  />
                </div>
              ))}
            </div>

            {/* Star Ratings */}
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
              <span className="ml-1 text-sm">5/5 Ratings</span>
            </div>

            {/* Payment Security Badges */}
            <div className="flex items-center gap-2">
              <Image
                src="/Payment/esewa1.jpeg"
                alt="User"
                className="w-10 h-10 object-cover"
                height={1000}
                width={1000}
              />

              <Image
                src="/Payment/khalti1.png"
                alt="User"
                className="w-10 h-10 object-cover"
                height={1000}
                width={1000}
              />
              <span className="text-sm text-gray-600">Secured Payment</span>
            </div>
          </div>

          {/* Booking Form */}
          <div className="flex flex-wrap gap-4 bg-white/10 p-3 w-fit rounded-md backdrop-blur-md">
            {/* From Location Selector */}
            <div className="bg-white rounded-md flex items-center p-2 w-64 shadow-sm">
              <MapPinIcon />
              <div className="flex flex-1 items-center justify-between ml-2">
                <span className="text-gray-700">From:</span>
                <div className="flex items-center">
                  <span className="font-medium">tansen</span>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* To Location Selector */}
            <div className="bg-white rounded-md flex items-center p-2 w-64 shadow-sm">
              <MapPinIcon />
              <div className="flex flex-1 items-center justify-between ml-2">
                <span className="text-gray-700">To:</span>
                <div className="flex items-center">
                  <span className="font-medium">Kathmandu</span>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
              onClick={() => console.log("Checking seat availability...")}
            >
              Check Seat Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
