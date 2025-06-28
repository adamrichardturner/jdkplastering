'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Palette,
  ShieldCheck,
  Building,
  Zap,
  Wind,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
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
      icon: Palette,
      title: 'Plastering Services',
      description:
        'Smooth and durable finishes for walls and ceilings. From traditional plastering to decorative Venetian styles, we ensure your surfaces are perfectly prepared and beautifully finished.',
      features: [
        'Traditional lime and gypsum plastering',
        'Decorative Venetian finishes',
        'Wall and ceiling preparation',
        'Repair and restoration work',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Damp Proofing',
      description:
        'We identify and treat rising damp, penetrating damp, and condensation. Our tailored solutions help safeguard your property from long-term structural and health issues.',
      features: [
        'Rising damp treatment',
        'Penetrating damp solutions',
        'Condensation control',
        'Structural protection',
      ],
    },
    {
      icon: Building,
      title: 'Rendering (Internal & External)',
      description:
        'Enhance the appearance and weatherproofing of your building. We apply professional renders to both interior and exterior surfaces, including coloured and insulated systems.',
      features: [
        'External weatherproofing renders',
        'Internal decorative rendering',
        'Coloured render systems',
        'Insulated rendering solutions',
      ],
    },
    {
      icon: Zap,
      title: 'Wall Insulation & Repairs',
      description:
        'Improve your energy efficiency and comfort with our internal wall insulation and repair services. Ideal for older properties or refurbishments.',
      features: [
        'Internal wall insulation',
        'Energy efficiency improvements',
        'Wall repair and restoration',
        'Property refurbishment support',
      ],
    },
    {
      icon: Wind,
      title: 'Mould Removal & Prevention',
      description:
        'Targeted treatments to eliminate mould and prevent recurrence—creating healthier living environments, especially in damp-prone areas.',
      features: [
        'Professional mould removal',
        'Prevention strategies',
        'Healthy living environments',
        'Long-term protection',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#090909] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/logo/jdk-plastering-wall.png"
            alt="JDK Plastering professional services showcase"
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
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Expert Services
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              At JDK Plastering & Damp, we offer a wide range of expert services
              tailored to protect and perfect your property. Whether you&apos;re
              dealing with damp issues or looking for a flawless plaster finish,
              our experienced team is here to help—across all areas of London.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-10 py-6 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-white hover:bg-gray-100 px-10 py-6 text-lg font-semibold"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
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
              Comprehensive Plastering & Damp Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From traditional plastering to advanced damp-proofing solutions,
              we deliver exceptional workmanship across all areas of London.
              Each service is tailored to meet your specific needs with
              guaranteed results.
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
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-semibold"
                        size="sm"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
                Why Choose JDK for Your Property Needs?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                With over 10 years of experience serving London properties, we
                combine traditional craftsmanship with modern techniques to
                deliver lasting solutions that protect and enhance your home or
                business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Guaranteed Work
                    </h3>
                    <p className="text-slate-600 text-sm">
                      All services backed by comprehensive warranties
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Expert Team
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Skilled professionals with decade of experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Quality Materials
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Premium products for long-lasting results
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      5-Star Service
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Exceptional customer satisfaction ratings
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
              Get expert advice and a free, no-obligation quote for any of our
              services. Our team is ready to help protect and perfect your
              London property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 07943 51930
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 text-lg font-semibold"
              >
                Get Free Quote
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
