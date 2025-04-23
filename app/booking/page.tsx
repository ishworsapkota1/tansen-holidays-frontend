import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

// Define the interface for bus data
interface Bus {
  id: number;
  operator: string;
  type: string;
  date: string;
  departureTime: string;
  duration: string;
  price: string;
  rating: number;
  ratingCount: number;
  liveTracking: boolean;
  seatsLeft: number;
  windowSeats: number;
}

export default function Home() {
  // Array of bus data
  const buses: Bus[] = [
    {
      id: 1,
      operator: "Tansen Holidays",
      type: "A/C Deluxe Seater /Sleeper (2+1)",
      date: "9.Apr.2026",
      departureTime: "7:30",
      duration: "04hrs 10mins",
      price: "RS. 1,080",
      rating: 4.9,
      ratingCount: 156,
      liveTracking: true,
      seatsLeft: 46,
      windowSeats: 26,
    },
    {
      id: 2,
      operator: "Tansen Holidays",
      type: "A/C Deluxe Seater /Sleeper (2+1)",
      date: "9.Apr.2026",
      departureTime: "8:30",
      duration: "04hrs 10mins",
      price: "RS. 1,080",
      rating: 4.9,
      ratingCount: 156,
      liveTracking: true,
      seatsLeft: 46,
      windowSeats: 26,
    },
    {
      id: 3,
      operator: "Tansen Holidays",
      type: "A/C Deluxe Seater /Sleeper (2+1)",
      date: "9.Apr.2026",
      departureTime: "9:30",
      duration: "04hrs 10mins",
      price: "RS. 1,080",
      rating: 4.9,
      ratingCount: 156,
      liveTracking: true,
      seatsLeft: 46,
      windowSeats: 26,
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="lg:h-[70vh] h-[50vh] relative top-0">
        <Image
          src="/herobg.png"
          alt="Scenic background with mountains and lake"
          width={1000}
        height={1000}
        className="w-full h-full object-cover"
        />
      </div>

      {/* Search Bar */}
      <div className=" w-full max-w-11/12 py-4 mx-auto">
        <form className="flex items-center p-6 gap-6">
          {/* From */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              From:
            </label>
            <div className="relative">
              <select className="w-full border-b border-primary-100 text-gray-700 focus:outline-none appearance-none bg-transparent">
                <option>Tansen</option>
              </select>
              <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-purple-900">
                <Icon icon="ri:arrow-drop-down-line" className="w-8 h-8"/>
              </span>
            </div>
          </div>

          {/* To */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              To:
            </label>
            <div className="relative">
              <select className="w-full border-b border-primary-100 text-gray-700 focus:outline-none appearance-none bg-transparent">
                <option>Kathmandu</option>
              </select>
              <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-purple-900">
              <Icon icon="ri:arrow-drop-down-line" className="w-8 h-8"/>
              </span>
            </div>
          </div>

          {/* Date */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Date:
            </label>
            <div className="relative">
              <select className="w-full border-b border-primary-100 text-gray-700 focus:outline-none appearance-none bg-transparent">
                <option>9-Apr-2026</option>
              </select>
              <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-purple-900">
              <Icon icon="ri:arrow-drop-down-line" className="w-8 h-8"/>
              </span>
            </div>
          </div>

          {/* Time */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Time:
            </label>
            <div className="relative">
              <select className="w-full border-b border-primary-100 text-gray-700 focus:outline-none appearance-none bg-transparent">
                <option>7:30 AM</option>
              </select>
              <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-purple-900">
              <Icon icon="ri:arrow-drop-down-line" className="w-8 h-8"/>
              </span>
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-primary-100 text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      {/* Bus Cards Section */}
      <div className="max-w-11/12 mx-auto px-4 py-8">
        {/* Dynamic Bus Cards */}
        {buses.map((bus) => (
          <div
            key={bus.id}
            className="bg-[#F4F4F4] border border-[#D2D2D2] rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow"
          >
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              {/* Left Side */}
              <div className="w-full">
                {/* Operator, Date, Time, Duration, Price */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {bus.operator}
                  </h3>
                    <span className="font-semibold  text-black text-2xl">
                      {bus.date}
                    </span>
                    <span className="text-lg text-gray-500">
                      <span className="font-semibold  text-black text-2xl">{bus.departureTime}</span> AM
                    </span>
                    <span className="text-lg text-gray-500">
                      {bus.duration}
                    </span>
                    <span className="text-2xl font-semibold text-purple-800">
                      {bus.price}
                    </span>
                </div>

                {/* Bus Type */}
                <div className="mt-1">
                  <p className="text-sm text-gray-500">{bus.type}</p>
                </div>

                {/* Ratings and Seats Info */}
                <div className="flex items-center justify-between mt-2">
                  {/* Ratings and Live Tracking */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-700">
                        {bus.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {bus.ratingCount} Ratings
                    </span>
                    {bus.liveTracking && (
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            fill="#FF0000"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 18C13.5913 18 15.1174 17.3679 16.2426 16.2427C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88259 16.2426 7.75737C15.1174 6.63215 13.5913 6.00001 12 6.00001C10.4087 6.00001 8.88258 6.63215 7.75737 7.75737C6.63215 8.88259 6.00001 10.4087 6.00001 12C6.00001 13.5913 6.63215 15.1174 7.75737 16.2427C8.88258 17.3679 10.4087 18 12 18ZM12 19C13.717 19 15.29 18.382 16.508 17.356L16.526 17.374L17.94 18.788C18.0529 18.899 18.2051 18.9608 18.3633 18.9601C18.5216 18.9593 18.6732 18.8961 18.7851 18.7841C18.8969 18.6721 18.96 18.5204 18.9606 18.3621C18.9611 18.2039 18.8991 18.0518 18.788 17.939L17.374 16.525L17.356 16.508C18.4203 15.2473 19.0028 13.6499 19 12C19 10.283 18.382 8.71001 17.355 7.49201L17.375 7.47401L18.788 6.06001C18.8991 5.94724 18.9611 5.79515 18.9606 5.63687C18.96 5.47858 18.8969 5.32693 18.7851 5.21494C18.6732 5.10295 18.5216 5.03969 18.3633 5.03896C18.2051 5.03822 18.0529 5.10006 17.94 5.21101L16.525 6.62601L16.508 6.64501C15.2474 5.58037 13.65 4.99747 12 5.00001C10.3503 4.9977 8.75333 5.58059 7.49301 6.64501L7.47501 6.62501L6.06001 5.21201C5.94711 5.10106 5.79495 5.03922 5.63666 5.03996C5.47838 5.04069 5.3268 5.10395 5.21494 5.21594C5.10308 5.32793 5.04001 5.47958 5.03946 5.63787C5.03891 5.79615 5.10093 5.94824 5.21201 6.06101L6.62601 7.47501L6.64501 7.49301C5.58059 8.75333 4.9977 10.3503 5.00001 12C5.00001 13.717 5.61801 15.29 6.64401 16.508L6.62601 16.525L5.21201 17.939C5.15552 17.9945 5.11058 18.0607 5.07978 18.1336C5.04898 18.2066 5.03293 18.285 5.03257 18.3642C5.0322 18.4434 5.04751 18.5219 5.07763 18.5951C5.10775 18.6684 5.15207 18.7349 5.20804 18.791C5.26402 18.847 5.33053 18.8914 5.40375 18.9216C5.47697 18.9518 5.55544 18.9672 5.63464 18.9669C5.71384 18.9667 5.79221 18.9507 5.86522 18.92C5.93822 18.8893 6.00443 18.8444 6.06001 18.788L7.47501 17.374L7.49201 17.356C8.75273 18.4203 10.3501 19.0028 12 19Z"
                            fill="#FF8D8D"
                            fillOpacity="0.25"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">
                          Live Tracking
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Seats Info */}
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {bus.seatsLeft} Seats Left   |  {bus.windowSeats} Window Seats
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dotted Divider */}
            <div className="h-px border border-dashed border-zinc-400 my-4"></div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Find the best seat that you love
              </p>
              <Link
              href="/check-seat"
              >
              <button className="px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition-colors">
                Select Seat
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
