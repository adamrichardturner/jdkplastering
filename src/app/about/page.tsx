'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Shield,
  Award,
  Users,
  Hammer,
  ThermometerSun,
  Target,
  HeartHandshake,
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
              src="/images/about-hero-bg-mobile.jpg"
              alt="JDK Plastering about showcase mobile"
              fill
              className="object-cover object-right"
              priority
            />
          </div>

          {/* Desktop Background Image */}
          <div className="hidden md:block">
            <Image
              src="/images/about-hero-bg-desktop.jpg"
              alt="JDK Plastering about showcase desktop"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/60 to-[#090909]/20"></div>
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
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                JDK Plastering
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-4 leading-regular"
              variants={fadeInUp}
            >
              <strong className="text-white">
                London&apos;s trusted specialists.
              </strong>{' '}
              Over 10 years of proven expertise in damp-proofing, plastering &
              external wall insulation. <br className="hidden sm:block" />
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-regular"
              variants={fadeInUp}
            >
              <strong className="text-blue-400">
                Professional craftsmanship, exceptional service
              </strong>{' '}
              — trusted by homeowners, contractors & property developers across
              London.
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
                  src="/images/about-bathroom.jpg"
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

      {/* Director's Journey */}
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
              Built on Experience & Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From construction labourer to London&apos;s trusted plastering
              specialist
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                A Foundation Built on Hard Work
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our Director began as a construction labourer on London building
                sites, where he developed a deep appreciation for skilled
                plastering work. Recognizing the craft&apos;s potential, he
                dedicated years to mastering both traditional lime rendering
                techniques and modern insulation systems.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, JDK operates as a family business serving residential and
                commercial clients across London. Our approach combines
                technical expertise with the personal service that only comes
                from treating every project as if it were our own property.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Hammer className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    Traditional Skills
                  </h4>
                  <p className="text-sm text-slate-600">
                    Heritage lime rendering and restoration techniques
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ThermometerSun className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    Modern Systems
                  </h4>
                  <p className="text-sm text-slate-600">
                    EWI and insulated rendering solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg col-span-2">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">
                      Proven Track Record
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        500+
                      </div>
                      <div className="text-sm text-slate-600">
                        Projects Completed
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        95%
                      </div>
                      <div className="text-sm text-slate-600">
                        Client Retention
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
