"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered across various industries",
  },
  { number: 98, suffix: "%", label: "Client Satisfaction", description: "Consistently exceeding client expectations" },
  { number: 50, suffix: "+", label: "Team Members", description: "Skilled professionals dedicated to excellence" },
  { number: 5, suffix: "+", label: "Years Experience", description: "Proven track record in digital innovation" },
]

function AnimatedNumber({ number, suffix, isInView }: { number: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = number / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, number])

  return (
    <span className="text-4xl md:text-5xl font-bold text-gradient">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-[#2E2E2E] relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-[#C38E70]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#37695F]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Track Record of
            <span className="text-gradient block">Success</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Numbers that speak for themselves. Our commitment to excellence is reflected in every project we deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#C38E70]/30 transition-all duration-300"
            >
              <AnimatedNumber number={stat.number} suffix={stat.suffix} isInView={isInView} />
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">{stat.label}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
