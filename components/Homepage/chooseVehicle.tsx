"use client"
import VehicleCard from "@/components/cards/vehicleCards";

interface Vehicle {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
  }

export default function ChooseVehicle() {
  // Mock vehicle data (replace with API call in production)
  const vehicles: Vehicle[] = [
    {
      id: "1",
      name: "Standard Bus",
      description: "Comfortable seating for up to 40 passengers. Ideal for short trips.",
      price: "$50 / trip",
      image: "https://plus.unsplash.com/premium_photo-1710909337997-b3f8f3880a84?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RhbmRhcmQlMjBCdXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "2",
      name: "Luxury Coach",
      description: "Premium seating, Wi-Fi, and AC for up to 35 passengers.",
      price: "$80 / trip",
      image: "https://plus.unsplash.com/premium_photo-1663011707758-9af31c6618e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THV4dXJ5JTIwQ29hY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "3",
      name: "Mini Bus",
      description: "Compact and cozy for small groups of up to 20 passengers.",
      price: "$40 / trip",
      image: "https://images.unsplash.com/photo-1650807486050-a142ea418b19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlhY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "4",
      name: "Sleeper Bus",
      description: "Spacious sleeper berths for overnight journeys, up to 30 passengers.",
      price: "$100 / trip",
      image: "https://plus.unsplash.com/premium_photo-1677419807355-65c269f881b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4YXJ5JTIwc2xlZXBlciUyMGJ1cyUyMGludGVyaW9yfGVufDB8fDB8fHww",
    },
  ];

  const handleSelectVehicle = (name: string) => {
    // alert(`You have selected: ${name}`);
    // // Add logic to proceed with booking (e.g., redirect or update state)
  };

  return (
    <main className="max-w-11/12 mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-purple-800 mb-10">Choose Your Vehicle</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            onSelect={handleSelectVehicle}
          />
        ))}
      </div>
    </main>
  );
}