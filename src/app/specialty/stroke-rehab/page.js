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
  introText: "Here are some common stroke-related challenges we address:",
  items: [
    {
      title: "Hemiplegia",
      description: "Paralysis on one side of the body, affecting movement and strength in the arm, leg, and face.",
    },
    {
      title: "Spasticity",
      description: "Muscle stiffness or tightness that can limit range of motion and impair movement.",
    },
    {
      title: "Ataxia",
      description: "Difficulty with balance and coordination, making walking and daily activities challenging.",
    },
    {
      title: "Fatigue",
      description: "Persistent exhaustion that can hinder daily activities and reduce overall energy levels, often exacerbated by physical or cognitive exertion.",
    },
    {
      title: "Cognitive impairments",
      description: "Issues with memory, attention, and problem-solving that impact daily functioning.",
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
      description: "Exercises to improve muscle power in weakened or paralyzed limbs.",
    },
    {
      title: "Balance and coordination exercises",
      description: "Activities aimed at improving stability, reducing the risk of falls, and enhancing coordination.",
    },
    {
      title: "Walking training",
      description: "Gait training and exercises to assist with walking and other movements.",
    },
    {
      title: "Cognitive rehabilitation",
      description: "Mental exercises to improve memory, attention, and problem-solving abilities.",
    },
    {
      title: "Functional training",
      description: "Task-specific exercises designed to help patients regain the ability to perform daily activities such as dressing, eating, and transferring between positions independently.",
    },
    {
      title: "24 hour seating and posture management",
      description: "Strategies to optimize seating and posture throughout the day prevent discomfort and support proper alignment, reducing the risk of complications.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const benefitsOfPhysiotherapyData = {
  title: "Benefits of physiotherapy include",
  introText: "",
  items: [
    {
      title: "Walking safely and faster",
      description: "Gait training and exercises help improve walking speed and safety, reducing the risk of falls.",
    },
    {
      title: "Fall prevention",
      description: "Balance and coordination exercises help enhance stability, lowering the risk of falls and injuries.",
    },
    {
      title: "Adjusted posture",
      description: "Posture management techniques improve alignment, preventing discomfort and supporting better mobility.",
    },
    {
      title: "Less muscle stiffness (spasticity)",
      description: "Spasticity management reduces stiffness, improving movement and range of motion.",
    },
    {
      title: "Improved independence",
      description: "Rehabilitation focuses on restoring the ability to perform daily activities independently.",
    },
    {
      title: "Becoming stronger",
      description: "Strength training helps regain muscle power and overall body strength.",
    },
    {
      title: "Prevent complications (such as deconditioning)",
      description: "Early physiotherapy helps prevent issues like muscle wasting, joint stiffness, and loss of cardiovascular fitness.",
    },
    {
      title: "Better arm functions",
      description: "Task-specific exercises enhance arm strength and coordination, improving function in daily tasks.",
    },
    {
      title: "Enhanced mental well-being",
      description: "Regular progress and goal setting foster motivation, supporting positive mental health during recovery.",
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Stroke Rehabilitation  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>
        
        <p className="text-lg !border-2 !border-primary p-4 mb-8">
          There are two main types of stroke: ischemic and hemorrhagic. Both types result in damage to brain cells, leading to various impairments depending on the area affected. A stroke can significantly impair a patient’s mobility, speech, and cognitive abilities, impacting their ability to perform daily tasks independently. This often places a heavy emotional and physical burden on caregivers, as they may need to provide constant support and assistance with basic activities, leading to stress and fatigue.
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
            src="/images/specialty/stroke-rehabilitation.webp"
            alt="stroke-rehabilitation"
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        </motion.div>
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
