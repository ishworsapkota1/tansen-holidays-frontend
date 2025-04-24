"use client";
import Image from "next/image";

interface Vehicle {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
  }

  interface VehicleCardProps {
    vehicle: Vehicle;
    onSelect: (name: string) => void;
  }

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelect }) => {
  return (
    <div className="vehicle-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Image
        src={vehicle.image}
        alt={vehicle.name}
        width={100}
        height={100}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{vehicle.description}</p>
        <p className="text-lg font-bold text-indigo-600 mt-2">{vehicle.price}</p>
        <button
          onClick={() => onSelect(vehicle.name)}
          className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;