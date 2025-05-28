"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Lightbulb, Code, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Audit",
    description:
      "We analyze your current digital presence, identify opportunities, and understand your target audience and business goals.",
    details: ["Digital Audit", "Competitor Analysis", "Target Audience Research", "Goal Setting"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Based on our findings, we create a comprehensive digital marketing strategy tailored to your needs.",
    details: ["Marketing Strategy", "Content Planning", "Campaign Design", "Timeline Creation"],
  },
  {
    number: "03",
    icon: Code,
    title: "Implementation & Setup",
    description:
      "Our team implements the strategy across all channels including ads setup, SEO optimization, and content creation.",
    details: ["Ads Setup", "SEO Implementation", "Content Creation", "Social Media Setup"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Monitor & Optimize",
    description:
      "We continuously monitor performance, provide detailed reports, and optimize campaigns for maximum ROI.",
    details: ["Performance Monitoring", "Regular Reporting", "Campaign Optimization", "Strategy Refinement"],
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 right-10 w-32 h-32 border-2 border-[#C38E70]/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-10 w-24 h-24 border-2 border-[#37695F]/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Our Process</h2>
          <p className="text-xl text-[#2E2E2E]/70 max-w-3xl mx-auto">
            A proven methodology that ensures every project is delivered on time, within budget, and exceeds
            expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8`}
            >
              {/* Step Content */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#FAF5F1] p-8 rounded-2xl border border-[#C38E70]/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <span className="text-4xl font-bold text-[#C38E70]/30 mr-4">{step.number}</span>
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">{step.title}</h3>
                  <p className="text-[#2E2E2E]/70 mb-6 leading-relaxed">{step.description}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + detailIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-[#37695F] rounded-full"></div>
                        <span className="text-sm text-[#2E2E2E]/80">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Step Visual */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-32 h-32 gradient-bg rounded-2xl flex items-center justify-center shadow-lg"
              >
                <step.icon className="w-16 h-16 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
