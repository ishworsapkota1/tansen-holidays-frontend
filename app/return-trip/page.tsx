import ReturnTripForm from "./tripForm";
import TripCard from "@/components/cards/tripCards";
import Banner from "@/components/shared/Banner";

interface Trip {
  id: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: string;
  busType: string;
  image: string;
}

export default function ReturnTrip() {
  // const [outboundTrips, setOutboundTrips] = useState<Trip[]>([]);
  // const [returnTrips, setReturnTrips] = useState<Trip[]>([]);
  // const [selectedOutbound, setSelectedOutbound] = useState<Trip | null>(null);
  // const [selectedReturn, setSelectedReturn] = useState<Trip | null>(null);

  // Mock trip data (replace with API call in production)
  const popularTrips: Trip[] = [
    {
      id: "1",
      departureCity: "Kathmandu",
      arrivalCity: "Tansen",
      departureTime: "08:00 AM",
      arrivalTime: "12:00 PM",
      duration: "4h",
      price: "$50",
      busType: "Standard Bus",
      image:
        "https://images.unsplash.com/photo-1619896131835-a533eb8ebd57?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGthdGhtYW5kdXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "2",
      departureCity: "Lumbini",
      arrivalCity: "Tansen",
      departureTime: "09:00 AM",
      arrivalTime: "01:00 PM",
      duration: "4h",
      price: "$50",
      busType: "Standard Bus",
      image:
        "https://images.unsplash.com/photo-1578235107258-f6e405a4ffc0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHVtYmluaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "3",
      departureCity: "Pokhara",
      arrivalCity: "Tansen",
      departureTime: "10:00 AM",
      arrivalTime: "03:00 PM",
      duration: "5h",
      price: "$80",
      busType: "Luxury Coach",
      image:
        "https://images.unsplash.com/photo-1686634664616-be12017d2b4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9raGFyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "4",
      departureCity: "Bairabhwa",
      arrivalCity: "Tansen",
      departureTime: "11:00 AM",
      arrivalTime: "04:00 PM",
      duration: "5h",
      price: "$80",
      busType: "Luxury Coach",
      image:
        "https://media.istockphoto.com/id/1326681895/photo/aerial-shot-of-houses-scattered-across-a-large-farmland-in-the-countryside-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=nnMrDd-i6tkOICzLPhRgwx3X6dGeiHt5cmMlSjHwpL0=",
    },
  ];

  return (
    <>
    <Banner
    title= "Return Trip"
    img="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <main className="relative max-w-11/12 mx-auto py-8 px-4 sm:px-6 lg:px-8">

      {/* Form */}
      <ReturnTripForm/>

      {/* Popular Trips */}
      <section className="w-full mx-auto mt-20 p-10 shadow-md rounded-lg">
        <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-start">
          Return Trips
        </h2>
        {/* <div>
          <span>left</span>
          <span>right</span>
        </div> */}
        </div>
        
        <div className="grid grid-cols-2">
          {popularTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>

          {/* Proceed Button */}
            {/* <div className="mt-8 text-center">
              <button
                className="bg-indigo-600 text-white py-3 px-6 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300"
              >
                Proceed to Booking
              </button>
            </div> */}
    </main>
    </>
  );
}