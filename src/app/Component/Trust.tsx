'use client';
import React from 'react';


const Trust = () => {
  return (
    <section className="relative w-full bg-[#F8F9FA] overflow-hidden">
      {/* Container with responsive padding */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 xl:w-[55%] space-y-6 sm:space-y-8 lg:pr-8 xl:pr-12">
            {/* Heading */}
            <h1 className="text-4xl sm:text-[5rem] md:text-[5.3rem] lg:text-[5.6rem] xl:text-[6rem] text-[#000000] font-medium leading-[106px]">
              Trusted by the Elite
            </h1>
            
            {/* Description */}
<p className="text-base sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] text-[#000000] leading-loose max-w-none">
 
  <span className="inline-block md:whitespace-nowrap">
    Your skin deserves precision. Aakaar partners exclusively with India's
  </span><br />

 
  <span className="inline-block md:whitespace-nowrap">
    premier dermatologists and aesthetic practitioners. Ask your doctor about
  </span><br />

  the Exovea portfolio
</p>
            
            {/* CTA Button */}
            <button className="group inline-flex items-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md leading-[0.9rem] uppercase text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-medium mt-2">
              FIND A PARTNER CLINIC
              
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="white"/>
</svg>
            </button>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 xl:w-[45%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none">
              {/* Placeholder for your image */}
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-lg flex items-center justify-center">
                <img 
                  src="/doctors.png" 
                  alt="Medical Professionals" 
                  className="w-full h-full object-cover"
                />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;