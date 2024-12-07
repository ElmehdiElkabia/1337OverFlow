import React from 'react';
import { Trophy, Users, Code, Star } from 'lucide-react';

// Community Stat Card Component
const CommunityStatCard = ({ icon: Icon, title, value, description, bgColor }) => (
	<div className={`${bgColor} p-4 rounded-lg shadow-md flex flex-col items-center text-white space-y-2`}>
		<Icon className="text-white" size={32} />
		<div className="text-3xl font-bold">{value}</div>
		<div className="text-lg font-semibold">{title}</div>
		<p className="text-sm text-center opacity-80">{description}</p>
	</div>
);

// Top Contributor Component
const TopContributor = ({ name, score, avatar }) => (
	<div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
		<div className="flex items-center space-x-3">
			{/* Avatar Placeholder */}
			<div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
				{avatar ? (
					<img src={avatar} alt={name} className="w-full h-full rounded-full" />
				) : (
					<span className="text-gray-600">{name.charAt(0)}</span>
				)}
			</div>
			<div>
				<div className="font-semibold">{name}</div>
				<div className="text-sm text-gray-600">Reputation Score: {score}</div>
			</div>
		</div>
		<Star size={20} fill="currentColor" className="text-yellow-400" />
	</div>
);

// Community Section Component
const CommunitySection = () => {
	const communityStats = [
		{ icon: Users, title: "Active Users", value: "12.3K", description: "Passionate tech enthusiasts", bgColor: "bg-blue-500" },
		{ icon: Code, title: "Total Questions", value: "45.7K", description: "Coding challenges solved", bgColor: "bg-green-500" },
		{ icon: Trophy, title: "Badges Awarded", value: "23.5K", description: "Community achievements", bgColor: "bg-purple-500" },
		{ icon: Code, title: "Daily Active", value: "3.2K", description: "Solving problems daily", bgColor: "bg-orange-500" }
	];

	const topContributors = [
		{ name: "CodeNinja", score: 12450, avatar: null },
		{ name: "TechWizard", score: 11230, avatar: null },
		{ name: "StackSolver", score: 9875, avatar: null },
		{ name: "ByteMaster", score: 8760, avatar: null }
	];

	return (
		<div className="max-w-6xl mx-auto p-6 rounded-lg ">
			<h1 className="text-4xl font-bold text-center mb-6 text-gray-800">1337 Overflow Community</h1>


			{/* Community Statistics */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
				{communityStats.map((stat, index) => (
					<CommunityStatCard key={index} {...stat} />
				))}
			</div>

			{/* Top Contributors Section */}
			<div className="bg-white p-6 rounded-lg">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-semibold text-gray-800">Top Contributors</h2>
					<button className="text-blue-600 hover:text-blue-800 transition-colors">
						View All
					</button>
				</div>

				<div className="space-y-4">
					{topContributors.map((contributor, index) => (
						<TopContributor key={index} {...contributor} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CommunitySection;