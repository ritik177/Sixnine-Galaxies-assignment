import React, { useState, useEffect } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.jpg'

import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome

const SkincareLandingPage = () => {
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    // Trigger animations after a short delay
    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F2F5E5] text-[#1F2B2A] min-h-screen flex flex-col font-['Inter',sans-serif]">
      <header className={`flex items-center justify-between px-6 py-4 max-w-[1200px] mx-auto w-full transition-all duration-700 ease-out ${
        animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="font-extrabold text-[18px] leading-[22px]">
          SKINCARE
        </div>
        <nav className="hidden md:flex space-x-8 text-[14px] leading-[18px] font-normal">
          <a href="#" className="hover:underline transition-all duration-300 hover:text-[#D9E2C8]">All Products</a>
          <a href="#" className="hover:underline transition-all duration-300 hover:text-[#D9E2C8]">Serum</a>
          <a href="#" className="hover:underline transition-all duration-300 hover:text-[#D9E2C8]">Sunscreen</a>
          <a href="#" className="hover:underline transition-all duration-300 hover:text-[#D9E2C8]">Bundle</a>
        </nav>
        <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 text-[11px] sm:text-[12px] md:text-[13px] leading-[18px] font-normal">
          {/* Shopping Bag Icon in White Circle with Grey Border */}
          <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white border border-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-md">
            <MdOutlineShoppingBag className="text-gray-500 text-sm sm:text-base md:text-lg" />
          </div>

          {/* Cart Button */}
          <button
            aria-label="Cart"
            className="flex items-center space-x-1 rounded-full px-1.5 py-0.5 text-gray-500 text-[11px] sm:text-[12px] md:text-[13px] transition-all duration-300 hover:text-[#1F2B2A]"
          >
            <span>Cart (1)</span>
          </button>

          {/* Favorites Button */}
          <button
            aria-label="Favorites"
            className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-white rounded-full shadow-sm text-gray-500 text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-110 hover:shadow-md"
          >
            <i className="far fa-heart"></i>
          </button>

          {/* User Account Button */}
          <button
            aria-label="User Account"
            className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-white rounded-full shadow-sm text-gray-500 text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-110 hover:shadow-md"
          >
            <i className="far fa-user"></i>
          </button>
        </div>
      </header>

      <main className="flex flex-col max-w-[1200px] mx-auto w-full px-6 mt-10 md:mt-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0">
          <div className={`md:w-1/4 text-[12px] leading-[14px] font-normal max-w-[180px] md:max-w-none transition-all duration-700 ease-out delay-200 ${
            animateElements ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <p>
              <span className="inline-block pl-14">Transform your skincare</span><br />
              routine with premium products that<br />
              restore, protect, and enhance your<br />
              <span className="inline-block">natural glow every day.</span>
            </p>
          </div>

          <h1 className={`md:w-1/4 text-[40px] leading-[44px] font-extrabold uppercase text-[#1F2B2A] text-center md:text-left transition-all duration-700 ease-out delay-300 ${
            animateElements ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            GLOW<br />NATUR-<br />ALLY
          </h1>
          <div className={`md:w-1/4 flex justify-end transition-all duration-700 ease-out delay-400 ${
            animateElements ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <img
              src={img2}
              alt="Tube of skincare product with plum illustration on label"
              className="rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-lg"
              width="120"
              height="120"
            />
          </div>
        </div>

        <div className="relative mt-10 md:mt-16 flex justify-center">
          <h2
            className={`absolute top-[82%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] text-center font-extrabold uppercase text-[#1F2B2A] select-none pointer-events-none whitespace-nowrap overflow-hidden transition-all duration-1000 ease-out delay-500 ${
              animateElements ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              fontSize: "clamp(3.5rem, 20vw, 14rem)",
              lineHeight: 1,
            }}
          >
            SKINCARE
          </h2>
          <div className={`relative z-10 rounded-xl overflow-hidden max-w-[320px] md:max-w-[400px] transition-all duration-800 ease-out delay-600 ${
            animateElements ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}>
            <img
              src={img1}
              alt="Smiling woman with green towel wrapped on head and green face patches holding half an avocado"
              className="rounded-xl w-full h-auto transition-all duration-500 hover:scale-105"
              width="400"
              height="480"
            />
           
            <div className={`absolute bottom-6 left-6 flex items-center bg-[#D9E2C8] rounded-full px-4 py-2 max-w-[280px] md:max-w-[320px] text-[12px] leading-[14px] font-normal text-[#1F2B2A] transition-all duration-700 ease-out delay-800 ${
              animateElements ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <img
                src={img2}
                alt="Small icon of plum tube skincare product"
                className="w-10 h-10 rounded-full border-2 border-dotted border-gray-400 mr-3 object-cover transition-all duration-300 hover:scale-110"
              />
              <span>
                While giving you an invigorating cleansing experience.
              </span>
            </div>
          </div>
          <button className={`absolute left-0 top-1/2 -translate-y-1/2 bg-[#1F2B2A] text-[#D9E2C8] text-[12px] leading-[14px] font-normal rounded-full px-5 py-2 ml-4 transition-all duration-700 ease-out delay-700 hover:bg-[#D9E2C8] hover:text-[#1F2B2A] hover:scale-105 ${
            animateElements ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            Shop Now
          </button>
        </div>
      </main>
      <div className={`bg-[#FCFCF3] w-full flex flex-col items-center transition-all duration-800 ease-out delay-900 ${
        animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <p className="mt-10 max-w-[900px] text-lg md:text-2xl leading-[28px] font-normal px-4 md:px-0">
          Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with
          <span className="text-[#C0C8BB]">
            {" "}advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day.Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SkincareLandingPage;
