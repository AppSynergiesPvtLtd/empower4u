"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from 'next/image';
import Link from 'next/link';
import SpecialtyCircle from '@/components/SpecialtyCircle';
import { specialtiesData } from '@/config/allspeciality';
import { specialtiesData2 } from '@/config/allspeciality2';
import CallToActionSection from '@/components/CallToActionSection';

const SpecialtyPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <section className="bg-[#f9f5f1] py-16 px-4 text-maintext">
      <div className="container mx-auto text-center">
        <div className="mb-10">
        <motion.div className='bg-maintext p-3 shadow-lg border-4 border-primary mb-8 max-w-6xl mx-auto'
        initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }}>
            <div className="bg-maintext text-white p-8 shadow-lg border-2 border-primary">
                <div className="flex justify-center mb-6"><Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} /></div>
          <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Specialty  </h1>
          <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>
            </div>
        </motion.div>
          
          <motion.div className="flex justify-center my-4 text-[#af9457] text-base"
          initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 60 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          scale: {
            type: "spring",
            damping: 14,
            stiffness: 200,
            restDelta: 0.001,
          },
        }}
          >
            ★ <span className='mx-2 text-xl'>★ </span> ★
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto md:mx-80 justify-items-center">
          {specialtiesData.map((item, index) => (
            <SpecialtyCircle key={index} title={item.title} link={item.link} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto md:mx-[30rem] lg:mx-[25rem] justify-items-center">
          {specialtiesData2.map((item, index) => (
            <SpecialtyCircle key={index} title={item.title} link={item.link} />
          ))}
        </div>

        <CallToActionSection
            title="We'd love to treat you"
            link="/enquiry"
            buttonText="Make an Enquiry"
        />
      </div>
    </section>
  );
};

export default SpecialtyPage;
