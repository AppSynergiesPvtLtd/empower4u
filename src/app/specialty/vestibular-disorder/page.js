"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from "next/image";
import RehabSection from "@/components/RehabSection";
import CallToActionSection from "@/components/CallToActionSection";
import { FaCheckCircle } from "react-icons/fa";

const VestibularPage = () => {
  const [showMore, setShowMore] = useState(false);
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

  const features = [
    {
      icon: "/approach/1.svg",
      title: "Accelerate Your Progress",
      description:
        "Maximize your recovery potential with our intensive therapy model - achieve in weeks what traditional approaches take months to deliver. ",
    },
    {
      icon: "/approach/2.svg",
      title: "Expert Care at Home",
      description:
        "Receive gold-standard treatment from our specialist clinicians without leaving your home.",
    },
    {
      icon: "/approach/3.svg",
      title: "Tech-Powered Rehabilitation",
      description:
        "Engage with your personalized digital toolkit, featuring condition-specific podcasts, a tailored exercise video library, and progress tracking tools.",
    },
    {
      icon: "/approach/4.svg",
      title: "Cost-Effective Solutions",
      description:
        "Quality care shouldn't break the bank - our focused approach delivers better value. ",
    },
    {
      icon: "/approach/5.svg",
      title: "Evidence-Based Programme",
      description:
        " Every intervention is grounded in the latest clinical research and tailored to your specific needs.",
    },
  ];

  const points = [
    "Benign Paroxysmal Positional Vertigo (BPPV): A condition where small crystals in the inner ear become dislodged, causing brief episodes of dizziness with changes in head position.",
    "Vestibular Neuritis: Inflammation of the vestibular nerve, leading to severe vertigo, balance issues, and nausea.",
    "Meniere’s Disease: A chronic condition characterized by episodes of vertigo, ringing in the ears (tinnitus), hearing loss, and a feeling of fullness in the ear.",
    "Vestibular Migraine: Dizziness or vertigo that occurs with migraine headaches, often accompanied by light sensitivity and nausea.",
    "Unilateral Vestibular Hypofunction: Reduced function of one vestibular system, resulting in imbalance and dizziness."
  ];

  const strategies = [
    "Vestibular rehabilitation exercises: Targeted exercises designed to improve balance, reduce dizziness, and promote compensation for vestibular deficits.",
    "Canalith repositioning maneuvers: Specific techniques to reposition displaced crystals in the inner ear for conditions like BPPV.",
    "Balance training: Activities to enhance stability and coordination, reducing the risk of falls.",
    "Habituation exercises: Gradual exposure to movements and environments that provoke symptoms to decrease sensitivity.",
    "Education and lifestyle modifications: Guidance on managing symptoms and making adjustments to daily activities to improve quality of life."
   
    
  ];

  const benefits = [
    "Reduces dizziness and vertigo: Effective rehabilitation can significantly lessen the intensity and frequency of dizziness episodes.",
    "Improves balance and coordination: Targeted exercises enhance stability, helping to prevent falls and improve overall mobility.",
    "Increases confidence: Reducing symptoms allows individuals to feel more secure in their movements and activities.",
    "Enhances daily function: Improved balance and reduced dizziness facilitate a return to everyday tasks and activities.",
    "Prevents complications: Early intervention can prevent issues related to prolonged dizziness, such as anxiety and avoidance of physical activities.",
    "Psychosocial benefits: Support and encouragement from physiotherapy promote a positive mindset and motivation throughout the recovery process.",
    
  ];
  return (
    <div>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div
            className="relative w-full h-[500px] lg:h-[560px] lg:rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat flex items-center"
            style={{
              backgroundImage: `url("/images/specialty/vestibular.jpg")`,
            }}
          >
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/70 z-10" />
            <div className="relative z-20 text-white lg:ml-auto lg:mr-10 lg:max-w-md ml-auto max-w-[200px] pr-2">
              <h2 className="text-2xl md:text-5xl font-bold mb-4">
              Vestibular Rehabilitation 
              </h2>
              <p className="text-base font-semibold md:text-lg mb-6">
              Our vestibular rehabilitation program is designed to help you regain your stability, confidence in walking, and ability to return to daily activities.
              </p>
              <a
                href={"https://calendly.com/shu-empower4u"}
                target="_blank"
                className="inline-block px-6 py-2 bg-primary rounded-full font-semibold hover:bg-maintext"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16  text-maintext">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
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
            className="text-4xl font-semibold mb-4 font-inter text-center"
          >
            Our unique approach 
          </motion.h2>

          <p className="text-lg text-maintext text-center">
            Our evidence-based, tech-enhanced, home-based intensive
            therapy program delivers: 
          </p>
          <div className="flex flex-wrap justify-center gap-8 my-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#D1B7A0] rounded-xl shadow-md px-6 py-10 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(30%-1rem)] hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex items-center justify-center w-16 h-16">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold text-maintext mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-maintext text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-[#D5C0A8] py-10`}>
        <div className="max-w-5xl mx-auto p-8">
          <motion.h2
            className="text-4xl font-bold mb-8 text-maintext text-center font-inter"
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
          >
            What We Can Help With 
          </motion.h2>
          <p className="pb-5 text-maintext font-semibold text-lg">
          Here are some common vestibular disorders: 
          </p>
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
            <ul className="space-y-4 text-lg">
              {points.map((item, index) => {
                const [boldPart, ...rest] = item.split(":");
                const normalPart = rest.join(":").trim();

                return (
                  <li
                    key={index}
                    className="flex items-start space-x-2"
                  >
                    <img
                      src="/icons/Ikon.svg"
                      alt="Check Icon"
                      className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                    />
                    <span className="text-maintext">
                      <strong>{boldPart.trim()}:</strong>{" "}
                      {normalPart}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16  text-maintext">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
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
            className="text-4xl font-semibold mb-4 font-inter text-center"
          >
            Treatment May Include 
          </motion.h2>

          <p className="text-lg text-maintext text-center font-semibold">
            Comprehensive Rehabilitation Strategies
          </p>
        </div>

        <div className="mt-8 lg:flex lg:flex-row lg:gap-10 space-y-7 lg:space-y-0 lg:items-center lg:justify-center px-5">
          <div className="lg:w-[50%]">
            <img
              src="/images/specialty/vestibular-treatment.png"
              className="lg:h-[500px] h-auto  w-auto object-contain"
            />
          </div>
          <div className="lg:w-[50%]">
            <ul className="space-y-4 text-lg">
              {strategies.map((item, index) => {
                const [boldPart, ...rest] = item.split(":");
                const normalPart = rest.join(":").trim();

                return (
                  <li
                    key={index}
                    className="flex items-start space-x-2"
                  >
                    <img
                      src="/icons/Ikon.svg"
                      alt="Check Icon"
                      className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                    />
                    <span className="text-maintext">
                      <strong>{boldPart.trim()}:</strong>{" "}
                      {normalPart}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className={`bg-[#D5C0A8] py-10`}>
        <div className="max-w-5xl mx-auto p-8">
          <motion.h2
            className="text-4xl font-bold mb-8 text-maintext text-center font-inter"
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
          >
            Benefits of physiotherapy include
          </motion.h2>
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
            <ul className="space-y-4 text-lg">
              {benefits.map((item, index) => {
                const [boldPart, ...rest] = item.split(":");
                const normalPart = rest.join(":").trim();

                return (
                  <li
                    key={index}
                    className="flex items-start space-x-2"
                  >
                    <img
                      src="/icons/Ikon.svg"
                      alt="Check Icon"
                      className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                    />
                    <span className="text-maintext">
                      <strong>{boldPart.trim()}:</strong>{" "}
                      {normalPart}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </section>
      <CallToActionSection
        title="We'd love to treat you"
        link="/enquiry"
        buttonText="Make an Online Enquiry"
      />
    </div>
  );
};

export default VestibularPage;
