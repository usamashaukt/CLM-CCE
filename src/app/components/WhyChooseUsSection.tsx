import React from "react";

const cards = [
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#23255a" strokeWidth="2" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" /><path d="M24 24l10-10" /><circle cx="24" cy="24" r="8" /></svg>
    ),
    title: "Expert Tyre Fitting Services",
    desc: "Our skilled technicians ensure precise and safe Tyre installation",
    link: "#",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#23255a" strokeWidth="2" viewBox="0 0 48 48"><rect x="12" y="16" width="24" height="16" rx="4" /><circle cx="24" cy="24" r="8" /></svg>
    ),
    title: "Extensive Tyre Range",
    desc: "From Budget Friendly to Premium Tyre Brands we stock tyres for all vehicles",
    link: "#",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#23255a" strokeWidth="2" viewBox="0 0 48 48"><rect x="12" y="16" width="24" height="16" rx="4" /><path d="M16 24h16" /><path d="M20 20v8" /><path d="M28 20v8" /></svg>
    ),
    title: "Fair & Competitive Pricing",
    desc: "Get the best deals for vehicle Tyres without compromising quality",
    link: "#",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#23255a" strokeWidth="2" viewBox="0 0 48 48"><circle cx="24" cy="20" r="6" /><path d="M12 36c0-6.627 5.373-12 12-12s12 5.373 12 12" /><path d="M20 32h8" /><path d="M24 28v8" /></svg>
    ),
    title: "Customer Satisfaction Guaranteed",
    desc: "We are committed to providing the best customer service",
    link: "#",
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#23255a] mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className={[
                "group bg-white flex flex-col items-center  text-center p-8 transition-all duration-300 ease-in-out cursor-pointer h-full relative border-2 border-[#E3E41A] rounded-2xl z-10 hover:bg-[#E3E41A] hover:shadow-2xl hover:-translate-y-2 hover:z-30 hover:rounded-2xl",
                idx !== 0 ? "-ml-6" : ""
              ].join(" ")}
            >
              <div className="mb-4 group-hover:text-[#23255a] text-[#23255a]">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#23255a] text-[#23255a]">{card.title}</h3>
              <p className="mb-4 text-[#23255a] group-hover:text-black text-base font-normal opacity-80">{card.desc}</p>
              <a
                href={card.link}
                className="mt-auto text-[#D60000] font-bold flex items-center gap-1"
              >
                <span>&#8250;</span> Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 