"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Link from 'next/link';

const Services = () => {
  const items = [
    {
      icon: "/icons/homepage/intro_package.svg",
      title: "INTRODUCTION PACKAGE",
      description: "Check out the trial offer",
      link: "/for-clients-families/price",
    },
    {
      icon: "/icons/homepage/Testimonials.svg",
      title: "TESTIMONIALS",
      description: "Find out previous clients' experience",
      link: "/testimonials",
    },
    {
      icon: "/icons/homepage/Lets_talk.svg",
      title: "LET'S TALK",
      description: "Make the first move to change your life, we can help!",
      link: "/enquiry",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
          
            <Link key={index} href={item.link} passHref>
            <motion.div initial={{ opacity: 0, y: -80 }}
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
              <div className="flex items-start p-6 bg-white shadow-lg !border-t-4 !border-primary cursor-pointer transition-transform transform hover:scale-105 h-26 sm:h-26 md:h-28 lg:h-28">
                <img src={item.icon} alt={item.title} className="w-9 h-10 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-maintext uppercase">{item.title}</h3>
                  <p className="text-sm text-primary">{item.description}</p>
                </div>
              </div>
              </motion.div>
            </Link>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
