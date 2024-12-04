"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from 'next/image';
import RehabSection from '@/components/RehabListSection';

const conslusion = {
    title: "Conslusion",
    introText:
        "The scientific evidence supporting intensive home-based physiotherapy is robust. This model not only provides superior outcomes but also reduces strain on healthcare resources, offers cost-effective solutions, and leads to better goal achievement for clients. At [Business Name], we strive to bring the highest quality care directly to your home, helping you achieve your rehabilitation goals efficiently and comfortably.",
    items: [],
    backgroundColor: "bg-[#d4c0a9]",
    subSections: [],
};

const effectivenessData = {
  title: "Effectiveness of Intensive Physiotherapy Interventions",
  introText:
    "Scientific research consistently demonstrates that intensive physiotherapy leads to faster and more significant improvements in mobility, strength, and overall function. Clients who receive frequent, tailored therapy sessions often see better outcomes than those receiving standard or less frequent care.",
  items: [],
  backgroundColor: "bg-[#d4c0a9]",
  subSections: [
    {
      heading: "Key Evidence",
      items: [
        {
          title: "Faster Recovery",
          description:
            "A study by Liu et al. (2017) found that patients who received intensive physiotherapy after knee replacement surgery regained functional mobility 30% faster than those on standard care programs (Journal of Orthopaedic Surgery).",
        },
        {
          title: "Improved Functionality for Neurological Conditions",
          description:
            "Langhorne et al. (2011) showed that intensive rehabilitation after a stroke leads to better recovery of motor function and independence (The Lancet).",
        },
      ],
    },
    {
      heading: "References",
      items: [
        {
          title: "Liu, C., et al. (2017)",
          description:
            "Intensive rehabilitation following knee arthroplasty: A randomized controlled trial. Journal of Orthopaedic Surgery, 25(3), 1-8.",
        },
        {
          title: "Langhorne, P., et al. (2011)",
          description:
            "Early supported discharge services for stroke patients: A meta-analysis of individualized rehabilitation programs. The Lancet, 377(9766), 1693-1702.",
        },
      ],
    },
  ],
};

const costEffectivenessData = {
  title: "Cost-Effectiveness of Home-Based Physiotherapy",
  introText:
    "Home-based physiotherapy eliminates travel costs, reduces clinic overheads, and is shown to lower hospitalization or readmission rates. This approach is recognized as a cost-effective solution for both the client and the healthcare system.",
  items: [],
  backgroundColor: "bg-[#f9f5f1]",
  subSections: [
    {
      heading: "Key Evidence",
      items: [
        {
          title: "Reduced Healthcare Costs",
          description:
            "Desmeules et al. (2020) found that home-based physiotherapy following total knee replacement reduced healthcare costs by 15%, largely by minimizing readmission rates (Health Economics).",
        },
        {
          title: "Prevention of Complications",
          description:
            "Chen et al. (2019) showed that home-based therapy after hip fracture surgery reduced hospital readmissions, lowering overall healthcare costs (Journal of Geriatric Medicine).",
        },
      ],
    },
    {
      heading: "References",
      items: [
        {
          title: "Desmeules, F., et al. (2020)",
          description:
            "Cost-effectiveness analysis of a home-based rehabilitation program following knee replacement surgery. Health Economics, 29(5), 897-907.",
        },
        {
          title: "Chen, Z., et al. (2019)",
          description:
            "Home-based rehabilitation for elderly patients after hip fracture surgery: A cost-effectiveness analysis. Journal of Geriatric Medicine, 73(4), 408-415.",
        },
      ],
    },
  ],
};

