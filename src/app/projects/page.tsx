'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Shield,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Camera,
  MapPin,
  Calendar,
  Phone,
  Heart,
  MessageCircle,
  Share,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isMenuOpen])

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'damp-proofing', label: 'Damp Proofing' },
    { id: 'plastering', label: 'Plastering' },
    { id: 'rendering', label: 'Rendering' },
    { id: 'venetian', label: 'Venetian Plaster' },
    { id: 'insulation', label: 'Wall Insulation' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Victorian Terrace Damp Treatment',
      category: 'damp-proofing',
      location: 'Clapham, London',
      date: '2024',
      image: '/logo/jdk-media-wall.png',
      likes: 45,
      description:
        'Complete rising damp treatment with chemical DPC injection and breathable replastering.',
      tags: ['Rising Damp', 'Chemical DPC', 'Replastering'],
    },
    {
      id: 2,
      title: 'Modern Apartment Venetian Plaster',
      category: 'venetian',
      location: 'Canary Wharf, London',
      date: '2024',
      image: '/logo/jdk-plastering-wall.png',
      likes: 78,
      description:
        'Luxury Venetian plaster finish in contemporary apartment living space.',
      tags: ['Venetian Plaster', 'Interior Design', 'Luxury'],
    },
    {
      id: 3,
      title: 'External Wall Insulation System',
      category: 'insulation',
      location: 'Greenwich, London',
      date: '2024',
      image: '/logo/jdk-media-wall.png',
      likes: 62,
      description:
        'Complete EWI system with silicone render finish for improved thermal efficiency.',
      tags: ['EWI', 'Thermal Efficiency', 'Silicone Render'],
    },
    {
      id: 4,
      title: 'Heritage Building Lime Plastering',
      category: 'plastering',
      location: 'Westminster, London',
      date: '2024',
      image: '/logo/jdk-plastering-wall.png',
      likes: 91,
      description:
        'Traditional lime plastering restoration on Grade II listed property.',
      tags: ['Lime Plaster', 'Heritage', 'Restoration'],
    },
    {
      id: 5,
      title: 'Basement Waterproofing',
      category: 'damp-proofing',
      location: 'Islington, London',
      date: '2024',
      image: '/logo/jdk-media-wall.png',
      likes: 34,
      description:
        'Type C waterproofing system with cavity drainage and sump pump installation.',
      tags: ['Waterproofing', 'Basement', 'Cavity Drainage'],
    },
    {
      id: 6,
      title: 'Contemporary Sand & Cement Render',
      category: 'rendering',
      location: 'Hackney, London',
      date: '2024',
      image: '/logo/jdk-plastering-wall.png',
      likes: 56,
      description:
        'Smooth sand and cement render with weatherproof coating system.',
      tags: ['Sand Cement', 'Weatherproof', 'Modern'],
    },
    {
      id: 7,
      title: 'Microcement Bathroom Installation',
      category: 'plastering',
      location: 'Shoreditch, London',
      date: '2024',
      image: '/logo/jdk-media-wall.png',
      likes: 103,
      description:
        'Seamless microcement application creating waterproof bathroom surfaces.',
      tags: ['Microcement', 'Bathroom', 'Waterproof'],
    },
    {
      id: 8,
      title: 'Period Property Repointing',
      category: 'damp-proofing',
      location: 'Richmond, London',
      date: '2024',
      image: '/logo/jdk-plastering-wall.png',
      likes: 42,
      description:
        'Breathable lime mortar repointing on Victorian mansion exterior.',
      tags: ['Repointing', 'Lime Mortar', 'Victorian'],
    },
    {
      id: 9,
      title: 'Acrylic Render Finish',
      category: 'rendering',
      location: 'Wimbledon, London',
      date: '2024',
      image: '/logo/jdk-media-wall.png',
      likes: 67,
      description:
        'Weather-resistant acrylic render system with 25-year guarantee.',
      tags: ['Acrylic Render', 'Weather Resistant', 'Long Lasting'],
    },
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-[#090909] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/logo/jdk-plastering-wall.png"
            alt="JDK Plastering project showcase"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/80 to-[#090909]/60"></div>
        </div>

        <div className="container mx-auto px-4 py-10 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Project Gallery
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Discover our portfolio of exceptional plastering, damp-proofing,
              and rendering projects across London. Each project showcases our
              commitment to quality craftsmanship and lasting results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-10 py-6 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-white hover:bg-gray-100 px-10 py-6 text-lg font-semibold"
              >
                <Camera className="w-5 h-5 mr-2" />
                View Process
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">25yr</div>
                <div className="text-sm text-gray-300">Guarantee</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Browse Our Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Filter by project type to see specific examples of our expertise
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Instagram Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white mb-2">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 hover:scale-110 transition-transform">
                              <Heart className="w-5 h-5" />
                              <span className="text-sm">{project.likes}</span>
                            </button>
                            <button className="hover:scale-110 transition-transform">
                              <MessageCircle className="w-5 h-5" />
                            </button>
                            <button className="hover:scale-110 transition-transform">
                              <Share className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="flex items-center space-x-1 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {
                          categories.find((cat) => cat.id === project.category)
                            ?.label
                        }
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-slate-900 text-lg leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center space-x-1 text-slate-500">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{project.likes} likes</span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-600 hover:bg-slate-50 px-10 py-4"
            >
              Load More Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Project Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From initial consultation to project completion, we ensure every
              step meets our high standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                step: '01',
                title: 'Site Survey',
                description:
                  'Free comprehensive site assessment and moisture analysis',
                icon: Shield,
              },
              {
                step: '02',
                title: 'Detailed Quote',
                description:
                  'Transparent pricing with no hidden costs or surprises',
                icon: CheckCircle,
              },
              {
                step: '03',
                title: 'Expert Execution',
                description:
                  'Professional installation using proven methods and materials',
                icon: Award,
              },
              {
                step: '04',
                title: 'Quality Guarantee',
                description:
                  'Long-term warranty and ongoing support for peace of mind',
                icon: Star,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Join hundreds of satisfied clients across London. Get your free
              consultation and detailed quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 text-lg font-semibold"
                onClick={() => (window.location.href = 'tel:07943519301')}
              >
                Call 07943 51930
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
