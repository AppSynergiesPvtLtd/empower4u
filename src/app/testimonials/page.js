"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from 'next/image';

const Testimonials = () => {
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
    <section className="py-16 px-4 bg-[#f9f5f1] text-maintext max-w-5xl mx-auto my-10">
      <div className="flex justify-center mb-6">
        <Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} />
      </div>
      <h1 className="text-4xl font-bold text-center uppercase font-inter my-4">Testimonials</h1>
      <div className="flex justify-center mb-12">
        <Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} />
      </div>

      <div className="bg-maintext p-8 shadow-lg border-4 border-primary mb-8">
        <div className="bg-maintext text-white p-8 shadow-lg border-4 border-primary mb-8">
          <div className="flex justify-center mb-4">
            <span className="text-primary text-xl mx-1">★</span>
            <span className="text-primary text-3xl mx-1">★</span>
            <span className="text-primary text-xl mx-1">★</span>
          </div>

          <h2 className="text-center text-2xl font-bold mb-2">Mina</h2>
          <hr className="border-t border-primary mb-6" />
          <p className="text-center text-sm leading-relaxed mb-6 px-4">
            When Shu first met my dad after his stroke, he could only transfer to a wheelchair and was living downstairs due to limited mobility. From the start, Shu&#39;s professionalism, empathy, and positive approach gave our family confidence. In just three weeks, she had my dad practicing walking on stairs, something we never thought possible so soon. By the time Shu discharged him, my dad was walking outside and even cycling at home! We are incredibly grateful for her dedication and expertise. Shu truly made a remarkable difference in my dad’s recovery, and we can’t recommend her enough.
          </p>

          <div className="flex justify-center mb-4">
            <span className="text-primary text-base mx-1">★</span>
            <span className="text-primary text-xl mx-1">★</span>
            <span className="text-primary text-base mx-1">★</span>
          </div>

          <h2 className="text-center text-2xl font-bold mb-2">Alec</h2>
          <hr className="border-t border-primary mb-6" />
          <p className="text-center text-sm leading-relaxed mb-6 px-4">
            Shu was my private physiotherapist following brain tumor surgery, and I couldn’t have asked for better support during my recovery. She is incredibly knowledgeable and reassuring, always helping me set realistic goals with clear, detailed steps to achieve them. Shu’s hands-on approach made all the difference—thanks to her, I regained function in my affected arm, which had almost completely been lost after surgery. I highly recommend Shu for her caring and individualized care plan, her extensive knowledge, and her incredible patience. She truly helped me get my life back.
          </p>

          <div className="flex justify-center mt-6">
            <span className="text-primary text-xl mx-1">★</span>
            <span className="text-primary text-3xl mx-1">★</span>
            <span className="text-primary text-xl mx-1">★</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
