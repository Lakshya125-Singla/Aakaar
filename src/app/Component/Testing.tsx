"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

import { ArrowUpRight } from 'lucide-react'; // Optional: for the link icon

// Import Swiper styles

interface ClinicalCardProps {
    title: string;
    description: string;
    image: string;
}

const ClinicalCard = ({ title, description, image }: ClinicalCardProps) => (
    <div className="flex flex-col h-full bg-white border border-gray-100 rounded-sm overflow-hidden group">
        <div className="p-8 flex-grow">
            <h3 className="text-2xl font-medium mb-4 text-black">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {description}
            </p>
            <a
                href="#"
                className="inline-flex items-center text-xs font-bold tracking-widest uppercase border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
            >
                Read the Article <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>
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

const Testing = () => {
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
            <div className="max-w-[1440px] mx-auto px-6">
                <h2 className="text-5xl font-semibold mb-12 text-black">Clinical Intelligence</h2>

                <Swiper
                  modules={[Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        
                         640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.2 },
                        1280: { slidesPerView: 4 },
                       
                    }}
                    className="clinical-swiper"
                >
                    {articles.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ClinicalCard {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Progress Bar / Pagination */}
                {/* <div className="mt-12 w-full h-[2px] bg-gray-200 relative">
                    <div className="custom-pagination absolute top-0 left-0 w-full flex" />
                </div> */}
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
};

export default Testing;