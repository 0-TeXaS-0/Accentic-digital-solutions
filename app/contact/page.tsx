"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

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
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Get In Touch</h1>
            <p className="text-xl text-[#2E2E2E]/70 leading-relaxed">
              Ready to transform your digital presence? Let's discuss your project and create something amazing
              together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-6">Let's Start a Conversation</h2>
                <p className="text-lg text-[#2E2E2E]/70 leading-relaxed">
                  We're here to help you achieve your digital goals. Whether you need a new website, digital marketing
                  strategy, or complete brand overhaul, our team is ready to deliver exceptional results.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-[#FAF5F1] rounded-2xl border border-[#C38E70]/10"
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2E2E2E]">Email Us</h3>
                    <a href="mailto:Accenticdigitalsolutions@gmail.com" className="text-[#2E2E2E]/70 hover:text-[#C38E70] transition-colors duration-300">
                      Accenticdigitalsolutions@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-[#FAF5F1] rounded-2xl border border-[#C38E70]/10"
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2E2E2E]">Call Us</h3>
                    <div className="flex flex-col space-y-1">
                      <p className="text-[#2E2E2E]/70">6370611812</p>
                      <p className="text-[#2E2E2E]/70">8249806562</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-[#FAF5F1] rounded-2xl border border-[#C38E70]/10"
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2E2E2E]">Visit Us</h3>
                    <p className="text-[#2E2E2E]/70">Accentic Digital Solutions, Jagamara, Bhubaneswar, Odisha, 751003</p>
                  </div>
                </motion.div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-[#37695F]/5 to-[#C38E70]/5 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-4">Business Hours</h3>
                <div className="space-y-2 text-[#2E2E2E]/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#FAF5F1] p-8 rounded-3xl shadow-lg border border-[#C38E70]/10"
            >
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C38E70]" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white border border-[#C38E70]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C38E70] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C38E70]" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white border border-[#C38E70]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C38E70] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C38E70]" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-[#C38E70]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C38E70] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[#C38E70]" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-[#C38E70]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C38E70] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full gradient-bg text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </motion.div>
  )
}
