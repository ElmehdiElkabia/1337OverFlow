import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-8">
			<div className="max-w-7xl mx-auto px-4">
				{/* Footer Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* About Section */}
					<div>
						<h2 className="text-lg font-semibold text-white">About</h2>
						<p className="mt-2 text-sm text-gray-400">
							My StackOverflow is a platform for solving coding problems, sharing knowledge, and learning together.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h2 className="text-lg font-semibold text-white">Quick Links</h2>
						<ul className="mt-2 space-y-2 text-sm">
							<li>
								<Link to="/" className="hover:text-orange-500">Home</Link>
							</li>
							<li>
								<Link to="/questions" className="hover:text-orange-500">Questions</Link>
							</li>
							<li>
								<Link to="/tags" className="hover:text-orange-500">Tags</Link>
							</li>
							<li>
								<Link to="/users" className="hover:text-orange-500">Users</Link>
							</li>
						</ul>
					</div>

					{/* Social Media */}
					<div>
						<h2 className="text-lg font-semibold text-white">Follow Us</h2>
						<div className="mt-4 flex space-x-4">
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
								<Facebook size={24} />
							</a>
							<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
								<Twitter size={24} />
							</a>
							<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
								<Linkedin size={24} />
							</a>
							<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
								<Github size={24} />
							</a>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-700 mt-8 pt-4">
					{/* Copyright */}
					<p className="text-center text-sm text-gray-500">
						&copy; {new Date().getFullYear()} My StackOverflow. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
