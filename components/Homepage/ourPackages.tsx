"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllPackages } from "@/services/packageSerice";
import { PackageType } from "@/types/PackageType";
export const HolidayPackages = () => {
  const [packages, setPackages] = useState<PackageType[]>([]);
  // const packages = [

  //   {
  //     name: "Mustang",
  //     image: "/packages/mustang.png",
  //     isTop: true
  //   },
  //   {
  //     name: "Muktinath",
  //     image: "/packages/muktinath.png",
  //     isTop: true
  //   },
  //   {
  //     name: "Gosaikunda",
  //     image: "/packages/gosaikunda.png",
  //     isTop: true
  //   },
  //   {
  //     name: "Supa Deurali",
  //     image: "/packages/supadeurali.png",
  //     isTop: true
  //   }
  // ];

  useEffect(() => {
    const fetchPackages = async () => {
      const response = await getAllPackages();
      if (response) {
        setPackages(response?.packages);
      }
    };
    fetchPackages();
  }, []);

  console.log(packages);
  return (
    <div className="w-11/12 mx-auto py-12 px-3 ">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-purple-800 mb-10">
          Our Holiday Packages
        </h2>
        <Link href="/holiday-packages">
          <p className="underline mb-11 text-purple-800 hover:text-primary-100">
            View all
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden h-[50vh] shadow-md group"
          >
            {/* Background Image */}
            <Image
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-out"
              height={1000}
              width={1000}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Top Tag */}
            {pkg.isTop && (
              <div className="absolute top-4 left-4 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                Top
              </div>
            )}

            {/* Favorite Button */}
            <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
              <div className="w-6 h-6 bg-purple-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">♥</span>
              </div>
            </button>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
              <Link href="/package-details">
                <button className="bg-black hover:bg-primary-100 bg-opacity-60 text-white px-4 py-1 rounded-full text-sm border border-white cursor-pointer">
                  Book now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
