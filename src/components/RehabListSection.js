"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";

const RehabListSection = ({
  title,
  introText,
  items,
  backgroundColor,
  subSections = [],
}) => {
  return (
    <section className={`${backgroundColor} py-16`}>
      <div className="max-w-4xl mx-auto p-3 md:p-8">
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
        <p className="text-lg mb-6">{introText}</p>

        <ul className="space-y-2 text-lg">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <img
                src="/icons/Ikon.svg"
                alt="Check Icon"
                className="w-4 max-w-full h-auto text-maintext mr-5 pt-2"
              />
              <span>
                <strong>{item.title}:</strong> {item.description}
              </span>
            </li>
          ))}
        </ul>

        {subSections.map((section, index) => (
          <div key={index} className="mt-8">
            <div className="flex items-center mb-2">
              <img
                src="/icons/Ikon.svg"
                alt="Check Icon"
                className="w-4 max-w-full h-auto text-maintext mr-5"
              />
              <h3 className="text-lg font-bold text-maintext">{section.heading}</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg ml-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-0">
                  <span>
                    {item.title}: {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RehabListSection;
