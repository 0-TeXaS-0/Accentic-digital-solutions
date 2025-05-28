"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import { Code, Palette, TrendingUp, Smartphone, Search, Users, ArrowRight, CheckCircle, MapPin } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Connect with the right influencers to amplify your brand message and reach your target audience.",
    features: ["Influencer Research", "Campaign Strategy", "Content Collaboration", "Performance Tracking"],
    price: "Starting at $1,499/month",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: TrendingUp,
    title: "Meta & Google Ads Setup",
    description: "Professional setup and optimization of Facebook, Instagram, and Google advertising campaigns.",
    features: ["Campaign Setup", "Audience Targeting", "Ad Creative Design", "Performance Optimization"],
    price: "Starting at $999/month",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Dominate local search results and attract nearby customers with comprehensive local SEO.",
    features: ["Local Keyword Research", "Google My Business", "Local Citations", "Review Management"],
    price: "Starting at $799/month",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Palette,
    title: "Graphics Designing",
    description: "Eye-catching visual designs for your brand including logos and marketing materials.",
    features: ["Logo Design", "Social Media Graphics", "Marketing Materials", "Brand Guidelines"],
    price: "Starting at $599",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Search,
    title: "Website SEO",
    description: "Comprehensive on-page and technical SEO optimization to improve search rankings.",
    features: ["Technical SEO Audit", "On-Page Optimization", "Content Strategy", "Link Building"],
    price: "Starting at $899/month",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Smartphone,
    title: "Google My Business Management",
    description: "Complete GMB optimization and management to enhance your local online presence.",
    features: ["Profile Optimization", "Post Management", "Review Responses", "Insights Reporting"],
    price: "Starting at $399/month",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Code,
    title: "Social Media Management",
    description: "Full-service social media management including content creation and community engagement.",
    features: ["Content Creation", "Posting Schedule", "Community Management", "Analytics Reporting"],
    price: "Starting at $699/month",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Services() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Our Services</h1>
            <p className="text-xl text-[#2E2E2E]/70 leading-relaxed">
              Comprehensive digital solutions designed to transform your business and drive sustainable growth. From web
              development to digital marketing, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                className="group bg-[#FAF5F1] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#C38E70]/10"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3 group-hover:text-[#C38E70] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[#2E2E2E]/70 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#37695F]" />
                        <span className="text-sm text-[#2E2E2E]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#C38E70]">{service.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-[#37695F] hover:text-[#C38E70] transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#37695F]/5 to-[#C38E70]/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-[#2E2E2E]/70 mb-8">
              Let's discuss your project and create something amazing together. Get a free consultation and custom quote
              today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </motion.div>
  )
}
