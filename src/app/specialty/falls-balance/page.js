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
  introText: "",
  items: [
    {
      title: "Home environment assessment",
      description: "A comprehensive evaluation to identify potential hazards and recommend modifications to ensure your living space is safe and fit for purpose.",
    },
    {
      title: "Full falls assessment",
      description: "Falls can result from various factors, such as cognitive issues, blood pressure changes, or medication side effects. We conduct a thorough assessment to identify all potential risks contributing to falls.",
    },
    {
      title: "Balance assessment and treatment",
      description: "Adequate muscle strength, joint flexibility, and coordination are essential for maintaining balance. We also assess key sensory functions, including vision, proprioception (joint sensation), and vestibular sensation (inner ear), to create a holistic treatment plan.",
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
      description: "Exercises to improve muscle power and joint flexibility for better stability.",
    },
    {
      title: "Balance therapy",
      description: "Activities to enhance coordination and the body&#39;s ability to sense and respond to changes in the environment.",
    },
    {
      title: "Sensory rehabilitation",
      description: "Addressing issues related to vision, inner ear function, and proprioception to improve overall balance.",
    },
    {
      title: "Environmental modifications",
      description: "Recommendations for making changes to your home to prevent falls, such as removing tripping hazards and improving lighting.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const benefitsOfPhysiotherapyData = {
  title: "Benefits of our falls and balance programme include",
  introText: "",
  items: [
    {
      title: "Improved stability and mobility",
      description: "Strength and balance exercises help enhance coordination and the ability to move confidently.",
    },
    {
      title: "Reduced falls risk",
      description: "Identifying and addressing personal and environmental fall risks significantly decreases the likelihood of falls.",
    },
    {
      title: "Enhanced confidence",
      description: "Restoring balance and improving strength can reduce the fear of falling, promoting independence.",
    },
    {
      title: "Holistic care",
      description: "A tailored approach addressing both physical and environmental factors to ensure optimal safety and recovery.",
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
      <div className="">
        <div className='container mx-auto max-w-6xl'>
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
          <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Falls and Balance  </h1>
          <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>
          
          <p className="text-lg !border-2 !border-primary p-4 mb-8">
            Falls and balance issues are significant concerns. Impaired balance can lead to an increased risk of falls, which can result in serious injuries, loss of independence, and a decline in overall quality of life. Factors such as muscle weakness, neurological conditions, and environmental hazards contribute to these challenges, affecting an individual&#39;s ability to move safely and confidently. Moreover, the fear of falling can create a cycle of reduced activity, further diminishing strength and balance. Addressing falls and balance is essential not only for physical health but also for emotional well-being, as maintaining independence and mobility plays a crucial role in overall life satisfaction.
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
            src="/images/specialty/falls-and-balance.webp"
            alt="falls and balance"
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

        <div className="flex justify-center mb-12"><img src="/images/specialty/fall.png" alt="Bottom Border" width={600} height={400} /></div>

        
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
