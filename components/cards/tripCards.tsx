"use client";

import Image from "next/image";

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

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
    return (
        <div className="trip-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <Image
            src={trip.image}
            alt={`${trip.departureCity} to ${trip.arrivalCity}`}
            width={100}
            height={100}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl h-[8vh] font-semibold text-gray-900">
                  {trip.departureCity} → <br/> {trip.arrivalCity}
                </h3>
              </div>
              <p className="text-lg text-start font-bold text-purple-600">{trip.price}</p>
            </div>
            <p className="text-sm text-gray-600">{trip.busType}</p>
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                Depart: {trip.departureTime} | Arrive: {trip.arrivalTime}
              </p>
              <p className="text-sm text-gray-600">Duration: {trip.duration}</p>
            </div>
            <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors duration-300">
              Select
            </button>
          </div>
        </div>
      );
};

export default TripCard;