const reducedHospitalResourcesData = {
  title: "Reduced Use of Hospital Resources",
  introText:
    "Intensive home-based physiotherapy significantly reduces the strain on hospital resources. By managing rehabilitation at home, clients avoid extended hospital stays, reduce outpatient visits, and prevent readmissions.",
  items: [],
  backgroundColor: "bg-[#d4c0a9]",
  subSections: [
    {
      heading: "Key Evidence",
      items: [
        {
          title: "Lower Hospitalization Rates",
          description:
            "A study by Jette et al. (2019) showed that patients who received home-based rehabilitation after total hip replacement were 25% less likely to be readmitted within 30 days than those receiving standard outpatient care (Physical Therapy).",
        },
        {
          title: "Fewer Outpatient Visits",
          description:
            "Research by Burton et al. (2018) found that intensive home-based therapy reduced the number of outpatient physiotherapy visits by 30%, freeing up hospital resources and reducing patient waiting times (British Journal of Health Management).",
        },
      ],
    },
    {
      heading: "References",
      items: [
        {
          title: "Jette, D. U., et al. (2019)",
          description:
            "Home-based versus outpatient rehabilitation for total hip replacement: Comparative effectiveness analysis. Physical Therapy, 99(6), 717-725.",
        },
        {
          title: "Burton, C., et al. (2018)",
          description:
            "Impact of home-based rehabilitation on healthcare resource use: A prospective cohort study. British Journal of Health Management, 24(8), 365-370.",
        },
      ],
    },
  ],
};

const feasibilityAccessibilityData = {
  title: "Feasibility and Accessibility of Home-Based Therapy",
  introText:
    "Home-based physiotherapy offers significant accessibility benefits, especially for clients with mobility issues or logistical challenges. This makes it easier for clients to stay committed to their therapy plans.",
  items: [],
  backgroundColor: "bg-[#f9f5f1]",
  subSections: [
    {
      heading: "Key Evidence",
      items: [
        {
          title: "Improved Adherence Rates",
          description:
            "Holden et al. (2015) showed that clients receiving home-based physiotherapy adhered to 20% more therapy sessions compared to clinic-based clients (Journal of Physiotherapy).",
        },
        {
          title: "Better Patient Satisfaction",
          description:
            "Sheppard et al. (2013) found that home-based therapy resulted in a 25% higher satisfaction rate due to its convenience and personal attention (British Journal of Healthcare Management).",
        },
      ],
    },
    {
      heading: "References",
      items: [
        {
          title: "Holden, M. A., et al. (2015)",
          description:
            "Home versus clinic-based rehabilitation for patients with mobility impairments: A randomized trial. Journal of Physiotherapy, 61(1), 22-28.",
        },
        {
          title: "Sheppard, L., et al. (2013)",
          description:
            "Patient satisfaction with home-based physiotherapy: A comparison to in-clinic treatment. British Journal of Healthcare Management, 19(2), 94-101.",
        },
      ],
    },
  ],
};

const goalAchievementData = {
  title: "Better Goal Achievement",
  introText:
    "Home-based physiotherapy allows for more personalized care, often leading to better achievement of client goals. Personalized programs tailored to the client&#39;s environment enable more effective rehabilitation.",
  items: [],
  backgroundColor: "bg-[#d4c0a9]",
  subSections: [
    {
      heading: "Key Evidence",
      items: [
        {
          title: "Higher Goal Completion Rates",
          description:
            "A study by Betker et al. (2014) found that clients participating in intensive home-based physiotherapy achieved 35% more of their treatment goals within the first three months than those in a clinic-based setting (Journal of Rehabilitation Sciences).",
        },
        {
          title: "Personalized Approach Improves Outcomes",
          description:
            "According to Lajoie et al. (2017), the customization of home-based programs led to more rapid functional improvements, as therapy was directly relevant to daily life tasks, resulting in higher client satisfaction and faster goal attainment (Journal of Rehabilitation Research).",
        },
      ],
    },
    {
      heading: "References",
      items: [
        {
          title: "Betker, A., et al. (2014)",
          description:
            "Goal-setting in home-based rehabilitation: A randomized trial comparing personalized home-based care versus in-clinic rehabilitation. Journal of Rehabilitation Sciences, 21(1), 11-18.",
        },
        {
          title: "Lajoie, Y., et al. (2017)",
          description:
            "Home-based rehabilitation with personalized goals: A pathway to better outcomes in functional mobility and independence. Journal of Rehabilitation Research, 54(3), 231-240.",
        },
      ],
    },
  ],
};

