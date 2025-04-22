"use client";
import React from "react";

const VisionMission = () => {
	return (
		<section className="relative max-w-6xl mx-auto px-4 py-28">
			{/* Vision Block */}
			<div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">
				{/* Text */}
				<div className="flex-1">
					<h3 className="text-2xl font-semibold mb-2 text-maintext">
						Our Vision
					</h3>
					<hr className=" border-t-2 border-primary mb-4" />
					<p className="text-gray-600 lg:text-lg text-sm">
						To be the leading and most trusted partner for focused
						individuals seeking rapid and impactful rehabilitation
						and well-being outcomes. We envision a community where
						everyone feels empowered, supported, and equipped with
						cutting-edge AI-powered tools to navigate life&#39;s
						challenges and thrive efficiently.
					</p>
				</div>
				{/* Image */}
				<div className="flex-1">
					<img
						src="/images/home-page/vision.png" 
						alt="Our Vision"
						className="rounded-2xl shadow-lg w-full object-cover h-[280px]"
					/>
				</div>
			</div>

			{/* Mission Block */}
			<div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-24">
				{/* Image */}
				<div className="flex-1 order-1 md:order-none">
					<img
						src="/images/home-page/mission.png"
						alt="Our Mission"
						className="rounded-2xl shadow-lg w-full object-cover h-[280px]"
					/>
				</div>
				{/* Text */}
				<div className="flex-1">
					<h3 className="text-2xl font-semibold mb-2 text-maintext">
						Our Mission
					</h3>
					<hr className=" border-t-2 border-primary mb-4" />
					<p className="text-gray-600 lg:text-lg text-sm">
						Our mission is to provide accessible, high-quality
						resources, support, and guidance specifically tailored
						for committed individuals who desire accelerated results
						in their rehabilitation journey. We are dedicated to
						sourcing and integrating appropriate AI tools to
						maximize client outcomes and empower them to take
						proactive control of their personal growth and
						well-being, fostering a positive and results-oriented
						environment.
					</p>
				</div>
			</div>
		</section>
	);
};

export default VisionMission;
