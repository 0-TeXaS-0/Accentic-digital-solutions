"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

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
    <section ref={ref} className="py-20 bg-gradient-to-br from-darkBlue to-indigo relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Track Record of
              <span className="text-gradient block">Success</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Numbers that speak for themselves. Our commitment to excellence is reflected in every project we deliver.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center glass-effect-dark p-6 rounded-2xl border border-white/10 hover:border-indigo/30 transition-all duration-300 card-glow"
                >
                  <AnimatedNumber number={stat.number} suffix={stat.suffix} isInView={isInView} />
                  <h3 className="text-lg font-semibold text-white mt-3 mb-2">{stat.label}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>
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
                src="/images/business-growth.png"
                alt="Business Growth Analytics"
                width={500}
                height={500}
                className="w-full max-w-lg h-auto drop-shadow-2xl"
              />
              {/* Static Glow Effects */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-purple/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan/30 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