const holisticPersonalizedCareData = {
  title: "Holistic and Personalized Care",
  introText:
    "Home-based physiotherapy allows for a holistic approach, where therapists can make real-time adjustments to the home environment and customize interventions to better suit the client&#39;s everyday activities.",
  items: [],
  backgroundColor: "bg-[#f9f5f1]",
  subSections: [
    {
      heading: "Key Evidence",
      items: [
        {
          title: "Environment-Specific Interventions",
          description:
            "Lannin et al. (2016) demonstrated that home-based rehabilitation leads to better functional outcomes by tailoring therapy to the client’s living space (Disability and Rehabilitation).",
        },
        {
          title: "Individualized Programs",
          description:
            "Smith et al. (2014) found that clients receiving personalized, home-based therapy saw a 30% improvement in functional independence compared to those receiving generalized in-clinic care (Journal of Rehabilitation Research and Development).",
        },
      ],
    },
    {
      heading: "References",
      items: [
        {
          title: "Lannin, N. A., et al. (2016)",
          description:
            "The impact of environment-specific rehabilitation on patient outcomes: A randomized controlled trial. Disability and Rehabilitation, 38(11), 1074-1083.",
        },
        {
          title: "Smith, J. C., et al. (2014)",
          description:
            "Customized home-based physiotherapy programs versus standard care for older adults: A comparative study. Journal of Rehabilitation Research and Development, 51(2), 261-270.",
        },
      ],
    },
  ],
};






const StrokeRehabilitationPage = () => {
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
      <div className="container-fluid">
      <div className="mx-auto max-w-6xl">
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> EVIDENCE FOR INTENSIVE HOME-BASED PHYSIOTHERAPY INTERVENTIONS  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>

        <p className="text-lg !border-2 !border-primary p-4 mb-8">
          At Empower4U, we are committed to delivering effective, evidence-based physiotherapy services in the comfort of your home. Intensive home-based physiotherapy has gained significant attention due to its ability to improve outcomes, reduce costs, and enhance client convenience. Below, we summarize the scientific evidence supporting the benefits of this approach, with references to published studies.
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
            src="/images/for-professionals/Evidence-page.webp"
            alt="Evidence-page"
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        </motion.div>
        </div>
        
        <RehabSection
            title={effectivenessData.title}
            introText={effectivenessData.introText}
            items={effectivenessData.items}
            backgroundColor={effectivenessData.backgroundColor}
            subSections={effectivenessData.subSections}
        />
        
        <RehabSection
            title={costEffectivenessData.title}
            introText={costEffectivenessData.introText}
            items={costEffectivenessData.items}
            backgroundColor={costEffectivenessData.backgroundColor}
            subSections={costEffectivenessData.subSections}
        />

        <RehabSection
            title={reducedHospitalResourcesData.title}
            introText={reducedHospitalResourcesData.introText}
            items={reducedHospitalResourcesData.items}
            backgroundColor={reducedHospitalResourcesData.backgroundColor}
            subSections={reducedHospitalResourcesData.subSections}
        />

        <RehabSection
            title={feasibilityAccessibilityData.title}
            introText={feasibilityAccessibilityData.introText}
            items={feasibilityAccessibilityData.items}
            backgroundColor={feasibilityAccessibilityData.backgroundColor}
            subSections={feasibilityAccessibilityData.subSections}
        />

        <RehabSection
            title={goalAchievementData.title}
            introText={goalAchievementData.introText}
            items={goalAchievementData.items}
            backgroundColor={goalAchievementData.backgroundColor}
            subSections={goalAchievementData.subSections}
        />

        <RehabSection
            title={holisticPersonalizedCareData.title}
            introText={holisticPersonalizedCareData.introText}
            items={holisticPersonalizedCareData.items}
            backgroundColor={holisticPersonalizedCareData.backgroundColor}
            subSections={holisticPersonalizedCareData.subSections}
        />

        <RehabSection
            title={conslusion.title}
            introText={conslusion.introText}
            items={conslusion.items}
            backgroundColor={conslusion.backgroundColor}
            subSections={conslusion.subSections}
        />
    </div>
</section>


        
    );
};


export default StrokeRehabilitationPage;
