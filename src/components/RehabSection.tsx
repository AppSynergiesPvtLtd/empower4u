import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface ListItem {
  title: string;
  description: string;
}

interface SectionProps {
  title: string;
  introText: string;
  items: ListItem[];
  backgroundColor: string;
}

const RehabSection: React.FC<SectionProps> = ({ title, introText, items, backgroundColor }) => {
  return (
    <div className={`${backgroundColor} p-8 mb-8`}>
      <h2 className="text-2xl font-bold mb-4 text-maintext text-center font-inter">{title}</h2>
      <p className="text-lg mb-6">{introText}</p>
      <ul className="space-y-4 text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <FaCheckCircle className="text-maintext text-[20px] mr-4 pt-1" />
            <span>
              <strong>{item.title}:</strong> {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RehabSection;
