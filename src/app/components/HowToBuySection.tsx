import React from "react";

const steps = [
  {
    icon: (
      <img src="/images/sections/howtobuy/tyreOnline.svg" alt="Select Your Tyres Online" className="w-12 h-12 mb-4" />
    ),
    title: "Select Your Tyres Online",
    desc: "Find the right Tyres for vehicle using our easy online search tool",
  },
  {
    icon: (
      <img src="/images/sections/howtobuy/appointment.svg" alt="Book Your Appointment" className="w-12 h-12 mb-4" />
    ),
    title: "Book Your Appointment",
    desc: "Choose convenient time for Tyre Fitting",
  },
  {
    icon: (
      <img src="/images/sections/howtobuy/tyreFit.svg" alt="Visit Us or Use Mobile Tyre Fitting" className="w-12 h-12 mb-4" />
    ),
    title: "Visit Us or Use Mobile Tyre Fitting",
    desc: "Get expert Tyre fitting at home or at our workshop",
  },
  {
    icon: (
      <img src="/images/sections/howtobuy/onlinePayment.svg" alt="Secure Online Payment" className="w-12 h-12 mb-4" />
    ),
    title: "Secure Online Payment",
    desc: "Pay through the latest in retail safety protocols to safeguard your banking or personal data in our system",
  },
];

const HowToBuySection: React.FC = () => (
  <section className="pt-12 bg-[#fafafa]">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-8">
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
                  <img src="/images/sections/howtobuy/chevRight.svg" alt="Arrow right" width={200} height={200} className=" " />
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