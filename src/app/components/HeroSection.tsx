import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/sections/herosection.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#23255a]/50 z-0"   />
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-10">
        {/* Left: Title & Description */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CLM Tyres</h1>
          <p className="text-lg md:text-xl font-medium opacity-90">
            We're an established local business offering a drive in and an internet booking service. You don't pay online, just place your booking and you'll be able to select a date to come in and have your tyres fitted and make a payment in the normal way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 