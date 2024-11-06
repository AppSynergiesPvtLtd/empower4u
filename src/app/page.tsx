// app/page.tsx

import React from 'react';
import Carousel from '@/components/Carousel';
import Services from '@/components/Services';

const HomePage: React.FC = () => {
  const slides = [
    {
      heading: "Falls and Balance",
      description: "We cover a wide range of conditions and presentations",
      buttonText: "View More",
      buttonLink: "/neurological-rehabilitation",
      imageUrl: "/images/Home page/Falls and Balance.jpg",
    },
    {
      heading: "Fracture and Amputees",
      description: "We cover a wide range of conditions and presentations",
      buttonText: "View More",
      buttonLink: "/neurological-rehabilitation",
      imageUrl: "/images/Home page/Fracture and Amputees.jpg",
    },
    {
      heading: "NEUROLOGICAL REHABILITATION",
      description: "We cover a wide range of conditions and presentations",
      buttonText: "View More",
      buttonLink: "/neurological-rehabilitation",
      imageUrl: "/images/Home page/Neurological rehabilitation.jpg",
    },
    {
      heading: "NEUROLOGICAL REHABILITATION",
      description: "We cover a wide range of conditions and presentations",
      buttonText: "View More",
      buttonLink: "/neurological-rehabilitation",
      imageUrl: "/images/Home page/Neurological rehabilitation.jpg",
    },
    {
      heading: "NEUROLOGICAL REHABILITATION",
      description: "We cover a wide range of conditions and presentations",
      buttonText: "View More",
      buttonLink: "/neurological-rehabilitation",
      imageUrl: "/images/Home page/Neurological rehabilitation.jpg",
    },
  ];

   return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="pt-20">
          <Carousel slides={slides} />
        </div>
        <Services />
      </main>
    </div>
  );

};

export default HomePage;
