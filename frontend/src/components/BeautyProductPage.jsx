import React from "react";
import img3 from "../assets/img3.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.png";

const BeautyProductPage = () => {
  return (
    <div className=" bg-[#FEFEF0] min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-10 font-[Inter]">
      {/* Hero Section */}
      <div className="relative w-full max-w-4xl rounded-xl overflow-hidden">
        <img
          alt="Closeup of a woman holding a jar of cream near her face with a large green leaf partially covering her face"
          className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-cover rounded-xl"
          decoding="async"
          height="500"
          loading="lazy"
          src={img7}
          width="900"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-xl flex flex-col justify-end items-center px-6 text-center pb-4">
          <h1 className="text-white text-[26px] sm:text-[28px] md:text-[32px] font-normal leading-snug max-w-[90%] mb-4">
            Feel Beautiful Inside and Out
            <br />
            with Every Product.
          </h1>
          <button
            type="button"
            className="bg-[#FEFEF0] text-black text-[12px] sm:text-[14px] font-normal rounded-full px-5 py-1.5 shadow-md hover:brightness-95 transition"
          >
            Shop Now
          </button>
        </div>
      </div>


      {/* Main Content */}
      <div className="mt-16 max-w-4xl w-full flex flex-col items-center">
        <h2 className="text-black text-[20px] sm:text-[22px] md:text-[24px] font-normal text-center leading-snug max-w-[90%]">
          Feel Beautiful Inside and Out
          <br />
          with Every Product.
        </h2>

        {/* Filter Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGGING"].map(
            (label, idx) => (
              <button
                key={idx}
                type="button"
                className={`${label === "NEW ARRIVAL"
                  ? "bg-[#1E2B28] text-white"
                  : "border border-[#D9D9D9] text-[#6B6B6B]"
                  } text-[10px] sm:text-[11px] md:text-[12px] font-normal rounded-full px-4 py-1`}
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* Product Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl px-2 sm:px-0">
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
      </div>
    </div>
  );
};

export default BeautyProductPage;
