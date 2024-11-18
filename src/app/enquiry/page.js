"use client";
import React, { useEffect, useState } from 'react';
import Loader from "@/components/Loader";
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });

const Enquiry = () => {
  
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);




  useEffect(() => {
    setIsFormValid(name.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && enquiry.trim() !== '');
  }, [name, email, phone, enquiry]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);

    const formData = {
      name,
      email,
      phoneNumber: phone,
      enquiry,
    };

    try {
      const response = await axios.post(
        'https://us-central1-empower4u-31c1a.cloudfunctions.net/EnquiryFormApi/create-enquiry',
        formData
      );
      if (response.status === 200) {
        setName('');
        setEmail('');
        setPhone('');
        setEnquiry('');
        router.push('/success');
      }
    } catch (error) {
      toast.error('Failed to send enquiry. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }

    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  };

  return (
    <section className="py-16 px-4 text-maintext max-w-5xl mx-auto my-10 bg-white w-5/6">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        <h1 className="text-3xl font-semibold text-maintext text-left mb-2">
          Love to hear from you,
        </h1>
        <h1 className="text-3xl font-semibold text-maintext text-left mb-2">
          Get in touch <span role="img" aria-label="wave">👋</span>
        </h1>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-maintext mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-maintext mb-1">
                Phone no.
              </label>
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                inputProps={{
                  name: 'phone',
                  required: true,
                  className: 'ml-8 w-full p-3 border border-gray-300 rounded-md focus:outline-none'
                }}
                containerClass="phone-input-container w-full flex"
                inputClass="ml-12 w-full pl-12"
                buttonClass="phone-input-button"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-maintext mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="enquiry" className="block text-sm font-medium text-maintext mb-1">
              Enquiry
            </label>
            <textarea
              id="enquiry"
              name="enquiry"
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
              placeholder="Enter enquiry"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
              required
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className={`px-8 py-3 rounded-full text-white focus:outline-none focus:ring-2 ${
                isFormValid && !loading ? 'bg-maintext hover:bg-maintext-dark' : 'bg-gray-300 cursor-not-allowed'
              }`}
              disabled={!isFormValid || loading}
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
