"use client";
import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  { question: "What should my tyre pressure be?", answer: "Check your vehicle manual or the sticker inside the driver's door for recommended tyre pressures." },
  { question: "How do I check my tyre tread?", answer: "Use a tread depth gauge or the wear indicators built into the tyre grooves." },
  { question: "When should tyre pressure be checked?", answer: "Check at least once a month and before long journeys, when tyres are cold." },
  { question: "What tyres do I need?", answer: "Refer to your vehicle manual or consult a tyre specialist for the correct size and type." },
  { question: "How do I change a tyre?", answer: "Loosen the lug nuts, jack up the car, remove the flat tyre, fit the spare, tighten the nuts, and lower the car." },
];

const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-10">Tyres: Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="border-2 border-[#E3E41A] rounded-lg bg-white"
            >
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-[#23255a] focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="text-1xl font-bold">{faq.question}</span>
                <span className="ml-2">
                  <Image
                    src="/images/sections/faq/chevDown.svg"
                    alt="chevron down"
                    width={20}
                    height={20}
                    className={`transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}
                  />
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-4 pb-4 text-[#23255a]">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 