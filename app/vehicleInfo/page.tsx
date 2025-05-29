"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const page = () => {
  const Photos = [
    { id: 1, image: "/Vehivle/bus.jpeg" },
    { id: 2, image: "/Vehivle/EV-van.png" },
    { id: 3, image: "/Vehivle/haice.png" },
    { id: 4, image: "/Vehivle/haice.png" },
  ];
  return (
    <div className="my-20  p-20 flex justify-between flex-row mx-auto">
      <div className="w-[500px]">
        <div>
          <Image width={500} height={500} src="/Vehivle/bus.jpeg" alt=".." />
        </div>
        <div className="  w-1xl">
          <Swiper
            modules={[Navigation, Pagination]}
            // spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            {Photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className=" h-24 w-full object-contain ">
                  <Image
                    src={photo.image}
                    alt={`Photo ${photo.id}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
        accusantium molestiae fugit magni sint explicabo, eaque fuga debitis
        natus quidem ducimus sunt odio aliquid, numquam, dicta laudantium vitae
        corrupti architecto. Accusamus explicabo ullam illum nisi quas animi id
        quae ea sit fugit officiis modi repellat sunt praesentium ex architecto,
        placeat libero iure quibusdam aliquam consectetur? Enim sapiente dolorem
        dolor magni et ipsam officiis deserunt consectetur suscipit voluptate,
        omnis repellat alias quaerat quae, itaque quas vero aliquid, temporibus
        eaque. Sit quas at saepe alias accusantium eos, voluptatibus consectetur
        officiis quis doloremque nisi doloribus! Incidunt suscipit adipisci quod
        eum. Atque eaque debitis rem! Repellendus rem laboriosam ipsa dolore
        est. Enim fugit minima pariatur voluptate qui voluptatibus sapiente cum,
        impedit culpa dolor aperiam sunt ut debitis eligendi accusamus
        doloremque vero nam! Pariatur vitae laboriosam officiis impedit ea
        itaque molestias illum, veniam error iure sed nihil, atque rerum
        obcaecati. Dignissimos et voluptatem, mollitia beatae omnis nam maxime
        possimus! Similique pariatur ab tenetur modi distinctio magnam deserunt,
        voluptas, saepe dicta reprehenderit consectetur praesentium illum ea?
        Atque voluptatibus aperiam aspernatur corporis placeat! Aut harum odit
        obcaecati quidem cumque numquam sequi sit iusto cum, doloribus maxime
        deserunt odio animi nihil at iste nisi! Tenetur nesciunt sit voluptate. q
      </div>
    </div>
  );
};

export default page;
<style jsx global>{`
  .swiper-button-next,
  .swiper-button-prev {
    font-size: 18px;
    font-weight: bold;
    color: #000; /* optional: make arrows black */
    scale: 0.8; /* optional: make arrows slightly smaller */
  }
`}</style>;
