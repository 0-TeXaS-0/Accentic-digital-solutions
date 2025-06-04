"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-darkBlue via-indigo to-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your
              <span className="text-gradient block">Digital Presence?</span>
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have accelerated their growth with our innovative digital
              solutions. Let's discuss your project and create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-cyan to-blue hover:from-blue hover:to-cyan text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 card-glow"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect border-2 border-white text-white hover:bg-white hover:text-darkBlue px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </div>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5 text-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-5 h-5 text-cyan" />
                <span>hello@accentic.com</span>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 pt-8 border-t border-white/20"
            >
              {["Free Consultation", "24/7 Support", "Money-Back Guarantee", "Fast Delivery"].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-2 text-white/70"
                >
                  <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <Image
                src="/images/ai-tech.png"
                alt="AI Technology Solutions"
                width={500}
                height={500}
                className="w-full max-w-lg h-auto drop-shadow-2xl"
              />

              {/* Static Glow Effects */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-purple/30 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-blue/30 rounded-full blur-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
