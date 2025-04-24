"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBus, FaCar, FaShieldAlt, FaClock, FaWifi } from "react-icons/fa"; 
// Hero Component
function Hero() {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Tansen Holidays Services"
        layout="fill"
        objectFit="cover"
        quality={85}
        className="brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-indigo-600/20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Transportation Services
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mt-4 max-w-3xl">
          Discover seamless travel with Tansen Holidays—offering reliable, comfortable, and modern transportation across Nepal.
        </p>
        <Link
          href="/booking"
          className="mt-6 bg-white text-indigo-600 py-3 px-8 rounded-full text-base font-medium hover:bg-indigo-100 transition-colors duration-300"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}

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

// Call-to-Action Component
function CTA() {
  return (
    <section className="relative py-16 mb-10 text-center bg-[url(/roads.png)] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4">Travel with Confidence</h2>
        <p className="text-lg text-white max-w-2xl mx-auto mb-6">
          Choose Tansen Holidays for safe, comfortable, and reliable transportation across Nepal.
        </p>
        <Link
          href="/booking"
          className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full text-base font-medium hover:bg-indigo-700 transition-colors duration-300"
        >
          Book Your Journey
        </Link>
      </div>
    </section>
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
      <Hero />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
      <CTA />
    </div>
  );
}