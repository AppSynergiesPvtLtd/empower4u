"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';

const Policy = () => {
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
    <section className="py-16 px-4 bg-[#f9f5f1] text-maintext">
      <div className="container mx-auto max-w-6xl">
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Policy  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>
        </motion.div>
        <h2 className="text-2xl font-bold mb-1">Disclosure</h2>
        <motion.p initial={{ opacity: 0, x: -60 }}
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
                        }} className="text-lg mb-1">
          Empower4U may share data with other agencies such as the local authority, funding bodies, and other voluntary agencies.
        </motion.p>
        <motion.p initial={{ opacity: 0, x: -60 }}
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
                        }} className="text-lg mb-1">
          The person will be made aware in most circumstances how and with whom their information will be shared.
        </motion.p>
        <motion.p initial={{ opacity: 0, x: -60 }}
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
                        }} className="text-lg mb-1">
          There are circumstances where the law allows Empower4U to disclose data (including sensitive data) without the data subject’s consent.
        </motion.p>
        <motion.p initial={{ opacity: 0, x: -60 }}
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
                        }} className="text-lg mb-1">These are:</motion.p>
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
        
        <ul className="list-decimal list-inside space-y-2 ml-5 text-lg">
          <li>Carrying out a legal duty</li>
          <li>Protecting a person’s vital interests</li>
          <li>The person has already made the information public</li>
          <li>Conducting any legal proceedings, obtaining legal advice or defending any legal rights</li>
          <li>Monitoring for equal opportunities purposes – i.e. race, disability or religion</li>
          <li>
            Providing a confidential service where the person’s consent cannot be obtained or where it is reasonable to proceed without consent: e.g., where we would wish to avoid forcing stressed or ill participants to provide consent signatures.
          </li>
        </ul>
        </motion.div>   
        <motion.p initial={{ opacity: 0, x: -60 }}
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
                        }} className="text-lg mt-6">
          Empower4U regards the lawful and correct treatment of personal information as very important to successful working, and to maintaining the confidence of those with whom we deal.
        </motion.p>
        <motion.p initial={{ opacity: 0, x: -60 }}
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
                        }} className="text-lg mt-1">
          Empower4U intends to ensure that personal information is treated lawfully and correctly. To this end, Empower4U will adhere to the Principles of Data Protection, as detailed in the Data Protection Act 1998.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center mt-10 md:space-x-4 space-y-4 md:space-y-0 ">
        <motion.a initial={{ opacity: 0, rotateY: 180 }}
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
        }}
          href="/policies/privacy-policy.pdf"
          download
          className="text-center flex items-center px-6 py-3 bg-maintext text-white rounded-md hover:bg-maintext-700"
        >
          <FaDownload className="mr-2" /> Privacy Policy
        </motion.a>
        <motion.a initial={{ opacity: 0, rotateY: 180 }}
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
        }}
          href="/policies/terms-and-conditions.pdf"
          download
          className="text-center flex items-center px-6 py-3 bg-maintext text-white rounded-md hover:bg-maintext-700"
        >
          <FaDownload className="mr-2" /> Terms and Condition
        </motion.a>
      </div>

        

      </div>
    </section>
  );
};

export default Policy;
