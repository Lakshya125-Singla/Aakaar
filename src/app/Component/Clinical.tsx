'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";


interface ClinicalCardProps {
    title: string;
    description: string;
    image: string;
}

const ClinicalCard = ({ title, description, image }: ClinicalCardProps) => (
   <div className="flex flex-col h-full bg-white border border-gray-100 rounded-sm overflow-hidden group">
        <div className="p-8  flex flex-col h-[250px] justify-between">
            <h3 className="text-[32px] font-semibold leading-[42px] w-full  display-block">{title}</h3>
            <p className="text-[#000] leading-relaxed text-sm md:text-base max-w-md mb-10">
                {description}
            </p>
            <a
                  href="#"
                  className="inline-flex items-center text-xs font-bold tracking-widest underline uppercase hover:text-gray-500 hover:border-gray-500 transition-colors group/link"
                >
                  Read the Article
                  <img src="System-arrow.png" alt="Arrow" className="ml-1 w-4 h-4"/>
                </a>
            {/* <a
                href="#"
                className="inline-flex justify-end items-center text-xs font-bold tracking-widest uppercase border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
            >
                Read the Article <img src="System-arrow.png" alt="" className="ml-2 w-4 h-4"/>
            </a> */}
        </div>
        <div className="relative h-64 w-full">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-500"
            />
        </div>
    </div>
);


export default function Clinic() {
     const articles = [
        {
            title: "The Metabolic Shock",
            description: "Stubborn fat resists diet. Learn how the Lipo-Break Complex reduces adipocyte volume without invasive surgery.",
            image: "Clinical-img1.png"
        },
        {
            title: "Meet Gabellina™",
            description: "The molecule behind the lift. Understanding the immediate tightening effect of Gamma-Aminobutyric Acid.",
            image: "Clinical-img2.png"
        },
        {
            title: "The Clinic Experience",
            description: "What to expect during your bio-restructuring session. A guide to the Exovea patient journey.",
            image: "Clinical-img3.png"
        },
        {
            title: "Safety First",
            description: "Synthetic vs. Biological: Why laboratory precision and clinical variability matter for your results.",
            image: "Clinical-img4.png"
        },
        {
            title: "The Metabolic Shock",
            description: "Stubborn fat resists diet. Learn how the Lipo-Break Complex reduces adipocyte volume without invasive surgery.",
            image: "Clinical-img1.png"
        },
        {
            title: "Meet Gabellina™",
            description: "The molecule behind the lift. Understanding the immediate tightening effect of Gamma-Aminobutyric Acid.",
            image: "Clinical-img2.png"
        },
        {
            title: "The Clinic Experience",
            description: "What to expect during your bio-restructuring session. A guide to the Exovea patient journey.",
            image: "Clinical-img3.png"
        },
        {
            title: "Safety First",
            description: "Synthetic vs. Biological: Why laboratory precision and clinical variability matter for your results.",
            image: "Clinical-img4.png"
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-full pl-3 sm:pl-10 lg:pl-10 md:pl-20">
                <h2 className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[96px] 2xl:text-[96px] font-medium text-[#000] mb-10 ">Clinical Intelligence</h2>


                {/* Slider */}
                <Swiper
                    modules={[Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        
                         640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.1 },
                        1280: { slidesPerView: 3.5 },
                       
                    }}
                    className="systems-swiper"
                >
                    {articles.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ClinicalCard {...item} />
                            <div className="mt-10"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
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
