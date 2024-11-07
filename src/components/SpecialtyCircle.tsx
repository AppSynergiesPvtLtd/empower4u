import React from 'react';
import Link from 'next/link';

interface SpecialtyCircleProps {
  title: string;
  link: string;
}

const SpecialtyCircle: React.FC<SpecialtyCircleProps> = ({ title, link }) => {
  return (
    <Link href={link} className="border-4 border-white w-72 h-72 bg-maintext text-[#dab998] flex items-center justify-center rounded-full text-center shadow-[0_4px_15px_rgba(0,0,0,0.6)] hover:shadow-[0_7px_20px_rgba(0,0,0,0.8)] transition-shadow">
      <span className="px-2 text-2xl uppercase font-inter font-bold">{title}</span>
    </Link>
  );
};

export default SpecialtyCircle;
