"use client";
import Banner from "@/components/shared/Banner";
import PackageCard from "@/components/cards/packageCards";

interface HolidayPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  description: string;
  image: string;
}

export default function HolidayPackages() {
  // Mock package data
  const packages: HolidayPackage[] = [
    {
      id: "1",
      title: "Kathmandu to Pokhara",
      destination: "From Kathmandu to Pokhara, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$49",
      description:
        "Comfortable bus transport from Kathmandu to Pokhara with direct drop-off at your destination.",
      image:
        "",
    },
    {
      id: "2",
      title: "Kathmandu to Bhaktapur",
      destination: "From Kathmandu to Bhaktapur, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$29",
      description:
        "Quick shuttle service from Kathmandu to Bhaktapur, dropping passengers at their chosen location.",
      image:
        "",
    },
    {
      id: "3",
      title: "Pokhara to Chitwan",
      destination: "From Pokhara to Chitwan, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$59",
      description:
        "Direct bus transport from Pokhara to Chitwan with a smooth drop-off at your destination.",
      image:
        "",
    },
    {
      id: "4",
      title: "Kathmandu to Lumbini",
      destination: "From Kathmandu to Lumbini, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$99",
      description:
        "Premium bus service from Kathmandu to Lumbini with comfortable seating and direct drop-off.",
      image:
        "",
    },
    {
      id: "5",
      title: "Chitwan to Biratnagar",
      destination: "From Chitwan to Biratnagar, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$69",
      description:
        "Reliable bus transport from Chitwan to Biratnagar, dropping passengers at their destination.",
      image:
        "",
    },
    {
      id: "6",
      title: "Pokhara to Butwal",
      destination: "From Pokhara to Butwal, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$55",
      description:
        "Efficient bus service from Pokhara to Butwal with a direct drop-off at your chosen location.",
      image:
        "",
    },
    {
      id: "7",
      title: "Kathmandu to Janakpur",
      destination: "From Kathmandu to Janakpur, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$65",
      description:
        "Comfortable transport from Kathmandu to Janakpur, ensuring a hassle-free drop-off.",
      image:
        "",
    },
    {
      id: "8",
      title: "Lumbini to Nepalgunj",
      destination: "From Lumbini to Nepalgunj, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$45",
      description:
        "Convenient bus service from Lumbini to Nepalgunj with direct passenger drop-off.",
      image:
        "",
    },
    {
      id: "9",
      title: "Bhaktapur to Hetauda",
      destination: "From Bhaktapur to Hetauda, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$39",
      description:
        "Fast and reliable transport from Bhaktapur to Hetauda, dropping passengers at their destination.",
      image:
        "",
    },
    {
      id: "10",
      title: "Kathmandu to Birgunj",
      destination: "From Kathmandu to Birgunj, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$50",
      description:
        "Direct bus service from Kathmandu to Birgunj with comfortable seating and drop-off at your destination.",
      image:
        "",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-purple-800/30 to-white">
      <Banner
        className="h-[10vh]"
        img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60"
      />
      <main className="max-w-11/12 mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl w-full text-center font-bold text-purple-800 mb-6">
          Holiday Packages
        </h1>

        {/* Package Cards */}
        <section className="w-full mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>  
      </main>
    </div>
  );
}