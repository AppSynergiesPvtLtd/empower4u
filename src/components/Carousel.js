"use client";

"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Carousel = ({ slides }) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              heading={slide.heading}
              description={slide.description}
              buttonText={slide.buttonText}
              buttonLink={slide.buttonLink}
              imageUrl={slide.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
