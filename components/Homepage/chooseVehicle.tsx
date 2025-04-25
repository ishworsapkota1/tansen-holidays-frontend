"use client"
import VehicleCard from "@/components/cards/vehicleCards";
import { StaticImageData } from 'next/image';
import bus from "@/public/Vehivle/bus.webp";
import ev from "@/public/Vehivle/EV-van.png"
import hiace from "@/public/Vehivle/haice.png"
import scorpio from "@/public/Vehivle/scorpio.jpeg"


interface Vehicle {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string | StaticImageData;
  }

export default function ChooseVehicle() {
  // Mock vehicle data (replace with API call in production)
  const vehicles: Vehicle[] = [
    {
      id: "1",
      name: "Standard Bus",
      description: "Comfortable seating for up to 40 passengers. Ideal for short trips.",
      price: "$50 / trip",
      image: bus,
    },
    {
      id: "2",
      name: "EV-Van",
      description: "Premium seating, Wi-Fi, and AC for up to 35 passengers.",
      price: "$80 / trip",
      image: ev,
    },
    {
      id: "3",
      name: "Scorpio",
      description: "Compact and cozy for small groups of up to 20 passengers.",
      price: "$40 / trip",
      image: scorpio,
    },
    {
      id: "4",
      name: "Hiace",
      description: "Spacious sleeper berths for overnight journeys, up to 30 passengers.",
      price: "$100 / trip",
      image: hiace,
    },
  ];

  // const handleSelectVehicle = (name: string) => {
  //    alert(`You have selected: ${name}`);
  //   // Add logic to proceed with booking (e.g., redirect or update state)
  // };

  return (
    <main className="max-w-11/12 mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-purple-800 mb-10">Choose Your Vehicle</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            // onSelect={handleSelectVehicle}
          />
        ))}
      </div>
    </main>
  );
}