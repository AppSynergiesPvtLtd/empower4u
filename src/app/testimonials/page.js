"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Image from "next/image";

const Testimonials = () => {
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
	return (
		<section className="py-16 lg:px-4 px-1 bg-[#f9f5f1] text-maintext lg:max-w-5xl mx-auto my-8">
			<div className="flex justify-center mb-6">
				<Image
					src="/icons/top_border.svg"
					alt="Top Border"
					width={600}
					height={400}
				/>
			</div>
			<h1 className="text-4xl font-bold text-center uppercase font-inter my-4">
				Testimonials
			</h1>
			<div className="flex justify-center mb-12">
				<Image
					src="/icons/bottom_border.svg"
					alt="Bottom Border"
					width={600}
					height={400}
				/>
			</div>

			<div className="bg-maintext lg:p-8 p-1.5 shadow-lg border-4 border-primary mb-8">
				<div className="bg-maintext text-white px-1.5 py-4 lg:p-8 shadow-lg lg:border-4 border-2 border-primary mb-8">
					<div className="flex justify-center mb-4">
						<span className="text-primary text-xl mx-1">★</span>
						<span className="text-primary text-3xl mx-1">★</span>
						<span className="text-primary text-xl mx-1">★</span>
					</div>

					<h2 className="text-center text-2xl font-bold mb-2">
						Mina
					</h2>
					<div className="flex justify-center mb-6">
						<Image
							src="/icons/bottom_border.svg"
							alt="Bottom Border"
							width={300}
							height={300}
						/>
					</div>

					<p className="text-center text-sm lg:text-base leading-relaxed mb-6 lg:px-4">
						My father suffered a severe stroke which left the family
						devastated. Through the grace of god, we found Shu as my
						dad’s specialist physio. From the very first session
						with my father Shu built a great rapport, gave him
						confidence and motivation. Shu’s expertise in this area
						came through each time my dad had a session with her,
						where she adapted exercises and plans and kept him
						mentally strong as he progressed through improvements.
						Her techniques were bespoke to my father’s particular
						stroke issues as well enhancing activities he enjoyed
						prior to stroke. Shu’s whole personality and approach to
						her work is of the highest calibre. We are blessed that
						we came across her and would highly recommend her
						services to anyone who require specialist physio .
					</p>

					<div className="flex justify-center mb-8">
						<span className="text-primary text-base mx-1">★</span>
						<span className="text-primary text-xl mx-1">★</span>
						<span className="text-primary text-base mx-1">★</span>
					</div>

					<h2 className="text-center text-2xl font-bold mb-2">
						Alec
					</h2>
					<div className="flex justify-center mb-6">
						<Image
							src="/icons/bottom_border.svg"
							alt="Bottom Border"
							width={300}
							height={300}
						/>
					</div>
					<p className="text-center text-sm lg:text-base  leading-relaxed mb-6 lg:px-4">
						Shu was my private physiotherapist following brain
						tumour surgery, and she was an incredible support on my
						recovery path. She is extremely knowledgeable and
						reassuring, and always helped me to set realistic
						rehabilitation goals with clear, detailed steps to
						achieve them. Shu’s hands-on approach made all the
						difference—thanks to her, I regained some function in my
						affected arm following the surgery. I highly recommend
						Shu for her caring and individualised care plan, her
						extensive knowledge, and her incredible patience. Thank
						you Shu!
					</p>

					<div className="flex justify-center mt-6">
						<span className="text-primary text-xl mx-1">★</span>
						<span className="text-primary text-3xl mx-1">★</span>
						<span className="text-primary text-xl mx-1">★</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
