import Image from "next/image";

export const WhyChooseTansen = () => {
  const features = [
    {
      title: "Comfortable Seat",
      image: "/whytansen/comfortableseats.png",
    },
    {
      title: "Free Water",
      image: "/whytansen/bottle.png",
    },
    {
      title: "Full AC Delux",
      image: "/whytansen/AC.png",
    },
    {
      title: "Pick & Drop",
      image: "https://img.freepik.com/premium-photo/bus-stop-near-road-autumn-day-without-people-empty-bus-stop-with-bench-near-road_362376-527.jpg?ga=GA1.1.1946619087.1744953972&semt=ais_hybrid&w=740",
      subtitle: "(within Tansen)"
    },
    {
      title: "20+ Driving Experience",
      image: "https://img.freepik.com/premium-photo/young-woman-using-mobile-phone-while-sitting-home_1048944-5263793.jpg?ga=GA1.1.1946619087.1744953972&semt=ais_hybrid&w=740",
    }
  ];

  return (
    <section className="py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-14 text-center">Why Choose Tansen Holidays?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container with optimized height */}
              <div className="h-48 relative bg-white">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover" 
                  height={200}
                  width={200}
                />
              </div>
              
              {/* Content Container with enhanced design */}
              <div className="p-5 text-center bg-gradient-to-b from-purple-50 to-white">
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                {feature.subtitle && (
                  <p className="text-purple-600 text-sm mt-1">{feature.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTansen;