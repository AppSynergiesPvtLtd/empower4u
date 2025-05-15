"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from "next/image";
import RehabSection from "@/components/RehabSection";
import CallToActionSection from "@/components/CallToActionSection";
import { FaCheckCircle } from "react-icons/fa";

const FallsBalancePage = () => {
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
		"Home environment assessment: A comprehensive evaluation to identify potential hazards and recommend modifications to ensure your living space is safe and fit for purpose. ",
		" Full falls assessment:  Falls can result from various factors, such as cognitive issues, blood pressure changes, or medication side effects. We conduct a thorough assessment to identify all potential risks contributing to falls.",
		"Balance assessment and treatment: Adequate muscle strength, joint flexibility, and coordination are essential for maintaining balance. We also assess key sensory functions, including vision, proprioception (joint sensation), and vestibular sensation (inner ear), to create a holistic treatment plan. ",
	];

	const strategies = [
		"Strength training: Exercises to improve muscle power and joint flexibility for better stability.",
		"Balance therapy: Activities to enhance coordination and the body's ability to sense and respond to changes in the environment. ",
		"Sensory rehabilitation: Addressing issues related to vision, inner ear function, and proprioception to improve overall balance.",
		"24-hour posture management for seating, sleeping, and daily activities. ",
		"Environmental modifications: Recommendations for making changes to your home to prevent falls, such as removing tripping hazards and improving lighting.",
	];

	const benefits = [
		"Improved stability and mobility:  Strength and balance exercises help enhance coordination and the ability to move confidently. ",
		"Reduced falls risk: Identifying and addressing personal and environmental fall risks significantly decreases the likelihood of falls." ,
		"Enhanced confidence: Restoring balance and improving strength can reduce the fear of falling, promoting independence.",
		"Holistic care: A tailored approach addressing both physical and environmental factors to ensure optimal safety and recovery. ",
		
	];
	return (
		<div>
			<section className="py-16 px-4">
				<div className="container mx-auto">
					<div
						className="relative w-full h-[500px] lg:h-[560px] lg:rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat flex items-center"
						style={{
							backgroundImage: `url("/images/specialty/falls-balance.jpg")`,
						}}
					>
						<div className="relative z-20 text-white lg:ml-auto lg:mr-10 lg:max-w-md ml-auto max-w-[200px] pr-2">
							<h2 className="text-2xl md:text-5xl font-bold mb-4">
								Falls and Balance 
							</h2>
							<p className="text-base font-semibold md:text-lg mb-6">
								Our experienced team conducts thorough
								assessments to identify the causes of falls and
								develops personalized strategies to improve
								balance and walking stability.
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
					<motion.h2
						className="text-4xl font-bold mb-8 text-maintext text-center font-inter"
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
					>
						What We Can Help With 
					</motion.h2>
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
          {points.map((item, index) => {
            const [boldPart, ...rest] = item.split(":");
            const normalPart = rest.join(":").trim();
        
            return (
              <li key={index} className="flex items-start space-x-2">
                <img
                  src="/icons/Ikon.svg"
                  alt="Check Icon"
                  className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                />
                <span className="text-maintext">
                  <strong>{boldPart.trim()}:</strong> {normalPart}
                </span>
              </li>
            );
          })}
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
					<div className="lg:w-[50%]">
						<img
							src="/images/specialty/fall-balance-treatment.png"
							className="lg:h-[500px] h-auto  w-auto object-contain"
						/>
					</div>
					<div className="lg:w-[50%]">
          <ul className="space-y-4 text-lg">
          {strategies.map((item, index) => {
            const [boldPart, ...rest] = item.split(":");
            const normalPart = rest.join(":").trim();
        
            return (
              <li key={index} className="flex items-start space-x-2">
                <img
                  src="/icons/Ikon.svg"
                  alt="Check Icon"
                  className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                />
                <span className="text-maintext">
                  <strong>{boldPart.trim()}:</strong> {normalPart}
                </span>
              </li>
            );
          })}
        </ul>
        
					</div>
				</div>
			</section>

			<section className={`bg-[#D5C0A8] py-10`}>
				<div className="max-w-5xl mx-auto p-8">
					<motion.h2
						className="text-4xl font-bold mb-8 text-maintext text-center font-inter"
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
					>
					Benefits of our falls and balance programme include 
					</motion.h2>
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
          {benefits.map((item, index) => {
            const [boldPart, ...rest] = item.split(":");
            const normalPart = rest.join(":").trim(); 
        
            return (
              <li key={index} className="flex items-start space-x-2">
                <img
                  src="/icons/Ikon.svg"
                  alt="Check Icon"
                  className="w-4 max-w-full h-auto text-maintext mr-4 mt-2"
                />
                <span className="text-maintext">
                  <strong>{boldPart.trim()}:</strong> {normalPart}
                </span>
              </li>
            );
          })}
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

export default FallsBalancePage;
