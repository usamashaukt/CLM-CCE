import React from "react";

const steps = [
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#23255a" strokeWidth="2" viewBox="0 0 48 48">
        <rect x="12" y="12" width="24" height="24" rx="4" />
        <circle cx="24" cy="24" r="8" />
      </svg>
    ),
    title: "Select Your Tyres Online",
    desc: "Find the right Tyres for vehicle using our easy online search tool",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#23255a" strokeWidth="2" viewBox="0 0 48 48">
        <rect x="12" y="16" width="24" height="16" rx="2" />
        <circle cx="32" cy="20" r="2" />
      </svg>
    ),
    title: "Book Your Appointment",
    desc: "Choose convenient time for Tyre Fitting",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#23255a" strokeWidth="2" viewBox="0 0 48 48">
        <rect x="10" y="20" width="28" height="12" rx="3" />
        <rect x="18" y="12" width="12" height="8" rx="2" />
      </svg>
    ),
    title: "Visit Us or Use Mobile Tyre Fitting",
    desc: "Get expert Tyre fitting at home or at our workshop",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#23255a" strokeWidth="2" viewBox="0 0 48 48">
        <rect x="14" y="14" width="20" height="28" rx="4" />
        <circle cx="24" cy="28" r="4" />
      </svg>
    ),
    title: "Secure Online Payment",
    desc: "Pay through the latest in retail safety protocols to safeguard your banking or personal data in our system",
  },
];

const HowToBuySection: React.FC = () => (
  <section className="pt-12 bg-[#fafafa]">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#23255a] mb-8">
        How to Buy Tyres From Us?
      </h2>
    </div>
    <div className="bg-[#e3e41a] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {steps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div className="bg-white shadow-md flex flex-col items-center text-center p-8 w-full max-w-xs mb-6 md:mb-0 h-[371px] mx-auto md:mx-6">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-[#23255a] mt-6 mb-4">{step.title}</h3>
                <p className="text-[#23255a] opacity-80 text-base max-w-[220px] mx-auto">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center">
                  <img src="/images/sections/howtobuy/chevRight.svg" alt="Arrow right" width={32} height={32} className="mx-2 md:mx-4" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowToBuySection; 