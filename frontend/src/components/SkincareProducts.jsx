import React from "react";
import img4 from "../assets/img4.png";
import img3 from "../assets/img3.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import vector from "../assets/vector.png";
import award from "../assets/award-svgrepo-com.png";

const SkincareProducts = () => {
  return (
    <div className="bg-[#FCFDF2] text-[#1E2B27] font-[Inter]">

      <main className=" max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 md:flex-row gap-12 md:gap-24">
        {/* Top Section */}
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-6">
          {/* Left Text Content */}
          <div className="lg:flex-1 max-w-lg">
            <button className="flex items-center gap-2 text-[13px] font-normal text-[#1B1B1B] bg-[#E6E8D7] rounded-full py-1.5 px-4 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1B1B1B] inline-block"></span>
              Why Our Products
            </button>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.2] mb-4">

              YOUR SKIN DESERVES
              <br />
              THE BEST CARE.
            </h2>
            <p className="text-[12px] sm:text-[11px] md:text-[12px] text-[#4B4B4B] mb-8 max-w-[380px]">
              Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our rage crafted with love backed by science, and inspired by nature.
            </p>
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Bio Ingredients",
                  desc: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin."
                },
                {
                  num: "02",
                  title: "Everything Natural",
                  desc: "Pure ingredients for pure skin. The Perfect solution for your skin care needs."
                },
                {
                  num: "03",
                  title: "All Handmade",
                  desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves."
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                  <p className="text-[20px] sm:text-[22px] md:text-[24px] font-normal min-w-[40px]">{item.num}</p>
                  <div>
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-normal mb-1">{item.title}</h3>
                    <p className="text-[9px] sm:text-[10px] md:text-[11px] text-[#4B4B4B] max-w-[320px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Content */}
          <div className="lg:flex-1 max-w-[500px] mx-auto lg:mx-0 rounded-[15px] overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-auto rounded-[15px] object-cover"
                src={img4}
                alt="Woman with eye patches"
              />
              <div className="absolute inset-x-0 bottom-8 flex justify-center">
                <div className="flex items-center gap-3 bg-[#E6E8D7] rounded-full py-2.5 px-5 max-w-[230px]">

                  {/* Outer border container (dotted white) */}
                  <div className="p-0.5 rounded-full border-2 border-dotted border-gray-300">

                    {/* Inner black circle with image */}
                    <div className="w-9 h-9 rounded-full bg-[#1B1B1B] flex items-center justify-center">
                      <img
                        src={award}
                        alt="Award Icon"
                        className="w-5.5 h-5.5 object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-[11px] leading-[1.1] font-normal text-center">
                    Best Skin Care Product
                    <br />
                    Award Winning
                  </p>
                </div>
              </div>






            </div>

            {/* Move these below the image */}
            <div className="flex justify-between text-[9px] text-[#1B1B1B] font-normal mt-2 px-1">
              <div>SINCE 2001</div>
              <div className="cursor-pointer">LEARN MORE</div>
            </div>
          </div>

        </section>

        {/* Bottom Section */}
        <section className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 max-w-[700px] mx-auto">
            <button className="flex items-center gap-2 text-[13px] font-normal text-[#1B1B1B] bg-[#E6E8D7] rounded-full py-1.5 px-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1B1B1B] inline-block"></span>
              Best Selling Products
            </button>
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-normal text-center sm:text-left leading-tight max-w-[320px] mx-auto sm:mx-0">
              Skincare That Brings Out
              <br />
              Your Natural Radiance
            </h3>
            <div className="flex gap-4 justify-center sm:justify-start">
              <button aria-label="Previous" className="w-10 h-10 rounded-full border border-[#1B1B1B] flex items-center justify-center text-[#1B1B1B] text-lg">
                <i className="fas fa-arrow-left" />
              </button>
              <button aria-label="Next" className="w-10 h-10 rounded-full bg-[#1B1B1B] flex items-center justify-center text-[#E6E8D7] text-lg">
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>

          {/* Product Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-2 sm:px-0">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden relative max-w-[280px] mx-auto">
              <img
                alt="Pink Alya Skin Cleanser bottle placed on a rock with a light background"
                className="w-full h-[380px] object-cover"
                decoding="async"
                height="380"
                loading="lazy"
                src={img6}
                width="280"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl flex justify-between items-center px-4 py-3">
                <div className="text-[10px] sm:text-[11px] md:text-[12px] text-[#6B6B6B] font-normal leading-tight max-w-[75%]">
                  <p className="uppercase">ALYA SKIN CLEANSER.</p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] mt-0.5">
                    FROM $29.99
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Add Alya Skin Cleanser to cart"
                  className="bg-gray-200 text-[#6B6B6B] hover:text-black hover:bg-gray-300 transition text-lg px-2 py-1 rounded-[6px]"
                >
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden relative max-w-[280px] mx-auto">
              <img
                alt="Pink Alya Skin Cleanser bottle placed on a rock with a light background"
                className="w-full h-[380px] object-cover"
                decoding="async"
                height="380"
                loading="lazy"
                src={img3}
                width="280"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl flex justify-between items-center px-4 py-3">
                <div className="text-[10px] sm:text-[11px] md:text-[12px] text-[#6B6B6B] font-normal leading-tight max-w-[75%]">
                  <p className="uppercase">RITUAL OF SAKURA.</p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] mt-0.5">
                    FROM $27.99
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Add Alya Skin Cleanser to cart"
                  className="bg-gray-200 text-[#6B6B6B] hover:text-black hover:bg-gray-300 transition text-lg px-2 py-1 rounded-[6px]"

                >
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden relative max-w-[280px] mx-auto">
              <img
                alt="White Necessaire body lotion tube on white fabric background"
                className="w-full h-[380px] object-cover"
                decoding="async"
                height="380"
                loading="lazy"
                src={img5}
                width="280"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl flex justify-between items-center px-4 py-3">
                <div className="text-[10px] sm:text-[11px] md:text-[12px] text-[#6B6B6B] font-normal leading-tight max-w-[75%]">
                  <p className="uppercase">THE BODY LOTION.</p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] mt-0.5">
                    FROM $19.99
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Add The Body Lotion to cart"
                  className="bg-gray-200 text-[#6B6B6B] hover:text-black hover:bg-gray-300 transition text-lg px-2 py-1 rounded-[6px]"
                >
                  <i className="fas fa-shopping-cart"></i>
                </button>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SkincareProducts;
