"use client";
import React, { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
//import { useRouter } from 'next/router'; 
import 'react-phone-input-2/lib/style.css';

const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });

const Enquiry: React.FC = () => {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement)?.value || '',
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value || '',
      phoneNumber: phone,
      enquiry: (e.currentTarget.elements.namedItem('enquiry') as HTMLTextAreaElement)?.value || '',
    };

    try {
      const response = await axios.post(
        'https://us-central1-empower4u-31c1a.cloudfunctions.net/EnquiryFormApi/create-enquiry',
        formData
      );
      if (response.status === 200) {
        e.currentTarget.reset(); 
        router.push('/success');
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 text-maintext max-w-5xl mx-auto my-10 bg-white">
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
                  className: 'w-full border border-gray-300 p-3 rounded-md focus:outline-none'
                }}
                containerClass="w-full"
                inputClass="w-full"
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
              placeholder="Enter enquiry"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
              required
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-gray-300 text-white rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              disabled={loading}
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
