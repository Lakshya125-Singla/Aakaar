'use client';
import React from 'react';

const UnapologeticScienceSection = () => {
  return (
    <section className="relative w-full bg-[#F8F9FA] overflow-hidden">
      {/* Container with responsive padding */}
      <div className="max-w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-12 2xl:gap-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
          
          {/* Left Content */}
          <div className="w-full lg:w-[48%] xl:w-[48%] flex flex-col lg:pr-6 xl:pr-8 2xl:pr-12">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
              {/* Heading */}
              <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[5.25rem] 2xl:text-[6rem] leading-[1.1] font-medium">
                Unapologetic Science
              </h2>
              
              {/* Subheading */}
              <p className="text-black text-base sm:text-lg md:text-xl lg:text-[1.25rem] xl:text-[1.375rem] 2xl:text-[1.5rem] font-semibold leading-[1.4]">
                Hope is a poor strategy. Engineering offers certainty.
              </p>
              
              {/* Description */}
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-[1.125rem] xl:text-[1.25rem] 2xl:text-[1.375rem] font-normal leading-[1.6]">
                Surface treatments fade. Cellular architecture endures. We utilize Super-Exo Technology to shield delicate peptides from enzymatic destruction. The payload arrives intact. Real repair starts deep.
              </p>
            </div>
            
            {/* CTA Link */}
            <a 
              href="#" 
              className="group inline-flex items-center gap-2 text-sm sm:text-base md:text-lg lg:text-[1.125rem] xl:text-[1.25rem] font-medium text-black border-b-2 border-solid border-black pb-1 mt-6 sm:mt-7 md:mt-8 lg:mt-20 xl:mt-20 self-start"
            >
              Unlock your biological potential
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-[17px] lg:h-[17px]">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="black"/>
              </svg>
            </a>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-[48%] xl:w-[48%]">
            <div className="relative w-full h-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[500px] 2xl:min-h-[570px]">
              <img 
                src="/science.png" 
                alt="Golden skincare visual" 
                className="w-full h-full object-cover rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnapologeticScienceSection;




