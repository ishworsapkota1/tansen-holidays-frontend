"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
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

        <nav className="flex items-center gap-5">
          <Link
            href="/"
            className={`transition-colors duration-200 font-bold ${
              pathname === "/"
                ? "text-primary-100 "
                : "text-gray-500 hover:text-primary-100  text-base"
            }`}
          >
            Home
          </Link>
          <Link
            href="/return-trip"
            className={`transition-colors duration-200 font-bold ${
              pathname === "/return-trip"
                ? "text-primary-100 "
                : "text-gray-500 hover:text-primary-100  text-base"
            }`}
          >
            Return Trip
          </Link>
          <Link
            href="/about-us"
            className={`transition-colors duration-200 font-bold ${
              pathname === "/about-us"
                ? "text-primary-100 "
                : "text-gray-500 hover:text-primary-100  text-base"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/holiday-packages"
            className={`transition-colors duration-200 font-bold ${
              pathname === "/holiday-packages"
                ? "text-primary-100 "
                : "text-gray-500 hover:text-primary-100  text-base"
            }`}
          >
            Holiday Packages
          </Link>
          <Link
            href="/our-services"
            className={`transition-colors duration-200 font-bold ${
              pathname === "/our-services"
                ? "text-primary-100 "
                : "text-gray-500 hover:text-primary-100  text-base"
            }`}
          >
            Our Services
          </Link>
          <Link
            href="/latest-news"
            className={`transition-colors duration-200 font-bold ${
              pathname === "/latest-news"
                ? "text-primary-100 "
                : "text-gray-500 hover:text-primary-100  text-base"
            }`}
          >
            Latest News
          </Link>
        </nav>

        <Link
          href="/contact-us"
          className="flex px-5 py-2 justify-center items-center bg-purple-800 hover:bg-primary-100 text-white rounded-md text-base font-bold"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;