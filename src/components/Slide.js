"use client";
import React from "react";

const Slide = ({ heading, description, buttonText, buttonLink, imageUrl }) => {
	return (
		<div
			className="relative w-full h-[350px] lg:h-[560px] lg:rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat flex items-center"
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/80 z-10" />

			<div className="relative z-20 text-white lg:ml-auto lg:mr-10 lg:max-w-sm ml-auto max-w-[200px] pr-2">
				<h2 className="text-2xl md:text-5xl font-bold mb-4">
					{heading}
				</h2>
				<p className="text-base md:text-lg mb-6">{description}</p>
				<a
					href={"https://calendly.com/shu-empower4u"}
					target="_blank"
					className="inline-block px-6 py-2 bg-primary rounded-full font-semibold hover:bg-maintext"
				>
					Book Now
				</a>
			</div>
		</div>
	);
};

export default Slide;
