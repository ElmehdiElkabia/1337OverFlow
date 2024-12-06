import React from 'react';
import { Code, Users, Globe } from 'lucide-react';

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
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-gray-900 mb-6">
						Every Developer's Knowledge Hub
					</h2>
					<p className="text-xl text-gray-600 mb-10">
						1337 Overflow is the definitive Q&A platform where millions of developers
						come to ask questions, learn, and share technical knowledge every month.
					</p>

					<div className="flex justify-center space-x-6 mb-10">
						{communityStats.map(({ icon: Icon, number, label }) => (
							<div key={label} className="text-center">
								<div className="flex items-center justify-center mb-2">
									<Icon size={36} className="text-orange-600 mr-2" />
									<span className="text-4xl font-bold text-gray-900">{number}</span>
								</div>
								<p className="text-gray-600">{label}</p>
							</div>
						))}
					</div>

					<div className="flex justify-center space-x-4">
						<button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
							Sign Up
						</button>
						<button className="px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommunitySection;