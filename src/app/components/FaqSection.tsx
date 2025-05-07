"use client";
import React, { useState } from "react";

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
        <h2 className="text-3xl md:text-4xl font-bold text-[#23255a] mb-10">Tyres: Frequently Asked Questions</h2>
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
                <span>{faq.question}</span>
                <span className="ml-2">
                  <svg width="20" height="20" fill="none" stroke="#23255a" strokeWidth="2" viewBox="0 0 24 24">
                    <path d={openIdx === idx ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"} />
                  </svg>
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