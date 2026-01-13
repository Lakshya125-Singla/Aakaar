// 'use client';
// import React from 'react';

// const BiotechSection = () => {
//   return (
//     <div className="bg-[#202020] text-white min-h-screen">
//       {/* Top Header Section - Matching the video's padding and scale */}
//       <div className="max-w-full -space-y-px">
//         <div className="px-6 py-12 md:px-4 md:py-20">
//           <h1 className="text-white text-4xl sm:text-[5.3rem] md:text-[5.5rem] lg:text-[5.8rem] 2xl:text-[6rem] leading-[6.6rem] font-medium tracking-tight">
//             Unseen Engineering
//           </h1>
//         </div>
//       </div>

//       <div className="max-w-full">
        
//         {/* --- SECTION 1: SUPER-EXO --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           <div className="aspect-square flex items-center justify-center overflow-hidden">
//             <img src="/unseen1.png" alt="Super-Exo" className="2x1:w-[850px] 2x1:w-[600px] object-cover rounded-t-lg rounded-bl-lg" />
//           </div>
//           <div className="p-8 md:p-20 lg:p-32 flex flex-col justify-center">
//             <h2 className="text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-6 leading-[3.6rem] tracking-tight">
//               Super-Exo Technology
//             </h2>
//             <p className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] leading-[2.1rem] mb-10 max-w-md">
//               Biological actives remain fragile. Our synthetic 100nm spheres protect the payload from enzymatic attack. Ingredients reach the receptor intact.
//             </p>
//             <button className="flex items-center gap-3 border-0.8 rounded-2xl border-white w-fit px-10 py-6 text-[.7rem] md:text-[1rem] lg:text-[1.2rem] leading-[1.9rem] tracking-[0.2em] uppercase bg-white text-black">
//               Read the Science
//               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
// <path fillRule="evenodd" clipRule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="black"/>
// </svg>
//             </button>
//           </div>
//         </div>

//         {/* --- SECTION 2: THE FUEL (Reversed - Text Left, Image Right) --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           <div className="order-2 md:order-1 p-8 md:p-20 lg:p-32 flex flex-col justify-center">
//             <h2 className="text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-6 leading-[3.6rem] tracking-tight">
//               Engine The Fuel
//             </h2>
//             <p className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] leading-[2.1rem] mb-10 max-w-md">
//               Peptides transcend hydration. Signal fibroblasts to wake up. The skin reconstructs from the inside out.
//             </p>
//             <button className="flex items-center gap-3 border-0.8 rounded-2xl border-white w-fit px-10 py-6 text-[.7rem] md:text-[1rem] lg:text-[1.2rem] leading-[1.9rem] tracking-[0.2em] uppercase bg-white text-black">
//               Read the Science
//               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
// <path fillRule="evenodd" clipRule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="black"/>
// </svg>
//             </button>
//           </div>
//           <div className="order-1 md:order-2 aspect-square flex items-center justify-center overflow-hidden">
//             <img src="/unseen2.png" alt="The Fuel" className="2x1:w-[850px] 2x1:w-[600px] object-cover rounded-tr-lg rounded-b-lg" />
//           </div>
//         </div>

//         {/* --- SECTION 3: BIOMIMETIC PEPTIDES --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           <div className="aspect-square flex items-center justify-center overflow-hidden">
//             <img src="/unseen3.png" alt="Biomimetic Peptides" className="2x1:w-[850px] 2x1:w-[600px] object-cover rounded-tl-lg rounded-b-lg" />
//           </div>
//           <div className="p-8 md:p-20 lg:p-32 flex flex-col justify-center">
//             <h2 className="text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-6 leading-[3.6rem] tracking-tight">
//               Biomimetic Peptides
//             </h2>
//             <p className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] leading-[2.1rem] mb-10 max-w-md">
//               We speak the language of your cells. Laboratory-designed chains trigger predictable repair responses.
//             </p>
//             <button className="flex items-center gap-3 border-0.8 rounded-2xl border-white w-fit px-10 py-6 text-[.7rem] md:text-[1rem] lg:text-[1.2rem] leading-[1.9rem] tracking-[0.2em] uppercase bg-white text-black">
//               Read the Science
//               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
// <path fillRule="evenodd" clipRule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="black"/>
// </svg>
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default BiotechSection;

