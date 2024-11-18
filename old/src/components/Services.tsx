import React from 'react';
import Link from 'next/link';

const Services: React.FC = () => {
  const items = [
    {
      icon: "/icons/homepage/intro_package.svg",
      title: "INTRODUCTION PACKAGE",
      description: "Check out the trial offer",
      link: "/for-clients-families/price",
    },
    {
      icon: "/icons/homepage/testimonials.svg",
      title: "TESTIMONIALS",
      description: "Find out previous clients' experience",
      link: "/testimonials",
    },
    {
      icon: "/icons/homepage/lets_talk.svg",
      title: "LET'S TALK",
      description: "Make the first move to change your life, we can help!",
      link: "/enquiry",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <div className="flex items-start p-6 bg-white shadow-lg border-t-4 border-primary cursor-pointer transition-transform transform hover:scale-105 h-26 sm:h-26 md:h-28 lg:h-28">
                <img src={item.icon} alt={item.title} className="w-9 h-10 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-maintext uppercase md:underline">{item.title}</h3>
                  <p className="text-sm text-primary md:underline">{item.description}</p>
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
