// /app/checkout/[id]/Checkout.tsx
"use client";
import Link from "next/link";

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

interface CheckoutProps {
  bus: Bus;
  subtotal: number;
  discount: number;
  total: number;
}

export default function Checkout({ bus, subtotal, discount, total }: CheckoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-6">
        {/* Left: Order Summary */}
        <div className="w-full md:w-1/2 p-6">
          <Link href={`/check-seat/${bus.id}`} className="text-purple-800 hover:text-primary-100 text-lg mb-4 inline-block">
            Go back
          </Link>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Tour:</span>
              <span className="text-purple-800 font-medium">{bus.operator}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Date:</span>
              <span className="text-purple-800 font-medium">{bus.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Time:</span>
              <span className="text-purple-800 font-medium">{bus.departureTime} AM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Duration:</span>
              <span className="text-purple-800 font-medium">{bus.duration}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500">Ticket:</span>
              <span className="text-purple-800 font-medium">{bus.price}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500">Subtotal:</span>
              <span className="text-purple-800 font-medium">RS. {subtotal}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500">Discount(10%):</span>
              <span className="text-purple-800 font-medium">RS. {discount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 font-medium">TOTAL:</span>
              <span className="text-orange-500 font-bold">RS. {total}</span>
            </div>
          </div>
        </div>

        <div className="h-[60vh] border border-dashed border-[b8b8b8]"/>

        {/* Right: Payment Options */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">EPAY</h2>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-600 mb-2">Chose Payment Option</p>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                e-Sewa
              </button>
              <button className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">
                <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
                Khalti
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-600 mb-2">Total Amount</p>
            <p className="text-lg font-semibold text-gray-800 bg-gray-100 py-2 px-4 rounded-md">NPR {total}.00</p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-600 mb-2">Sign in to your account</p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="eSewa ID"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🇳🇵</span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="password / MPIN"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forget Password?
            </a>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition-colors">
            LOGIN
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account? <a href="#" className="text-green-600 hover:underline">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}