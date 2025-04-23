import Image from "next/image";

export const WhyChooseTansen = () => {
    const features = [
      {
        title: "Comfortable Seat",
        image: "/whytansen/comfortableseats.png",
        subtitle: ""
      },
      {
        title: "Free water",
        image: "/whytansen/bottle.png",
        subtitle: ""
      },
      {
        title: "Full AC Delux",
        image: "/whytansen/AC.png",
        description: ""
      },
      {
        title: "Pick & Drop",
        image: "/whytansen/pickDrop.png",
        subtitle: "(within Tansen)"
      },
      {
        title: "20+ Driving Experiences",
        image: "/whytansen/experience.png",
        subtitle: ""
      }
    ];
  
    return (
      <div className="py-12 px-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-10">Why choose Tansen Holidays?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-primary-50 rounded-lg overflow-hidden  ">
              <div className="h-40 overflow-hidden">
                <Image 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-full object-cover rounded-md border border-primary-100" 
                height={1000}
                width={1000}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium text-gray-800">{feature.title}</h3>
                {feature.subtitle && (
                  <p className="text-orange-500">{feature.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };