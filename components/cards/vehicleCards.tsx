import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { StaticImageData } from 'next/image';
import Link from "next/link";

interface Vehicle {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string | StaticImageData;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect?: (name: string) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className="vehicle-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-xs px-3 py-1 rounded-full text-xl font-medium text-purple-800 shadow-sm z-20">
          {vehicle.price}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{vehicle.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{vehicle.description}</p>
        <Link href="/booking" className="block w-full">
          <button
            className="w-full py-2.5 px-4 bg-purple-800 rounded-lg text-sm text-white font-medium transition-all duration-300 hover:shadow-md flex items-center gap-2 justify-center"
          >
            <span>Select This Vehicle</span>
            <Icon icon="hugeicons:arrow-right-02" className="text-xl"/>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard