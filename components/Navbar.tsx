"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname(); 

  return (
    <header
      className={`py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-200$`}
    >
      <div className="flex w-11/12 mx-auto justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-36 h-10">
              <Image
                src="/Logo/Logo.png"
                alt="Tansen Holidays"
                fill
                sizes="(max-width: 768px) 100vw, 135px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>
        </div>

        <nav className="flex items-center gap-5">
          <Link
            href="/"
            className={`text-base font-semibold transition-colors duration-200 ${
              pathname === "/" ? "text-purple-800" : "text-zinc-500 hover:text-purple-800"
            }`}
          >
            Home
          </Link>
          <Link
            href="/return-trip"
            className={`text-base font-semibold transition-colors duration-200 ${
              pathname === "/return-trip" ? "text-purple-800" : "text-zinc-500 hover:text-purple-800"
            }`}
          >
            Return Trip
          </Link>
          <Link
            href="/about-us"
            className={`text-base font-semibold transition-colors duration-200 ${
              pathname === "/about-us" ? "text-purple-800" : "text-zinc-500 hover:text-purple-800 "
            }`}
          >
            About Us
          </Link>
          <Link
            href="/holiday-packages"
            className={`text-base font-semibold transition-colors duration-200 ${
              pathname === "/holiday-packages" ? "text-purple-800" : "text-zinc-500 hover:text-purple-800"
            }`}
          >
            Holiday Packages
          </Link>
          <Link
            href="/our-services"
            className={`text-base font-semibold transition-colors duration-200 ${
              pathname === "/our-services" ? "text-purple-800 " : "text-zinc-500 hover:text-purple-800"
            }`}
          >
            Our Services
          </Link>
          <Link
            href="/latest-news"
            className={`text-base font-semibold transition-colors duration-200 ${
              pathname === "/latest-news" ? "text-purple-800 " : "text-zinc-500 hover:text-purple-800 text-base"
            }`}
          >
            Latest News
          </Link>
        </nav>

        <Link
          href="/contact-us"
          className="flex px-5 py-2 justify-center items-center bg-purple-800 text-white rounded-md text-base font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;