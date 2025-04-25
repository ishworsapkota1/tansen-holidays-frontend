"use client";

import Image from "next/image";

interface HolidayPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  description: string;
  image: string;
}

interface PackageCardProps {
  pkg: HolidayPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <div className="package-card p-4 bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="overflow-hidden rounded-md">
        <Image
          src={pkg.image}
          alt={pkg.title}
          width={100}
          height={100}
          className="w-full h-40 object-cover rounded-md group-hover:scale-110 transition-transform"
        />
      </div>
      <div className="p-1">
        <h3 className="text-lg font-semibold text-gray-900">{pkg.title}</h3>
        <p className="text-sm text-orange-600 mt-1">
          {pkg.duration} | {pkg.price}
        </p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {pkg.description}
        </p>
        <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
