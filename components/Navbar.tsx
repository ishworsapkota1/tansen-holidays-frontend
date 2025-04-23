import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-gray-200'
          : 'bg-transparent-white backdrop-blur-[15px] border-b border-[#DDD]'
      }`}
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
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>
        </div>

        <nav className="flex items-center gap-5">
          <Link href="/" className="text-purple-900 font-medium">
            Home
          </Link>
          <Link href="/return-trip" className="text-gray-500">
            Return Trip
          </Link>
          <Link href="/about-us" className="text-gray-500">
            About Us
          </Link>
          <Link href="/holiday-packages" className="text-gray-500">
            Holiday Packages
          </Link>
          <Link href="/our-services" className="text-gray-500">
            Our Services
          </Link>
          <Link href="/latest-news" className="text-gray-500">
            Latest News
          </Link>
        </nav>

        <Link
          href="/contact-us"
          className="flex px-5 py-2 justify-center items-center bg-purple-800 text-white rounded-md"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;