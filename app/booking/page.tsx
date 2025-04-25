import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import BusListing from "@/components/cards/bookingCards";
import FilterSidebar from "@/components/Filter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="lg:h-[70vh] h-[50vh] relative">
        <Image
          src="/herobg.png"
          alt="Scenic background"
          fill
          className="object-cover"
        />
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto py-4 px-4">
        <form className="flex flex-col sm:flex-row items-center gap-6 p-6">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">From:</label>
            <div className="relative">
              <select className="w-full border-b border-primary-100 text-gray-700 focus:outline-none appearance-none bg-transparent">
                <option>Tansen</option>
              </select>
              <Icon icon="ri:arrow-drop-down-line" className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-purple-900" />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">To:</label>
            <div className="relative">
              <select className="w-full border-b border-primary-100 text-gray-700 focus:outline-none appearance-none bg-transparent">
                <option>Kathmandu</option>
              </select>
              <Icon icon="ri:arrow-drop-down-line" className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-purple-900" />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">Date:</label>
            <div className="relative">
              <select className="w-full border-b border-primary-100 text-gray-700 focus:outline-none appearance-none bg-transparent">
                <option>9-Apr-2026</option>
              </select>
              <Icon icon="ri:arrow-drop-down-line" className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-purple-900" />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">Time:</label>
            <div className="relative">
              <select className="w-full border-b border-primary-100 text-gray-700 focus:outline-none appearance-none bg-transparent">
                <option>7:30 AM</option>
              </select>
              <Icon icon="ri:arrow-drop-down-line" className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-purple-900" />
            </div>
          </div>
          <button className="bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-purple-900 transition-colors">
            Search
          </button>
        </form>
      </div>

      {/* Filter and Bus Cards Section - Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Filter Sidebar - Takes 1 column */}
          <div>
            <FilterSidebar />
          </div>

          {/* Bus Listings - Takes 2 columns */}
          <div className="md:col-span-2">
            <BusListing />
          </div>
        </div>
      </div>
    </div>
  );
}