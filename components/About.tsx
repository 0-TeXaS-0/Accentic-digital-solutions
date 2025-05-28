"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Target, Zap } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized for excellence in digital innovation and creative solutions",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "50+ skilled professionals with diverse expertise and proven track records",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Data-focused approach ensuring measurable ROI and business growth",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodology delivering projects on time without compromising quality",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white to-[#FAF5F1]/50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-64 h-64 gradient-bg rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-48 h-48 bg-[#37695F] rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-[#C38E70]/10 text-[#C38E70] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              About Accentic Digital Solutions
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6 leading-tight">
              Transforming Ideas Into
              <span className="text-gradient block">Digital Excellence</span>
            </h2>

            <p className="text-lg text-[#2E2E2E]/70 mb-8 leading-relaxed">
              Founded in 2018, Accentic Digital Solutions has been at the forefront of digital innovation, helping
              businesses of all sizes achieve their goals through strategic digital transformation. Our passion for
              creativity combined with technical expertise makes us the perfect partner for your digital journey.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Influencer marketing campaigns that drive authentic engagement",
                "Professional Meta & Google Ads setup and optimization",
                "Local SEO strategies to dominate your local market",
                "Creative graphics design for all your marketing needs",
                "Comprehensive website SEO and Google My Business management",
                "Full-service social media management and content creation",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-[#37695F] rounded-full"></div>
                  <span className="text-[#2E2E2E]/80">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-[#C38E70]/10 hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4"
                >
                  <highlight.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#2E2E2E] mb-2">{highlight.title}</h3>
                <p className="text-sm text-[#2E2E2E]/70 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
