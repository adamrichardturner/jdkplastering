'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  Star,
  Palette,
  ShieldCheck,
  Building,
  Zap,
  Wind,
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

export default function Services() {
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

  const services = [
    {
      icon: ShieldCheck,
      title: 'Rising Damp Treatment',
      description:
        'Moisture traveling up through walls via capillary action. Common in Victorian/Edwardian properties with failed damp-proof courses. We diagnose the true cause and install new chemical DPC systems.',
      features: [
        'PCA-compliant injection systems',
        'Chemical damp-proof course installation',
        'Salt-contaminated plaster treatment',
        'Breathable re-plastering finishes',
      ],
    },
    {
      icon: Building,
      title: 'Penetrating Damp Solutions',
      description:
        'Lateral moisture entering through external defects—cracked mortar, damaged gutters, or roof leaks. We locate the source, repair defects, and apply breathable waterproof coatings.',
      features: [
        'Repointing crumbling mortar joints',
        'Breathable waterproof coatings',
        'Internal membrane systems',
        'Permanent leak prevention',
      ],
    },
    {
      icon: Wind,
      title: 'Waterproofing Systems',
      description:
        'Comprehensive tanking and membrane solutions for basements, cellars, and below-ground areas. Including ACO drain installation and cavity wall membrane systems.',
      features: [
        'Tanking slurry applications',
        'Cavity wall membrane (Type C)',
        'ACO channel drain installation',
        'Sump pump integration',
      ],
    },
    {
      icon: Palette,
      title: 'Rendering & Coatings',
      description:
        'Modern silicone renders and waterproof sand-cement systems. Highly water-repellent, UV-stable finishes that shed rain while allowing walls to breathe naturally.',
      features: [
        'Silicone render systems',
        'Waterproof sand-cement render',
        'Breathable external coatings',
        'Long-lasting, low-maintenance finishes',
      ],
    },
    {
      icon: Zap,
      title: 'Isotherm Insulation',
      description:
        'Patented thin-wall insulation system (4-10mm) with integrated damp resistance. Vapour-permeable yet waterproof, preventing condensation and improving energy efficiency.',
      features: [
        'Minimal thickness installation',
        'Improved wall U-values',
        'Condensation prevention',
        'EWI insulation systems',
      ],
    },
    {
      icon: Star,
      title: 'Venetian Plastering',
      description:
        'Premium decorative finishes combining traditional craftsmanship with modern techniques. From classic lime plasters to contemporary polished surfaces.',
      features: [
        'Traditional lime plastering',
        'Polished Venetian finishes',
        'Decorative surface treatments',
        'Restoration work',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Microcement Applications',
      description:
        'Ultra-thin decorative coating (2-4mm) creating seamless, waterproof surfaces. Cost-effective alternative to natural stone with exceptional durability and design versatility.',
      features: [
        'Joint-free seamless finish',
        'Applied over existing tiles/surfaces',
        'Waterproof when sealed',
        'Wide range of colors & textures',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-x-hidden">
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
              src="/images/services-hero-bg-mobile.jpg"
              alt="JDK Plastering services showcase mobile"
              fill
              className="object-cover object-right"
              priority
            />
          </div>

          {/* Desktop Background Image */}
          <div className="hidden md:block">
            <Image
              src="/images/services-hero-bg-desktop.jpg"
              alt="JDK Plastering services showcase desktop"
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
                Expert Services
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-4 leading-regular"
              variants={fadeInUp}
            >
              <strong className="text-white">Fix problems permanently.</strong>{' '}
              Over a decade of precision craftsmanship in damp proofing,
              plastering & rendering. <br className="hidden sm:block" />
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-regular"
              variants={fadeInUp}
            >
              <strong className="text-blue-400">
                Proven techniques & quality materials
              </strong>{' '}
              — we don&apos;t just cover problems, we fix the root cause with
              reliable service across the UK.
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

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Professional Damp & Plastering Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Fully qualified & insured</strong> specialists trusted by
              homeowners, landlords, and contractors. We provide free site
              surveys, transparent quotes, and proven methods backed by industry
              guidance. Clean, courteous service with long-lasting results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <StandardButton
                        variant="primary"
                        href="/contact"
                        icon="arrow"
                        fullWidth={true}
                        size="sm"
                      >
                        Get Quote
                      </StandardButton>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Specialist Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete property solutions from foundation to finish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: 'Air Brick Installation',
                description:
                  'Ventilation systems for under-floor airflow, preventing moisture buildup and timber rot.',
                features: [
                  'Sub-floor ventilation',
                  'Cavity wall airflow',
                  'Moisture prevention',
                ],
              },
              {
                title: 'Repointing Services',
                description:
                  'Renewing eroded mortar joints with breathable materials, restoring water resistance.',
                features: [
                  'Lime mortar pointing',
                  'Victorian/Edwardian restoration',
                  'Weatherproofing',
                ],
              },
              {
                title: 'Basement Conversions',
                description:
                  'Complete waterproofing for basement and cellar conversions with BS 8102 compliance.',
                features: [
                  'Type C waterproofing',
                  'Membrane systems',
                  'Pump installations',
                ],
              },
              {
                title: 'EWI Systems',
                description:
                  'External Wall Insulation with integrated render systems for energy efficiency.',
                features: [
                  'Thermal performance',
                  'Weatherproof finish',
                  'Energy savings',
                ],
              },
              {
                title: 'Microcement Specialist Applications',
                description:
                  'Ultra-modern decorative coating for seamless, waterproof surfaces. Perfect for floors, walls, bathrooms, and kitchens.',
                features: [
                  '2-4mm thickness application',
                  'Over 40 color options',
                  'Cost-effective stone alternative',
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose JDK Plastering & Damp Specialist?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Over a decade of hands-on experience across UK properties—from
                London terraces to country cottages. We understand UK property
                types and tailor solutions accordingly, using only proven
                methods and quality materials.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Fully Qualified & Insured
                    </h3>
                    <p className="text-slate-600 text-sm">
                      PCA-compliant systems with comprehensive warranties
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Trusted Professionals
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Homeowners, landlords & contractors rely on us
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Proven Methods
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Industry-backed techniques with quality materials
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Free Site Surveys
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Transparent quotes with clear communication
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/logo/jdk-media-wall.png"
                  alt="JDK Plastering professional service showcase"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
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
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Get expert advice and a free, no-obligation site survey. Our
              friendly team provides reliable solutions to keep UK homes and
              buildings dry and healthy—from diagnosis to completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StandardButton
                variant="secondary"
                onClick={() => (window.location.href = 'tel:07943519301')}
                icon="phone"
              >
                Call 07943 51930
              </StandardButton>
              <StandardButton
                variant="outline-white"
                href="/contact"
                icon="arrow"
              >
                Get Free Quote
              </StandardButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
