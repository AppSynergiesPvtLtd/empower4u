import Image from "next/image";

const services = [
	{
		title: "Spasticity Management",
		desc:
			"Easing stiffness, restoring movement, and improving your daily life — our unique approach helps you move better and feel stronger. With our intensive therapy model, you can accelerate your progress and achieve in weeks what traditional methods often take months to deliver.",
		img: "/images/services/joint-health.avif",
	},
	{
		title: "Falls and balance",
		desc:
			"Our experienced team conducts thorough assessments to identify the causes of falls and develops personalized strategies to improve balance and walking stability. ",
		img: "/images/home-page/tech.png",
	},
	{
		title: "Rare neurological conditions",
		desc:
			"We understand the unique challenges faced by individuals with rare neurological conditions such as neuromuscular diseases, Huntington’s disease, ataxia, ALS, cerebral palsy, and others. Our therapists use the latest approaches to deliver specialized care that meets your specific needs and goals.",
		img: "/images/services/rare.avif",
	},
	{
		title: "Other neurological conditions",
		desc:
			"Our dedicated team provides tailored therapy for individuals with conditions such as Parkinson's disease, multiple sclerosis, spinal cord injuries, and Guillain-Barre Syndrome. ",
		img: "/images/services/other.avif",
	},
	{
		title: "Stroke Rehab",
		desc:
			"Our experienced therapists and assistants can support you to regain strength, mobility and functions.",
		img: "/images/services/stroke.avif",
	},
	{
		title: "Vestibular Rehab",
		desc:
			"Our vestibular rehabilitation program is designed to help you regain your stability, confidence in walking, and ability to return to daily activities. ",
		img: "/images/services/vestibular-rehab.avif",
	},
];

export default function NewServicesList() {
	return (
		<div className="px-4 lg:px-16 max-w-7xl container mx-auto pt-10 pb-20">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-white rounded-2xl shadow-lg overflow-hidden min-h-[460px]"
					>
						<div className="h-60 relative">
							<Image
								src={service.img}
								alt={service.title}
								fill
								className="object-cover rounded-t-2xl"
							/>
						</div>
						<div className="p-5">
							<h3 className="text-left text-xl font-semibold mb-2">
								{service.title}
							</h3>
							<p className="text-gray-600 text-sm text-left">
								{service.desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
