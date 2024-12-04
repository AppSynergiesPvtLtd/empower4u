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
  introText: "Here are some common GBS-related challenges we address:",
  items: [
    {
      title: "Muscle weakness",
      description: "Reduced strength throughout the body, which may impact the ability to walk, stand, or use the arms.",
    },
    {
      title: "Fatigue",
      description: "Persistent tiredness and exhaustion that can interfere with daily activities and rehabilitation progress.",
    },
    {
      title: "Respiratory weakness",
      description: "Difficulty breathing due to weakened muscles, which may require respiratory therapy.",
    },
    {
      title: "Balance issues",
      description: "Problems with coordination and stability, making walking and standing difficult.",
    },
    {
      title: "Nerve pain",
      description: "Discomfort or pain caused by nerve inflammation, which can interfere with movement and sleep.",
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
      description: "Exercises to rebuild muscle strength and improve overall physical conditioning.",
    },
    {
      title: "Balance and coordination exercises",
      description: "Activities to restore stability and improve walking ability.",
    },
    {
      title: "Walking training",
      description: "Gait training to help patients regain the ability to walk independently and safely.",
    },
    {
      title: "Respiratory exercises",
      description: "Breathing exercises to strengthen the lungs and respiratory muscles.",
    },
    {
      title: "Functional training",
      description: "Task-specific activities to improve the ability to perform daily tasks such as dressing, eating, and transferring.",
    },
    {
      title: "Posture and seating management",
      description: "Strategies to improve posture, optimize comfort, and reduce the risk of pressure sores.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};


const benefitsOfPhysiotherapyData = {
  title: "Benefits of physiotherapy include",
  introText: "",
  items: [
    {
      title: "Improved mobility",
      description: "Exercises help regain movement, allowing patients to walk and perform tasks independently.",
    },
    {
      title: "Fall prevention",
      description: "Balance training reduces the risk of falls and injuries during recovery.",
    },
    {
      title: "Reduced muscle stiffness",
      description: "Stretching and movement exercises help reduce stiffness and improve range of motion.",
    },
    {
      title: "Better respiratory function",
      description: "Breathing exercises strengthen respiratory muscles and improve lung capacity.",
    },
    {
      title: "Enhanced independence",
      description: "Rehabilitation supports the ability to perform daily activities without assistance.",
    },
    {
      title: "Increased strength",
      description: "Progressive strength training rebuilds muscle power, supporting faster recovery.",
    },
    {
      title: "Pain management",
      description: "Nerve pain is managed through a combination of exercises and positioning techniques.",
    },
    {
      title: "Improved mental well-being",
      description: "Goal setting and tracking progress provide motivation and support mental health during recovery.",
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Guillain-Barré Syndrome  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>


        <p className="text-lg !border-2 !border-primary p-4 mb-8">
          Guillain-Barré Syndrome (GBS) is a rare neurological disorder where the body&#39;s immune system mistakenly attacks the peripheral nerves, leading to muscle weakness and, in severe cases, paralysis. GBS can progress rapidly, affecting mobility, respiratory function, and overall independence. Although many individuals recover fully, the rehabilitation process can be long and challenging, requiring a specialized approach to regain strength, coordination, and functional independence. The impact of GBS extends beyond the patient, often placing emotional and physical demands on caregivers as they provide necessary support throughout recovery.
        
        
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
            src="/images/specialty/guillain.webp"
            alt="guillain"
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

        {/* Enquiry Section */}
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
