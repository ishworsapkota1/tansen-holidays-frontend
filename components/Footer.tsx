// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from "@iconify/react";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {

  // Static links and information
  const aboutUsLinks = [
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Why Us", href: "/why-us" },
    { name: "FAQs", href: "/faqs" },
    { name: "Sitemaps", href: "/sitemaps" },
    { name: "Contact", href: "/contact" }
  ];

  const usefulLinks = [
    { name: "Holidays", href: "/holidays" },
    { name: "Blog", href: "/blog" },
    { name: "Tours", href: "/tours" },
    { name: "Taxi", href: "/taxi" },
    { name: "Tansen Yatayat", href: "/tansen-yatayat" }
  ];

  const topRoutes = [
    { name: "Tansen - Bairabhwa", href: "/routes/tansen-bairabhwa" },
    { name: "Tansen - Kathmandu", href: "/routes/tansen-kathmandu" },
    { name: "Kathmandu - Tansen", href: "/routes/kathmandu-tansen" },
    { name: "Bairabhwa - Tansen", href: "/routes/bairabhwa-tansen" },
    { name: "Pokhara - Tansen", href: "/routes/pokhara-tansen" }
  ];

  const contactDetails = [
    { title: "+977 9749762222" },
    { title: "01-42565321" },
    { title: "info@tansenholidays.com" },
    { title: "book@tansenholidays.com" }
  ];

  const socialLinks = [
    { icon: "logos:facebook", path: "#" },
    { icon: "skill-icons:instagram", path: "#" },
    { icon: "devicon:twitter", path: "#" },
  ];

  const partners = [
    { img: "/Payment/khalti.png", name: "Khalti" },
    { img: "/Payment/esewa.png", name: "eSewa" },
    { img: "/Payment/fonepay.png", name: "Fonepay" }
  ];

  return (
    <footer
      className="bg-white relative "
    >
      <Image
        src="/Footer/footer.webp"
        alt="footer-img"
        width={1000}
        height={1000}
        className="w-full h-[45vh] object-cover absolute bottom-0 z-[0]"
      />

      {/* Partners Section */}
      <div className="flex flex-col items-center gap-14 text-center relative z-[2]">
        <div className="w-11/12 flex justify-between items-center gap-10 mx-auto">
          <div className=' w-full border border-dashed h-px border-zinc-400'/>
          <p className="w-fit text-nowrap text-[rgba(241,96,42,1)] text-3xl font-medium">Associated partner</p>
          <div className='w-full border border-dashed h-px border-zinc-400'/>
        </div>
        
        <div className="flex justify-center items-center gap-20 mb-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="w-40">
              <Image 
                src={partner.img} 
                alt={partner.name} 
                width={160} 
                height={80} 
              />
            </div>
          ))}
        </div>
        <div className='w-11/12 border border-dashed h-px border-zinc-400 mx-auto'/>
      </div>

      {/* Footer Links Section */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-8 w-11/12 mx-auto pt-8 mb-[18rem] relative z-[2]">
        {/* About Us Column */}
        <div>
          <h3 className="text-gray-700 text-xl font-medium mb-4">About Us</h3>
          <div className="space-y-2">
            {aboutUsLinks.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className="font-medium text-sm text-zinc-600 hover:ml-2 ease-in-out duration-300 hover:text-[rgba(241,96,42,1)]"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Useful Links Column */}
        <div>
          <h3 className="text-gray-700 text-xl font-medium mb-4">Useful Links</h3>
          <div className="space-y-2">
            {usefulLinks.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className="font-medium text-sm text-zinc-600 hover:ml-2 ease-in-out duration-300 hover:text-[rgba(241,96,42,1)]"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Top Routes Column */}
        <div>
          <h3 className="text-gray-700 text-xl font-medium mb-4">Top Routes</h3>
          <div className="space-y-2">
            {topRoutes.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className="font-medium text-sm text-zinc-600 hover:ml-2 ease-in-out duration-300 hover:text-[rgba(241,96,42,1)]"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="text-gray-700 text-xl font-medium mb-4">Contact Info</h3>
          <div className="space-y-2">
            {contactDetails.map((item, index) => (
              <div key={index}>
                <p className="font-medium text-sm text-zinc-600">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links Column */}
        <div>
          <h3 className="text-gray-700 text-xl font-medium mb-4">Social Links</h3>
          <p className="font-medium text-sm text-zinc-600 mb-4">+977 9749762222</p>
          <div className="flex gap-4">
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="text-purple-900 text-2xl hover:scale-110 ease-in-out duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={item.icon}></Icon>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-11/12 relative z-[2] mx-auto py-6 flex flex-wrap gap-y-2 md:justify-between justify-center items-center font-medium text-black sm:text-sm text-xs mt-14">
        <p className="whitespace-nowrap">
          2020 © All Rights Reserved | Tansen Holidays Pvt. Ltd.
        </p>

        <div className="flex items-start gap-1">
          <p>Designed and Developed By</p>
          <span>
            <Image
            src="/Logo/webx.png"
            alt=''
            height={50}
            width={50}
            className=''
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;