import React, { useState, useEffect } from "react";
import img5 from "../assets/img5.jpg";

const faqs = [
  {
    id: "faq1",
    question: "Are your products safe for sensitive skin?",
    answer: "Yes, our products are dermatologically tested and suitable for sensitive skin.",
  },
  {
    id: "faq2",
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    id: "faq3",
    question: "What’s your return policy?",
    answer: "We offer a 30-day return policy from the date of delivery.",
  },
  {
    id: "faq4",
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide.",
  },
  {
    id: "faq5",
    question: "How do I choose the right product?",
    answer: "Take our skincare quiz or consult with our skin experts via chat.",
  },
];

export default function SkincareFAQPage() {
  const [openFaq, setOpenFaq] = useState("faq2");

  useEffect(() => {
    // Ensures default open on second item
    setOpenFaq("faq2");
  }, []);

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="bg-[#FCFDF2] text-[#1E2B27] font-[Inter]">
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-24 items-stretch">
        {/* Left Image Section */}
        <section className="relative flex-shrink-0 w-full md:w-1/2 max-w-md md:max-w-none rounded-3xl overflow-hidden h-full">
          <img
           src={img5}
            alt="Skincare product"
            className="w-full lg:h-[500px]  object-cover rounded-3xl"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#F0F3E9] rounded-full flex items-center gap-4 px-5 py-3 max-w-[220px]">
            <div className="bg-[#1E2B27] w-10 h-10 rounded-full flex items-center justify-center text-[#F0F3E9]">
              <i className="fas fa-headset fa-lg"></i>
            </div>
            <p className="text-xs leading-tight font-normal text-[#1E2B27]">
              24/7 We're Here
              <br />to Help You
            </p>
          </div>
        </section>


        {/* Right FAQ Section */}
        <section className="flex flex-col w-full md:w-1/2 max-w-md md:max-w-none h-full">
          <div className="mb-6">
            <button className="inline-flex items-center gap-2 border border-[#1E2B27] rounded-full px-4 py-1 text-xs font-normal text-[#1E2B27]">
              <span className="w-3 h-3 rounded-full bg-[#1E2B27] block"></span>
              Frequently Asked Question
            </button>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal leading-snug mb-8 max-w-md">
            Answers to Your Skincare Questions, All in One Place.
          </h2>
          <div className="space-y-3 max-w-md">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full text-left px-4 py-2 text-xs text-[#1E2B27] flex justify-between items-center 
        border-[#1E2B27] ${openFaq === faq.id
                      ? "border-x border-t rounded-t-md"   // no bottom border when open
                      : "border rounded-md"}`
                  }
                >
                  {faq.question}
                  <span className="text-lg font-bold">{openFaq === faq.id ? "−" : "+"}</span>
                </button>

                {openFaq === faq.id && (
                  <div className="border border-t-0 border-[#1E2B27] rounded-b-md px-4 py-2 text-[9px] text-[#1E2B27] leading-tight">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}

          </div>
        </section>
      </main>

      {/* Footer */}


      <footer className="bg-[#1E2B27] text-[#D9D9D0] px-6 md:px-12 lg:px-16 relative overflow-hidden pb-0">
        {/* Content Section */}
        <div className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
          <div className="max-w-xs md:max-w-none">
            <h3 className="text-3xl font-normal leading-snug mb-6">
              Join The Skincare
              <br />Community Now.
            </h3>
          </div>
          <div className="max-w-xs md:max-w-none">
            <p className="text-sm mb-1">Get in Touch</p>
            <p className="text-3xl font-normal leading-snug">contact.skincare.com</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row justify-between text-[10px] font-normal relative z-10">
          <div className="flex gap-10 mb-4 md:mb-0">
            <a className="hover:underline" href="#">Facebook</a>
            <a className="hover:underline" href="#">Instagram</a>
            <a className="hover:underline" href="#">YouTube</a>
          </div>
          <div className="flex gap-10 justify-end">
            <a className="hover:underline" href="#">Terms of Service</a>
            <a className="hover:underline" href="#">Privacy Policy</a>
            <a className="hover:underline" href="#">Cookies Policy</a>
          </div>
        </div>

        {/* Watermark clipped at bottom with full-width stretch */}
        <div className="w-full h-[12rem] overflow-hidden relative">
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 w-screen text-[17rem] font-extrabold font-sans text-[#D9D9D0] opacity-5 select-none pointer-events-none leading-none whitespace-nowrap"
            style={{ lineHeight: 1 }}
          >
            SKINCARE
          </div>
        </div>
      </footer>


    </div>
  );
}
