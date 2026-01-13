'use client';
import React from 'react';

const White = () => {
  const papers = [
    {
      title: 'Effectiveness and Safety of The Cosmetic Product "V-tech Serum" of Vm Corporation',
    },
    {
      title: 'Effectiveness and Safety of The Cosmetic Product "v-tech System" of Vm Corporation',
    },
    {
      title: 'Effectiveness and Safety of A Galenic Preparation Based on Syntetic Exosomes Enriched',
    },
    {
      title: 'Description Of The Production Technique Of Synthetic Exosomes Using "Superexoformation"',
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Container with responsive padding */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-[5rem] md:text-[5.3rem] lg:text-[5.6rem] xl:text-[6rem] text-[#000000] font-medium leading-[106px] mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28">
            White Paper
          </h2>
          
          {/* Grid of Papers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20 gap-y-12 sm:gap-y-14 md:gap-y-16 lg:gap-y-20 xl:gap-y-24">
            {papers.map((paper, index) => (
              <div key={index} className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Title */}
                {/* <h3 className="text-xl sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-medium text-[#000000] leading-[42px] pr-0 lg:pr-8">
                  {paper.title}
                </h3> */}

                <h3 className="text-xl sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-medium text-[#000000] leading-tight lg:leading-[42px] 
               w-full max-w-none lg:max-w-[80%] xl:max-w-[850px]">
  <span className="block md:inline">
    {paper.title}
  </span>
</h3>
                
                {/* Learn More Link */}
                <a 
                  href="#" 
                  className="group inline-flex items-center gap-2 text-sm sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]  font-medium text-[#000000] transition-colors duration-300 border-b border-[#000000] hover:border-gray-300 pb-1"
                >
                  LEARN MORE
                 <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="black"/>
</svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default White;