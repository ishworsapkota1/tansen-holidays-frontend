import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from "./contactForm";


interface ContactInfo {
  title: string;
  value: string;
  icon: React.ReactNode;
}

function ContactInfoCard({ title, value, icon }: ContactInfo) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 text-center flex flex-col items-center transition-shadow duration-300 hover:shadow-md">
      <div className="text-indigo-600 text-2xl mb-2">{icon}</div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{value}</p>
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
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-[url(/contact.png)] bg-no-repeat bg-cover bg-center flex items-center justify-center text-center px-4">
        <div className="bg-gradient-to-r from-indigo-900/50 to-indigo-600/50 absolute inset-0"/>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact Tansen Holidays
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mt-3 max-w-2xl mx-auto">
            Reach out to us for inquiries, bookings, or support. We’re here to
            help!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={index} {...info} />
          ))}
        </section>

        {/* Form and Map */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.223834553615!2d85.31211931506262!3d27.710150982791096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a64d0b7b3%3A0x7b8a7c7e8c8f8b8f!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1634567890123"
                width="100%"
                height="430"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Tansen Holidays Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
