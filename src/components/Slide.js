"use client";
import React from 'react';
import Image from 'next/image';

const Slide = ({ heading, description, buttonText, buttonLink, imageUrl }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:space-x-5 space-y-6 md:space-y-0">
      <div className="flex-1 px-4 space-y-4 my-6 text-center md:text-left">
        <div className="flex justify-center mb-6">
          <Image 
            src="/icons/top_border.svg" 
            alt="Top Border" 
            width={600} 
            height={400} 
            placeholder="blur" 
            blurDataURL="/icons/top_border.svg"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-center uppercase font-inter text-maintext">
          {heading}
        </h1>
        <div className="flex justify-center mb-12">
          <Image 
            src="/icons/bottom_border.svg" 
            alt="Bottom Border" 
            width={600} 
            height={400} 
            placeholder="blur" 
            blurDataURL="/icons/bottom_border.svg" 
          />
        </div>

        <p className="text-base md:text-lg text-primary text-center">
          {description}
        </p>
        <div className="flex justify-center">
          <a
            href={buttonLink}
            className="inline-block px-6 py-2 text-maintext bg-[#ebddd2] rounded-full hover:bg-primary hover:text-white"
          >
            {buttonText}
          </a>
        </div>
      </div>

      <div className="flex-1 my-6 w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto md:mx-0 md:ml-4">
        <img
          src={imageUrl}
          alt={heading}
          width={500}
          height={400}
          className="rounded-3xl shadow-lg object-cover"
          placeholder="blur" 
          blurDataURL={imageUrl}
        />
      </div>
    </div>
  );
};

export default Slide;
