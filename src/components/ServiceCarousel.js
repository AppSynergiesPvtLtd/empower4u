import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CircleArrowLeft } from "lucide-react";

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

const NextArrow = ({ onClick }) => {
	return (
		<div
			className="absolute z-10 cursor-pointer 
                 bottom-[-2rem] left-1/2 
                 transform translate-x-[1.5rem] 
                 lg:left-auto lg:right-[-2.5rem] lg:top-1/2 lg:bottom-auto 
                 lg:transform lg:-translate-y-1/2 lg:translate-x-0"
			onClick={onClick}
		>
			<div className="bg-maintext p-2 rounded-full shadow text-white">
				<ChevronRight />
			</div>
		</div>
	);
};

const PrevArrow = ({ onClick }) => {
	return (
		<div
			className="absolute z-10 cursor-pointer 
                 bottom-[-2rem] left-1/2 
                 transform -translate-x-[3rem] 
                 lg:right-auto lg:left-[-2.5rem] lg:top-1/2 lg:bottom-auto 
                 lg:transform lg:-translate-y-1/2 lg:translate-x-0"
			onClick={onClick}
		>
			<div className="bg-maintext p-2 rounded-full shadow text-white">
				<ChevronLeft />
			</div>
		</div>
	);
};

export default function ServiceCarousel() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: { slidesToShow: 2 },
			},
			{
				breakpoint: 600,
				settings: { slidesToShow: 1 },
			},
		],
	};

	return (
		<div className="relative px-2 lg:px-16 max-w-7xl container mx-auto pt-10 pb-20">
			<div className="flex items-center gap-4  pb-8">
				<h2 className="font-semibold text-xl md:text-3xl text-maintext whitespace-nowrap">
					OUR SERVICES
				</h2>
				<div className="flex-1 h-[1px] bg-primary"></div>
			</div>

			<Slider {...settings}>
				{services.map((service, index) => (
					<div key={index} className="px-3">
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden min-h-[460px]">
							<div className="h-60 relative">
								<Image
									src={service.img}
									alt={service.title}
									layout="fill"
									objectFit="cover"
									className="rounded-t-2xl"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-xl font-semibold mb-2">
									{service.title}
								</h3>
								<p className="text-gray-600 text-sm">
									{service.desc}
								</p>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
