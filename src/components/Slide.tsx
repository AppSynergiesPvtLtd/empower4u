import React from 'react';

interface SlideProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const Slide: React.FC<SlideProps> = ({ heading, description, buttonText, buttonLink, imageUrl }) => {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex-1 px-4 space-y-4 my-6">
        <h2 className="text-5xl font-bold text-maintext uppercase">{heading}</h2>
        <p className="text-lg text-primary">{description}</p>
        <a href={buttonLink} className="inline-block px-6 py-2 text-white bg-primary rounded-full hover:bg-maintext">
          {buttonText}
        </a>
      </div>
      <div className="flex-1">
        <img src={imageUrl} alt={heading} className="transform scale-105 rounded-3xl shadow-lg my-6" />
      </div>
    </div>
  );
};

export default Slide;
