"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and payment information.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers.",
    },
    {
      title: "Information Sharing",
      content:
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business.",
    },
    {
      title: "Data Security",
      content:
        "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
    },
    {
      title: "Cookies and Tracking",
      content:
        "We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and deliver personalized content and advertisements.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions about this privacy policy or our data practices, please contact us at privacy@accentic.com or call us at +1 (555) 123-4567.",
    },
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Privacy Policy</h1>
            <p className="text-xl text-[#2E2E2E]/70 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-[#2E2E2E]/60 mt-4">Last updated: January 1, 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-[#FAF5F1] p-8 rounded-2xl mb-12 border border-[#C38E70]/10">
                <h2 className="text-2xl font-bold text-[#2E2E2E] mb-4">Overview</h2>
                <p className="text-[#2E2E2E]/70 leading-relaxed">
                  At Accentic Digital Solutions, we are committed to protecting your privacy and ensuring the security
                  of your personal information. This Privacy Policy describes how we collect, use, disclose, and
                  safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-[#C38E70]/10 hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold text-[#2E2E2E] mb-4 text-gradient">{section.title}</h3>
                    <p className="text-[#2E2E2E]/70 leading-relaxed">{section.content}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#37695F]/5 to-[#C38E70]/5 p-8 rounded-2xl mt-12 text-center"
              >
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Questions About Our Privacy Policy?</h3>
                <p className="text-[#2E2E2E]/70 mb-6">
                  If you have any questions or concerns about our privacy practices, we're here to help.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient-bg text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </motion.div>
  )
}
