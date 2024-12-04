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
  introText: "Here are some common Parkinson’s-related challenges we address:",
  items: [
    {
      title: "Bradykinesia",
      description: "Slowed movements that make daily activities like walking, eating, and dressing difficult.",
    },
    {
      title: "Tremors",
      description: "Involuntary shaking that interferes with tasks requiring fine motor control.",
    },
    {
      title: "Rigidity",
      description: "Muscle stiffness that restricts movement and can cause discomfort or pain.",
    },
    {
      title: "Postural instability",
      description: "Balance problems that increase the risk of falls and affect safe mobility.",
    },
    {
      title: "Gait freezing",
      description: "Sudden inability to move the feet when walking, which can lead to falls or injury.",
    },
    {
      title: "Fatigue",
      description: "Persistent exhaustion that can make physical activities more difficult to sustain.",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};

const treatmentMayIncludeData = {
  title: "Treatment may include",
  introText: "",
  items: [
    {
      title: "PD Warrior exercises",
      description: "Our therapists are PD Warrior trained. Key PD Warrior concepts will be integrated into your exercise programme to maximise your best potential.",
    },
    {
      title: "Strength training",
      description: "Exercises designed to maintain and improve muscle power, preventing weakness and deconditioning.",
    },
    {
      title: "Balance and coordination exercises",
      description: "Activities to enhance stability, reduce falls, and improve coordination.",
    },
    {
      title: "Gait training",
      description: "Focused on improving walking patterns, addressing freezing episodes, and promoting safe mobility.",
    },
    {
      title: "Postural training",
      description: "Exercises to correct alignment, improve posture, and reduce the risk of falls.",
    },
    {
      title: "Functional training",
      description: "Task-specific exercises to help regain the ability to perform daily activities like eating, dressing, and transferring positions.",
    },
    {
      title: "24-hour posture and mobility management",
      description: "Techniques to support optimal alignment throughout the day, reducing discomfort and promoting better movement.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const benefitsOfPhysiotherapyData = {
  title: "Benefits of physiotherapy include",
  introText: "",
  items: [
    {
      title: "Improved walking and mobility",
      description: "Gait training helps patients move more freely and safely, reducing the risk of falls.",
    },
    {
      title: "Enhanced posture",
      description: "Posture training improves alignment, easing pain and preventing complications.",
    },
    {
      title: "Less muscle rigidity",
      description: "Exercises help reduce stiffness, improving movement and range of motion.",
    },
    {
      title: "Boosted independence",
      description: "Targeted rehabilitation focuses on helping patients carry out daily tasks independently.",
    },
    {
      title: "Stronger muscles",
      description: "Strength training helps combat muscle weakness and promotes overall body strength.",
    },
    {
      title: "Fall prevention",
      description: "Balance exercises improve stability, lowering the likelihood of falls and injuries.",
    },
    {
      title: "Better overall function",
      description: "Functional training helps patients regain abilities needed for daily life.",
    },
    {
      title: "Enhanced mental well-being",
      description: "Progress in physical abilities fosters motivation and supports positive mental health.",
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Parkinson&#39;s Disease Rehabilitation  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>

        <p className="text-lg !border-2 !border-primary p-4 mb-8">
          Parkinson&#39;s disease is a progressive neurological disorder that affects movement, muscle control, and balance due to the loss of dopamine-producing cells in the brain. Common symptoms include tremors, rigidity, bradykinesia (slowness of movement), and postural instability, all of which can significantly impact a person&#39;s ability to carry out daily tasks independently. Over time, the challenges of living with Parkinson&#39;s can also place a strain on caregivers, who may need to assist with activities such as walking, dressing, and mobility, leading to emotional and physical exhaustion.
        </p>
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
            src="/images/specialty/Parkinson-disease.webp"
            alt="Parkinson-disease"
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
