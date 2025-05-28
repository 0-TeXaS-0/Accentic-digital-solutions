"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    content:
      "Accentic Digital Solutions transformed our online presence completely. Their creative approach and technical expertise delivered results beyond our expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director, GrowthCo",
    content:
      "The team at Accentic is incredibly professional and innovative. They helped us increase our conversion rates by 300% within just three months.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder, CreativeSpace",
    content:
      "Working with Accentic was a game-changer for our business. Their strategic approach to digital marketing brought us qualified leads consistently.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "David Thompson",
    position: "CTO, InnovateLab",
    content:
      "Exceptional web development services! The website they built for us is not only beautiful but also performs incredibly well across all devices.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-[#37695F]/5 to-[#C38E70]/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">What Our Clients Say</h2>
          <p className="text-xl text-[#2E2E2E]/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#C38E70]/10"
            >
              <div className="flex items-center justify-center mb-8">
                <Quote className="w-12 h-12 text-[#C38E70]" />
              </div>

              <blockquote className="text-xl md:text-2xl text-[#2E2E2E] text-center mb-8 leading-relaxed font-light">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C38E70]"
                />
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-[#2E2E2E]">{testimonials[currentIndex].name}</h4>
                  <p className="text-[#37695F]">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#C38E70] scale-125" : "bg-[#C38E70]/30 hover:bg-[#C38E70]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
