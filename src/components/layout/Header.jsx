import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { X } from 'lucide-react';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);

	return (
		<header className="bg-white border border-gray-300 rounded-md ">
			<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
				{/* Logo and Mobile Menu Toggle */}
				<div className="flex items-center space-x-3">
					<Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v9.3a4.99 4.99 0 00-1-.18 5 5 0 00-5 5v1h4v2H4a2 2 0 01-2-2v-1a7 7 0 017-7c.364 0 .717.04 1.061.11a4.992 4.992 0 011.116-.11V3h5z" />
						</svg>
						<span>My StackOverflow</span>
					</Link>
				</div>

				{/* Desktop Navigation Links */}
				<div className="hidden md:flex space-x-8 text-gray-700 font-medium">
					<Link to="/" className="hover:text-orange-600">Home</Link>
					<Link to="/questions" className="hover:text-orange-600">Questions</Link>
					<Link to="/tags" className="hover:text-orange-600">Tags</Link>
					<Link to="/users" className="hover:text-orange-600">Users</Link>
				</div>

				{/* Desktop Search Input */}
				<div className="hidden md:flex relative items-center">
					<input type="text" placeholder="Search questions, tags, users..." className="w-96 px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600" />
					<Search size={24} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700" />
				</div>

				{/* Desktop Authentication Links */}
				<div className="hidden md:flex items-center space-x-4">
					<Link to="/signin" className="text-gray-700 hover:text-orange-600">Sign In</Link>
					<Link to="/signup" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Sign Up</Link>
				</div>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden flex items-center space-x-4">
					{/* Mobile Search Icon */}
					<button onClick={toggleSearchBar}>
						<Search size={24} className="text-gray-700" />
					</button>

					{/* Mobile Sign In Link */}
					<Link to="/signin" className="text-gray-700 hover:text-orange-600">Sign In</Link>
					<Link to="/signup" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Sign Up</Link>
					{/* Mobile Menu Icon */}
					<button onClick={toggleMobileMenu} className="text-gray-700">
						{isMobileMenuOpen ? (
							<X size={24} /> // Show X icon when menu is open
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Search Bar */}
			{isSearchOpen && (
				<div className="md:hidden bg-white shadow-md space-y-4 px-4 py-2">
					<div className="flex items-center space-x-2 border-b border-gray-300 pb-3">
						<input
							type="text"
							placeholder="Search..."
							className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
						/>
						<Search size={24} className="text-gray-700" />
					</div>
				</div>
			)}

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-white shadow-md space-y-4 px-4 py-2">

					<Link to="/" className="block px-4 text-gray-700 hover:text-orange-600">Home</Link>
					<Link to="/questions" className="block px-4 text-gray-700 hover:text-orange-600">Questions</Link>
					<Link to="/tags" className="block px-4 text-gray-700 hover:text-orange-600">Tags</Link>
					<Link to="/users" className="block px-4 text-gray-700 hover:text-orange-600">Users</Link>
					<Link to="/signin" className="block px-4 text-gray-700 hover:text-orange-600">Sign In</Link>
					<Link to="/signup" className="block px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Sign Up</Link>
				</div>
			)}
		</header>
	);
};

export default Header;
