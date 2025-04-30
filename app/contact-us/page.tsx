"use client"
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from "./contactForm";

interface ContactInfo {
  title: string;
  value: string;
  icon: React.ReactNode;
}

function ContactInfoCard({ title, value, icon }: ContactInfo) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm text-center border border-gray-200">
      <div className="text-indigo-600 text-xl mb-3">
        {icon}
      </div>
      <h3 className="font-medium text-gray-900 mb-1">
        {title}
      </h3>
      <p className="text-gray-600">
        {value}
      </p>
    </div>
  );
}

export default function Contact() {
  const contactInfo = [
    {
      title: "Address",
      value: "123 Thamel Marg, Kathmandu, Nepal",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Phone",
      value: "+977 1-2345678",
      icon: <FaPhone />,
    },
    {
      title: "Email",
      value: "info@tansenholidays.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className="w-11/12 mx-auto px-3 py-12 mt-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Tansen Holidays
          </h1>
          <p className="text-lg text-gray-600">
            Reach out to us for inquiries, bookings, or support. We&apos;re here to
            help!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto">
        {/* Contact Info Cards */}
        <div className="w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <ContactInfoCard
              key={index}
              title={info.title}
              value={info.value}
              icon={info.icon}
            />
          ))}
        </div>

        {/* Form and Map */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-full">
            <ContactForm />
          </div>
          <div className="bg-gray-100 rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28259.858861729854!2d85.30563115!3d27.7134584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a365f7bb37%3A0xf86bc2e35df9f5a8!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1651219128367!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}