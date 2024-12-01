"use client";

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from 'next/image';



const WorkWithUs = () => {
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
    <section className="py-16 bg-[#f9f5f1] text-maintext ">
      <div className="container  mx-auto max-w-full">
        <div className="p-8 mb-8 mx-auto">
          <div className='mx-auto max-w-5xl'>
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
            <div className="flex justify-center mb-6"><Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} /></div>
            <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Work with us  </h1>
            <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>
          </motion.div>

            <motion.p
           initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{
                        duration: 0.5,
                        delay: 0.3,
                        scale: {
                            type: "spring",
                            damping: 14,
                            stiffness: 200,
                            restDelta: 0.001,
                        },
                        }} className="text-lg border border-gray-400 p-4 mb-8 max-w-4xl mx-auto">
              At Empower4U, we are always looking for passionate and skilled professionals to join our growing team. If you are a qualified physiotherapist or have experience in rehabilitation, we’d love to hear from you!
            </motion.p>

            <div className="flex justify-center mb-12">
              <img
                src="/images/Career/Work with us page.webp"
                alt="Teamwork"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#d4c0a9] p-8 mb-8 mx-auto">
        <div className='mx-auto max-w-5xl'>
          <motion.h2 initial={{ opacity: 0, y: -80 }}
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
          }} className="text-2xl font-bold mb-4 text-maintext text-center font-inter">Physiotherapists</motion.h2>
          <motion.p
           initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{
                        duration: 0.5,
                        delay: 0.3,
                        scale: {
                            type: "spring",
                            damping: 14,
                            stiffness: 200,
                            restDelta: 0.001,
                        },
                        }} className="text-lg">
            We are seeking qualified physiotherapists with experience in one or more of the specialties we cover. Whether you specialize in neurological rehabilitation, stroke recovery, balance and falls prevention, or any of our other services, we offer an opportunity to work in a dynamic, supportive environment. <a href="/specialty/explore-all" className="text-primary underline">Explore our specialties here.</a>
          </motion.p>
          </div>
        </div>

        <div className="p-8 mb-8 mx-auto">
          <div className='mx-auto max-w-5xl'>
            <div className=" py-8 mb-8 rounded-lg">
              <motion.h2 initial={{ opacity: 0, y: -80 }}
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
          }} className="text-2xl font-bold mb-4 text-maintext text-center font-inter">Rehabilitation Assistants</motion.h2>
              <motion.p
           initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{
                        duration: 0.5,
                        delay: 0.3,
                        scale: {
                            type: "spring",
                            damping: 14,
                            stiffness: 200,
                            restDelta: 0.001,
                        },
                        }} className="text-lg">
                We also welcome rehabilitation assistants with diverse backgrounds in healthcare and fitness. Whether you have a background in nursing, fitness, care, or you are a therapy student or an internationally qualified therapist awaiting your HCPC registration, this is a great opportunity to gain UK healthcare experience while earning a competitive payment.
              </motion.p>
            </div>
          </div>
        </div>

        

        <div className="bg-[#d4c0a9] p-8 mb-8 rounded-lg">
        <div className='mx-auto max-w-5xl'>
          <motion.h2 initial={{ opacity: 0, y: -80 }}
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
          }} className="text-2xl font-bold mb-4 text-maintext text-center font-inter">Why Work With Us?</motion.h2>
          <motion.div initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{
                        duration: 0.5,
                        delay: 0.3,
                        scale: {
                            type: "spring",
                            damping: 14,
                            stiffness: 200,
                            restDelta: 0.001,
                        },
                        }}>
            <motion.p
           initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{
                        duration: 0.5,
                        delay: 0.3,
                        scale: {
                            type: "spring",
                            damping: 14,
                            stiffness: 200,
                            restDelta: 0.001,
                        },
                        }} className="text-lg mb-6">
              At Empower4U, we look after our staff, ensuring they grow both professionally and personally. We provide:
            </motion.p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <img 
                  src="/icons/Ikon.svg" 
                  alt="Check Icon" 
                  className="w-4 max-w-full h-auto text-maintext mr-4 pt-2"
                />
                <span>
                  <strong>Staff Empowerment:</strong> Our staff have the power to shape how the business runs. We regularly listen to feedback and ideas, striving to be the best in the market with the collective effort of everyone in the company.
                </span>
              </li>
              <li className="flex items-start">
                <img 
                  src="/icons/Ikon.svg" 
                  alt="Check Icon" 
                  className="w-4 max-w-full h-auto text-maintext mr-4 pt-2"
                />
                <span>
                  <strong>Supervision and Mentorship:</strong> Receive ongoing support from experienced physiotherapists and access guidance on complex cases.
                </span>
              </li>
              <li className="flex items-start">
                <img 
                  src="/icons/Ikon.svg" 
                  alt="Check Icon" 
                  className="w-4 max-w-full h-auto text-maintext mr-4 pt-2"
                />
                <span>
                  <strong>Career Progression:</strong> We offer advice on career development, helping you take the next step in your physiotherapy journey.
                </span>
              </li>
            </ul>
          </motion.div>
          
          </div>
        </div>

        <div className="p-8 mb-8 mx-auto">
          <div className='mx-auto max-w-5xl'>
            <div className="text-center mt-12 ">
              <motion.h2 initial={{ opacity: 0, y: -80 }}
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
          }} className="text-2xl font-bold text-maintext mb-4 font-inter">Get in Touch</motion.h2>
              <motion.p
           initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{
                        duration: 0.5,
                        delay: 0.3,
                        scale: {
                            type: "spring",
                            damping: 14,
                            stiffness: 200,
                            restDelta: 0.001,
                        },
                        }} className="text-lg mb-6">
                If you are ready to join a team that values expertise, collaboration, and growth, we’d love to hear from you! <a href="/enquiry" className="underline">Contact us</a> today to discuss available opportunities.
              </motion.p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default WorkWithUs;
