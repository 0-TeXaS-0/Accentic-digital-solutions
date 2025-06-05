"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import { Users, Award, Target, Heart, Linkedin, Twitter, Github, Coffee, CheckCircle } from "lucide-react"
import Image from "next/image"

const team = [
	{
		name: "Sarah Johnson",
		position: "CEO & Founder",
		bio: "Visionary leader with 10+ years in digital strategy and business development.",
		image: "/placeholder.svg?height=300&width=300",
		social: { linkedin: "#", twitter: "#" },
	},
	{
		name: "Michael Chen",
		position: "CTO",
		bio: "Full-stack developer and tech innovator passionate about cutting-edge solutions.",
		image: "/placeholder.svg?height=300&width=300",
		social: { linkedin: "#", github: "#" },
	},
	{
		name: "Emily Rodriguez",
		position: "Creative Director",
		bio: "Award-winning designer with expertise in brand identity and user experience.",
		image: "/placeholder.svg?height=300&width=300",
		social: { linkedin: "#", twitter: "#" },
	},
	{
		name: "David Thompson",
		position: "Marketing Director",
		bio: "Data-driven marketer specializing in growth strategies and digital campaigns.",
		image: "/placeholder.svg?height=300&width=300",
		social: { linkedin: "#", twitter: "#" },
	},
]

const values = [
	{
		icon: Users,
		title: "Client-Centric",
		description:
			"We put our clients at the heart of everything we do, ensuring their success is our success.",
	},
	{
		icon: Award,
		title: "Excellence",
		description:
			"We strive for excellence in every project, delivering quality that exceeds expectations.",
	},
	{
		icon: Target,
		title: "Results-Driven",
		description:
			"Our focus is on delivering measurable results that drive real business growth.",
	},
	{
		icon: Heart,
		title: "Passion",
		description:
			"We're passionate about digital innovation and helping businesses transform.",
	},
]

