"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Toaster, toast } from 'react-hot-toast';
import RehabSection from '@/components/RehabSection';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Loader from "@/components/Loader";


const whyChooseEmpower4UData = {
  title: "Why Choose Empower4U?",
  introText: "",
  items: [
    {
      title: "Industry Expertise",
      description: "With years of experience in the physiotherapy job market, we understand the industry’s needs and requirements. Our consultants have insider knowledge of what employers are looking for and how to get you noticed.",
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
      description: "If you’re looking to advance your career or transition into a new specialty, we provide guidance on securing higher-level positions or exploring different fields of physiotherapy.",
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

  if (isLoading) {
    return <Loader />;
  }

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
        <div className="flex justify-center mb-6">
          <Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} />
        </div>
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4">
          HCPC/ Job interview/ Career support
        </h1>
        <div className="flex justify-center mb-12">
          <Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} />
        </div>

        <div className="flex justify-center mb-12">
          <Image
            src="/images/for-professionals/HCPC-Job-interview-Career-support-page.webp"
            alt="HCPC-Job-interview-Career-support-page"
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <section className="p-16 bg-[#d4c0a9] text-maintext w-full">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-center uppercase mb-10 font-inter">
              What We Offer
            </h1>

            <div className="mb-8">
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
            </div>

            {/* Additional sections omitted for brevity */}
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
          <div className="container mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold text-center uppercase mb-6 font-inter">
              How to Get Started
            </h1>
            <p className=" mb-10">
              Ready to take the next step in your physiotherapy career? Contact us today to schedule an initial consultation.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1 text-[#4f366d]">Name</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full border border-[#4f366d] p-3 rounded-md"
                    placeholder="Enter name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">Name is required</p>
                  )}
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-[#4f366d]">Email</label>
                  <input
                    {...register('email', {
                      required: true,
                      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    })}
                    className="w-full border border-[#4f366d] p-3 rounded-md"
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">Valid email is required</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-semibold">Location</label>
                <input
                  {...register('location', { required: true })}
                  className="w-full border border-[#4f366d] p-3 rounded-md"
                  placeholder="Enter location"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">Location is required</p>
                )}
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="w-2/6 py-3 mt-4 bg-maintext text-white font-bold rounded-md hover:text-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Get Started'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default StrokeRehabilitationPage;
