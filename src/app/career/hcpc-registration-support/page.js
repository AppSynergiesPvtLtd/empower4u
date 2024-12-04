"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Toaster, toast } from 'react-hot-toast';
import RehabSection from '@/components/RehabSection';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";


const whyChooseEmpower4UData = {
  title: "Why Choose Empower4U?",
  introText: "",
  items: [
    {
      title: "Industry Expertise",
      description: "With years of experience in the physiotherapy job market, we understand the industry&#39;s needs and requirements. Our consultants have insider knowledge of what employers are looking for and how to get you noticed.",
    },
    {
      title: "Personalized Service",
      description: "We provide one-on-one support tailored to your unique career needs, ensuring that you get the most out of our services at every stage of your job search.",
    },
    {
      title: "Comprehensive Support",
      description: "From CV writing and interview preparation to HCPC registration, we offer end-to-end consulting services designed to make your job search as smooth and successful as possible.",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};

const whoWeHelpData = {
  title: "Who We Help",
  introText: "",
  items: [
    {
      title: "New Graduates",
      description: "Starting your career in physiotherapy can feel overwhelming. We’ll help you navigate the job market and land your first role with confidence.",
    },
    {
      title: "Experienced Professionals",
      description: "If you are looking to advance your career or transition into a new specialty, we provide guidance on securing higher-level positions or exploring different fields of physiotherapy.",
    },
    {
      title: "International Physiotherapists",
      description: "We specialize in helping international physiotherapists secure jobs in the UK, offering advice on everything from registration requirements to visa applications.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const StrokeRehabilitationPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post(
        'https://us-central1-empower4u-31c1a.cloudfunctions.net/InitialCareerConsultationApi/user-info',
        data
      );
      toast.success('Request Sent Successfully');
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 text-maintext">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto max-w-full">
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
        <div className="flex justify-center mb-6">
          <Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} />
        </div>
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4">
          HCPC/ Job interview/ Career support
        </h1>
        <div className="flex justify-center mb-12">
          <Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} />
        </div>
        </motion.div>
        <motion.div className="flex justify-center mb-12"
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
          <img
            src="/images/for-professionals/HCPC-Job-interview-Career-support-page.webp"
            alt="HCPC-Job-interview-Career-support-page"
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </motion.div>

        <section className="p-8 md:p-16 bg-[#d4c0a9] text-maintext w-full">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold text-center uppercase mb-10 font-inter">
              What We Offer
            </h1>

            <motion.div className="mb-8"
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
            }}>
              <h2 className="text-base font-bold mb-2">1. Job Search Assistance</h2>
              <p className="text-base mb-4">
                Finding the right job in physiotherapy can be challenging, especially with the variety of roles and settings available. Our consulting service offers tailored job search assistance to help you identify opportunities that align with your skills, experience, and career goals.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-base">
                <li>
                  <strong>Personalized Job Matching:</strong> We work closely with you to understand your preferences—whether you’re looking for roles in the NHS, private clinics, sports organizations, or community settings.
                </li>
                <li>
                  <strong>Facilitating Communication with Prospective Employers:</strong> We help you communicate effectively with potential employers, guiding you to ask the right questions to clarify roles and expectations. Our support ensures you gather valuable insights about the position while making a strong, positive first impression that sets you apart from other candidates.
                </li>
              </ul>
            </motion.div>

            <motion.div className="mb-8"
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
            }}>
              <h2 className="text-base font-bold mb-2">2. Job Application Writing</h2>
              <p className="text-base mb-4">
                A strong CV and cover letter are crucial for making a great impression with potential employers. Our experts will help you craft a professional, compelling application that highlights your qualifications and sets you apart from other candidates.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-base">
                <li>
                  <strong>Preparing Supporting Information in the Application:</strong> We assist you in crafting the crucial supporting information section of your application, ensuring it highlights your strengths and directly matches the job’s specification. This tailored approach helps you stand out and demonstrate your suitability for the role.
                </li>
              </ul>
            </motion.div>

            <motion.div className="mb-8"
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
            }}>
              <h2 className="text-base font-bold mb-2">3. Interview Preparation</h2>
              <p className="text-base mb-4">
                Our team of consultants will fully prepare you for interviews with mock sessions, industry-specific questions, and expert advice on how to present your skills with confidence. This is definitely our strength—our specialists have risen through the ranks from Band 5 to Band 8 and now work in staff recruitment. With our insider knowledge, we know exactly how to help you maximize your performance and stand out in interviews.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-base">
                <li>
                  <strong>Mock Interviews:</strong> Practice common interview scenarios to build confidence and refine your responses.
                </li>
                <li>
                  <strong>Feedback and Improvement:</strong> We provide constructive feedback and tips to enhance your communication and presentation skills, ensuring you&#39;re interview-ready.
                </li>
              </ul>
            </motion.div>

            <motion.div className="mb-8"
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
            }}>
              <h2 className="text-base font-bold mb-2">4. Registration and Licensing Guidance</h2>
              <p className="text-base mb-4">
                If you&#39;re an international physiotherapist or new to the UK job market, you&#39;ll need to navigate the registration process with the Health and Care Professions Council (HCPC). We simplify this process by providing you with step-by-step guidance on the requirements, documentation, and timelines.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-base">
                <li>
                  <strong>HCPC Registration Support:</strong> We assist you in gathering the necessary documentation, completing the registration, and understanding how to meet UK standards for physiotherapy practice.
                </li>
              </ul>
            </motion.div>

            <motion.div className="mb-8"
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
            }}>
              <h2 className="text-base font-bold mb-2">5. Career Development Advice</h2>
              <p className="text-base mb-4">
                Beyond job placement, we offer career development advice and training to help you advance in your physiotherapy career. Whether you&#39;re aiming for senior roles, looking to specialize in a particular area of practice, or moving towards research or management, we can support your long-term goals.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-base">
                <li>
                  <strong>Personalized Career Analysis:</strong> We gather your personal experiences, passions, and life plans, combining them with our knowledge of industry developments and potential opportunities. By analyzing current government policies and market trends, we provide tailored advice on various career options to help you navigate your physiotherapy journey effectively.
                </li>
                <li>
                  <strong>Specialization Pathways:</strong> If you’re looking to specialize in areas like sports physiotherapy, neurological rehabilitation, or paediatrics, we can advise on relevant training programs and certifications.
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        <RehabSection
          title={whyChooseEmpower4UData.title}
          introText={whyChooseEmpower4UData.introText}
          items={whyChooseEmpower4UData.items}
          backgroundColor={whyChooseEmpower4UData.backgroundColor}
        />

        <RehabSection
          title={whoWeHelpData.title}
          introText={whoWeHelpData.introText}
          items={whoWeHelpData.items}
          backgroundColor={whoWeHelpData.backgroundColor}
        />

        <section className="py-16 px-4 bg-[#f9f5f1] text-maintext">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-3xl font-bold text-center uppercase mb-6 font-inter">
              How to Get Started
            </h1>
            <p className=" mb-10">
              Ready to take the next step in your physiotherapy career? Contact us today to schedule an initial consultation.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                >
                  <label className="block font-semibold mb-1 text-[#4f366d]">Name</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full !border !border-[#4f366d] bg-transparent p-3 "
                    placeholder="Enter name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">Name is required</p>
                  )}
                </motion.div>

                <motion.div
                initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                >
                  <label className="block font-semibold mb-1 text-[#4f366d]">Email</label>
                  <input
                    {...register('email', {
                      required: true,
                      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    })}
                    className="w-full !border !border-[#4f366d] bg-transparent p-3 "
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">Valid email is required</p>
                  )}
                </motion.div>
              </div>

              <motion.div
              initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}>
                <label className="block font-semibold">Location</label>
                <input
                  {...register('location', { required: true })}
                  className="w-full !border !border-[#4f366d] bg-transparent p-3 "
                  placeholder="Enter location"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">Location is required</p>
                )}
              </motion.div>
              <motion.div className="text-center mt-6"
              initial={{ opacity: 0, rotateY: 180 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -180 }}
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
                <button
                  type="submit"
                  className="w-2/5 md:w-1/6 py-3 mt-4 bg-maintext text-white font-bold rounded-md  hover:bg-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Get Started'}
                </button>
              </motion.div>
            </form>
            <motion.div className="text-center mt-10"
            initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}>
              <p className='font-bold'>OR</p>
              <p className="mt-4">
                Or, simply fill out our <a href="/enquiry" className="text-maintext font-semibold underline">online consultation request form</a>, and a member of our team will be in touch to discuss how we can support your job search.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default StrokeRehabilitationPage;