export default function About() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="min-h-screen"
		>
			<Navbar />

			{/* Hero Section - Enhanced with modern aesthetic */}
			<section className="pt-24 pb-16 bg-gradient-to-br from-cream via-lightBlue/30 to-indigo/10 overflow-hidden">
				<div className="container mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="text-left max-w-3xl"
						>
							<h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
								We're Building The Future Digital Experience
							</h1>
							<p className="text-xl text-darkBlue/70 leading-relaxed mb-8">
								We're a passionate team of digital innovators dedicated to
								transforming businesses through creative solutions and strategic
								thinking.
							</p>

							<motion.div
								className="flex flex-wrap gap-4 my-8"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.6 }}
							>
								{["Innovation", "Excellence", "Creativity", "Results"].map(
									(tag, i) => (
										<span
											key={tag}
											className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-indigo/10 text-sm font-medium text-darkBlue flex items-center"
										>
											<CheckCircle className="w-4 h-4 mr-2 text-indigo" />
											{tag}
										</span>
									)
								)}
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
							className="relative"
						>
							<div className="relative z-10">
								<Image
									src="/images/12.png"
									alt="Digital Workspace Character"
									width={600}
									height={400}
									className="rounded-2xl"
									priority
								/>
							</div>

							{/* Decorative elements inspired by the image */}
							<motion.div
								className="absolute -top-10 -right-10 w-32 h-32 bg-purple/20 rounded-full blur-xl"
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.4, 0.6, 0.4],
								}}
								transition={{
									duration: 6,
									repeat: Infinity,
									repeatType: "reverse",
								}}
							/>
							<motion.div
								className="absolute -bottom-8 -left-8 w-24 h-24 bg-indigo/20 rounded-full blur-xl"
								animate={{
									scale: [1, 1.15, 1],
									opacity: [0.3, 0.5, 0.3],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									repeatType: "reverse",
									delay: 1,
								}}
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Story Section - Updated with modern design */}
			<section className="py-20 bg-white overflow-hidden">
				<div className="container mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="relative"
						>
							<div className="aspect-video bg-gradient-to-br from-indigo/80 to-purple rounded-2xl overflow-hidden shadow-xl">
								<Image
									src="/placeholder.svg?height=400&width=600"
									alt="Our team"
									width={600}
									height={400}
									className="mix-blend-overlay opacity-90 rounded-2xl"
								/>
							</div>

							{/* Floating decorative elements inspired by the 3D image */}
							<motion.div
								className="absolute -top-6 -left-6 p-4 bg-white rounded-xl shadow-lg flex items-center gap-3"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.6 }}
								viewport={{ once: true }}
							>
								<div className="w-8 h-8 rounded-full bg-indigo/20 flex items-center justify-center">
									<Coffee className="w-4 h-4 text-indigo" />
								</div>
								<span className="font-medium text-sm">Since 2025</span>
							</motion.div>

							<motion.div
								className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-lg"
								initial={{ opacity: 0, y: -20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6, duration: 0.6 }}
								viewport={{ once: true }}
							>
								<span className="text-2xl font-bold text-gradient">500+</span>
								<p className="text-xs text-darkBlue/70">Projects Completed</p>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<div className="inline-block mb-6 px-4 py-2 bg-indigo/10 rounded-full text-indigo font-medium text-sm">
								Our Journey
							</div>
							<h2 className="text-4xl md:text-5xl font-bold text-darkBlue mb-6">
								Our Story
							</h2>
							<p className="text-lg text-darkBlue/70 mb-6 leading-relaxed">
								Founded in 2025, Accentic Digital Solutions began as a small team
								of passionate developers and designers who believed that every
								business deserves exceptional digital experiences.
							</p>
							<p className="text-lg text-darkBlue/70 mb-6 leading-relaxed">
								Today, we've grown into a full-service digital agency that has
								helped over 500 businesses transform their digital presence and
								achieve remarkable growth.
							</p>
							<p className="text-lg text-darkBlue/70 mb-6 leading-relaxed">
								Our mission remains the same: to fuel growth with creativity and
								deliver solutions that make a real difference in our clients'
								success.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Values Section - Enhanced with floating card style */}
			<section className="py-20 bg-gradient-to-br from-cream to-white overflow-hidden">
				<div className="container mx-auto px-4 md:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<div className="inline-block mb-4 px-4 py-2 bg-indigo/10 rounded-full text-indigo font-medium text-sm">
							Core Values
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
							Our Values
						</h2>
						<p className="text-xl text-darkBlue/70 max-w-3xl mx-auto">
							The principles that guide everything we do and shape our
							relationships with clients and team members.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05, y: -5 }}
								className="bg-white p-8 rounded-2xl shadow-lg border border-indigo/10 text-center relative overflow-hidden group"
							>
								{/* Gradient background that appears on hover */}
								<div className="absolute inset-0 bg-gradient-to-br from-indigo/5 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

								<motion.div
									whileHover={{ scale: 1.1, rotate: 5 }}
									className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
								>
									<value.icon className="w-8 h-8 text-white" />
								</motion.div>
								<h3 className="text-xl font-bold text-darkBlue mb-4 relative z-10">
									{value.title}
								</h3>
								<p className="text-darkBlue/70 leading-relaxed relative z-10">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section - Enhanced with modern card design */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 md:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<div className="inline-block mb-4 px-4 py-2 bg-indigo/10 rounded-full text-indigo font-medium text-sm">
							Our Experts
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
							Meet Our Team
						</h2>
						<p className="text-xl text-darkBlue/70 max-w-3xl mx-auto">
							The talented individuals who make the magic happen and drive our
							clients' success.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{team.map((member, index) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.02, y: -5 }}
								className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo/10"
							>
								<div className="relative h-64 overflow-hidden">
									<Image
										src={member.image || "/placeholder.svg"}
										alt={member.name}
										width={300}
										height={300}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-darkBlue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
											{member.social.linkedin && (
												<motion.a
													href={member.social.linkedin}
													whileHover={{ scale: 1.1 }}
													className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
												>
													<Linkedin className="w-4 h-4" />
												</motion.a>
											)}
											{member.social.twitter && (
												<motion.a
													href={member.social.twitter}
													whileHover={{ scale: 1.1 }}
													className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
												>
													<Twitter className="w-4 h-4" />
												</motion.a>
											)}
											{member.social.github && (
												<motion.a
													href={member.social.github}
													whileHover={{ scale: 1.1 }}
													className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
												>
													<Github className="w-4 h-4" />
												</motion.a>
											)}
										</div>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-bold text-darkBlue mb-1">
										{member.name}
									</h3>
									<p className="text-indigo font-medium mb-3">
										{member.position}
									</p>
									<p className="text-darkBlue/70 text-sm leading-relaxed">
										{member.bio}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<Footer />
			<WhatsAppFloat />
		</motion.div>
	)
}
