import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	return (
			<div className="flex flex-1 flex-col ">
				{/* Header */}
				<Header toggleSidebar={toggleSidebar} />

				{/* Main Content */}
				<main className="flex-1 p-4 bg-white">
					{children}
				</main>

				{/* Optional Footer */}
				{/* <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
					© 2024 My StackOverflow Clone
				</footer> */}
			</div>
	);
};

export default MainLayout;