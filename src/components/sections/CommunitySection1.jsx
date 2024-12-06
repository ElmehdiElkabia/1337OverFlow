import React from 'react';
import { Trophy, Users ,Code, Star } from 'lucide-react';

// Community Stat Card Component
const CommunityStatCard = ({ icon: Icon, title, value, description, bgColor }) => (
	<div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
		<div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-4`}>
			<Icon className="text-white" size={32} />
		</div>
		<h3 className="text-2xl font-bold text-gray-900 mb-2">{value}</h3>
		<div>
			<h4 className="text-lg font-semibold text-gray-700 mb-1">{title}</h4>
			<p className="text-sm text-gray-500">{description}</p>
		</div>
	</div>
);

// Top Contributors Component
const TopContributor = ({ name, score, avatar }) => (
    <div className="flex items-center space-x-4 px-6 py-4 hover:bg-gray-50 transition duration-200 rounded-lg">
        {/* Avatar */}
        <img
            src={avatar || `/api/placeholder/50/50`}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
        />
        {/* Contributor Details */}
        <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-500">Reputation Score: <span className="font-medium text-gray-700">{score}</span></p>
        </div>
        {/* Star Icon */}
        <div className="flex items-center">
            <Star size={20} fill="currentColor" className="text-yellow-400" />
        </div>
    </div>
);


const CommunitySection1 = () => {
	const communityStats = [
		{
			icon: Users,
			title: "Active Users",
			value: "12.3K",
			description: "Passionate tech enthusiasts",
			bgColor: "bg-blue-500"
		},
		{
			icon: Code,
			title: "Total Questions",
			value: "45.7K",
			description: "Coding challenges solved",
			bgColor: "bg-green-500"
		},
		{
			icon: Trophy,
			title: "Badges Awarded",
			value: "23.5K",
			description: "Community achievements",
			bgColor: "bg-purple-500"
		},
		{
			icon: Code,
			title: "Daily Active",
			value: "3.2K",
			description: "Solving problems daily",
			bgColor: "bg-orange-500"
		}
	];

	const topContributors = [
		{ name: "CodeNinja", score: 12450, avatar: null },
		{ name: "TechWizard", score: 11230, avatar: null },
		{ name: "StackSolver", score: 9875, avatar: null },
		{ name: "ByteMaster", score: 8760, avatar: null }
	];

	return (
		<section className="bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">1337 Overflow Community</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Join a vibrant community of developers, problem solvers, and tech enthusiasts pushing the boundaries of coding knowledge.
					</p>
				</div>

				{/* Community Statistics */}
				<div className="grid md:grid-cols-4 gap-6 mb-16">
					{communityStats.map((stat, index) => (
						<CommunityStatCard key={index} {...stat} />
					))}
				</div>

				{/* Top Contributors Section */}
				<div className="bg-white shadow-lg rounded-lg">
					<div className="p-6 border-b flex justify-between items-center">
						<h3 className="text-xl font-semibold text-gray-900">Top Contributors</h3>
						<a
							href="#"
							className="text-blue-600 hover:text-blue-800 text-sm"
						>
							View All
						</a>
					</div>
					<div>
						{topContributors.map((contributor, index) => (
							<TopContributor
								key={index}
								{...contributor}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommunitySection1;