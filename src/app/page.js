
"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Carousel from '@/components/Carousel';
import Services from '@/components/Services';
import VisionMission from '@/components/VisionMission';
import ServiceCarousel from '@/components/ServiceCarousel';

const HomePage = () => {
  const slides = [
    {
      heading: "Intensive Home-Based Therapy",
      description: "Why our service is the best option for you",
      buttonText: "View More",
      buttonLink: "/for-professionals/evidence",
      imageUrl: "/images/home-page/Intensive-home-based-therapy.webp",
    },
    {
      heading: "Neurological Rehabilitation",
      description: "We cover a wide range of conditions and presentations",
      buttonText: "View More",
      buttonLink: "/specialty/rare-neurological-conditions",
      imageUrl: "/images/home-page/neuro.png",
    },
    {
      heading: "Empowered by Technology",
      description: "All-rounded assessment and Holistic programme",
      buttonText: "View More",
      buttonLink: "/specialty/falls-balance",
      imageUrl: "/images/home-page/tech.png",
    },
    // {
    //   heading: "Fracture and Joint Health",
    //   description: "Intensive sessions and Fastest recovery",
    //   buttonText: "View More",
    //   buttonLink: "/specialty/fracture-joint-health",
    //   imageUrl: "/images/home-page/Fracture-and-Amputees.webp",
    // },
    // {
    //   heading: "International Physiotherapist HCPC Support",
    //   description: "We offer mentoring, clinical supervision and interview advice",
    //   buttonText: "View More",
    //   buttonLink: "/for-professionals/hcpc-registration-support",
    //   imageUrl: "/images/home-page/International-professional-HCPC-registration.webp",
    // },
  ];


   return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="pt-10">
          <Carousel slides={slides} />
        </div>
         {/*<Services />*/ }
         <VisionMission />
        
         <ServiceCarousel/>
      </main>
    </div>
  );

};

export default HomePage;
