"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, Code, TrendingUp, Smartphone, Search, Users, MapPin } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Connect with the right influencers to amplify your brand message and reach your target audience authentically.",
    image: "/images/social-marketing.png",
  },
  {
    icon: TrendingUp,
    title: "Meta & Google Ads Setup",
    description:
      "Professional setup and optimization of Facebook, Instagram, and Google advertising campaigns for maximum ROI.",
    image: "/images/analytics-dashboard.png",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Dominate local search results and attract nearby customers with our comprehensive local SEO strategies.",
    image: "/images/analytics-woman.png",
  },
  {
    icon: Palette,
    title: "Graphics Designing",
    description:
      "Eye-catching visual designs for your brand including logos, social media graphics, and marketing materials.",
    image: "/images/web-design.png",
  },
  {
    icon: Search,
    title: "Website SEO",
    description:
      "Comprehensive on-page and technical SEO optimization to improve your website's search engine rankings.",
    image: "/images/ui-development.png",
  },
  {
    icon: Smartphone,
    title: "Google My Business Management",
    description:
      "Complete GMB optimization and management to enhance your local online presence and customer engagement.",
    image: "/images/analytics-woman.png",
  },
  {
    icon: Code,
    title: "Social Media Management",
    description:
      "Full-service social media management including content creation, posting, and community engagement across all platforms.",
    image: "/images/creative-work.png",
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-cream to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-6 h-6 bg-gradient-to-r from-indigo to-purple rounded-full`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Our Expertise</h2>
          <p className="text-xl text-darkBlue/70 max-w-3xl mx-auto">
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
              whileHover={{ scale: 1.02, y: -10 }}
              className="group glass-effect p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-indigo/10 relative overflow-hidden card-glow hover:card-glow-hover"
            >
              {/* Background Image */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={120}
                  height={120}
                  className="w-20 h-20 object-contain"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300 relative z-10"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-darkBlue mb-4 group-hover:text-indigo transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>

              <p className="text-darkBlue/70 leading-relaxed relative z-10">{feature.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
