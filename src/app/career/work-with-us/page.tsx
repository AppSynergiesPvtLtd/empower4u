import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const WorkWithUs: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#f9f5f1] text-maintext">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center uppercase mb-4 font-inter">Work with Us</h1>
        <div className="flex justify-center mb-8">
          <span className="text-primary text-xl mx-1">★</span>
          <span className="text-primary text-xl mx-1">★</span>
          <span className="text-primary text-xl mx-1">★</span>
        </div>

        <p className="text-lg border border-gray-400 p-4 mb-8">
          At Empower4U, we are always looking for passionate and skilled professionals to join our growing team. If you’re a qualified physiotherapist or have experience in rehabilitation, we’d love to hear from you!
        </p>

        <div className="flex justify-center mb-12">
          <Image
            src="/images/Career/Work with us page.jpg"
            alt="Teamwork"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="bg-[#d4c0a9] p-8 mb-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-maintext text-center font-inter">Physiotherapists</h2>
          <p className="text-lg">
            We are seeking qualified physiotherapists with experience in one or more of the specialties we cover. Whether you specialize in neurological rehabilitation, stroke recovery, balance and falls prevention, or any of our other services, we offer an opportunity to work in a dynamic, supportive environment. <a href="/specialties" className="text-primary underline">Explore our specialties here.</a>
          </p>
        </div>

        <div className=" p-8 mb-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-maintext text-center font-inter">Rehabilitation Assistants</h2>
          <p className="text-lg">
            We also welcome rehabilitation assistants with diverse backgrounds in healthcare and fitness. Whether you have a background in nursing, fitness, care, or you’re a therapy student or an internationally qualified therapist awaiting your HCPC registration, this is a great opportunity to gain UK healthcare experience while earning a competitive payment.
          </p>
        </div>

        <div className="bg-[#d4c0a9] p-8 mb-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-maintext text-center font-inter">Why Work With Us?</h2>
          <p className="text-lg mb-6">
            At Empower4U, we look after our staff, ensuring they grow both professionally and personally. We provide:
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <FaCheckCircle className="text-maintext mr-4 mt-1 text-lg" />
              <span>
                <strong>Staff Empowerment:</strong> Our staff have the power to shape how the business runs. We regularly listen to feedback and ideas, striving to be the best in the market with the collective effort of everyone in the company.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-maintext mr-4 mt-1" />
              <span>
                <strong>Supervision and Mentorship:</strong> Receive ongoing support from experienced physiotherapists and access guidance on complex cases.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-maintext mr-4 mt-1" />
              <span>
                <strong>Career Progression:</strong> We offer advice on career development, helping you take the next step in your physiotherapy journey.
              </span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-maintext mb-4 font-inter">Get in Touch</h2>
          <p className="text-lg mb-6">
            If you’re ready to join a team that values expertise, collaboration, and growth, we’d love to hear from you! <a href="/contact" className="text-primary underline">Contact us</a> today to discuss available opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
