"use client";
import React, { useEffect, useState } from 'react';

const RehabSection = ({ title, introText, items, backgroundColor }) => {
  return (
    <section className={`${backgroundColor} py-10`}>
      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6 text-maintext text-center font-inter">{title}</h2>
        <p className="text-lg mb-6 font-bold">{introText}</p>
        <ul className="space-y-4 text-lg">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <img 
                src="/icons/Ikon.svg" 
                alt="Check Icon" 
                className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
              />
              <span>
                <strong>{item.title}{item.description ? ':' : ''}</strong> {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RehabSection;
