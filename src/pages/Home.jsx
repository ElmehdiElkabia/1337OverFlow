import React, { useState } from 'react';
import Header from '../components/layout/Header';
import CommunitySection from '../components/sections/CommunitySection';
import CommunitySection1 from '../components/sections/CommunitySection1';
import Footer from '../components/layout/Footer';
import CommunityImageSection from '../components/sections/CommunityImageSection';

const Home = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			{/* Header */}
			<Header toggleSidebar={toggleSidebar} />

			{/* Main Content */}
			<main className="flex-1">
				<div className="container mx-auto px-4 py-8 space-y-16">
					{/* Community Section */}
					<section className="relative">
					<CommunityImageSection />
						<CommunitySection />
					</section>

					{/* Divider */}
					<div className="w-full h-1 bg-gradient-to-r from-orange-500 via-gray-100 to-blue-500 rounded-lg" />

					{/* Community Section 1 */}
					<section className="relative">
						<h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
							Our Achievements & Top Contributors
						</h2>
						<CommunitySection1 />
					</section>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Home;
