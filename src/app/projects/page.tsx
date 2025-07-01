'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Shield,
  Award,
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  MessageCircle,
  Share,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StandardButton } from '@/components/ui/standard-button'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrustIndicators from '@/components/TrustIndicators'

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
    <div className="min-h-[calc(100vh - 200px)] bg-gradient-to-br from-slate-50 to-slate-100 overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center items-center px-3 md:pt-0 bg-[#090909] text-white relative overflow-hidden touch-manipulation"
        style={{ touchAction: 'manipulation' }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          {/* Mobile Background Image */}
          <div className="md:hidden">
            <Image
              src="/images/project-hero-bg-mobile.jpg"
              alt="JDK Plastering projects showcase mobile"
              fill
              className="object-cover object-right"
              priority
            />
          </div>

          {/* Desktop Background Image */}
          <div className="hidden md:block">
            <Image
              src="/images/project-hero-bg-desktop.jpg"
              alt="JDK Plastering projects showcase desktop"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/80 to-[#090909]/40"></div>
        </div>

        <div className="container h-full flex items-center mx-auto relative px-4 py-4 my-20 md:py-10">
          <motion.div
            className="text-left max-w-2xl"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-3xl leading-tight md:text-5xl lg:text-6xl font-bold mb-8 md:leading-[62px] leading-[42px]"
              variants={fadeInUp}
            >
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Project Gallery
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-4 leading-regular"
              variants={fadeInUp}
            >
              <strong className="text-white">See our work in action.</strong>{' '}
              Exceptional plastering, damp-proofing & rendering projects across
              London. <br className="hidden sm:block" />
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-regular"
              variants={fadeInUp}
            >
              <strong className="text-blue-400">
                Quality craftsmanship & lasting results
              </strong>{' '}
              — each project showcases our commitment to excellence and
              professional standards.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={fadeInUp}
            >
              <StandardButton variant="primary" href="/contact" icon="arrow">
                Get Free Quote
              </StandardButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TrustIndicators />

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
            className="flex flex-wrap justify-start md:justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full cursor-pointer font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
                className="group"
              >
                <Card className="overflow-hidden py-0 bg-white border-0 shadow-lg min-h-[700px] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center space-x-3">
                            <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-200">
                              <MessageCircle className="w-4 h-4" />
                            </button>
                            <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-200">
                              <Share className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs font-medium">
                              {project.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                        {
                          categories.find((cat) => cat.id === project.category)
                            ?.label
                        }
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-slate-900 text-lg leading-tight flex-1 mr-3">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-slate-500 text-xs bg-slate-100 rounded-full px-2.5 py-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="font-medium">{project.date}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-slate-100">
                      <StandardButton
                        variant="primary"
                        href="/contact"
                        icon="arrow"
                        size="sm"
                        className="w-full"
                      >
                        Get Quote for This Project
                      </StandardButton>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <StandardButton
              variant="secondary"
              icon="arrow"
              className="bg-white shadow-lg hover:shadow-xl"
            >
              Load More Projects
            </StandardButton>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-white">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
              <StandardButton variant="secondary" href="/contact" icon="phone">
                Get Free Quote
              </StandardButton>
              <StandardButton
                variant="outline-white"
                onClick={() => (window.location.href = 'tel:07943519301')}
                icon="arrow"
              >
                Call 07943 51930
              </StandardButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
