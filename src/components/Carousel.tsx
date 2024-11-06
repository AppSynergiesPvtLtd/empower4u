// components/Carousel.tsx
"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Carousel.module.css';

interface SlideData {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

interface CarouselProps {
  slides: SlideData[];
}



const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <div className='w-full max-w-5xl mx-auto'>
    <Swiper 
      spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
          // bulletClass: styles.swiperPaginationBullet,
          // bulletActiveClass: styles.swiperPaginationBulletActive,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
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
