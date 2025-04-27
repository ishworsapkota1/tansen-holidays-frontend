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
    <div className="p-2">
      <div className="trip-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Image on the left */}
          <div className="md:w-1/4 h-full">
            <Image
              src={trip.image}
              alt={`${trip.departureCity} to ${trip.arrivalCity}`}
              width={200}
              height={150}
              className="w-40 h-40 object-cover"
            />
          </div>

          {/* Content in the middle */}
          <div className="md:w-2/3 p-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {trip.departureCity} → {trip.arrivalCity}
            </h3>
            <p className="text-sm text-gray-600 mb-1">{trip.busType}</p>
            <div className="text-xs text-gray-600 mb-2">
              <p>
                Depart: {trip.departureTime} | Arrive: {trip.arrivalTime}
              </p>
              <p>Duration: {trip.duration}</p>
            </div>
            <p className="text-lg font-bold text-green-600">{trip.price}</p>
          </div>

          {/* Button on the right */}
          <div className="md:w-1/6 p-4 flex items-end justify-center">
            <button className="w-full bg-purple-800 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-purple-900 transition-colors duration-300">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
