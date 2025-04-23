"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Define the seat SVG as a reusable component
const SeatIcon = ({ isSelected, isHovered }: { isSelected: boolean; isHovered: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    className={`transition-colors duration-200 ${
      isSelected ? 'fill-primary-100 stroke-primary-100' : isHovered ? 'fill-green-500 stroke-green-500' : 'fill-gray-300 stroke-gray-300'
    }`}
  >
    <g clipPath="url(#clip0_26_557)">
      <path d="M8.40015 3.6445H24.6003C24.9481 3.64465 25.3194 3.82531 25.6296 4.17966C25.8998 4.48836 26.1029 4.90858 26.1775 5.38083L26.2009 5.58591L26.2019 5.58688L27.2517 18.9267C27.2938 19.4868 27.1528 19.969 26.9216 20.2978C26.6936 20.622 26.3866 20.791 26.0496 20.791H6.94995C6.61288 20.791 6.30588 20.622 6.07788 20.2978C5.8467 19.969 5.70668 19.4868 5.74878 18.9267L6.79858 5.58688V5.58591C6.84058 5.03073 7.06121 4.53235 7.36987 4.17966C7.68023 3.82506 8.05224 3.6445 8.40015 3.6445Z" stroke="inherit"/>
      <path d="M24.7 26.1947V30.2445H22.7V26.1947H24.7ZM10.2996 26.1947V30.2445H8.29956V26.1947H10.2996ZM27.5496 15.9945V18.9945H25.5496V15.9945H27.5496ZM7.44995 15.9945V18.9945H5.44995V15.9945H7.44995Z" stroke="inherit"/>
      <path d="M12.5498 3.54449H20.4004C21.0885 3.54478 21.7266 4.25768 21.5557 5.36871L21.5537 5.38629L20.7031 12.6871C20.6411 13.2243 20.3915 13.726 20.0488 14.0894C19.7025 14.4567 19.3008 14.644 18.9502 14.6441H14.0498C13.3254 14.644 12.5339 13.9594 12.3301 12.9048L12.2969 12.689L12.2959 12.6832L11.3965 5.38336C11.3349 4.84209 11.4631 4.36684 11.6875 4.03961C11.9097 3.71574 12.2153 3.54455 12.5498 3.54449Z" stroke="inherit"/>
      <path d="M12 29.6945C11.9 29.4445 11.6 29.1945 11.35 29.1945H7.35004C7.05004 29.1945 6.80004 29.3945 6.70004 29.6945L5.95004 31.7445C5.85004 31.9945 6.00004 32.2445 6.30004 32.2445H12.3C12.6 32.2445 12.75 32.0445 12.65 31.7445L12 29.6945ZM27.05 31.7445L26.35 29.6945C26.25 29.4445 25.95 29.1945 25.7 29.1945H21.7C21.4 29.1945 21.15 29.3945 21.05 29.6945L20.35 31.7445C20.25 31.9945 20.4 32.2445 20.7 32.2445H26.7C26.95 32.2445 27.1 32.0445 27.05 31.7445Z" fill="inherit"/>
      <path d="M23.6 3.24451C23.6 4.34451 22.75 5.24451 21.7 5.24451H11.25C10.2 5.24451 9.35001 4.34451 9.35001 3.24451V2.24451C9.35001 1.14451 10.2 0.244507 11.25 0.244507H21.7C22.75 0.244507 23.6 1.14451 23.6 2.24451V3.24451ZM8.25001 14.8445L8.10001 13.7945C8.00001 13.2445 7.55001 12.7945 7.05001 12.7945H5.70001C5.20001 12.7945 4.75001 13.2445 4.65001 13.7945L4.50001 14.8445C4.40001 15.3945 4.75001 15.8445 5.25001 15.8445H7.50001C8.00001 15.8445 8.35001 15.3945 8.25001 14.8445ZM28.4 14.8445L28.25 13.7945C28.15 13.2445 27.7 12.7945 27.2 12.7945H25.85C25.35 12.7945 24.9 13.2445 24.8 13.7945L24.65 14.8445C24.55 15.3945 24.9 15.8445 25.4 15.8445H27.65C28.15 15.8445 28.45 15.3945 28.4 14.8445ZM26.25 18.2445H6.75001C5.20001 18.2445 4.25001 19.7445 4.55001 21.5945L4.75001 22.8945C5.05001 24.7445 6.60001 26.2445 8.10001 26.2445H24.8C26.35 26.2445 27.85 24.7445 28.15 22.8945L28.4 21.5945C28.75 19.7945 27.75 18.2445 26.25 18.2445Z" fill="inherit"/>
    </g>
    <defs>
      <clipPath id="clip0_26_557">
        <rect width="32" height="32" fill="white" transform="translate(0.5 0.244507)"/>
      </clipPath>
    </defs>
  </svg>
);

export default function Booking() {
  // State for selected seats
  const [selectedSeats, setSelectedSeats] = useState<string[]>(['Seat A', 'Seat B']);
  const [hoveredSeat, setHoveredSeat] = useState<string | null>(null);

  // Generate seats dynamically (e.g., 20 seats, split into two sections)
  const totalSeats = 20;
  const seatsPerColumn = totalSeats / 2; // 10 seats per column
  const seatsLeft = Array.from({ length: seatsPerColumn }, (_, i) => `Seat ${String.fromCharCode(65 + i)}`);
  const seatsRight = Array.from({ length: seatsPerColumn }, (_, i) => `Seat ${String.fromCharCode(65 + seatsPerColumn + i)}`);

  // Handle seat selection (toggle)
  const toggleSeat = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="h-[40vh] relative">
        <Image
          src="/herobg.png"
          alt="Scenic background with mountains and lake"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Main Content */}
      <div className="w-11/12 mx-auto px-4 py-8 -mt-20">
        {/* Back Link and Heading */}
        <div className="flex justify-between items-center bg-[#FFF5EF] rounded-lg p-4 mb-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800 text-sm">
            ← back
          </Link>
          <h2 className="text-xl font-semibold text-[#F5A623]">Booking Information</h2>
        </div>

        {/* Booking Information Section */}
        <div className="bg-transparent">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Form */}
            <div className="lg:w-1/3 rounded-lg p-6 shadow-md">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    value="Someone Neupane"
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-zinc-400 text-gray-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    value="someone@gmail.com"
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-zinc-400 text-gray-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                  <input
                    type="tel"
                    value="+977-9749761111"
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-zinc-400 text-gray-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
                  <input
                    type="text"
                    value="Tansen"
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-zinc-400 text-gray-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Note:</label>
                  <textarea
                    placeholder="Write Something"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-zinc-400 text-gray-600 focus:outline-none resize-none h-24"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="save-card"
                    defaultChecked
                    className="h-4 w-4 text-primary-100 border-gray-300 rounded focus:ring-primary-100"
                  />
                  <label htmlFor="save-card" className="ml-2 text-sm text-[#F5A623]">
                    Save card for future checkouts
                  </label>
                </div>
              </div>
            </div>

            {/* Middle: Seat Selection */}
            <div className="lg:w-1/3 flex flex-col items-center">
              {selectedSeats.map((seat) => (
                <span key={seat} className="text-sm font-medium text-gray-600 mb-2">
                  {seat}
                </span>
              ))}
              <div className="flex gap-4 p-4 bg-zinc-400 rounded-lg shadow-md">
                {/* Left Column */}
                <div className="grid grid-cols-1 gap-4">
                  {seatsLeft.map((seat) => (
                    <button
                      key={seat}
                      onClick={() => toggleSeat(seat)}
                      onMouseEnter={() => setHoveredSeat(seat)}
                      onMouseLeave={() => setHoveredSeat(null)}
                      className="focus:outline-none"
                    >
                      <SeatIcon
                        isSelected={selectedSeats.includes(seat)}
                        isHovered={hoveredSeat === seat}
                      />
                    </button>
                  ))}
                </div>
                {/* Right Column */}
                <div className="grid grid-cols-1 gap-4">
                  {seatsRight.map((seat) => (
                    <button
                      key={seat}
                      onClick={() => toggleSeat(seat)}
                      onMouseEnter={() => setHoveredSeat(seat)}
                      onMouseLeave={() => setHoveredSeat(null)}
                      className="focus:outline-none"
                    >
                      <SeatIcon
                        isSelected={selectedSeats.includes(seat)}
                        isHovered={hoveredSeat === seat}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:w-1/3 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Tour:</span>
                  <span className="font-medium">Tansen Holidays</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium">9.Apr.2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium">9:30Am</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">4hrs, 10mins</span>
                </div>
                <div className="flex justify-between">
                  <span>Ticket:</span>
                  <span className="font-medium">RS. 1,080</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium">RS. 1,080</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount (10%):</span>
                  <span className="font-medium">RS. 108</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold text-gray-800">Total:</span>
                  <span className="font-semibold text-gray-800">RS. 972</span>
                </div>
              </div>
              <button className="w-full mt-6 px-4 py-2 bg-primary-100 text-white rounded-md hover:bg-opacity-90 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}