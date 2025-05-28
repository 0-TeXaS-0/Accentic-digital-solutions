"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import { Users, Award, Target, Heart, Linkedin, Twitter, Github } from "lucide-react"

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
    description: "We put our clients at the heart of everything we do, ensuring their success is our success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Our focus is on delivering measurable results that drive real business growth.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about digital innovation and helping businesses transform.",
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#FAF5F1] to-[#C38E70]/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">About Us</h1>
            <p className="text-xl text-[#2E2E2E]/70 leading-relaxed">
              We're a passionate team of digital innovators dedicated to transforming businesses through creative
              solutions and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6">Our Story</h2>
              <p className="text-lg text-[#2E2E2E]/70 mb-6 leading-relaxed">
                Founded in 2018, Accentic Digital Solutions began as a small team of passionate developers and designers
                who believed that every business deserves exceptional digital experiences.
              </p>
              <p className="text-lg text-[#2E2E2E]/70 mb-6 leading-relaxed">
                Today, we've grown into a full-service digital agency that has helped over 500 businesses transform
                their digital presence and achieve remarkable growth.
              </p>
              <p className="text-lg text-[#2E2E2E]/70 leading-relaxed">
                Our mission remains the same: to fuel growth with creativity and deliver solutions that make a real
                difference in our clients' success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="/placeholder.svg?height=400&width=600" alt="Our team" className="rounded-2xl shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#FAF5F1]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Our Values</h2>
            <p className="text-xl text-[#2E2E2E]/70 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and team members.
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
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#C38E70]/10 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">{value.title}</h3>
                <p className="text-[#2E2E2E]/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Meet Our Team</h2>
            <p className="text-xl text-[#2E2E2E]/70 max-w-3xl mx-auto">
              The talented individuals who make the magic happen and drive our clients' success.
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
                className="group bg-[#FAF5F1] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C38E70]/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-1">{member.name}</h3>
                  <p className="text-[#C38E70] font-medium mb-3">{member.position}</p>
                  <p className="text-[#2E2E2E]/70 text-sm leading-relaxed">{member.bio}</p>
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
