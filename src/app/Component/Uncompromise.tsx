import React from 'react';
import Image from 'next/image';

const Uncompromise = () => {
    const features = [
        {
            id: 1,
            title: "Italian Origin",
            description: "Formulated in the laboratories of VM Corporation, Italy. Every vial represents the pinnacle of European biomedical innovation."
        },
        {
            id: 2,
            title: "Indian Precision",
            description: "Curated by Aakaar for the unique aesthetic needs of the Indian phenotype. We bring the world's best to your doorstep."
        },
        {
            id: 3,
            title: "Certified Application",
            description: "Available only through certified medical practitioners. Our systems require expert hands for optimal results."
        }
    ];

    return (
        <section className="bg-white py-20 px-6 md:px-20 font-sans">
            <div className="max-w-full mx-auto">
                {/* Main Heading */}
                <h2 className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[96px] 2xl:text-[96px] font-medium text-[#000] mb-16 ">
                    Uncompromising Quality
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Product Image */}
                    <div className="relative flex justify-center items-center">
                        {/* Soft Shadow behind the bottle */}
                        <div className="absolute w-64 h-80 bg-gray-50 rounded-full blur-3xl opacity-30 -z-10 transform translate-x-10 translate-y-10"></div>

                        {/* Replace with your actual image path */}
                        <img
                            src="Uncompromise-img.png"
                            alt="V-Tech Serum Bottle"
                            className="w-full max-w-sm h-auto drop-shadow-2xl"
                        />
                    </div>

                    {/* Right Side: Step-by-Step List */}
                    <div className="relative space-y-12">
                        {/* Vertical Connecting Line */}
                        <div
                            className="absolute left-13 top-13 bottom-13 w-[1px] bg-[#000] transform -translate-x-1/2"
                            aria-hidden="true"
                        ></div>

                        {features.map((feature) => (
                            <div key={feature.id} className="relative flex gap-8 group">
                                {/* Circle Number */}
                                <div className="relative z-10 flex-shrink-0 w-25 h-25 rounded-full border border-[#000] bg-white flex items-center justify-center text-[64px] text-[#000]">
                                    {feature.id}
                                </div>

                                {/* Content */}
                                <div className="pt-1">
                                    <h3 className="text-2xl font-semibold text-[#000] mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#000] leading-relaxed text-sm md:text-base max-w-md">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Uncompromise;