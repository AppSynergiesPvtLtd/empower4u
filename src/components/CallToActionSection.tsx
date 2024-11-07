// components/CallToActionSection.tsx

import React from 'react';
import Link from 'next/link';

interface CallToActionSectionProps {
  title: string;
  link: string;
  buttonText: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ title, link, buttonText }) => {
  return (
    <section className="my-20 text-maintext text-center">
      <div className="container mx-auto px-4">
        <div className="p-8 border-t-4 border-primary bg-white max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 font-inter">{title}</h2>
          <Link href={link} className="px-6 py-3 text-lg font-semibold text-white bg-maintext rounded-full hover:bg-primary inline-block">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
