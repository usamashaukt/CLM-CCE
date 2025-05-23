import React from "react";

const MissionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left: Title & Description */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl font-bold text-[#000000] mb-4">Our Mission</h2>
          <p className="text-[#23255a] text-lg leading-relaxed">
            We're an established local business offering a drive in and an internet booking service. You don't pay online, just place your booking and you'll be able to select a date to come in and have your tyres fitted and make a payment in the normal way.We're an established local business offering a drive in and an internet booking service. You don't pay online, just place your booking and you'll be able to select a date to come in and have your tyres fitted and make a payment in the normal way. We're an established local business offering a drive in and an internet booking service. You don't pay online, just place your booking and you'll be able to select a date to come in and have your tyres fitted and make a payment in the normal way.We're an established local business offering a drive in and an internet booking service. You don't pay online, just place your booking and you'll be able to select a date to come in and have your tyres fitted and make a payment in the normal way.
          </p>
        </div>
        {/* Right: Image Placeholder */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[350px] h-[350px] bg-gray-300 flex items-center justify-center text-2xl font-bold text-center text-black">
            Lauren's<br />Image
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 