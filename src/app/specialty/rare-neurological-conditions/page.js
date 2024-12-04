
"use client";

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from 'next/image';
import Link from 'next/link';
import RehabSection from '@/components/RehabSection';
import CallToActionSection from '@/components/CallToActionSection';

const uniqueApproachData = {
  title: "Our unique approach",
  introText: "",
  endingText: "If these resonate with you, our services are the perfect fit!",
  items: [
    {
      title: "Accelerate Your Progress",
      description: "Consolidate your weekly therapy sessions and achieve faster results with our intensive approach.",
    },
    {
      title: "Expert Care at Home",
      description: "Receive treatment from highly skilled clinicians in the comfort of your own home.",
    },
    {
      title: "Cost-Effective Solutions",
      description: "Get the best outcomes while keeping your costs down.",
    },
    {
      title: "Personalized Rehabilitation",
      description: "Benefit from a tailored rehab program designed using the latest evidence-based practices",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const whatWeCanHelpData = {
  title: "What we can help",
  introText: "Here are some common challenges related to rare neurological conditions that we address:",
  items: [
    {
      title: "Muscle weakness and atrophy",
      description: "Progressive weakening and wasting of muscles that can affect movement, balance, and daily activities.",
    },
    {
      title: "Spasticity",
      description: "Muscle stiffness or tightness that limits range of motion and causes discomfort or difficulty with movement.",
    },
    {
      title: "Coordination difficulties",
      description: "Problems with balance and coordination, making walking and maintaining posture challenging.",
    },
    {
      title: "Speech and swallowing difficulties",
      description: "Neurological conditions can impair speech and swallowing, leading to communication difficulties and nutritional issues.",
    },
    {
      title: "Fatigue",
      description: "Persistent tiredness that significantly impacts daily activities and quality of life.",
    },
    {
      title: "Respiratory challenges",
      description: "Weakening of respiratory muscles, often leading to difficulty breathing, especially in neuromuscular diseases.",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};

const treatmentMayIncludeData = {
  title: "Treatment may include",
  introText: "",
  items: [
    {
      title: "Strength training",
      description: "Exercises designed to maintain and improve muscle strength, preventing or delaying muscle atrophy.",
    },
    {
      title: "Balance and coordination exercises",
      description: "Activities to enhance stability, reduce fall risks, and improve overall coordination.",
    },
    {
      title: "Postural and respiratory management",
      description: "Strategies to support breathing and improve posture, reducing complications like respiratory infections.",
    },
    {
      title: "Spasticity management",
      description: "Techniques to reduce muscle stiffness and improve flexibility and range of motion.",
    },
    {
      title: "24-hour seating and posture management",
      description: "Tailored solutions for seating and posture to ensure comfort, support alignment, and prevent pressure sores.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const benefitsOfPhysiotherapyData = {
  title: "Benefits of physiotherapy include",
  introText: "",
  items: [
    {
      title: "Reduced falls risk",
      description: "Strength and balance training effectively lower the likelihood of falls and related injuries, enhancing safety during daily activities.",
    },
    {
      title: "Better quality of life",
      description: "Personalized rehabilitation plans improve overall well-being, enabling patients to engage more fully in life and pursue meaningful activities.",
    },
    {
      title: "Greater understanding of condition",
      description: "Physiotherapy provides education about the specific neurological condition, empowering patients and caregivers with knowledge to manage symptoms effectively.",
    },
    {
      title: "Caregiver education and support",
      description: "Therapists offer guidance and strategies to caregivers, equipping them with the tools needed to provide effective support and enhance their own well-being.",
    },
    {
      title: "Maintaining strength and functions",
      description: "Targeted exercises help sustain muscle strength and essential functions, preventing deterioration and promoting independence in daily tasks.",
    },
    {
      title: "Enhanced mental well-being",
      description: "Goal-setting and regular progress tracking foster motivation and mental resilience, contributing to a positive outlook during the recovery process.",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};


const StrokeRehabilitationPage = () => {
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

  return (
    <section className="py-16 px-4 text-maintext">
    <div>
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Rare Neurological Condition Rehabilitation  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>
        
        <p className="text-lg !border-2 !border-primary p-4 mb-8">
        Rare neurological conditions, such as Huntington’s disease, Amyotrophic Lateral Sclerosis (ALS), and various neuromuscular diseases, can lead to progressive physical and cognitive impairments. These conditions affect muscle control, movement, coordination, and often speech, gradually reducing a person's ability to perform everyday tasks independently. The progressive nature of these diseases also places significant emotional and physical strain on both patients and their caregivers, often requiring long-term care and support.        </p>
        </motion.div>
        <motion.div
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
            }}
          >
        
        <div className="flex justify-center mb-12">
          <img
            src="/images/specialty/rare-neurological-conditions.webp"
            alt="stroke-rehabilitation"
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div></motion.div>
        </div>

        <RehabSection
          title={uniqueApproachData.title}
          introText={uniqueApproachData.introText}
          endingText={uniqueApproachData.endingText}
          items={uniqueApproachData.items}
          backgroundColor={uniqueApproachData.backgroundColor}
        />
        
        <RehabSection
          title={whatWeCanHelpData.title}
          introText={whatWeCanHelpData.introText}
          items={whatWeCanHelpData.items}
          backgroundColor={whatWeCanHelpData.backgroundColor}
        />

        {!showMore && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-3 bg-maintext text-white rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              View More
            </button>
          </div>
        )}

        {showMore && (
          <>
            <RehabSection
              title={treatmentMayIncludeData.title}
              introText={treatmentMayIncludeData.introText}
              items={treatmentMayIncludeData.items}
              backgroundColor={treatmentMayIncludeData.backgroundColor}
            />

            <RehabSection
              title={benefitsOfPhysiotherapyData.title}
              introText={benefitsOfPhysiotherapyData.introText}
              items={benefitsOfPhysiotherapyData.items}
              backgroundColor={benefitsOfPhysiotherapyData.backgroundColor}
            />
          </>
        )}

        <CallToActionSection
            title="We'd love to treat you"
            link="/enquiry"
            buttonText="Make an Enquiry"
        />
      </div>
    </section>
  );
};


export default StrokeRehabilitationPage;
