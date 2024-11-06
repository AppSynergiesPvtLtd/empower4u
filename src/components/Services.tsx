import React from 'react';
import { FaBox, FaComments, FaRegCommentDots } from 'react-icons/fa';
import Link from 'next/link';

const Services: React.FC = () => {
  const items = [
    {
      icon: <FaBox className="text-4xl text-primary" />,
      title: "INTRODUCTION PACKAGE",
      description: "Check out the trial offer",
      link: "/introduction-package", 
    },
    {
      icon: <FaComments className="text-4xl text-primary" />,
      title: "TESTIMONIALS",
      description: "Find out previous clients' experience",
      link: "/testimonials",
    },
    {
      icon: <FaRegCommentDots className="text-4xl text-primary" />,
      title: "LET'S TALK",
      description: "Make the first move to change your life, we can help!",
      link: "/contact",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <div className="flex items-start p-6 bg-white shadow-lg border-t-4 border-primary cursor-pointer transition-transform transform hover:scale-105">
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-maintext uppercase">{item.title}</h3>
                  <p className="text-primary">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
