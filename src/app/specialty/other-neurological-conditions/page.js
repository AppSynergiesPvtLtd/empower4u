"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from "next/image";
import RehabSection from "@/components/RehabSection";
import CallToActionSection from "@/components/CallToActionSection";
import { FaCheckCircle } from "react-icons/fa";

const OtherNeuroConditionPage = () => {
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
    "Parkinson’s Disease: Slowed movements, tremors, rigidity, postural instability, gait freezing, and balance issues.",
    "Spinal Cord Injury: Loss of motor/sensory function, with focus on spasticity management and mobility retraining.",
    "Multiple Sclerosis (MS): Fatigue, muscle weakness, coordination issues, and support for fluctuating symptoms.",
    "Guillain-Barré Syndrome (GBS): Recovery from muscle weakness or paralysis, focusing on strength, balance, and motor skills.",
  ];

  const strategies = [
    "Parkinson’s Disease:Parkinson Warrior programs to enhance movement and speech, cueing techniques for gait freezing, and resistance training to reduce rigidity.",
    "Spinal Cord Injury: Functional electrical stimulation (FES) for muscle activation, wheelchair mobility and transfer training, and exercises for core stability and seated balance.",
    "Multiple Sclerosis (MS): Energy conservation strategies, along with strength and balance training to manage fatigue and mobility. ",
    "Guillain-Barré Syndrome (GBS): Progressive strength rebuilding, sensory reintegration, and education on pacing to manage fatigue.",
  ];

  const benefits = [
    "Improved Mobility: Regain control over movements, from walking to fine motor tasks.  ",
    "Fall Prevention: Strengthen balance and coordination for safer daily living. ",
    "Independence Restoration: Adapt techniques for dressing, cooking, and self-care",
    "Neuroplasticity Boost: Train your brain and body to rewire for optimal function. ",
    "Maintaining strength and functions: Targeted exercises help sustain muscle strength and essential functions, preventing deterioration and promoting independence in daily tasks.",
    "Emotional Resilience: Structured progress fosters hope and motivation. ",
  ];
  return (
    <div>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div
            className="relative w-full h-[500px] lg:h-[560px] lg:rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat flex items-center"
            style={{
              backgroundImage: `url("/images/specialty/other-neuro.jpg")`,
            }}
          >
            <div className="relative z-20 text-white lg:ml-auto lg:mr-10 lg:max-w-md ml-auto max-w-[200px] pr-2">
              <h2 className="text-2xl md:text-5xl font-bold mb-4">
                Other Neurological Conditions 
              </h2>
              <p className="text-base font-semibold md:text-lg mb-6">
                Our dedicated team provides tailored therapy for individuals
                with conditions such as Parkinson's disease, multiple sclerosis,
                spinal cord injuries, and Guillain-Barre Syndrome.
              </p>
              <a
                href={
                  "https://wa.me/4407427170325?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
                }
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
            Our evidence-based, tech-enhanced, home-based intensive therapy
            program delivers: 
          </p>
          <div className="flex flex-wrap justify-center gap-8 my-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#D1B7A0] rounded-xl shadow-md px-6 py-10 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(30%-1rem)] hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex items-center justify-center w-16 h-16">
                  <img src={feature.icon} alt={feature.title} className="" />
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
            Common neurological conditions we address:
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
                  <li key={index} className="flex items-start space-x-2">
                    <img
                      src="/icons/Ikon.svg"
                      alt="Check Icon"
                      className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                    />
                    <span className="text-maintext">
                      <strong>{boldPart.trim()}:</strong> {normalPart}
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
              src="/images/specialty/other-neuro-treatement.png"
              className="lg:h-[500px] h-auto  w-auto object-contain"
            />
          </div>
          <div className="lg:w-[50%]">
            <ul className="space-y-4 text-lg">
              {strategies.map((item, index) => {
                const [boldPart, ...rest] = item.split(":");
                const normalPart = rest.join(":").trim();

                return (
                  <li key={index} className="flex items-start space-x-2">
                    <img
                      src="/icons/Ikon.svg"
                      alt="Check Icon"
                      className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                    />
                    <span className="text-maintext">
                      <strong>{boldPart.trim()}:</strong> {normalPart}
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
                  <li key={index} className="flex items-start space-x-2">
                    <img
                      src="/icons/Ikon.svg"
                      alt="Check Icon"
                      className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                    />
                    <span className="text-maintext">
                      <strong>{boldPart.trim()}:</strong> {normalPart}
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

export default OtherNeuroConditionPage;
