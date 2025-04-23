// /app/check-seat/[id]/ClientBooking.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SeatIcon from "@/components/SeatIcon";

// Bus interface
interface Bus {
  id: number;
  operator: string;
  type: string;
  date: string;
  departureTime: string;
  duration: string;
  price: string;
  rating: number;
  ratingCount: number;
  liveTracking: boolean;
  seatsLeft: number;
  windowSeats: number;
}

interface ClientBookingProps {
  bus: Bus;
}

export default function ClientBooking({ bus }: ClientBookingProps) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [hoveredSeat, setHoveredSeat] = useState<string | null>(null);

  // Generate seats (20 seats, 10 per column)
  const seatsPerColumn = 10;
  const seatsLeft = Array.from(
    { length: seatsPerColumn },
    (_, i) => `Seat ${String.fromCharCode(65 + i)}`
  );
  const seatsRight = Array.from(
    { length: seatsPerColumn },
    (_, i) => `Seat ${String.fromCharCode(65 + seatsPerColumn + i)}`
  );

  // Toggle seat selection
  const toggleSeat = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  // Calculate total
  const ticketPrice = parseInt(bus.price.replace("RS. ", "").replace(",", ""));
  const discount = 10;
  const total = ticketPrice - discount;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-[80vh] relative">
        <Image
          src="/herobg.png"
          alt="Scenic background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Main Content */}
      <div className="w-11/12 mx-auto px-4 py-8">
        {/* Back Link and Heading */}
        <div className="flex justify-between items-center bg-[#FFF2ED] rounded-xl p-4 mb-6">
          <Link
            href="/booking"
            className="text-gray-600 hover:text-gray-800 text-sm"
          >
            back
          </Link>
          <h2 className="text-xl font-semibold text-[#F5A623]">
            Booking Information
          </h2>
        </div>

        {/* Booking Information Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Form */}
          <div className="lg:w-1/3 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value="Someone Neupane"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#F4F4F4] text-gray-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value="someone@gmail.com"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#F4F4F4] text-gray-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value="+977-9749761111"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#F4F4F4] text-gray-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value="Tansen"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#F4F4F4] text-gray-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Note:
                </label>
                <textarea
                  placeholder="Write Something"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#F4F4F4] text-gray-600 focus:outline-none resize-none h-24"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="save-card"
                  defaultChecked
                  className="h-4 w-4 text-[#F5A623] border-gray-300 rounded focus:ring-[#F5A623]"
                />
                <label
                  htmlFor="save-card"
                  className="ml-2 text-sm text-[#F5A623]"
                >
                  Save card for future checkouts
                </label>
              </div>
            </div>
          </div>

          {/* Middle: Seat Selection */}
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="flex gap-4 p-4">
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
          <div className="lg:w-1/3 p-6">
            <div className="rounded-lg bg-[#f4f4f4] border border-[#d2d2d2] p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="border-t border-[#d2d2d2] pt-3">
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <p className="text-gray-500">Tour:</p>
                  <p className="text-purple-800 font-medium text-right">
                    {bus.operator}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <p className="text-gray-500">Date:</p>
                  <p className="text-purple-800 font-medium text-right">
                    {bus.date}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <p className="text-gray-500">Time:</p>
                  <p className="text-purple-800 font-medium text-right">
                    {bus.departureTime} AM
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <p className="text-gray-500">Duration:</p>
                  <p className="text-purple-800 font-medium text-right">
                    {bus.duration}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 border-b border-[#d2d2d2]">
                  <p className="text-gray-500">Ticket:</p>
                  <p className="text-purple-800 font-medium text-right">
                    {bus.price}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 border-b border-[#d2d2d2]">
                  <p className="text-gray-500">Subtotal:</p>
                  <p className="text-purple-800 font-medium text-right">
                    {bus.price}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 border-b border-[#d2d2d2]">
                  <p className="text-gray-500">Discount:</p>
                  <p className="text-purple-800 font-medium text-right">
                    RS. {discount}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <p className="text-gray-500 font-medium">Total:</p>
                  <p className="text-orange-500 font-bold text-right">
                    RS. {total}
                  </p>
                </div>
              </div>
              <Link href={`/check-out/${bus.id}`}>
                <button className="w-full bg-purple-800 text-white py-2 rounded-md hover:bg-purple-900 transition-colors mt-4">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
