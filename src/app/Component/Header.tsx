
'use client';
import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen max-w-[1920px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/headerbg.png')`,
        }}
      >
        {/* Optional: Add overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 py-6 md:px-8 lg:px-16">
        {/* Logo */}
       <div className="flex items-center">
          <img 
            src="/headerlogo.png" 
            alt="Aakaar Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-8 text-white  2x1:text-[1.5rem] lg:text-[1rem] md:text-[.9rem] sm:text-[.8rem] font-semibold leading-8 ">
          <a href="#products" className="hover:text-gray-300 transition-colors">Products</a>
          <a href="#science" className="hover:text-gray-300 transition-colors">Science</a>
          <a href="#insights" className="hover:text-gray-300 transition-colors">Insights</a>
          <a href="#become-vm" className="hover:text-gray-300 transition-colors">Become a VM</a>
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
        </div>

        {/* Right Side Icons & Button */}
        <div className="flex items-center gap-4">
          {/* Search & Location Icons */}
          <div className="hidden md:flex cursor-pointer items-center gap-4 text-white">
            <button className="hover:text-gray-300 cursor-pointer transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M9.34616 0.00103823C4.19227 0.00103823 0 4.19308 0 9.34669C0 14.5003 4.19227 18.6923 9.34616 18.6923C11.6997 18.6923 13.8526 17.8174 15.4964 16.3778L20.7441 21.6252C20.9874 21.8685 21.3817 21.8685 21.6251 21.6252C21.8686 21.3818 21.8685 20.9875 21.6251 20.7429L16.3775 15.4956C17.8184 13.8504 18.6909 11.6987 18.6909 9.34565C18.6909 4.19204 14.4987 0 9.34478 0L9.34616 0.00103823ZM9.34616 1.24712C13.8271 1.24712 17.4462 4.86597 17.4462 9.34669C17.4462 13.8274 13.8271 17.4463 9.34616 17.4463C4.86519 17.4463 1.24615 13.8274 1.24615 9.34669C1.24615 4.86597 4.86519 1.24712 9.34616 1.24712Z" fill="white"/>
</svg>
            </button>
            <button className="hover:text-gray-300 cursor-pointer transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 19 25" fill="none">
<path d="M8.51575 23.9408C7.74025 22.6105 6.61764 21.1667 5.45275 19.6674C2.83402 16.2982 0 12.6531 0 8.93212C0 6.46653 1.01035 4.23223 2.64268 2.61632C4.27503 1.00034 6.53069 0 9.02209 0C11.5125 0 13.7693 1.00027 15.4015 2.61632C17.0338 4.2324 18.0442 6.46556 18.0442 8.93212C18.0442 12.6541 15.2114 16.2979 12.5927 19.6674C11.4277 21.1667 10.3051 22.6103 9.52966 23.9408C9.36929 24.2175 9.01188 24.3127 8.73239 24.154C8.6396 24.1007 8.56629 24.0269 8.51703 23.9408H8.51575ZM9.02173 4.86551C10.1558 4.86551 11.1833 5.32142 11.9269 6.05745L11.9578 6.09033C12.6829 6.82409 13.1308 7.82774 13.1308 8.93359C13.1308 10.0563 12.6703 11.0736 11.9269 11.8098C11.1834 12.5459 10.1559 13.0017 9.02172 13.0017C7.88997 13.0017 6.86244 12.5458 6.11903 11.8098C5.37329 11.0737 4.91282 10.0565 4.91282 8.93359C4.91282 7.81313 5.37332 6.79585 6.11676 6.05985C6.86019 5.32155 7.88756 4.86551 9.02173 4.86551ZM11.0974 6.87851C10.567 6.35343 9.83276 6.02795 9.02173 6.02795C8.2107 6.02795 7.47645 6.35343 6.94605 6.87851C6.41454 7.40359 6.08693 8.13054 6.08693 8.93349C6.08693 9.73643 6.41568 10.4634 6.94605 10.9885C7.47642 11.5147 8.2107 11.839 9.02173 11.839C9.83276 11.839 10.567 11.5135 11.0974 10.9885C11.6278 10.4634 11.9565 9.73643 11.9565 8.93349C11.9565 8.14303 11.6392 7.42629 11.1237 6.90348L11.0963 6.87853L11.0974 6.87851ZM6.37778 18.9609C7.33657 20.1948 8.26673 21.3912 9.02168 22.5479C9.77658 21.3911 10.7067 20.1935 11.6666 18.9597C14.166 15.7446 16.8705 12.265 16.8705 8.93329C16.8705 6.78759 15.9919 4.84502 14.5726 3.43863C13.1534 2.03351 11.19 1.16366 9.02263 1.16366C6.85527 1.16366 4.89318 2.03351 3.47262 3.43863C2.05334 4.84376 1.17474 6.78754 1.17474 8.93329C1.17474 12.2662 3.87924 15.7446 6.37871 18.9609H6.37778Z" fill="white"/>
</svg>
            </button>
          </div>

          {/* Contact Button */}
          <button className="bg-white text-black cursor-pointer px-4 py-2 md:px-6 md:py-2.5 rounded hover:bg-gray-100 transition-colors font-medium text-sm md:text-base flex items-center gap-2">
            CONTACT US
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="black"/>
</svg>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden relative z-10 bg-black/90 backdrop-blur-sm">
          <div className="flex flex-col items-start px-4 py-6 gap-4 text-white text-base font-semibold">
            <a href="#products" className="hover:text-gray-300 transition-colors w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#science" className="hover:text-gray-300 transition-colors w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Science</a>
            <a href="#insights" className="hover:text-gray-300 transition-colors w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Insights</a>
            <a href="#become-vm" className="hover:text-gray-300 transition-colors w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Become a VM</a>
            <a href="#about" className="hover:text-gray-300 transition-colors w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 px-2 md:px-1 lg:px-20 pt-12 md:pt-17 lg:pt-57 pb-16 md:pb-24">
        <div className="max-w-full">
          {/* Main Heading */}
          <h1 className="text-white text-4xl sm:text-[5.3rem] md:text-[5.5rem] lg:text-[5.8rem] 2xl:text-[6rem] mb-6 md:mb-8 leading-[6.6rem] font-medium">
            Unlock the<br />
            Architect Within
          </h1>

          {/* Subtitle */}
          <p className="text-white text-lg sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] 2x1:text-[1.5rem] mb-4 md:mb-6 font-semibold  leading-[2.1rem]">
            Italian Bio-Engineering. Indian Aesthetics.
          </p>

          {/* Description */}
          <p className="text-white text-base sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] 2x1:text-[1.5rem] font-normal max-w-2xl mb-8 md:mb-12  leading-[2.1rem]">
            Engineering the cellular narrative. Aakaar brings the world's<br className="hidden sm:block" />
            most precise synthetic exosome technology to India.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded hover:bg-gray-100 transition-colors font-medium text-[.9rem] md:text-[1rem] lg:text-[1.2rem] flex items-center gap-2 group uppercase leading-[1.9rem] cursor-pointer">
            DISCOVER THE SYSTEMS
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M14.9288 3.53534L1.46423 17L2.56016e-07 15.5358L13.4646 2.0711L1.46433 2.0711L1.46433 -1.65132e-06L17 1.06503e-06L17 15.5358L14.9289 15.5358L14.9288 3.53534Z" fill="black"/>
</svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;