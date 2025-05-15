"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from "next/image";
import RehabSection from "@/components/RehabSection";
import CallToActionSection from "@/components/CallToActionSection";
import { FaCheckCircle } from "react-icons/fa";




const SpasticityManagementPage = () => {
	const [showMore, setShowMore] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	// if (isLoading) {
	//   return <Loader />;
	// }

	const features = [
		{
			icon: "/approach/1.svg",
			title: "Accelerate Your Progress",
			description:
				"Maximize your recovery potential with our intensive therapy model - achieve in weeks what traditional approaches take months to deliver. ",
		},
		{
			icon: "/approach/2.svg",
			title: "Expert Care at Home",
			description:
				"Receive gold-standard treatment from our specialist clinicians without leaving your home.",
		},
		{
			icon: "/approach/3.svg",
			title: "Tech-Powered Rehabilitation",
			description:
				"Engage with your personalized digital toolkit, featuring condition-specific podcasts, a tailored exercise video library, and progress tracking tools.",
		},
		{
			icon: "/approach/4.svg",
			title: "Cost-Effective Solutions",
			description:
				"Quality care shouldn't break the bank - our focused approach delivers better value. ",
		},
		{
			icon: "/approach/5.svg",
			title: "Evidence-Based Programme",
			description:
				" Every intervention is grounded in the latest clinical research and tailored to your specific needs.",
		},
	];


    const points = [
        'Painful muscle stiffness that limits movement',
        'Difficulty stretching or bending joints (e.g., clenched fists, stiff legs)',
        'Falls or balance issues due to uneven muscle tightness',
        'Daily task struggles like dressing, walking, or holding objects',
        'Sleep disruptions from discomfort or involuntary spasms',
    ];
    

    const strategies = [
        'Stretching & positioning techniques to improve flexibility and reduce stiffness. ',
        'Strength training to balance muscle activity and prevent weakness. ',
        'Functional electrical stimulation (FES) to activate relaxed muscles. ',
        '24-hour posture management for seating, sleeping, and daily activities. ',
        'Home exercise plans with easy-to-follow video guides. '
    ]


    const benefits = [
        'Reduced pain and stiffness for greater comfort. ',
        'Improved range of motion to move more freely. ',
        'Safer walking and balance with fewer falls. ',
        'Greater independence in daily tasks like dressing or eating. ',
        'Better sleep and mood by minimizing spasms and discomfort. ',
        'Slowed progression of complications like joint contractures. '
    ];
	return (
		<div>
			<section className="py-16 px-4">
				<div className="container mx-auto">
					<div
						className="relative w-full h-[500px] lg:h-[560px] lg:rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat flex items-center"
						style={{
							backgroundImage: `url("/images/specialty/spasticity.jpg")`,
						}}
					>
					

						<div className="relative z-20 text-white lg:ml-auto lg:mr-10 lg:max-w-md ml-auto max-w-[200px] pr-2">
							<h2 className="text-2xl md:text-5xl font-bold mb-4">
								Spasticity Management 
							</h2>
							<p className="text-base font-semibold md:text-lg mb-6">
								Easing stiffness, restoring movement, and
								improving your daily life — our unique approach
								helps you move better and feel stronger. With
								our intensive therapy model, you can accelerate
								your progress and achieve in weeks what
								traditional methods often take months to
								deliver.
							</p>
							<a
								href={"https://calendly.com/shu-empower4u"}
								target="_blank"
								className="inline-block px-6 py-2 bg-primary rounded-full font-semibold hover:bg-maintext"
							>
								Book Now
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16  text-maintext">
				<div className="container mx-auto px-4 max-w-6xl">
					<motion.h2
						initial={{ opacity: 0, y: -80 }}
						whileInView={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 80 }}
						transition={{
							duration: 0.5,
							delay: 0.2,
							scale: {
								type: "spring",
								damping: 14,
								stiffness: 200,
								restDelta: 0.001,
							},
						}}
						className="text-4xl font-semibold mb-4 font-inter text-center"
					>
						Our unique approach 
					</motion.h2>

					<p className="text-lg text-maintext text-center">
						Our evidence-based, tech-enhanced, home-based intensive
						therapy program delivers: 
					</p>
					<div className="flex flex-wrap justify-center gap-8 my-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="bg-[#D1B7A0] rounded-xl shadow-md px-6 py-10 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(30%-1rem)] hover:shadow-lg transition-shadow"
							>
								<div className="mb-4 flex items-center justify-center w-16 h-16">
									<img
										src={feature.icon}
										alt={feature.title}
										className=""
									/>
								</div>
								<h3 className="text-xl font-semibold text-maintext mb-2">
									{feature.title}
								</h3>
								<p className="text-sm text-maintext text-center">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
            </section>
            
           <section className={`bg-[#D5C0A8] py-10`}>
               <div className="max-w-5xl mx-auto p-8">
                 <motion.h2 className="text-4xl font-bold mb-8 text-maintext text-center font-inter"
                   initial={{ opacity: 0, y: -80 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 80 }}
                   transition={{
                     duration: 0.5,
                     delay: 0.2,
                     scale: {
                       type: "spring",
                       damping: 14,
                       stiffness: 200,
                       restDelta: 0.001,
                     },
                   }}
                 >What We Can Help With </motion.h2>
                 <motion.div
                   initial={{ opacity: 0, x: -60 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 60 }}
                 transition={{
                   duration: 0.5,
                   delay: 0.2,
                   scale: {
                     type: "spring",
                     damping: 14,
                     stiffness: 200,
                     restDelta: 0.001,
                   },
                 }}
                   >
                 <p className="text-lg mb-6 font-bold text-maintext">Common challenges caused by spasticity: </p>
                 <ul className="space-y-4 text-lg">
                   {points.map((item, index) => (
                     <li key={index} className="flex items-start space-x-2">
                       <img 
                         src="/icons/Ikon.svg" 
                         alt="Check Icon" 
                         className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                       />
                       <span className="text-maintext">
                          {item}
                       </span>
                     </li>
                   ))}
                 </ul>
                
                 </motion.div>
               </div>
            </section>
            
            <section className="py-16  text-maintext">
				<div className="container mx-auto px-4 max-w-6xl">
					<motion.h2
						initial={{ opacity: 0, y: -80 }}
						whileInView={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 80 }}
						transition={{
							duration: 0.5,
							delay: 0.2,
							scale: {
								type: "spring",
								damping: 14,
								stiffness: 200,
								restDelta: 0.001,
							},
						}}
						className="text-4xl font-semibold mb-4 font-inter text-center"
					>
                    Treatment May Include 
					</motion.h2>

					<p className="text-lg text-maintext text-center font-semibold">
                    Comprehensive Rehabilitation Strategies
					</p>
					
                </div>
                
                <div className="mt-8 lg:flex lg:flex-row lg:gap-10 space-y-7 lg:space-y-0 lg:items-center lg:justify-center px-5">
                    <div>
                        <img src="/images/specialty/spasticity-treatment.png" className="lg:h-[500px] h-auto  w-auto object-contain"/>
                    </div>
                    <div>
                    <ul className="space-y-4 text-lg">
                    {strategies.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <img 
                          src="/icons/Ikon.svg" 
                          alt="Check Icon" 
                          className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                        />
                        <span className="text-maintext">
                           {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                    </div>
                </div>
            </section>



                 
           <section className={`bg-[#D5C0A8] py-10`}>
           <div className="max-w-5xl mx-auto p-8">
             <motion.h2 className="text-4xl font-bold mb-8 text-maintext text-center font-inter"
               initial={{ opacity: 0, y: -80 }}
               whileInView={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 80 }}
               transition={{
                 duration: 0.5,
                 delay: 0.2,
                 scale: {
                   type: "spring",
                   damping: 14,
                   stiffness: 200,
                   restDelta: 0.001,
                 },
               }}
             >Benefits of Spasticity Management  </motion.h2>
             <motion.div
               initial={{ opacity: 0, x: -60 }}
             whileInView={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: 60 }}
             transition={{
               duration: 0.5,
               delay: 0.2,
               scale: {
                 type: "spring",
                 damping: 14,
                 stiffness: 200,
                 restDelta: 0.001,
               },
             }}
               >
      
             <ul className="space-y-4 text-lg">
               {benefits.map((item, index) => (
                 <li key={index} className="flex items-start space-x-2">
                   <img 
                     src="/icons/Ikon.svg" 
                     alt="Check Icon" 
                     className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                   />
                   <span className="text-maintext">
                      {item}
                   </span>
                 </li>
               ))}
             </ul>
            
             </motion.div>
           </div>
            </section>
            <CallToActionSection
                                title="We'd love to treat you"
                                link="/enquiry"
                                buttonText="Make an Online Enquiry"
                            />
		</div>
	);
};

export default SpasticityManagementPage;
