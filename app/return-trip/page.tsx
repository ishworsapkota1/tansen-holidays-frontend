"use client";

import ReturnTripForm from "./tripForm";
import TripCard from "@/components/cards/tripCards";
import Banner from "@/components/shared/Banner";
// import { useState } from "react";

interface Trip {
  id: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: string;
  busType: string;
  image: string;
}

export default function ReturnTrip() {
  // const [outboundTrips, setOutboundTrips] = useState<Trip[]>([]);
  // const [returnTrips, setReturnTrips] = useState<Trip[]>([]);
  // const [selectedOutbound, setSelectedOutbound] = useState<Trip | null>(null);
  // const [selectedReturn, setSelectedReturn] = useState<Trip | null>(null);

  // Mock trip data (replace with API call in production)
  const popularTrips: Trip[] = [
    {
      id: "1",
      departureCity: "Tansen",
      arrivalCity: "Kathmandu",
      departureTime: "08:00 AM",
      arrivalTime: "12:00 PM",
      duration: "4h",
      price: "$50",
      busType: "Standard Bus",
      image:
        "https://images.unsplash.com/photo-1619896131835-a533eb8ebd57?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGthdGhtYW5kdXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "2",
      departureCity: "Kathmandu",
      arrivalCity: "Lumbini",
      departureTime: "09:00 AM",
      arrivalTime: "01:00 PM",
      duration: "4h",
      price: "$50",
      busType: "Standard Bus",
      image:
        "https://images.unsplash.com/photo-1578235107258-f6e405a4ffc0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHVtYmluaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "3",
      departureCity: "Tansen",
      arrivalCity: "Pokhara",
      departureTime: "10:00 AM",
      arrivalTime: "03:00 PM",
      duration: "5h",
      price: "$80",
      busType: "Luxury Coach",
      image:
        "https://images.unsplash.com/photo-1686634664616-be12017d2b4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9raGFyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "4",
      departureCity: "Pokhara",
      arrivalCity: "Illam",
      departureTime: "11:00 AM",
      arrivalTime: "04:00 PM",
      duration: "5h",
      price: "$80",
      busType: "Luxury Coach",
      image:
        "https://images.unsplash.com/photo-1559715062-0951291e3156?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWxsYW18ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <>
    <Banner
    title= "Return Trip"
    img="https://images.unsplash.com/photo-1561553521-de4fcbea79c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyaXB8ZW58MHx8MHx8fDA%3D"
    />
    <main className="max-w-11/12 mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl w-full text-center font-bold text-purple-800 mb-10">
        Book Your Return Trip
      </h1>

      {/* Form */}
      <ReturnTripForm/>

      {/* Popular Trips */}
      <section className="w-full mx-auto py-10">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Popular Trips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {popularTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>

          {/* Proceed Button */}
            {/* <div className="mt-8 text-center">
              <button
                className="bg-indigo-600 text-white py-3 px-6 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300"
              >
                Proceed to Booking
              </button>
            </div> */}
    </main>
    </>
  );
}