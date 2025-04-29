"use client";
import { useState } from "react";
import Link from "next/link";
import { buses } from "@/data/buses";

// Define types for bus data
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

// Props type for BusCard
interface BusCardProps {
  bus: Bus;
}

// Navigation categories
const navCategories = [
  { id: "policies", label: "Policies" },
  { id: "amenities", label: "Amenities" },
  { id: "photos", label: "Photos" },
  { id: "reviews", label: "Reviews" },
  { id: "pickups", label: "Pickups & Drops" },
];

// Policy options
const policyOptions = [
  { id: "cancellation", label: "Cancellation" },
  { id: "child", label: "Child Passenger" },
  { id: "luggage", label: "Luggage" },
  { id: "pets", label: "Pets" },
  { id: "liquor", label: "Liquor" },
  { id: "pickup", label: "Pickup Time" },
];

const Amenities = [
  { icon: "fa6-solid:bottle-water", item: "Water Bottle" },
  { icon: "🛜", item: "WiFi" },
  { icon: "🔌", item: "Charging Point" },
  { icon: "🛌", item: "Blanket" },
  { icon: "💡", item: "Reading Light" },
];

const BusCard = ({ bus }: BusCardProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  // Toggle category
  const toggleCategory = (categoryId: string) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
      setActivePolicy(null);
    } else {
      setActiveCategory(categoryId);
      setActivePolicy(categoryId === "policies" ? "cancellation" : null);
    }
  };

  // Toggle policy
  const togglePolicy = (policyId: string) => {
    setActivePolicy(activePolicy === policyId ? null : policyId);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Bus info */}
      <div className="p-4">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800">
                {bus.operator}
              </h3>
              <p className="text-sm text-gray-500">{bus.type}</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-medium">{bus.departureTime} AM</div>
            </div>
            <div className="text-gray-400 text-sm">{bus.duration}</div>
            <div className="text-center">
              <div className="text-lg font-medium">{bus.date}</div>
            </div>
            <div className="text-2xl font-bold text-purple-800">
              Rs {bus.price}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <span className="bg-gradient-to-r from-[#F9D802] to-[#FFAE00] text-white px-2 py-0.5 rounded text-sm flex items-center">
                  <span>{bus.rating}</span>
                  <span className="ml-1">★</span>
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  {bus.ratingCount} Ratings
                </span>
              </div>
              {bus.liveTracking && (
                <span className="flex items-center text-sm text-gray-600">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-1"></span>
                  Live Tracking
                </span>
              )}
            </div>
            <div className="text-sm text-gray-600">
              {bus.seatsLeft} Seats Left | {bus.windowSeats} Window Seats
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200"></div>

      {/* Categories */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {navCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <Link href={`/check-seat/${bus.id}`}>
            <button className="bg-purple-800 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-medium transition-colors">
              SELECT SEATS
            </button>
          </Link>
        </div>

        {/* Category content */}
        {activeCategory && (
          <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4 transition-all">
            {activeCategory === "policies" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {policyOptions.map((policy) => (
                    <button
                      key={policy.id}
                      onClick={() => togglePolicy(policy.id)}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                        activePolicy === policy.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {policy.label}
                    </button>
                  ))}
                </div>
                {activePolicy === "cancellation" && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-medium text-gray-800">
                        Cancellation Policy
                      </h4>
                      <span className="text-xs text-blue-500">
                        before departure
                      </span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">
                              Cancellation Time
                            </th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">
                              Penalty %
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 px-4 text-sm text-gray-600">
                              more than 168 hrs
                            </td>
                            <td className="py-2 px-4 text-sm text-gray-600">
                              15%
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 px-4 text-sm text-gray-600">
                              72 to 168 hr(s)
                            </td>
                            <td className="py-2 px-4 text-sm text-gray-600">
                              15%
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 px-4 text-sm text-gray-600">
                              24 to 72 hr(s)
                            </td>
                            <td className="py-2 px-4 text-sm text-gray-600">
                              15%
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 px-4 text-sm text-gray-600">
                              12 to 24 hr(s)
                            </td>
                            <td className="py-2 px-4 text-sm text-gray-600">
                              25%
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 px-4 text-sm text-gray-600">
                              4 to 12 hr(s)
                            </td>
                            <td className="py-2 px-4 text-sm text-gray-600">
                              50%
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 text-sm text-gray-600">
                              0 to 4 hr(s)
                            </td>
                            <td className="py-2 px-4 text-sm text-gray-600">
                              100%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      * Penalty based on total seat worth. Partial cancellation
                      allowed. No cancellation after bus departs.
                    </p>
                  </div>
                )}
                {activePolicy === "child" && (
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">
                      Child Passenger Policy
                    </h4>
                    <p className="text-sm text-gray-600">
                      Children above 5 years need a ticket. Infants (0-2) travel
                      free on adult&apos;s lap.
                    </p>
                  </div>
                )}
                {activePolicy === "luggage" && (
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">
                      Luggage Policy
                    </h4>
                    <p className="text-sm text-gray-600">
                      1 piece up to 20kg free. Extra luggage ₹100/kg.
                    </p>
                  </div>
                )}
                {activePolicy === "pets" && (
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">
                      Pets Policy
                    </h4>
                    <p className="text-sm text-gray-600">
                      No pets. Service animals allowed with prior notice.
                    </p>
                  </div>
                )}
                {activePolicy === "liquor" && (
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">
                      Liquor Policy
                    </h4>
                    <p className="text-sm text-gray-600">
                      No alcohol consumption. Intoxicated passengers may be
                      denied boarding.
                    </p>
                  </div>
                )}
                {activePolicy === "pickup" && (
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">
                      Pickup Information
                    </h4>
                    <p className="text-sm text-gray-600">
                      Arrive 30 min before departure. No refunds for late
                      passengers.
                    </p>
                  </div>
                )}
              </div>
            )}
            {activeCategory === "amenities" && (
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Bus Amenities
                </h4>
                <div className="flex flex-wrap gap-4 w-full justify-start">
                  {Amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-600 bg-gray-200 rounded-lg px-3 py-2 min-w-[120px] max-w-[150px] space-x-2"
                    >
                      <span className="w-5 h-5 flex items-center justify-center text-lg">
                        {amenity.icon}
                      </span>
                      <span className="truncate">{amenity.item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeCategory === "photos" && (
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Bus Photos
                </h4>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-500"
                    ></div>
                  ))}
                </div>
              </div>
            )}
            {activeCategory === "reviews" && (
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Customer Reviews
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      rating: 5,
                      text: "Very comfortable journey. Clean bus, helpful staff.",
                    },
                    {
                      rating: 4,
                      text: "Good service, but 15 min late at pickup.",
                    },
                  ].map((review, i) => (
                    <div
                      key={i}
                      className="p-3 bg-white rounded-lg border border-gray-100"
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-medium">Traveler</div>
                        <div className="flex items-center">
                          <span className="text-yellow-500">
                            {"★".repeat(review.rating)}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">
                            {review.rating}.0
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeCategory === "pickups" && (
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Pickup & Drop Points
                </h4>
                <div className="p-4 flex justify-between">
                  <div>
                    <h5 className="font-medium text-gray-700">Pickup Points</h5>
                    <div className="mt-2 space-y-2">
                      {[
                        { time: "7:30 PM", location: "Main Bus Stand, Tansen" },
                        { time: "7:45 PM", location: "City Center, Tansen" },
                      ].map((point, i) => (
                        <div key={i} className="flex gap-2">
                          <div className="min-w-8 text-center text-sm text-gray-600">
                            {point.time}
                          </div>
                          <div className="text-sm text-gray-600">
                            {point.location}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-700">Drop Points</h5>
                    <div className="mt-2 space-y-2">
                      {[
                        {
                          time: "7:30 AM",
                          location: "New Bus Park, Kathmandu",
                        },
                        { time: "7:45 AM", location: "Kalanki, Kathmandu" },
                      ].map((point, i) => (
                        <div key={i} className="flex gap-2">
                          <div className="min-w-8 text-center text-sm text-gray-600">
                            {point.time}
                          </div>
                          <div className="text-sm text-gray-600">
                            {point.location}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Example usage in a bus listing page
export default function BusListing() {
  return (
    <div className="max-w-6xl mx-auto px-4 ">
      <div className="space-y-4">
        {buses.map((bus) => (
          <BusCard key={bus.id} bus={bus} />
        ))}
      </div>
    </div>
  );
}
