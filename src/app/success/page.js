"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import { Toaster, toast } from 'react-hot-toast';
import Link from 'next/link';
import Image from 'next/image';

const SuccessPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      toast.success('Form Submitted Successfully.');
    }
  }, [isLoading]);

  // if (isLoading) {
  //   return <Loader /> ;
  // }

  return (
    
    <section className="flex flex-col items-center justify-center pt-16 pb-6 px-4 text-center text-maintext">
      <div className="container mx-auto max-w-md py-5">
        <Image
          src="/icons/success_image.svg"
          alt="Success"
          width={700}
          height={700}
          className="mb-8"
          priority
        />
        <p className="text-lg font-semibold mb-10 text-maintext">
          Thank you for reaching out! We have received your message and will be in touch with you shortly.
        </p>
        <Link href="/" className="px-12 py-3 font-bold bg-maintext text-white rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-maintext">
          Home
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
