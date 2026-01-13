'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

const systems = [
  {
    title: "Exosignal Hair",
    image: "System-img1.png",
    hover: "System-hover-img1.png",
    link: "#",
  },
  {
    title: "V-Tech System",
    image: "System-img2.png",
    hover: "System-hover-img2.png",
    link: "#",
  },
  {
    title: "V Carbon System",
    image: "System-img3.png",
    hover: "System-hover-img3.png",
    link: "#",
  },
  {
    title: "ZK Face",
    image: "System-img4.png",
    hover: "System-hover-img4.png",
    link: "#",
  },
  {
    title: "V-Tech System",
    image: "System-img2.png",
    hover: "System-hover-img1.png",
    link: "#",
  },
  {
    title: "V Carbon System",
    image: "System-img3.png",
    hover: "System-hover-img2.png",
    link: "#",
  },
  {
    title: "ZK Face",
    image: "System-img4.png",
    hover: "System-hover-img4.png",
    link: "#",
  },
];

export default function Systems() {
  return (
    <section className="w-full pl-3 sm:pl-10 lg:pl-10 md:pl-20 py-20">
      {/* Title */}
      <h2 className="w-full text-[44px] sm:text-[96px] md:text-[96px] lg:text-[96px] xl:text-[96px] 2xl:text-[96px] text-[#000] leading-15 font-semibold sm:font-medium md:font-medium lg:font-medium xl:font-medium 2xl:font-medium  mb-12">
        The Systems
      </h2>

      {/* Slider */}
      <Swiper
        modules={[Scrollbar]}
        slidesPerView={1.2}
        scrollbar={{ draggable: true }}
        // className=""
       spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            400: { slidesPerView: 1 },
            768: { slidesPerView: 1, spaceBetween: 0 },
            1024: { slidesPerView: 2, spaceBetween: 10 },
            1440: { slidesPerView: 2.5, spaceBetween: 0 },
            1530: { slidesPerView: 3, spaceBetween: 0 },
            2000: { slidesPerView: 4, spaceBetween: 0 },
            2270: { slidesPerView: 4.5, spaceBetween: 0 },
        }}
        className="systems-swiper"
      >
        {systems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col w-full">
              {/* Image */}
              <div className="relative w-[300px]  h-[510px] sm:w-[478px] sm:h-[510px] md:w-[500px] md:h-[510px] lg:w-[478px] lg:h-[510px]  aspect-[3/4] rounded-[12px] overflow-hidden bg-black group">
                {/* Default image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full  h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />

                {/* Hover image */}
                <img
                  src={item.hover}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>


              {/* Text */}
              <div className="mt-5 w-[1920px] h-[130px]">
                <h3 className="text-[32px] font-semibold leading-[42px] w-full mb-2">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="text-[24px] underline uppercase font-normal leading-[34px] inline-flex items-center gap-2 hover:opacity-70 transition"
                >
                  View System
                  <img src="System-arrow.png" alt="Arrow" className="mx-2"/>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scrollbar styling */}
      <style>
        {`
          .systems-swiper .swiper-scrollbar {
            margin-top: 40px;
            height: 15px;
            background: #D9D9D9;
            border-radius:9999px;
          }

          .systems-swiper .swiper-scrollbar-drag {
          width:full;
            background-color : #202020;
            border-radius:999px;          }
        `}
      </style>
    </section>
  );
}
