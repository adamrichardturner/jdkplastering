'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Award, CheckCircle, Star } from 'lucide-react'
import { StandardButton } from '@/components/ui/standard-button'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InstagramGrid from '@/components/InstagramGrid'

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

        <div className="container h-full flex items-center mx-auto relative px-0 py-4 my-24 md:py-10">
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

      {/* Instagram Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <InstagramGrid />
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
                className="text-center group min-h-[300px]"
              >
                <div className="bg-white h-full rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
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
            <div className="flex flex-col w-full sm:flex-row gap-4 justify-center items-center">
              <StandardButton variant="secondary" href="/contact" icon="phone">
                Get Free Quote
              </StandardButton>
              <StandardButton
                variant="outline-white"
                onClick={() => (window.location.href = 'tel:079468179671')}
                icon="arrow"
              >
                Call 07946 817967
              </StandardButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
