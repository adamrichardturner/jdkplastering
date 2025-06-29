'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Shield,
  Award,
  Users,
  Star,
  Hammer,
  Home,
  Droplets,
  ThermometerSun,
  Target,
  HeartHandshake,
  Wrench,
  Clock,
} from 'lucide-react'
import { StandardButton } from '@/components/ui/standard-button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 bg-[#090909] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/logo/jdk-plastering-wall.png"
            alt="JDK Plastering professional work showcase"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/80 to-[#090909]/60"></div>
        </div>

        <div className="container mx-auto px-4 relative">
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
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                JDK Plastering
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              London&apos;s trusted plastering and damp-proofing specialists
              with over 10 years of industry excellence
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <StandardButton variant="primary" href="/contact" icon="arrow">
                Get Free Quote
              </StandardButton>
              <StandardButton variant="white" href="/projects" icon="arrow">
                View Our Work
              </StandardButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/logo/jdk-media-wall.png"
                  alt="JDK Plastering team at work showcasing professional craftsmanship"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Leading Plastering Company Since 2014
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                JDK Plastering & Damp Specialist is London&apos;s premier
                plastering company with over a decade of proven expertise. We
                specialize in comprehensive plastering services, including
                advanced rendering systems, elegant Venetian plastering, and
                cutting-edge insulated rendering solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our unwavering commitment to delivering exceptional workmanship
                and outstanding customer service has established us as the
                trusted choice for homeowners, contractors, and property
                developers across London.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    10+
                  </div>
                  <div className="text-slate-600 font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    500+
                  </div>
                  <div className="text-slate-600 font-medium">
                    Projects Completed
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Specialist Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From traditional plastering to modern insulation systems, we
              deliver excellence across every service
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Hammer,
                title: 'Sand & Cement Rendering',
                description:
                  'Traditional, durable rendering for lasting protection',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Star,
                title: 'Venetian Plastering',
                description: 'Luxurious decorative finishes for premium spaces',
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: ThermometerSun,
                title: 'Insulated Rendering',
                description: 'Energy-efficient solutions reducing heat loss',
                color: 'from-green-500 to-green-600',
              },
              {
                icon: Droplets,
                title: 'Damp Proofing',
                description: 'Complete moisture control and prevention systems',
                color: 'from-red-500 to-red-600',
              },
              {
                icon: Home,
                title: 'Lime Rendering',
                description:
                  'Breathable systems perfect for heritage properties',
                color: 'from-orange-500 to-orange-600',
              },
              {
                icon: Shield,
                title: 'Acrylic Rendering',
                description: 'Weather-resistant modern finish systems',
                color: 'from-indigo-500 to-indigo-600',
              },
              {
                icon: Wrench,
                title: 'Pitted Effect Plastering',
                description: 'Textured finishes for unique aesthetic appeal',
                color: 'from-teal-500 to-teal-600',
              },
              {
                icon: Award,
                title: 'External Wall Insulation',
                description: 'Complete EWI systems with 25-year guarantees',
                color: 'from-pink-500 to-pink-600',
              },
            ].map((service) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Professional Approach
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At JDK Plastering & Damp Specialist, we believe every project
                deserves a personalized approach. Our skilled team works closely
                with clients to understand their unique requirements and deliver
                results that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">
                      Tailored Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      Every project is unique. We assess your specific needs and
                      develop customized solutions using the latest techniques
                      and highest-quality materials.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Safety First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      Safety is our top priority. Our fully trained team uses
                      proper safety equipment and follows strict protocols to
                      ensure every project is completed safely and efficiently.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-4">
                      <HeartHandshake className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">
                      Exceptional Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      Client satisfaction drives everything we do. From initial
                      consultation to project completion, we provide exceptional
                      service and support every step of the way.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">Quality Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      We stand behind our work with comprehensive guarantees.
                      Our commitment to quality ensures lasting results that
                      protect your investment for years to come.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#090909] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose JDK Plastering?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference that professional expertise and genuine
              care make
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">10+ Years Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Over a decade of proven expertise in plastering and damp
                solutions across London
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fully Insured</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete insurance coverage gives you peace of mind on every
                project
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">25-Year Guarantee</h3>
              <p className="text-gray-300 leading-relaxed">
                Industry-leading warranties on all completed work demonstrate
                our confidence
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Skilled craftsmen trained in the latest techniques and safety
                protocols
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StandardButton variant="primary" href="/contact" icon="arrow">
              Start Your Project Today
            </StandardButton>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-blue-100 font-medium">
                Projects Completed
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold mb-2">98%</div>
              <div className="text-blue-100 font-medium">
                Customer Satisfaction
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold mb-2">25</div>
              <div className="text-blue-100 font-medium">Year Guarantee</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold mb-2">10+</div>
              <div className="text-blue-100 font-medium">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
