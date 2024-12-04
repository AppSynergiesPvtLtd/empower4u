"use client";

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from 'next/image';
import Link from 'next/link';
import RehabSection from '@/components/RehabSection';

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
  introText: "Here are some common vestibular disorders:",
  items: [
    {
      title: "Benign Paroxysmal Positional Vertigo (BPPV)",
      description: "A condition where small crystals in the inner ear become dislodged, causing brief episodes of dizziness with changes in head position.",
    },
    {
      title: "Vestibular Neuritis",
      description: "Inflammation of the vestibular nerve, leading to severe vertigo, balance issues, and nausea.",
    },
    {
      title: "Meniere’s Disease",
      description: "A chronic condition characterized by episodes of vertigo, ringing in the ears (tinnitus), hearing loss, and a feeling of fullness in the ear.",
    },
    {
      title: "Vestibular Migraine",
      description: "Dizziness or vertigo that occurs with migraine headaches, often accompanied by light sensitivity and nausea.",
    },
    {
      title: "Unilateral Vestibular Hypofunction",
      description: "Reduced function of one vestibular system, resulting in imbalance and dizziness.",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};

const treatmentMayIncludeData = {
  title: "Treatment may include",
  introText: "",
  items: [
    {
      title: "Vestibular rehabilitation exercises",
      description: "Targeted exercises designed to improve balance, reduce dizziness, and promote compensation for vestibular deficits.",
    },
    {
      title: "Canalith repositioning maneuvers",
      description: "Specific techniques to reposition displaced crystals in the inner ear for conditions like BPPV.",
    },
    {
      title: "Balance training",
      description: "Activities to enhance stability and coordination, reducing the risk of falls.",
    },
    {
      title: "Habituation exercises",
      description: "Gradual exposure to movements and environments that provoke symptoms to decrease sensitivity.",
    },
    {
      title: "Education and lifestyle modifications",
      description: "Guidance on managing symptoms and making adjustments to daily activities to improve quality of life.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const benefitsOfPhysiotherapyData = {
  title: "Benefits of physiotherapy include",
  introText: "",
  items: [
    {
      title: "Reduces dizziness and vertigo",
      description: "Effective rehabilitation can significantly lessen the intensity and frequency of dizziness episodes.",
    },
    {
      title: "Improves balance and coordination",
      description: "Targeted exercises enhance stability, helping to prevent falls and improve overall mobility.",
    },
    {
      title: "Increases confidence",
      description: "Reducing symptoms allows individuals to feel more secure in their movements and activities.",
    },
    {
      title: "Enhances daily function",
      description: "Improved balance and reduced dizziness facilitate a return to everyday tasks and activities.",
    },
    {
      title: "Prevents complications",
      description: "Early intervention can prevent issues related to prolonged dizziness, such as anxiety and avoidance of physical activities.",
    },
    {
      title: "Psychosocial benefits",
      description: "Support and encouragement from physiotherapy promote a positive mindset and motivation throughout the recovery process.",
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Vestibular Rehabilitation  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>

        <p className="text-lg !border-2 !border-primary p-4 mb-8">
          Vestibular disorders affect the inner ear and brain&#39;s ability to process balance-related sensory information, leading to symptoms like dizziness, vertigo, and imbalance, all of which can significantly impact daily life. Vestibular rehabilitation uses targeted exercises to alleviate symptoms, improve balance, and enhance stability, helping individuals regain confidence in their movements and restore functional independence.
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
            src="/images/specialty/vestibulardisorder.webp"
            alt="vestibulardisorder"
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

        <section className="py-10 text-maintext text-center">
          <div className="container mx-auto px-4">
            <div className="p-8 border-t-4 border-primary bg-white max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4 font-inter">We&#39;d love to treat you</h2>
              <Link href="/enquiry" passHref>
                <button className="px-6 py-3 text-lg font-semibold text-white bg-maintext rounded-full hover:bg-primary">
                  Make an Enquiry
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};


export default StrokeRehabilitationPage;
