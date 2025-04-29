"use client";

import Image from "next/image";
import Link from "next/link";

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
    <div className="group h-full bg-white rounded-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] flex flex-col">
  <div className="overflow-hidden h-52 relative">
    <div className="absolute top-3 right-3 bg-white/25 backdrop-blur-xs px-2.5 py-1 rounded-md z-10 text-base font-semibold text-purple-800 shadow-sm">
      {pkg.duration}  |  {pkg.price}
    </div>
    <Image
      src={pkg.image}
      alt={pkg.title}
      width={400}
      height={300}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
  <div className="p-5 flex-grow flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-gray-800 tracking-tight">{pkg.title}</h3>
        {/* <span className="text-sm font-bold text-purple-700 ml-2">{pkg.price}</span> */}
      </div>
      <div className="w-2/5 h-1 bg-primary-100 rounded-full mb-3"></div>
      <p className="text-sm text-gray-600 line-clamp-2 mb-5">
        {pkg.description}
      </p>
    </div>
    <Link href="/booking">
    <button className="w-full py-2.5 bg-purple-800 text-white rounded-md font-medium transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-300">
      View Details
    </button>
    </Link>
  </div>
</div>
  );
};

export default PackageCard;
