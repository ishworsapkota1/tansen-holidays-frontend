"use client";

import Link from "next/link";
import { useState } from "react";



const ReturnTripForm = ({  }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("Tansen");
  const [returnDate, setReturnDate] = useState("");
  // const [passengers, setPassengers] = useState(1);

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   onSearch({ origin, destination, returnDate, passengers });
  // };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form
      // onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md py-10 mx-auto w-11/12 absolute top-0 left-1/2 -translate-1/2"
    >
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            From
          </label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="e.g. Kathmandu"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Return Date
          </label>
          <input
            type="date"
            value={returnDate}
            min={today}
            onChange={(e) => setReturnDate(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            Passengers
          </label>
          <input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            min="1"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div> */}
        <Link href="/booking" className="flex items-end">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300"
        >
          Check Return Trips
        </button>
        </Link>
      </div>
    </form>
  );
};

export default ReturnTripForm;
