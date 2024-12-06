import React from 'react';
import image from '../../assets/images/image1.webp'
const CommunityImageSection = () => {
	return (
		<section className="bg-gray-50 py-16">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold text-gray-900 mb-6">
					Join a Thriving Global Developer Community
				</h2>
				<p className="text-xl text-gray-600 mb-8">
					Discover the power of collaboration and knowledge-sharing with millions of developers worldwide.
				</p>
				<div className="flex justify-center">
					<img
						src={image}
						alt="Global Developer Community"
						className="max-w-full rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default CommunityImageSection;
