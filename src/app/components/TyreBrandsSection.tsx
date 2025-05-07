import React from "react";

const brands = [
  { src: "/images/tyreBrands/brand1.svg", alt: "BFGoodrich" },
  { src: "/images/tyreBrands/brand2.svg", alt: "Bridgestone" },
  { src: "/images/tyreBrands/brand3.svg", alt: "Continental" },
  { src: "/images/tyreBrands/brand4.svg", alt: "Apollo" },
  { src: "/images/tyreBrands/brand5.svg", alt: "Avon Tyres" },
  { src: "/images/tyreBrands/brand6.svg", alt: "Accelera" },
  { src: "/images/tyreBrands/brand7.svg", alt: "Autogrip" },
  { src: "/images/tyreBrands/brand8.svg", alt: "Michelin" },
];

const TyreBrandsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#E3E41A] min-h-[323px] flex flex-col justify-center" style={{height: '323px'}}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#23255a] mb-8">Tyre Brands</h2>
        <div className="flex flex-col gap-8">
          {/* First row: 6 brands */}
          <div className="flex flex-wrap justify-between items-center gap-x-8">
            {brands.slice(0, 6).map((brand) => (
              <img
                key={brand.alt}
                src={brand.src}
                alt={brand.alt}
                className="h-12 md:h-16 object-contain"
                style={{ maxWidth: '180px' }}
              />
            ))}
          </div>
          {/* Second row: 2 brands, centered */}
          <div className="flex justify-start items-center gap-x-8">
            {brands.slice(6).map((brand) => (
              <img
                key={brand.alt}
                src={brand.src}
                alt={brand.alt}
                className="h-12 md:h-16 object-contain"
                style={{ maxWidth: '180px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TyreBrandsSection; 