"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname(); 

  return (
    <header
      className={`py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/30 backdrop-blur-lg border-b border-gray-200$`}
    >
      <div className="absolute inset-0 bg-black/20 z-0"/>
      <div className="flex w-11/12 mx-auto justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-36 h-10">
              <Image
                src="/Logo/Logo.png"
                alt="Tansen Holidays"
                fill
                className="bg-cover"
                priority
              />
            </div>
          </Link>
        </div>

        <nav className="flex items-center gap-5 z-[1]">
          <Link
            href="/"
            className={`transition-colors duration-200 ${
              pathname === "/" 
                ? "text-purple-800 font-bold text-lg" 
                : "text-white hover:text-purple-800 font-medium text-base"
            }`}
          >
            Home
          </Link>
          <Link
            href="/return-trip"
            className={`transition-colors duration-200 ${
              pathname === "/return-trip" 
                ? "text-purple-800 font-bold text-lg" 
                : "text-white hover:text-purple-800 font-medium text-base"
            }`}
          >
            Return Trip
          </Link>
          <Link
            href="/about-us"
            className={`transition-colors duration-200 ${
              pathname === "/about-us" 
                ? "text-purple-800 font-bold text-lg" 
                : "text-white hover:text-purple-800 font-medium text-base"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/holiday-packages"
            className={`transition-colors duration-200 ${
              pathname === "/holiday-packages" 
                ? "text-purple-800 font-bold text-lg" 
                : "text-white hover:text-purple-800 font-medium text-base"
            }`}
          >
            Holiday Packages
          </Link>
          <Link
            href="/our-services"
            className={`transition-colors duration-200 ${
              pathname === "/our-services" 
                ? "text-purple-800 font-bold text-lg" 
                : "text-white hover:text-purple-800 font-medium text-base"
            }`}
          >
            Our Services
          </Link>
          <Link
            href="/latest-news"
            className={`transition-colors duration-200 ${
              pathname === "/latest-news" 
                ? "text-purple-800 font-bold text-lg" 
                : "text-white hover:text-purple-800 font-medium text-base"
            }`}
          >
            Latest News
          </Link>
        </nav>

        <Link
          href="/contact-us"
          className="flex px-5 py-2 justify-center items-center bg-purple-800 hover:bg-indigo-700 text-white rounded-md text-base font-bold z-[1]"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;