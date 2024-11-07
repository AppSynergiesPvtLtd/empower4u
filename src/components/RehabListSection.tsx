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
  subSections?: { heading: string; items: ListItem[] }[]; // Added for sub-sections
}

const RehabListSection: React.FC<SectionProps> = ({
  title,
  introText,
  items,
  backgroundColor,
  subSections = [],
}) => {
  return (
    <section className={`${backgroundColor} py-16`}>
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6 text-maintext text-center font-inter">{title}</h2>
        <p className="text-lg mb-6 text-center">{introText}</p>

        {/* Main list items */}
        <ul className="space-y-2 text-lg">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <FaCheckCircle className="text-maintext text-[20px] mr-4 pt-1" />
              <span>
                <strong>{item.title}:</strong> {item.description}
              </span>
            </li>
          ))}
        </ul>

        {/* Sub-sections with their own headings and lists */}
        {subSections.map((section, index) => (
          <div key={index} className="mt-8">
            <div className="flex items-center mb-2">
              <FaCheckCircle className="text-maintext text-[15px] mr-4" />
              <h3 className="text-lg font-bold text-maintext">{section.heading}</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg ml-6">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-0">
                  <span>
                    <strong>{item.title}:</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RehabListSection;
