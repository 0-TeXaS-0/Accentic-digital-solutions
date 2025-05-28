"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, Code, TrendingUp, Smartphone, Search, Users, MapPin } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Connect with the right influencers to amplify your brand message and reach your target audience authentically.",
  },
  {
    icon: TrendingUp,
    title: "Meta & Google Ads Setup",
    description:
      "Professional setup and optimization of Facebook, Instagram, and Google advertising campaigns for maximum ROI.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Dominate local search results and attract nearby customers with our comprehensive local SEO strategies.",
  },
  {
    icon: Palette,
    title: "Graphics Designing",
    description:
      "Eye-catching visual designs for your brand including logos, social media graphics, and marketing materials.",
  },
  {
    icon: Search,
    title: "Website SEO",
    description:
      "Comprehensive on-page and technical SEO optimization to improve your website's search engine rankings.",
  },
  {
    icon: Smartphone,
    title: "Google My Business Management",
    description:
      "Complete GMB optimization and management to enhance your local online presence and customer engagement.",
  },
  {
    icon: Code,
    title: "Social Media Management",
    description:
      "Full-service social media management including content creation, posting, and community engagement across all platforms.",
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Our Expertise</h2>
          <p className="text-xl text-[#2E2E2E]/70 max-w-3xl mx-auto">
            We deliver comprehensive digital solutions that transform businesses and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-[#FAF5F1] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C38E70]/10"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4 group-hover:text-[#C38E70] transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-[#2E2E2E]/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
