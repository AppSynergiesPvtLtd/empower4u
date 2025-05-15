"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from "next/image";
import Slide from "@/components/Slide";
import BookNowCTA from "@/components/BookNowCTA";
import CallToActionSection from "@/components/CallToActionSection";

const ClientsWorkTogether = () => {
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
			icon: "/work-1.svg",
			title: "Tailored Interventions",
			description:
				"Customized exercises & education for your specific condition",
		},
		{
			icon: "/work-2.svg",
			title: "Enhanced Compliance",
			description: "Digital tools keep you engaged and accountable",
		},
		{
			icon: "/work-3.svg",
			title: "Seamless Support",
			description: "Guidance between sessions",
		},
		{
			icon: "/work-4.svg",
			title: "Faster Progress",
			description:
				"Short-term intensive therapy (usually 3 months) with clear, achievable goals",
		},
	];

	return (
		<div>
			<section className="py-16 px-4">
				<div className="container mx-auto">
					<div
						className="relative w-full h-[500px] lg:h-[560px] lg:rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat flex items-center"
						style={{ backgroundImage: `url("/images/work.png")` }}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/90 z-10" />

						<div className="relative z-20 text-white lg:ml-auto lg:mr-10 lg:max-w-md ml-auto max-w-[200px] pr-2">
							<h2 className="text-2xl md:text-4xl font-bold mb-4">
								Intensive Home-Based Therapy: Personalized Care
								for Lasting Results
							</h2>
							<p className="text-base font-semibold md:text-lg mb-6">
								Harnessing Technology to Maximize Recovery &
								Engagement
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
				<div className="container mx-auto px-4 max-w-5xl">
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
						Why Our Approach Works 
					</motion.h2>

					<p className="text-lg text-maintext text-center">
						Our evidence-based, tech-enhanced, home-based intensive
						therapy program delivers:
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto  my-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="bg-[#D1B7A0] rounded-xl shadow-md px-6 py-10 flex flex-col items-center  hover:shadow-lg transition-shadow"
							>
								<div className=" mb-4 flex items-center justify-center w-16 h-16">
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
			<section className="py-16 bg-[#f0ebe5] text-maintext">
				<div className="container mx-auto px-4 max-w-5xl flex flex-col items-center justify-center">
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
						className="text-4xl font-bold text-center  mb-8 font-inter"
					>
						How It Works
					</motion.h2>
					<img src="/home-work.png" className="py-16" />
					<img
						src="/home-work-1.png"
						className="pb-4 lg:h-[280px] w-auto "
                    />
                    <img
						src="/home-work-2.png"
						className="pb-4 lg:h-[280px] w-auto "
                    />
                    <img
                    src="/home-work-3.png"
                    className="pb-4 lg:h-[280px] w-auto "
                    />
                    <img
                    src="/home-work-4.png"
                    className="pb-4 lg:h-[280px] w-auto "
                    />
                    <img
                    src="/home-work-5.png"
                    className="pb-4 lg:h-[280px] w-auto "
                />
				</div>
			</section>

            <BookNowCTA />
            <CallToActionSection
					title="We'd love to treat you"
					link="/enquiry"
					buttonText="Make an Online Enquiry"
				/>
		</div>
	);
};

export default ClientsWorkTogether;
