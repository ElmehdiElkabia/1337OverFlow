import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
	{
		icon: Mail,
		title: 'Email',
		content: 'support@1337overflow.com',
	},
	{
		icon: Phone,
		title: 'Phone',
		content: '+1 (555) 123-4567',
	},
	{
		icon: MapPin,
		title: 'Address',
		content: '1337 Developer Lane, Tech City, IN 12345',
	},
];

const SectionContact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted', formData);
		alert("Message sent! We'll get back to you soon.");

		// Reset form after submission
		setFormData({
			name: '',
			email: '',
			message: '',
		});
	};

	return (
		<section className="bg-white py-16">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Contact Information */}
					<div className="bg-gray-50 p-8 rounded-lg">
						<h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h3>
						<div className="space-y-6">
							{contactInfo.map(({ icon: Icon, title, content }) => (
								<div key={title} className="flex items-center space-x-4">
									<Icon className="text-orange-600" size={24} />
									<div>
										<p className="font-semibold text-gray-800">{title}</p>
										<p className="text-gray-600">{content}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Contact Form */}
					<div>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-gray-700 mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
									placeholder="Your Name"
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-gray-700 mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
									placeholder="you@example.com"
								/>
							</div>
							<div>
								<label htmlFor="message" className="block text-gray-700 mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									required
									rows={4}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
									placeholder="Your message..."
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionContact;
