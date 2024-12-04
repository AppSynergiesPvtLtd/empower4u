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
  introText: "Here are some surgeries we support:",
  items: [
    {
      title: "Liver Transplant",
      description: "",
    },
    {
      title: "Lung Transplant/Lobectomy",
      description: "",
    },
    {
      title: "Cardiac Surgery",
      description: "",
    },
    {
      title: "Joint Replacement Surgery",
      description: "",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};

const preAndPostSurgeryData = {
  title: "Pre-surgery preparation:",
  introText: "",
  items: [
    {
      title: "Baseline assessment",
      description: "We evaluate your current physical condition.",
    },
    {
      title: "Pre-operative exercise programme",
      description:
        "Designed to maximize your strength, cardiovascular fitness, and cardiorespiratory capacity to reduce the risk of surgery complications and improve recovery outcomes.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const postSurgeryRecoveryData = {
  title: "Post-surgery recovery:",
  introText: "",
  items: [
    {
      title: "Muscle strength",
      description: "Targeted exercises to regain muscle power.",
    },
    {
      title: "Cardiovascular fitness",
      description: "Activities to rebuild stamina and overall health.",
    },
    {
      title: "Regaining functions",
      description:
        "Specialized training to restore mobility, coordination, and the ability to perform daily tasks independently.",
    },
    {
      title: "Pain management",
      description:
        "Collaborating with the medical and nursing team to minimize pain, maximizing speedy recovery.",
    },
    {
      title: "Individual surgical needs",
      description:
        "Tailored plans addressing specific challenges like respiratory or liver function recovery.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const benefitsOfPhysiotherapyData = {
  title: "Benefits of physiotherapy",
  introText: "",
  items: [
    {
      title: "Improves strength and endurance pre-surgery, reducing risks.",
      description: "",
    },
    {
      title: "Accelerates recovery post-surgery by restoring muscle and cardiovascular function.",
      description: "",
    },
    {
      title:
        "Prevents complications, such as reduced lung capacity, muscle atrophy, joint stiffness, general deconditioning.",
      description: "",
    },
    {
      title:
        "Enhances quality of life, allowing a quicker return to daily activities and work.",
      description: "",
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> SURGERY PREHAB/REHAB  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>
        
        <p className="text-lg !border-2 !border-primary p-4 mb-8">
          Rare neurological conditions, such as Huntington’s disease, Amyotrophic Lateral Sclerosis (ALS), and various neuromuscular diseases, can lead to progressive physical and cognitive impairments. These conditions affect muscle control, movement, coordination, and often speech, gradually reducing a person’s ability to perform everyday tasks independently. The progressive nature of these diseases also places significant emotional and physical strain on both patients and their caregivers, often requiring long-term care and support.
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
            src="/images/specialty/surgery-rehab.webp"
            alt="surgery-rehab"
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
              title={preAndPostSurgeryData.title}
              introText={preAndPostSurgeryData.introText}
              items={preAndPostSurgeryData.items}
              backgroundColor={preAndPostSurgeryData.backgroundColor}
            />

            <RehabSection
              title={postSurgeryRecoveryData.title}
              introText={postSurgeryRecoveryData.introText}
              items={postSurgeryRecoveryData.items}
              backgroundColor={postSurgeryRecoveryData.backgroundColor}
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
