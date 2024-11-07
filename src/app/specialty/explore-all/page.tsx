import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpecialtyCircle from '@/components/SpecialtyCircle';
import { specialtiesData } from '@/config/specialityData';
import CallToActionSection from '@/components/CallToActionSection';

const SpecialtyPage: React.FC = () => {
  return (
    <section className="bg-[#f9f5f1] py-16 px-4 text-maintext">
      <div className="container mx-auto text-center">
        <div className="mb-10">
        <div className='bg-maintext p-3 shadow-lg border-4 border-primary mb-8 max-w-6xl mx-auto'>
            <div className="bg-maintext text-white p-8 shadow-lg border-2 border-primary">
                <div className="flex justify-center mb-6"><Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} /></div>
          <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Specialty  </h1>
          <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>
            </div>
        </div>
          
          <div className="flex justify-center my-4 text-[#af9457] text-base">
            ★ <span className='mx-2 text-xl'>★ </span> ★
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specialtiesData.map((item, index) => (
            <SpecialtyCircle key={index} title={item.title} link={item.link} />
          ))}
        </div>

        <CallToActionSection
            title="We'd love to treat you"
            link="/enquiry"
            buttonText="Make an Enquiry"
        />
      </div>
    </section>
  );
};

export default SpecialtyPage;