'use client';
import React from 'react';

const BiotechSection = () => {
  return (
    <div className="bg-[#202020] text-white min-h-screen">
      {/* Top Header Section - Matching the video's padding and scale */}
      <div className="max-w-full">
        <div className="px-6 py-12 md:px-4 md:py-20">
          <h1 className="text-white text-4xl sm:text-[5.3rem] md:text-[5.5rem] lg:text-[5.8rem] 2xl:text-[6rem] leading-[6.6rem] font-medium tracking-tight">
            Unseen Engineering
          </h1>
        </div>
      </div>

      <div className="max-w-full -space-y-1">
        
        {/* --- SECTION 1: SUPER-EXO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 -mb-1">
          <div className="aspect-square flex items-center justify-center overflow-hidden bg-[#202020]">
            <img src="/unseen1.png" alt="Super-Exo" className="max-w-[864px] max-h-[619px] w-auto h-auto object-contain rounded-t-lg rounded-bl-lg" />
          </div>
          <div className="p-8 md:p-20 lg:p-32 flex flex-col justify-center bg-[#202020]">
            <h2 className="text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-6 leading-[3.6rem] tracking-tight">
              Super-Exo Technology
            </h2>
            <p className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] leading-[2.1rem] mb-10 max-w-md">
              Biological actives remain fragile. Our synthetic 100nm spheres protect the payload from enzymatic attack. Ingredients reach the receptor intact.
            </p>
            <button className="flex items-center gap-3 border-0.8 rounded-2xl border-white w-fit px-10 py-6 text-[.7rem] md:text-[1rem] lg:text-[1.2rem] leading-[1.9rem] tracking-[0.2em] uppercase bg-white text-black">
              Read the Science
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="black"/>
</svg>
            </button>
          </div>
        </div>

        {/* --- SECTION 2: THE FUEL (Reversed - Text Left, Image Right) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 -mb-1">
          <div className="order-2 md:order-1 p-8 md:p-20 lg:p-32 flex flex-col justify-center bg-[#202020]">
            <h2 className="text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-6 leading-[3.6rem] tracking-tight">
              Engine The Fuel
            </h2>
            <p className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] leading-[2.1rem] mb-10 max-w-md">
              Peptides transcend hydration. Signal fibroblasts to wake up. The skin reconstructs from the inside out.
            </p>
            <button className="flex items-center gap-3 border-0.8 rounded-2xl border-white w-fit px-10 py-6 text-[.7rem] md:text-[1rem] lg:text-[1.2rem] leading-[1.9rem] tracking-[0.2em] uppercase bg-white text-black">
              Read the Science
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="black"/>
</svg>
            </button>
          </div>
          <div className="order-1 md:order-2 aspect-square flex items-center justify-center overflow-hidden bg-[#202020]">
            <img src="/unseen2.png" alt="The Fuel" className="max-w-[864px] max-h-[619px] w-auto h-auto object-contain rounded-tr-lg rounded-b-lg" />
          </div>
        </div>

        {/* --- SECTION 3: BIOMIMETIC PEPTIDES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square flex items-center justify-center overflow-hidden bg-[#202020]">
            <img src="/unseen3.png" alt="Biomimetic Peptides" className="max-w-[864px] max-h-[619px] w-auto h-auto object-contain rounded-tl-lg rounded-b-lg" />
          </div>
          <div className="p-8 md:p-20 lg:p-32 flex flex-col justify-center bg-[#202020]">
            <h2 className="text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-6 leading-[3.6rem] tracking-tight">
              Biomimetic Peptides
            </h2>
            <p className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] leading-[2.1rem] mb-10 max-w-md">
              We speak the language of your cells. Laboratory-designed chains trigger predictable repair responses.
            </p>
            <button className="flex items-center gap-3 border-0.8 rounded-2xl border-white w-fit px-10 py-6 text-[.7rem] md:text-[1rem] lg:text-[1.2rem] leading-[1.9rem] tracking-[0.2em] uppercase bg-white text-black">
              Read the Science
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="black"/>
</svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BiotechSection;