"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });

const Enquiry = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

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
    setLoading(true);

    try {
      const response = await axios.post(
        'https://us-central1-empower4u-31c1a.cloudfunctions.net/EnquiryFormApi/create-enquiry',
        data
      );

      if (response.status === 200) {
        toast.success("Enquiry sent successfully!");
        router.push('/success');
      }
    } catch (error) {
      toast.error('Failed to send enquiry. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 text-maintext max-w-5xl mx-auto my-10 w-5/6">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        <h1 className="text-3xl font-semibold text-maintext text-left mb-2">
          Love to hear from you,
        </h1>
        <h1 className="text-3xl font-semibold text-maintext text-left mb-2">
          Get in touch <span role="img" aria-label="wave">👋</span>
        </h1>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <motion.div initial={{ opacity: 0, scale: 1.4 }}
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
            <label htmlFor="name" className="block text-sm font-medium text-maintext mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:outline-none"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, scale: 1.4 }}
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
              <label htmlFor="phone" className="block text-sm font-medium text-maintext mb-1">
                Phone no.
              </label>
              <PhoneInput
                country={'in'}
                onChange={(value) => setValue("phoneNumber", value, { shouldValidate: true })}
                inputProps={{
                  required: true,
                  className: 'ml-8 w-5/6 p-3 border border-gray-300 rounded-md focus:outline-none'
                }}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">Phone number is required</p>}
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 1.4 }}
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
              <label htmlFor="email" className="block text-sm font-medium text-maintext mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 1.4 }}
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
            <label htmlFor="enquiry" className="block text-sm font-medium text-maintext mb-1">
              Enquiry
            </label>
            <textarea
              id="enquiry"
              placeholder="Enter enquiry"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none h-32 resize-none"
              {...register("enquiry", { required: "Enquiry is required" })}
            ></textarea>
            {errors.enquiry && <p className="text-red-500 text-sm">{errors.enquiry.message}</p>}
          </motion.div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className={`px-8 py-3 rounded-full text-white focus:outline-none focus:ring-2 ${
                isValid && !loading ? 'bg-maintext hover:bg-maintext-dark' : 'bg-gray-300 cursor-not-allowed'
              }`}
              disabled={!isValid || loading}
            >
              {loading ? 'Sending...' : 'Send Enquiry'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Enquiry;
