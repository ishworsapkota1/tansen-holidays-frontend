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
        "https://images.unsplash.com/photo-1610997686651-98492fd08108?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9raGFyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "2",
      title: "Kathmandu to Tansen",
      destination: "From Kathmandu to Bhaktapur, Nepal",
      duration: "1 Day / 0 Nights",
      price: "$29",
      description:
        "Quick shuttle service from Kathmandu to Bhaktapur, dropping passengers at their chosen location.",
      image:
        "https://images.unsplash.com/photo-1592496824070-99a2f58772e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuc2VufGVufDB8fDB8fHww",
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
        "https://images.unsplash.com/photo-1549888668-19281758dfbe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpdHdhbnxlbnwwfHwwfHx8MA%3D%3D",
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
        "https://images.unsplash.com/photo-1578235107258-f6e405a4ffc0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHVtYmluaXxlbnwwfHwwfHx8MA%3D%3D",
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
        "https://images.unsplash.com/photo-1723585647684-4bbcafc8303f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyYXRuYWdhcnxlbnwwfHwwfHx8MA%3D%3D",
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
        "https://images.unsplash.com/photo-1577089909715-2bfa66d60a7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0d2FsfGVufDB8fDB8fHww",
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
        "https://images.unsplash.com/photo-1713627273497-cb9b6136ac62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFuYWtwdXJ8ZW58MHx8MHx8fDA%3D",
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
        "https://images.unsplash.com/photo-1699847197418-24e6931da8f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmVwYWxndW5qfGVufDB8fDB8fHww",
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
        "https://media.istockphoto.com/id/469532554/photo/bahakapur-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=mbn_FCKfQ8IeQnHXHQ6giR3kkUufoEHyWw095F_c_vE=",
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
        "https://images.unsplash.com/photo-1619374562332-c90f576a7d49?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZ3VuanxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-300 via-gray-200 to-white">
  <Banner
    className="h-[40vh] relative shadow-lg"
    title="Holiday Packages"
    img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60"
  />
  <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <section className="w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>  
  </main>
</div>
  );
}