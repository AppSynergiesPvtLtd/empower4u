import React from "react";

function BookNowCTA() {
	return (
		<div className="px-4 py-16 lg:px-40 container mx-auto 2xl:w-[80%]">
			<div className="relative bg-gradient-to-r from-[#F3D3A8] to-[#AD7F3AE0]  text-center px-4 py-12 rounded-3xl hidden lg:flex items-center h-[200px]">
				<div className="w-[70%]">
					<h2 className="text-xl md:text-2xl font-medium pb-8 px-8">
						Take the First Step Toward Recovery Today – We're Here to Guide You.
					</h2>
					<a
					href={"https://calendly.com/shu-empower4u"}
					className=" text-xl py-2 px-7 lg:text-xl  text-center font-medium w-fit lg:px-7 lg:py-2 rounded-3xl cursor-pointer bg-maintext text-white"
				>
					Book Now
				</a>
				</div>
				<div className="w-[30%] absolute  bottom-10 right-0">
					<img src="/work.png" className="h-[270px]" />
				</div>
			</div>

			<div className="relative bg-gradient-to-r from-[#F3D3A8] to-[#AD7F3AE0]  text-center px-4 py-12 rounded-3xl lg:hidden flex flex-col items-center h-[250px]">
				<div className="flex flex-col items-center mb-2">
					<div className="">
						<h2 className="text-lg md:text-2xl font-medium pb-6">
							Take the First Step Toward Recovery Today – We're Here to Guide You.
						</h2>
                    </div>
                    <a
					href={"https://calendly.com/shu-empower4u"}
					className=" text-xl py-2 px-7 lg:text-xl  text-center font-medium w-fit lg:px-7 lg:py-4 rounded-3xl cursor-pointer bg-maintext text-white"
				>
					Book Now
				</a>
					
				</div>
				
			</div>
		</div>
	);
}

export default BookNowCTA;
