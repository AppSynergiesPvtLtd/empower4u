"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Link from 'next/link';

const SpecialtyCircle = ({ title, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 180 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: -180 }}
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
        <Link
          href={link}
          className="border-4 border-white w-52 h-52 md:w-62 md:h-62 bg-maintext text-[#dab998] flex items-center justify-center rounded-full text-center shadow-[0_4px_15px_rgba(0,0,0,0.6)] hover:shadow-[0_7px_20px_rgba(0,0,0,0.8)] transition-shadow"
        >
          <span className="px-5 text-lg md:text-2xl font-inter font-bold">{title}</span>
        </Link>
      </motion.div>
    
  );
};

export default SpecialtyCircle;
