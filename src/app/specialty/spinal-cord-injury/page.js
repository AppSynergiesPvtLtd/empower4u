"use client";

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from 'next/image';
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
  introText: "Here are some common challenges associated with spinal cord injuries that we address:",
  items: [
    {
      title: "Paralysis",
      description: "Loss of muscle function and sensation, affecting movement in the arms, legs, or entire body depending on the injury location.",
    },
    {
      title: "Spasticity",
      description: "Involuntary muscle stiffness or spasms that can limit movement and create discomfort.",
    },
    {
      title: "Respiratory issues",
      description: "Breathing difficulties caused by weakened respiratory muscles, often seen with higher-level injuries.",
    },
    {
      title: "Bladder and bowel dysfunction",
      description: "Loss of control due to nerve damage, affecting daily living and independence.",
    },
    {
      title: "Pressure sores",
      description: "Skin ulcers resulting from prolonged immobility, requiring effective positioning and movement strategies to prevent.",
    },
    {
      title: "Chronic pain",
      description: "Pain related to nerve damage, muscle stiffness, or secondary conditions, affecting quality of life.",
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
      description: "Targeted exercises to build muscle strength and improve motor function in areas affected by paralysis or weakness.",
    },
    {
      title: "Spasticity management",
      description: "Stretching, strengthening exercises, and specialized techniques to reduce stiffness and improve movement.",
    },
    {
      title: "Respiratory therapy",
      description: "Breathing exercises and chest physiotherapy to strengthen respiratory muscles and improve lung function.",
    },
    {
      title: "Wheelchair assessment and recommendations",
      description: "Ensuring the correct wheelchair setup to improve skin integrity, mobility, and independence, tailored to the patient’s individual needs.",
    },
    {
      title: "Postural management",
      description: "Techniques to optimize body alignment and reduce the risk of pressure sores, discomfort, and deformities.",
    },
    {
      title: "Functional training",
      description: "Exercises to help regain the ability to perform daily activities like transferring, dressing, and eating.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const benefitsOfPhysiotherapyData = {
  title: "Benefits of physiotherapy include",
  introText: "",
  items: [
    {
      title: "Restores movement and function",
      description: "Tailored exercises help recover strength and motor function, enhancing independence.",
    },
    {
      title: "Improved posture and seating",
      description: "Postural management techniques ensure proper alignment, reducing discomfort and complications.",
    },
    {
      title: "Reduces spasticity",
      description: "Stretching and strengthening reduce muscle stiffness, improving range of motion.",
    },
    {
      title: "Enhances independence",
      description: "Rehabilitation aims to restore the ability to perform daily activities, improving autonomy.",
    },
    {
      title: "Prevents complications",
      description: "Early intervention helps prevent secondary issues such as pressure sores, joint stiffness, and respiratory complications.",
    },
    {
      title: "Boosts mental well-being",
      description: "Setting goals and tracking progress fosters motivation and supports mental health throughout recovery.",
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Spinal Cord Injury Rehabilitation  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>

        <p className="text-lg !border-2 !border-primary p-4 mb-8">
          A spinal cord injury (SCI) can significantly impact a person’s ability to move, feel, and function independently, depending on the level and severity of the injury. SCI can result from trauma or disease and often leads to partial or complete loss of motor and sensory function below the site of injury. This loss of function can affect mobility, bladder and bowel control, and the ability to perform everyday tasks, placing both physical and emotional burdens on the individual and their caregivers. These challenges can be overwhelming, often requiring significant support and rehabilitation to improve quality of life.

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
            src="/images/specialty/spinal-cord-injury.webp"
            alt="spinal-cord-injury.jpg"
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
