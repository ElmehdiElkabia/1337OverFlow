import React from 'react';
import { Link } from 'react-router-dom';
import { Home, HelpCircle, Tag, Users, X } from 'lucide-react';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
	return (
		<>
			{/* Sidebar Background Overlay (Visible only on mobile when open) */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
					onClick={toggleSidebar}
				></div>
			)}

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-gray-100 border-r border-gray-300 z-50 transform ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 md:translate-x-0 md:flex md:flex-col`}
			>
				{/* Sidebar Header */}
				<div className="flex items-center justify-between p-4 border-b border-gray-300">
					<h1 className="text-xl font-bold text-gray-900">My StackOverflow</h1>
					{/* Close Button (Mobile only) */}
					<X
						size={24}
						className="cursor-pointer text-gray-700 md:hidden"
						onClick={toggleSidebar}
					/>
				</div>

				{/* Sidebar Navigation */}
				<nav className="p-4 space-y-4">
					<Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-orange-600">
						<Home size={18} />
						<span>Home</span>
					</Link>
					<Link
						to="/questions"
						className="flex items-center space-x-2 text-gray-700 hover:text-orange-600"
					>
						<HelpCircle size={18} />
						<span>Questions</span>
					</Link>
					<Link to="/tags" className="flex items-center space-x-2 text-gray-700 hover:text-orange-600">
						<Tag size={18} />
						<span>Tags</span>
					</Link>
					<Link to="/users" className="flex items-center space-x-2 text-gray-700 hover:text-orange-600">
						<Users size={18} />
						<span>Users</span>
					</Link>
				</nav>
			</div>
		</>
	);
};

export default Sidebar;
