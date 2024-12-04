"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from 'next/image';

const PricingAndAvailability = () => {
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
    <section className="py-16 px-4 text-maintext">
      <div className="container-fluid">
      <div className='mx-auto max-w-6xl'>
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Pricing and Availability  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>
        <p className="text-lg !border-2 !border-primary p-4 mb-8">
          We strive to offer value-driven services that fit the needs of each client. Our affordable, flexible pricing options ensure that you can access high-quality care without financial strain.
        </p>
        </motion.div>
        

        

        <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, x: -60 }}
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
          <img
            src="/images/for-clients-families/Pricing-page.webp"
            alt="Price"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </motion.div>
        </div>

        <div className="bg-[#d4c0a9] p-8 mb-8">
        <div className='mx-auto max-w-6xl'>
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
          }} className="text-2xl font-bold mb-8 text-maintext text-center font-inter">Introduction package</motion.h2>
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
          <ul className="list-disc list-inside mt-2 space-y-2 text-lg">
            <li>For first time client only</li>
            <li>One free telephone consultation: ½ hour</li>
            <li>First two week 20% discount</li>
          </ul></motion.div>
          </div>
        </div>

        <div className="mb-8 p-8 mx-auto max-w-6xl">
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
          }} className="text-2xl font-bold text-maintext mb-8 text-center font-inter">Our Rate</motion.h2>
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
          <ul className="list-disc list-inside mt-2 space-y-2 text-lg">
            <li> Initial Physiotherapy Assessment: £145 for 1.5hour</li>
            <li> Follow-up Physiotherapy sessions: £115 for 1hour</li>
            <li> Therapy-assistant sessions: £60 for 1 hour</li>
          </ul></motion.div>
        </div>

        <div className="bg-[#d4c0a9] p-8 mb-8">
        <div className='mx-auto max-w-6xl'>
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
          }} className="text-2xl font-bold mb-8 text-maintext text-center font-inter">Referral benefits</motion.h2>
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
          <p className="text-lg">
            When you experience the value of our services and refer someone to us, you will receive 15% off one course of treatment. This discount applies once the new client successfully completes their treatment program, as a thank you for trusting us and spreading the word about our care.
          </p>
          <p className="text-lg mt-4">
            For more detailed pricing information and availability, please <a href="/enquiry" className="underline">Contact Us</a> directly, and we&#39;ll be happy to assist you.
          </p>
          </motion.div>
         </div> 
        </div>

        <div className=" mb-8 mx-auto max-w-6xl">
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
          }} className="text-2xl font-bold text-maintext mb-8 text-center font-inter">Areas we cover</motion.h2>
          <motion.div className="flex justify-center mb-8" initial={{ opacity: 0, x: -60 }}
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
            <Image
              src="/icons/pricing and availability/Areas_we_cover.svg"
              alt="Areas We Cover"
              width={120}
              height={120}
              className="rounded-full"
            />
          </motion.div>
          <p className="text-lg !border-2 !border-primary p-4">
            We currently offer home visits for clients located within a 10-15 minute walk from public transport stations in North, Northwest, East, Central, and parts of South London. Please feel free to reach out to discuss your location with us.
          </p>
        </div>
        <div className="text-center mt-12 mx-auto max-w-6xl">
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
          }} className="text-2xl font-bold text-maintext mb-8 font-inter">Ready to Start Your Journey to Better Health?</motion.h2>
          <motion.p className="text-lg mb-6 text-left" initial={{ opacity: 0, x: -60 }}
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
            If you or a loved one is in need of physiotherapy, let&#39;s talk! Whether you&#39;re managing a chronic condition or recovering from an injury, our team is here to help you regain your strength and independence. Get in touch with us today to schedule an initial consultation and take the first step towards a healthier future.
          </motion.p>
          <a href="/enquiry" className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-maintext">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingAndAvailability;
