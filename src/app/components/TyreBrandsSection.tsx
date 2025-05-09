"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

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
    <section className="w-full bg-[#ffffff] min-h-[323px] flex flex-col justify-center" style={{height: '323px'}}>
      <div className="max-w-full mx-auto px-4 py-6">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-[#23255a] mb-8">Tyre Brands</h2> */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          loop={true}
          className="w-full flex justify-center mx-auto"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.alt} className="flex justify-center">
              <img
                src={brand.src}
                alt={brand.alt}
                loading="lazy"
                className="h-12 md:h-16 object-contain"
                style={{ maxWidth: '180px' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TyreBrandsSection; 