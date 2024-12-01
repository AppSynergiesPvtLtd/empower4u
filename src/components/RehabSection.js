"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const RehabSection = ({ title, introText, endingText='', items, backgroundColor }) => {
  return (
    <section className={`${backgroundColor} py-10`}>
      <div className="max-w-5xl mx-auto p-8">
        <motion.h2 className="text-4xl font-bold mb-6 text-maintext text-center font-inter"
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
          }}
        >{title}</motion.h2>
        <motion.div
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
        <p className="text-lg mb-6 font-bold">{introText}</p>
        <ul className="space-y-4 text-lg">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <img 
                src="/icons/Ikon.svg" 
                alt="Check Icon" 
                className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
              />
              <span>
                <strong>{item.title}{item.description ? ':' : ''}</strong> {item.description}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-lg mb-6 mt-1">{endingText}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default RehabSection;
