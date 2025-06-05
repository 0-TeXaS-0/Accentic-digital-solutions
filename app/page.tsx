"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Features from "@/components/Features"
import Stats from "@/components/Stats"
import Process from "@/components/Process"
import Brands from "@/components/Brands"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Features />
      <Process />
      <Brands />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </motion.div>
  )
}
