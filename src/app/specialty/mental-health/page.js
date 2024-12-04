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
      title: "Non-pharmacological management of pain",
      description: "",
    },
    {
      title: "Expertise in prescribing individualised exercise programs",
      description: "Which can improve mood, promote wellbeing, and address co-morbidities associated with mental health diagnoses.",
    },
    {
      title: "Interventions to address physical issues",
      description: "Of people with mental health diagnoses which hinder social participation and recovery, e.g., minimizing or counteracting the side-effects of some psychotropic medications.",
    },
    {
      title: "Expertise in motivating and promoting self-management",
      description: "Where appropriate, patients are encouraged to engage in self-management within the context of mental and physical health issues.",
    },
    {
      title: "Management of falls and mobility issues",
      description: "For older people and developmental issues for children and young people.",
    },
    {
      title: "Expert advice and intervention",
      description: "To address impaired body awareness and reduce dissociation associated with poor mental health.",
    },
    {
      title: "Development and delivery of individually-tailored lifestyle",
      description: "",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};

const healthBenefitsData = {
  title: "The health benefits of regular exercise are:",
  introText: "",
  items: [
    {
      title: "Improved cardiovascular fitness",
      description: "",
    },
    {
      title: "Improved sleep",
      description: "",
    },
    {
      title: "Better endurance",
      description: "",
    },
    {
      title: "A positive influence on metabolic syndrome and diabetes",
      description: "",
    },
    {
      title: "Stress relief",
      description: "",
    },
    {
      title: "Improved mood",
      description: "",
    },
    {
      title: "Increased energy and reduced tiredness",
      description: "",
    },
    {
      title: "Reduced anxiety, depression, negative mood, and social isolation",
      description: "Exercise improves self-esteem, cognitive functions, and quality of life.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Mental Health  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>

        <p className="text-lg !border-2 !border-primary p-4 mb-8">
          Good mental health is essential for overall well-being, but poor mental health is linked to disability, reduced quality of life, and chronic pain. Physical activity has been proven to improve mental health, alleviate psychiatric symptoms, and enhance quality of life. Aerobic and strength exercises, such as walking, jogging, and swimming, can reduce anxiety and depression. Given the strong link between mental health issues and conditions like chronic pain, a holistic, multidisciplinary approach is crucial for effective treatment and prevention. Physiotherapy interventions play a key role in supporting both physical and mental health.
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
            src="/images/specialty/mental-health.webp"
            alt="mental-health"
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
              title={healthBenefitsData.title}
              introText={healthBenefitsData.introText}
              items={healthBenefitsData.items}
              backgroundColor={healthBenefitsData.backgroundColor}
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
