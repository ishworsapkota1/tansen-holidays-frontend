"use client";
import { useState } from "react";
import VehicleCard from "@/components/cards/vehicleCards";
import { StaticImageData } from 'next/image';
import bus from "@/public/Vehivle/bus.webp";
import ev from "@/public/Vehivle/EV-van.png";
import hiace from "@/public/Vehivle/haice.png";
import scorpio from "@/public/Vehivle/scorpio.jpeg";
import suv from "@/public/Vehivle/suv.jpeg";

interface Vehicle {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string | StaticImageData;
  type: string;
}

export default function ChooseVehicle() {
  // Vehicle categories
  const vehicleTypes = ["All", "Buses", "EVs", "SUVs", "Micro Bus"];
  const [activeTab, setActiveTab] = useState("All");

  // Enhanced vehicle data with type property
  const allVehicles: Vehicle[] = [
    {
      id: "1",
      name: "Luxury Bus",
      description: "Premium seating, Wi-Fi, and AC for up to 35 passengers.",
      price: "$95",
      image: bus,
      type: "Buses"
    },
    {
      id: "6",
      name: "Premium SUV",
      description: "Spacious luxury SUV with panoramic roof and leather seats.",
      price: "$65",
      image: scorpio,
      type: "SUVs"
    },
    {
      id: "3",
      name: "EV-Van",
      description: "Eco-friendly electric van with modern amenities and smooth ride.",
      price: "$80",
      image: "https://img.freepik.com/premium-photo/white-small-minivan-transportation-people-three-dimensional-illustration-glossy-white-surface_101266-1356.jpg?ga=GA1.1.1946619087.1744953972&semt=ais_hybrid&w=740",
      type: "EVs"
    },  
    
    {
      id: "5",
      name: "SUV",
      description: "Rugged SUV perfect for adventure trips and rough terrain.",
      price: "$40",
      image: suv,
      type: "SUVs"
    },
    {
      id: "7",
      name: "Hiace",
      description: "Compact and cozy micro bus for small groups of up to 15 passengers.",
      price: "$60",
      image: hiace,
      type: "Micro Bus"
    },
    {
      id: "2",
      name: "Standard Bus",
      description: "Comfortable seating for up to 40 passengers. Ideal for short trips.",
      price: "$50",
      image: "https://images.unsplash.com/photo-1650308767515-b7c63bb55fa1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxidXMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
      type: "Buses"
    },
    {
      id: "8",
      name: "Deluxe Hiace",
      description: "Top-tier micro bus with entertainment system and extra legroom.",
      price: "$85",
      image: "https://img.freepik.com/premium-photo/transport-van_981168-1934.jpg?ga=GA1.1.1946619087.1744953972&semt=ais_hybrid&w=740",
      type: "Micro Bus"
    },
    {
      id: "4",
      name: "Electric Shuttle",
      description: "Zero-emission shuttle with USB charging and comfortable seats.",
      price: "$75",
      image: ev,
      type: "EVs"
    },
  ];

  // Filter vehicles based on active tab
  const filteredVehicles = activeTab === "All" 
    ? allVehicles 
    : allVehicles.filter(vehicle => vehicle.type === activeTab);

  // Handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-purple-800">Choose Your Vehicle</h2>
          <p className="text-primary-100 mt-2">Select from our premium fleet for your journey</p>
        </div>
        <div className="md:block">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1 overflow-x-auto">
            {vehicleTypes.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 whitespace-nowrap ${
                  activeTab === type 
                    ? "bg-purple-100 text-purple-800" 
                    : "text-gray-600 hover:text-purple-800"
                }`}
                onClick={() => handleTabClick(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No vehicles found in this category.</p>
        </div>
      )}
    </main>
  );
}