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
  introText: "Fracture recovery:",
  items: [
    {
      title: "Closed fracture (or simple fracture)",
      description: "This is one of the most common fractures, this is when the bone breaks but does not pierce the skin.",
    },
    {
      title: "Open fracture (or compound fracture)",
      description: "This is when the bone breaks and pierces through the skin.",
    },
    {
      title: "Greenstick fracture",
      description: "It is common in children; this is when a portion of bone breaks causing the bone to bend but does not break completely.",
    },
    {
      title: "Comminuted fracture",
      description: "More severe type of fracture where the bone breaks into several pieces.",
    },
    {
      title: "Avulsion fracture",
      description: "When a small piece of bone is torn away from the main bone.",
    },
    {
      title: "Stress fracture",
      description: "A hairline crack in the bone.",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};

const treatmentMayIncludeData = {
  title: "Treatment may include",
  introText: "",
  items: [
    {
      title: "Splint or cast",
      description: "This immobilizes the injured area to keep the bone in alignment. It protects the injured area from motion or use while the bone heals.",
    },
    {
      title: "Medicine",
      description: "This may be needed to control pain.",
    },
    {
      title: "Traction",
      description: "The use of a steady pulling action to stretch certain parts of the body in a certain direction. It helps stretch the muscles and tendons around the broken bone to align and heal.",
    },
    {
      title: "Surgery",
      description: "Surgery may be needed to put certain types of broken bones back into place, sometimes using fixation devices to hold the bones in place while they heal.",
    },
    {
      title: "Therapy",
      description: "Therapists can be involved before and after surgery to aid in mobility, strength, and function recovery. Includes treatments like balance training, injury education, and rehabilitation for returning to work or sports.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const benefitsOfPhysiotherapyData = {
  title: "Benefits of physiotherapy include",
  introText: "",
  items: [
    {
      title: "Restores mobility and range of motion",
      description: "Physiotherapy helps stretch, strengthen, and mobilise the area around the fracture to improve flexibility and movement, preventing stiffness or contractures.",
    },
    {
      title: "Prevents muscle atrophy",
      description: "Being immobile for a long time after a fracture can cause muscle loss. Physiotherapy provides exercises to rebuild muscle strength.",
    },
    {
      title: "Improves stability and weight-bearing",
      description: "Weight-bearing exercises and balance training help improve the ability to bear weight through the affected limb.",
    },
    {
      title: "Faster recovery",
      description: "Starting physiotherapy soon after the fracture and surgery can significantly speed up the healing and recovery.",
    },
    {
      title: "Prevents complications",
      description: "Regular physiotherapy helps prevent complications like thrombus formation, improper bone healing, and joint stiffness, aiding in regaining pre-injury status.",
    },
    {
      title: "Psychosocial benefits",
      description: "Physiotherapy provides encouragement and motivation during recovery, supporting mental health and aiding recovery.",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};
const arthritisRehabilitationData = {
  title: "Arthritis rehabilitation:",
  introText: "Physical therapy for arthritis focuses on improving joint mobility, increasing strength, maintaining fitness, and preserving daily function. A physical therapist will develop a personalized exercise plan to enhance flexibility, coordination, and balance. They will teach proper posture, recommend assistive devices, and suggest treatments like braces or hot/cold therapy to reduce pain. Sessions usually last about an hour, with a focus on techniques you can practice at home. Consistency is essential, as regular exercise leads to gradual improvement in strength and overall function.",
  items: [
    {
      title: "Goals of Physiotherapy for Arthritis:",
      description: "Improve joint mobility and function, Increase strength to support joints, Maintain overall fitness, Preserve the ability to perform daily activities.",
    },
    {
      title: "We create a personalized exercise plan to improve flexibility, strength, coordination, and balance. We will:",
      description: "Teach proper posture and body mechanics to reduce pain, Show you how to use assistive devices like walkers or canes, Recommend treatments like braces, splints, shoe inserts, and hot/cold therapy, Suggest ergonomic adjustments, such as using supportive chairs or mats, to ease pain and improve function.",
    },
    {
      title: "What to Expect During a Physical Therapy Session:",
      description: "Sessions typically last about an hour, focusing on exercises and techniques you can continue at home. Your therapist will help you set clear goals, whether it’s walking pain-free, reaching overhead, or performing daily tasks. Follow-up visits may be scheduled as needed to adjust your program.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const amputeeRehabilitationData = {
  title: "Amputee rehabilitation:",
  introText: "Limb amputation is a life-changing event, which has significant effects on physical and psychological well-being. The lower the amputation, the more joints that are spared, the better the potential for a more normal walking pattern with a prosthesis. There are different types of lower limb amputations:",
  items: [
    {
      title: "Types of lower limb amputations:",
      description: "Foot, including toes or partial foot; At the ankle (ankle disarticulation); Below the knee (transtibial); At the knee (knee disarticulation); Above the knee (transfemoral); At the hip (hip disarticulation).",
    },
    {
      title: "Post-operative care and prosthetic training:",
      description: "After amputation surgery, our post-operative care prioritizes healing, comfort, and emotional well-being. We focus on wound care, pain management, safe transfer techniques, and improving mobility, strength, and balance. Once your residual limb heals, we shape it for a prosthetic using compression therapy and manual techniques, followed by custom prosthetic design and fitting. Our comprehensive prosthetic training helps you adapt to your new limb, teaching you how to care for it, manage discomfort, and regain independence in daily activities.",
    },
    {
      title: "Our service includes:",
      description: "Strengthening program, Residual limb care, Bed and wheelchair transfer practice, Balance and coordination training, Ambulation with assistive devices without a prosthesis, Donning and doffing of the prosthesis, Gait training.",
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> FRACTURE/ JOINT HEALTH/ AMPUTEE  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>

        <p className="text-lg !border-2 !border-primary p-4 mb-8">
          Rare neurological conditions, such as Huntington’s disease, Amyotrophic Lateral Sclerosis (ALS), and various neuromuscular diseases, can lead to progressive physical and cognitive impairments. These conditions affect muscle control, movement, coordination, and often speech, gradually reducing a person&#39;s ability to perform everyday tasks independently. The progressive nature of these diseases also places significant emotional and physical strain on both patients and their caregivers, often requiring long-term care and support.
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
            src="/images/specialty/Falls joint health and Amputee.webp"
            alt="Falls joint health and Amputee"
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
            <RehabSection
            title={arthritisRehabilitationData.title}
            introText={arthritisRehabilitationData.introText}
            items={arthritisRehabilitationData.items}
            backgroundColor={arthritisRehabilitationData.backgroundColor}
            />

            <RehabSection
            title={amputeeRehabilitationData.title}
            introText={amputeeRehabilitationData.introText}
            items={amputeeRehabilitationData.items}
            backgroundColor={amputeeRehabilitationData.backgroundColor}
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
