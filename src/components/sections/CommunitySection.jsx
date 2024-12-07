// import React, { useState, useEffect, useRef } from 'react';

// import { Code, Users, Globe } from 'lucide-react';
// import image from '../../assets/images/image1.webp'

// const parseNumberString = (numStr) => {
// 	const cleanedNum = numStr.replace(/\+/g, '');
// 	return parseFloat(cleanedNum);
// };
// // Reusing the existing AnimatedNumber component from the original file
// const AnimatedNumber = ({
// 	number,
// 	duration = 3500,
// 	className = '',
// 	format = 'default'
// }) => {
// 	const [displayNumber, setDisplayNumber] = useState(0);
// 	const numberRef = useRef(null);
// 	const startTime = useRef(null);
// 	const animationFrameId = useRef(null);

// 	const targetNumber = parseNumberString(number);
// 	const isDecimal = number.includes('.');
// 	const hasPlus = number.includes('+');

// 	useEffect(() => {
// 		const animate = (currentTime) => {
// 			if (!startTime.current) startTime.current = currentTime;

// 			const progress = Math.min(
// 				(currentTime - startTime.current) / duration,
// 				1
// 			);

// 			const easeProgress = 1 - Math.pow(1 - progress, 4);
// 			const currentNumber = targetNumber * easeProgress;

// 			setDisplayNumber(currentNumber);

// 			if (progress < 1) {
// 				animationFrameId.current = requestAnimationFrame(animate);
// 			}
// 		};

// 		animationFrameId.current = requestAnimationFrame(animate);

// 		return () => {
// 			if (animationFrameId.current) {
// 				cancelAnimationFrame(animationFrameId.current);
// 			}
// 		};
// 	}, [number, duration, targetNumber]);

// 	const formatNumber = () => {
// 		let formattedNum;

// 		if (isDecimal) {
// 			formattedNum = displayNumber.toFixed(1);
// 		} else {
// 			formattedNum = Math.round(displayNumber);
// 		}

// 		return hasPlus ? `${formattedNum}+` : formattedNum;
// 	};

// 	return (
// 		<span
// 			ref={numberRef}
// 			className={`inline-block transform transition-transform duration-300 hover:scale-110 ${className}`}
// 		>
// 			{formatNumber()}
// 		</span>
// 	);
// };

// const CommunitySection = () => {
// 	const communityStats = [
// 		{
// 			icon: Code,
// 			number: '15+',
// 			label: 'Years of Developer Knowledge'
// 		},
// 		{
// 			icon: Users,
// 			number: '50M+',
// 			label: 'Monthly Active Developers'
// 		},
// 		{
// 			icon: Globe,
// 			number: '190+',
// 			label: 'Countries Represented'
// 		}
// 	];

// 	return (
// 		<section className="bg-gray-50 py-16">
// 			<div className="container mx-auto px-4">
// 				<div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
// 					{/* Content Section - Left Side */}
// 					<div className="text-center md:text-left">
// 						<h2 className="text-4xl font-bold text-gray-900 mb-6">
// 							Every Developer's Knowledge Hub
// 						</h2>
// 						<p className="text-xl text-gray-600 mb-10">
// 							1337 Overflow is the definitive Q&A platform where millions of developers
// 							come to ask questions, learn, and share technical knowledge every month.
// 						</p>

// 						<div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 mb-10">
// 							{communityStats.map(({ icon: Icon, number, label }) => (
// 								<div key={label} className="text-center">
// 									<div className="flex items-center justify-center mb-2">
// 										<Icon size={36} className="text-orange-600 mr-2" />
// 										<AnimatedNumber 
// 											number={number} 
// 											className="text-4xl font-bold text-gray-900" 
// 										/>
// 									</div>
// 									<p className="text-gray-600">{label}</p>
// 								</div>
// 							))}
// 						</div>

// 						<div className="flex justify-center md:justify-start space-x-4">
// 							<button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
// 								Sign Up
// 							</button>
// 							<button className="px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition">
// 								Learn More
// 							</button>
// 						</div>
// 					</div>

// 					{/* Image Section - Right Side */}
// 					<div>
// 						<img
// 							src={image}
// 							alt="Global Developer Community"
// 							className="w-full rounded-lg shadow-lg object-cover"
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default CommunitySection;
// export { AnimatedNumber };

import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, Globe } from 'lucide-react';
import image from '../../assets/images/image1.webp'

const parseNumberString = (numStr) => {
	const cleanedNum = numStr.replace(/\+/g, '');
	return parseFloat(cleanedNum);
};

const AnimatedNumber = ({
	number,
	duration = 4000,
	className = '',
	format = 'default'
}) => {
	const [displayNumber, setDisplayNumber] = useState(0);
	const numberRef = useRef(null);
	const startTime = useRef(null);
	const animationFrameId = useRef(null);

	const targetNumber = parseNumberString(number);
	const isDecimal = number.includes('.');
	const hasPlus = number.includes('+');

	useEffect(() => {
		const animate = (currentTime) => {
			if (!startTime.current) startTime.current = currentTime;

			const progress = Math.min(
				(currentTime - startTime.current) / duration,
				1
			);

			const easeProgress = 1 - Math.pow(1 - progress, 4);
			const currentNumber = targetNumber * easeProgress;

			setDisplayNumber(currentNumber);

			if (progress < 1) {
				animationFrameId.current = requestAnimationFrame(animate);
			}
		};

		animationFrameId.current = requestAnimationFrame(animate);

		return () => {
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current);
			}
		};
	}, [number, duration, targetNumber]);

	const formatNumber = () => {
		let formattedNum;

		if (isDecimal) {
			formattedNum = displayNumber.toFixed(1);
		} else {
			formattedNum = Math.round(displayNumber);
		}

		return hasPlus ? `${formattedNum}+` : formattedNum;
	};

	return (
		<span
			ref={numberRef}
			className={`inline-block transform transition-transform duration-300 hover:scale-110 ${className}`}
		>
			{formatNumber()}
		</span>
	);
};

const CommunitySection = () => {
	const communityStats = [
		{
			icon: Code,
			number: '15+',
			label: 'Years of Developer Knowledge'
		},
		{
			icon: Users,
			number: '50M+',
			label: 'Monthly Active Developers'
		},
		{
			icon: Globe,
			number: '190+',
			label: 'Countries Represented'
		}
	];

	return (
		<section className="bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
					{/* Image Section - First on Mobile */}
					<div className="order-1 md:order-2">
						<img
							src={image}
							alt="Global Developer Community"
							className="w-full rounded-lg shadow-lg object-cover"
						/>
					</div>

					{/* Content Section */}
					<div className="order-2 md:order-1 text-center md:text-left">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Every Developer's Knowledge Hub
						</h2>
						<p className="text-xl text-gray-600 mb-10">
							1337 Overflow is the definitive Q&A platform where millions of developers
							come to ask questions, learn, and share technical knowledge every month.
						</p>

						<div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 mb-10">
							{communityStats.map(({ icon: Icon, number, label }) => (
								<div key={label} className="text-center">
									<div className="flex items-center justify-center mb-2">
										<Icon size={36} className="text-orange-600 mr-2" />
										<AnimatedNumber 
											number={number} 
											className="text-4xl font-bold text-gray-900" 
										/>
									</div>
									<p className="text-gray-600">{label}</p>
								</div>
							))}
						</div>

						<div className="flex justify-center md:justify-start space-x-4">
							<button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
								Sign Up
							</button>
							<button className="px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommunitySection;
export { AnimatedNumber };