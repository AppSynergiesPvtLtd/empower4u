"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Link from 'next/link';

const CallToActionSection = ({ title, link, buttonText }) => {
  return (
    <section className="my-20 text-maintext text-center">
      <div className="container mx-auto px-4">
        <motion.div className="p-8 !border-t-4 !border-primary bg-white max-w-2xl mx-auto"
        initial={{
            scale: 0.7,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 70,
              restDelta: 0.001,
            },
          }}>
          <h2 className="text-3xl font-semibold mb-4 font-inter">{title}</h2>
          <Link
            href={link}
            className="px-6 py-3 text-lg font-semibold text-white bg-maintext rounded-full hover:bg-primary inline-block"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
