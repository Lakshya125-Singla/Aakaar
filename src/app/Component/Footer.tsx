'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-[#ffffff]/25  border-x-transparent">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h2 className="sm:text-[4.3rem] md:text-[4.6] lg:text-[5rem] font-normal leading-[5.1rem] mb-3 md:mb-4">
                Join the Inner Circle
              </h2>
              <p className="sm:text-[.9rem] md:text-[1rem] lg:text-[1.2rem] font-normal leading-[2.1rem]">
                Receive the latest on cellular architecture and aesthetic innovation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:min-w-[400px]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-[#ffffff]/40 bg-transparent border border-text-[#ffffff]/40 rounded focus:outline-none transition-colors text-sm sm:text-base font-medium lg:text-[1.2rem] leading-[1.9rem]"
              />
              <button className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors whitespace-nowrap sm:text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[2.9rem] cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-b border-gray-700">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <img 
                src="/footerlogo.png" 
                alt="Aakaar Logo" 
                className="h-10 w-auto mb-6"
              />
              <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.1rem] 2x1:text-[1.5rem] font-normal  leading-[2.1rem]">
                Where Italian Innovation Meets<br />
                Indian Aesthetics
              </p>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-[1rem] md:text-[1.8rem] lg:text-[2rem] leading-[2.6rem] font-semibold mb-4 md:mb-6">Products</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    Exosignal Hair
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    V-Tech System
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    V Carbon System
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    ZK Face
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    Exo V Slim System
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    Exotech Gel
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    Exocell Mask
                  </a>
                </li>
              </ul>
            </div>

            {/* Science Column */}
            <div>
              <h3 className="text-[1rem] md:text-[1.8rem] lg:text-[2rem] leading-[2.6rem] font-semibold mb-4 md:mb-6 mb-4 md:mb-6">Science</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    Super-Exo Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    The PDRN Engine
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    Biomimetic Peptides
                  </a>
                </li>
              </ul>
            </div>

            {/* Information Column */}
            <div>
              <h3 className="text-[1rem] md:text-[1.8rem] lg:text-[2rem] leading-[2.6rem] font-semibold mb-4 md:mb-6 mb-4 md:mb-6">Information</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    Whitepapers
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="capitalize font-normal transition-colors text-[.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[3rem]">
                    Find A VM Clinic
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch Column */}
            <div>
              <h3 className="text-[1rem] md:text-[1.8rem] lg:text-[2rem] leading-[2.6rem] font-semibold mb-4 md:mb-6 mb-4 md:mb-6">Get in Touch</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:text-[.9rem] md:text-[1rem] lg:text-[1.2rem] font-normal leading-[1.9rem] capitalize">
          <p>Copyright 2026 © Aakaar Medical Technologies Ltd.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-normal leading-[2.1rem] capitalize">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-normal leading-[2.1rem] capitalize">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;