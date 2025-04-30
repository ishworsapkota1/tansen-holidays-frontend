import Banner from "@/components/shared/Banner";
import CTA from "@/components/shared/CTA";
import Image from "next/image";
import { FaBus, FaCar, FaShieldAlt, FaClock, FaWifi } from "react-icons/fa"; 


// Service Category Component
interface ServiceCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

function ServiceCategory({ title, description, icon, image }: ServiceCategory) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          <div className="text-white">{icon}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}

// Service Feature Component
interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceFeature({ title, description, icon }: ServiceFeature) {
  return (
    <div className="flex items-start space-x-4 p-4">
      <div className="text-indigo-600 text-2xl">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "Luxury Buses",
      description:
        "Travel in style with our deluxe and luxury buses, equipped with reclining seats, Wi-Fi, and onboard entertainment for a premium experience.",
      icon: <FaBus className="text-4xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1676795223467-dad25a1e12d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGx1eHVyeSUyMGJ1c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Private Vans & Cars",
      description:
        "Enjoy personalized travel with our fleet of modern vans and private cars, perfect for small groups or individual journeys.",
      icon: <FaCar className="text-4xl" />,
      image:
        "https://images.unsplash.com/photo-1661345979331-b8178d997eae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByaXZhdGUlMjB2YW5zfGVufDB8fDB8fHww",
    },
    {
      title: "Standard Buses",
      description:
        "Affordable and reliable, our standard buses offer comfortable seating and timely service for budget-conscious travelers.",
      icon: <FaBus className="text-4xl" />,
      image:
        "https://images.unsplash.com/photo-1684837681001-6846999e8abb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhbmRhcmQlMjBidXN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const serviceFeatures: ServiceFeature[] = [
    {
      title: "Safety First",
      description:
        "Our vehicles are regularly maintained, and our drivers are trained to ensure your safety on every journey.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Punctual Service",
      description:
        "We pride ourselves on timely departures and arrivals, getting you to your destination as planned.",
      icon: <FaClock />,
    },
    {
      title: "Modern Amenities",
      description:
        "Enjoy Wi-Fi, charging ports, and comfortable seating on our deluxe and luxury vehicles.",
      icon: <FaWifi />,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Banner
      title="Our Services"
      img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      />
      <main className="max-w-11/12 mx-auto py-12 px-3">
        {/* Service Categories */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-10 tracking-tight">
            Our Transportation Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <ServiceCategory key={index} {...category} />
            ))}
          </div>
        </section>

        {/* Service Features */}
        <section className="py-12 bg-white rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 tracking-tight">
            Why Choose Tansen Holidays?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceFeatures.map((feature, index) => (
              <ServiceFeature key={index} {...feature} />
            ))}
          </div>
        </section>
      </main>
      <CTA
      title="Travel with Confidence"
      desc="Choose Tansen Holidays for safe, comfortable, and reliable transportation across Nepal."
      button="Book Your Journey"
      />
    </div>
  );
}