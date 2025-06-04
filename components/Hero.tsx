"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.02,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-indigo" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.03 + path.id * 0.01}
            initial={{ pathLength: 0.5, opacity: 0.1 }}
            animate={{
              pathLength: 1,
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

// Enhanced gradient background component inspired by Apple's aesthetic
function AnimatedGradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Noise texture overlay for grain effect */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay z-10"></div>
      
      <div className="relative w-full h-full">
        {/* Large primary gradient sphere - Positioned to avoid text clipping */}
        <div
          className="absolute top-[45%] -left-20 w-[40rem] h-[40rem] bg-gradient-to-br from-indigo/40 to-purple/30 
                     rounded-full filter blur-3xl opacity-50 animate-blob-slow"
        />

        {/* Secondary gradient sphere with different color - Moved higher */}
        <div
          className="absolute -top-20 right-0 w-[35rem] h-[35rem] bg-gradient-to-bl from-cyan/30 to-blue/20 
                     rounded-full filter blur-3xl opacity-40 animate-blob-slow animation-delay-2000"
        />

        {/* Accent color sphere - Pushed further down */}
        <div
          className="absolute -bottom-40 left-1/3 w-[45rem] h-[45rem] bg-gradient-to-tr from-indigo/20 to-purple/30 
                     rounded-full filter blur-3xl opacity-30 animate-blob-slow animation-delay-4000"
        />

        {/* Additional smaller blobs to fill space without interfering with text */}
        <div
          className="absolute top-[20%] right-[30%] w-48 h-48 bg-blue/20 rounded-full 
                     filter blur-xl opacity-30 animate-float animation-delay-3000"
        />
        
        <div
          className="absolute bottom-[40%] left-[20%] w-40 h-40 bg-purple/20 rounded-full 
                     filter blur-xl opacity-30 animate-float animation-delay-5000"
        />
        
        {/* Clear space for title text by adding a subtle gradient that lightens that area */}
        <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-cream/60 to-transparent"></div>
        
        {/* Ensure the bottom text area is clear */}
        <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-cream/50 to-transparent"></div>
      </div>
    </div>
  );
}

export default function Hero() {
  const title = "Accentic Digital Solutions"
  const words = title.split(" ")

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-lightBlue/30 to-indigo/10">
      {/* Animated Gradient Background */}
      <AnimatedGradientBackground />

      {/* Animated Background Paths */}
      <div className="absolute inset-0 opacity-20">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo/5 to-purple/5"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block text-gradient"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl text-blue mb-6 font-light"
            >
              "Fueling Growth with Creativity"
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-lg text-darkBlue/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We are a full-service digital marketing agency specializing in influencer marketing, Meta & Google Ads,
              local SEO, graphics design, and social media management. Transform your digital presence with our expert
              solutions.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm"
            >
              {["500+ Projects", "98% Satisfaction", "24/7 Support", "ROI Guaranteed"].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-2 glass-effect-dark px-4 py-2 rounded-full shadow-lg border border-indigo/20"
                >
                  <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  <span className="text-darkBlue font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 gradient-bg text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-glow hover:card-glow-hover"
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 glass-effect border-2 border-indigo text-indigo text-lg font-semibold rounded-2xl hover:bg-indigo hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <Image
                src="/images/digital-workspace.png"
                alt="Digital Marketing Workspace"
                width={600}
                height={600}
                className="w-full max-w-lg h-auto drop-shadow-2xl"
                priority
              />

              {/* Static Glow Effects */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-purple/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-cyan/20 rounded-full blur-lg"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-indigo rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-indigo rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
