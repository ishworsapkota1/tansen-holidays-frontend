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
      image:
        "https://img.freepik.com/premium-photo/bus-stop-near-road-autumn-day-without-people-empty-bus-stop-with-bench-near-road_362376-527.jpg?ga=GA1.1.1946619087.1744953972&semt=ais_hybrid&w=740",
      subtitle: "(within Tansen)",
    },
    {
      title: "20+ Driving Experience",
      image:
        "https://img.freepik.com/premium-photo/young-woman-using-mobile-phone-while-sitting-home_1048944-5263793.jpg?ga=GA1.1.1946619087.1744953972&semt=ais_hybrid&w=740",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-11/12 mx-auto px-8">
        {/* Single card container */}
        <div className="rounded-2xl border bg-white border-gray-50 shadow-sm overflow-hidden p-8">
          {/* Card header */}
          <div className="px-6 pt-6 pb-4">
            <h2 className="text-2xl font-bold text-purple-800 text-center">
              Why Choose Tansen Holidays?
            </h2>
          </div>

          {/* Subtle divider */}
          {/* <div className="h-px bg-gray-100 mx-6"></div> */}

          {/* Feature cards grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  {/* Image Container */}
                  <div className="h-40 relative bg-white">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      height={160}
                      width={160}
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-3 text-center">
                    <h3 className="text-md font-medium text-gray-800">
                      {feature.title}
                    </h3>
                    {feature.subtitle && (
                      <p className="text-primary-100 text-xs mt-1">
                        {feature.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTansen;
