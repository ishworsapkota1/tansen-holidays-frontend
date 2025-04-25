"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const PackageReview = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    // Responsive breakpoints
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="my-4">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index}>
            <div className="bg-zinc-100 p-6 rounded-lg mx-4 flex flex-col items-center space-y-4">
              <Image
                src={item.img}
                alt="img"
                width={1000}
                height={1000}
                className="w-20 h-20 rounded-full object-cover"
              />
              <h2 className="font-semibold">{item.name}</h2>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon="material-symbols:star" className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="text-sm font-medium text-zinc-600 text-center lg:w-[80%] mx-auto line-clamp-4">
                {item.message}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PackageReview;
const testimonials = [
  {
    name: "Globewanderer",
    message:
      "A memorable and enjoyable relaxing virgin trip to Nepal! Mr. Akash and his team took good care of us, making the tour pleasant and comfortable ",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shuhua T",
    message:
      "Had an amazing trek in Nepal with epeak expedition! The guides were professional, knowledgeable, and friendly, ensuring we were safe and comfortable throughout",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pei Jean C",
    message:
      "Completed the Annapurna Base Camp trek with epeak expedition! Quality service and safety were top-notch. Definitely not my last adventure with them",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Negar Zamanpour",
    message:
      "Great travel experience with epeak expedition Holidays! Ramesh, our guide, was professional and kind, making the trip feel secure and enjoyable",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Daniel T",
    message:
      "One of the best trekking experiences I’ve had! epeak expedition Holidays provided attentive guides, excellent porter service, and thoughtful planning, making for a seamless trekking experience",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
