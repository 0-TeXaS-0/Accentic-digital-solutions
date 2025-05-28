"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import { Calendar, User, ArrowRight, Search } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    content: "Full article content would go here...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "AI", "PWA", "Trends"],
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Digital Marketing Strategies That Actually Work",
    excerpt: "Discover proven digital marketing strategies that drive real results and maximize your ROI.",
    content: "Full article content would go here...",
    author: "David Thompson",
    date: "2024-01-10",
    category: "Marketing",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["SEO", "PPC", "Social Media", "ROI"],
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Building Scalable SaaS Applications: Best Practices",
    excerpt:
      "Learn the essential principles and best practices for building scalable SaaS applications that grow with your business.",
    content: "Full article content would go here...",
    author: "Michael Chen",
    date: "2024-01-05",
    category: "Development",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["SaaS", "Scalability", "Architecture", "Best Practices"],
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "The Psychology of User Experience Design",
    excerpt: "Understanding user psychology is crucial for creating intuitive and engaging digital experiences.",
    content: "Full article content would go here...",
    author: "Emily Rodriguez",
    date: "2023-12-28",
    category: "Design",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["UX", "Psychology", "Design", "User Research"],
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "With mobile traffic dominating the web, mobile-first design isn't just an option—it's essential.",
    content: "Full article content would go here...",
    author: "Sarah Johnson",
    date: "2023-12-20",
    category: "Design",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Mobile", "Responsive", "Design", "UX"],
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "SEO in 2024: What's Changed and What Hasn't",
    excerpt: "Stay ahead of the curve with the latest SEO strategies and algorithm updates for 2024.",
    content: "Full article content would go here...",
    author: "David Thompson",
    date: "2023-12-15",
    category: "Marketing",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["SEO", "Google", "Algorithm", "Strategy"],
    readTime: "8 min read",
  },
]

const categories = ["All", "Web Development", "Marketing", "Design", "Development"]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#FAF5F1] to-[#C38E70]/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Our Blog</h1>
            <p className="text-xl text-[#2E2E2E]/70 leading-relaxed mb-8">
              Insights, tips, and trends from the world of digital innovation. Stay updated with the latest in web
              development, design, and digital marketing.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C38E70]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-[#C38E70]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C38E70] focus:border-transparent transition-all duration-200"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "gradient-bg text-white shadow-lg"
                    : "bg-[#FAF5F1] text-[#2E2E2E] hover:bg-[#C38E70]/10 border border-[#C38E70]/20"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-[#FAF5F1]">
        <div className="container mx-auto px-4 md:px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-[#2E2E2E]/70">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#C38E70]/10"
                >
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C38E70] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#2E2E2E] px-3 py-1 rounded-full text-xs font-medium">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-[#2E2E2E]/60">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-[#2E2E2E] mb-3 group-hover:text-[#C38E70] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-[#2E2E2E]/70 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#FAF5F1] text-[#37695F] px-2 py-1 rounded-full text-xs font-medium border border-[#37695F]/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-[#C38E70] hover:text-[#37695F] transition-colors duration-200 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-bg text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Load More Articles
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#37695F]/5 to-[#C38E70]/5 p-12 rounded-3xl text-center border border-[#C38E70]/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">Stay Updated</h2>
            <p className="text-lg text-[#2E2E2E]/70 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights, tips, and trends delivered straight to your
              inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-[#C38E70]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C38E70] focus:border-transparent transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-bg text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </motion.div>
  )
}
