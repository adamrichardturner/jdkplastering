'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  CheckCircle,
  Star,
  Hammer,
  Home,
  Droplets,
  ThermometerSun,
} from 'lucide-react'
import { StandardButton } from '@/components/ui/standard-button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
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

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentBgImage, setCurrentBgImage] = useState(0)
  const [state, handleSubmit] = useForm('mvgrloed')
  const [formData, setFormData] = useState({
    service: '',
    propertyType: '',
    timeline: '',
  })

  // Reset form data when submission is successful
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        service: '',
        propertyType: '',
        timeline: '',
      })
    }
  }, [state.succeeded])

  // Auto-advance background slider (2 images total)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % 2)
    }, 5000) // 5 seconds between transitions
    return () => clearInterval(timer)
  }, [])

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
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-3 md:pt-0 bg-[#090909] text-white relative overflow-hidden touch-manipulation"
        style={{ touchAction: 'manipulation' }}
      >
        {/* Background Image Slider */}
        <div
          className="absolute inset-0 touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          {/* Mobile Background Images */}
          <div className="md:hidden">
            <div
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                currentBgImage === 0 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src="/images/hero-bg-mobile-1.jpg"
                alt="JDK Plastering mobile showcase 1"
                fill
                className="object-cover object-right"
                priority
              />
            </div>
            <div
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                currentBgImage === 1 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src="/images/hero-bg-mobile-2.jpg"
                alt="JDK Plastering mobile showcase 2"
                fill
                className="object-cover object-right"
              />
            </div>
          </div>

          {/* Desktop Background Images */}
          <div className="hidden md:block">
            <div
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                currentBgImage === 0 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src="/images/hero-bg-1.jpg"
                alt="JDK Plastering desktop showcase 1"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                currentBgImage === 1 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src="/images/hero-bg-2.jpg"
                alt="JDK Plastering desktop showcase 2"
                fill
                className="object-cover object-center"
              />
            </div>
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
            <motion.div
              className="relative inline-flex items-center space-x-2 bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-4 rounded-3xl text-md md:text-2xl font-bold shadow-2xl mb-6 overflow-hidden before:content-[''] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-b-[10px] before:border-r-[10px] before:border-t-transparent before:border-b-transparent before:border-r-white/10 after:content-[''] after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:animate-[shine_2s_ease-in-out_0.5s_2]"
              variants={fadeInUp}
            >
              <span className="text-yellow-300">£</span>
              <span>Lowest Price Guaranteed</span>
            </motion.div>

            <motion.h1
              className="text-3xl leading-tight md:text-5xl lg:text-6xl font-bold mb-8 md:leading-[62px] leading-[42px]"
              variants={fadeInUp}
            >
              <span className="text-white">Experienced</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Damp Proofing
              </span>
              <span className="text-white"> & </span>
              <span className="bg-gradient-to-r from-slate-300 to-blue-400 bg-clip-text text-transparent">
                Plastering Experts
              </span>
              <span className="text-white"> in London</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-4 leading-regular"
              variants={fadeInUp}
            >
              <strong className="text-white">Fix damp permanently.</strong>{' '}
              Expert solutions for rising damp, penetrating damp & condensation.{' '}
              <br className="hidden sm:block" />
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-regular"
              variants={fadeInUp}
            >
              <strong className="text-blue-400">
                Premium plastering & rendering services
              </strong>{' '}
              — from decorative finishes to external wall insulation across the
              UK.
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

      {/* Featured Work Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Work Speaks for Itself
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional plastering and external wall insulation projects
              completed across London
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/logo/jdk-media-wall.png"
                  alt="JDK Plastering - Professional work showcase featuring external wall insulation and rendering projects"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Premium External Wall Insulation & Rendering
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  High-performance EWI systems and decorative renders that
                  enhance both thermal efficiency and kerb appeal. Our expert
                  team delivers exceptional results using premium materials.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">
                      Quality Materials
                    </h4>
                    <p className="text-slate-600">
                      Premium K Rend, Wetherby, and breathable render systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">
                      Expert Craftsmanship
                    </h4>
                    <p className="text-slate-600">
                      10+ years of experience in specialist rendering techniques
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">
                      Guaranteed Results
                    </h4>
                    <p className="text-slate-600">
                      25-year workmanship guarantee on all completed projects
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <StandardButton variant="primary" href="/projects" icon="arrow">
                  View More Projects
                </StandardButton>
              </div>
            </motion.div>
          </div>
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
              <div className="text-4xl md:text-6xl font-bold mb-2">325+</div>
              <div className="text-blue-100 font-medium">
                Homes Damp-Proofed
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold mb-2">180+</div>
              <div className="text-blue-100 font-medium">EWI Completed</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold mb-2">95%</div>
              <div className="text-blue-100 font-medium">
                Client Satisfaction
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold mb-2">10+</div>
              <div className="text-blue-100 font-medium">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What We Can Help You With
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We use only proven methods — backed by industry guidance and
              quality materials — to treat damp and prevent it from returning.
              Each of our core services is outlined below.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 ease-out group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                    <Hammer className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Plastering & Finishing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    From standard skim coats to decorative Venetian plaster,
                    including lime and breathable systems for heritage
                    properties.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 ease-out group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                    <ThermometerSun className="w-10 h-10 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    External Wall Insulation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    Reduce heat loss and save up to 40% on energy bills with
                    high-performance EWI systems like K Rend and Wetherby.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 ease-out group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                    <Home className="w-10 h-10 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Rendering Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    Modern silicone, monocouche, and acrylic renders perfect for
                    weatherproofing and improving kerb appeal.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 ease-out group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                    <Droplets className="w-10 h-10 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Damp Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    Rising damp treatment, DPC injection, tanking systems, and
                    breathable wall coatings for complete moisture control.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 md:py-24 bg-[#090909] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to JDK Plastering Services
              </h2>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Trusted Experts in Plastering, Damp Proofing & External Wall
                Systems
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether it&apos;s rising damp, penetrating damp, or condensation
                issues—we don&apos;t just cover it up, we fix the root cause.
                Our expert team uses proven techniques and the latest materials
                to ensure long-lasting results and clean, professional finishes
                on every project.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We provide professional, reliable solutions to keep UK homes and
                buildings dry and healthy. Whether you&apos;re a homeowner,
                landlord, or property manager, our friendly, expert team will
                assess the issue and recommend the best long-term fix.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Clean, Courteous & Committed to Quality
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Energy-Saving Wall Systems
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Specialist Damp Solutions
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    10+
                  </div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    100%
                  </div>
                  <div className="text-gray-300">Fully Insured</div>
                </div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-xl border border-purple-500/30">
                <h4 className="text-xl font-semibold text-purple-400 mb-4">
                  Not sure what you need?
                </h4>
                <p className="text-gray-300 mb-4">
                  Let us inspect the problem.
                </p>
                <StandardButton variant="purple" href="/contact" icon="arrow">
                  Book Free Site Visit
                </StandardButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied
              customers
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                    &quot;JDK sorted our rising damp quickly. Clean,
                    professional, and no mess left behind — highly
                    recommended.&quot;
                  </p>
                  <p className="font-semibold text-slate-900 text-lg">
                    Sarah T.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                    &quot;From the initial survey to final render, their team
                    were prompt and reliable throughout.&quot;
                  </p>
                  <p className="font-semibold text-slate-900 text-lg">
                    Mark T.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                    &quot;Excellent service, competitive pricing and customer
                    support. Thoroughly refreshing to get such personal
                    service.&quot;
                  </p>
                  <p className="font-semibold text-slate-900 text-lg">
                    Shirley Smith
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-10 md:py-24 px-4 bg-[#090909] text-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your property? Contact us for a free,
              no-obligation quote and expert advice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Send us a message
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    We&apos;ll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {state.succeeded ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Thank you for your message!
                      </h3>
                      <p className="text-gray-300">
                        We&apos;ll get back to you within 24 hours with your
                        free quote.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="firstName"
                            placeholder="First Name"
                            className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                            required
                          />
                          <ValidationError
                            prefix="First Name"
                            field="firstName"
                            errors={state.errors}
                            className="text-red-400 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <Input
                            name="lastName"
                            placeholder="Last Name"
                            className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                            required
                          />
                          <ValidationError
                            prefix="Last Name"
                            field="lastName"
                            errors={state.errors}
                            className="text-red-400 text-sm mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Input
                          name="email"
                          placeholder="Email Address"
                          type="email"
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          required
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <Input
                          name="phone"
                          placeholder="Phone Number"
                          type="tel"
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                        <ValidationError
                          prefix="Phone"
                          field="phone"
                          errors={state.errors}
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      {/* Hidden inputs for Formspree */}
                      <input
                        type="hidden"
                        name="service"
                        value={formData.service}
                      />
                      <input
                        type="hidden"
                        name="propertyType"
                        value={formData.propertyType}
                      />
                      <input
                        type="hidden"
                        name="timeline"
                        value={formData.timeline}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Select
                            value={formData.service}
                            onValueChange={(value) =>
                              setFormData({ ...formData, service: value })
                            }
                          >
                            <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                              <SelectValue placeholder="Service Required" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              <SelectItem
                                value="damp-proofing"
                                className="text-white hover:bg-gray-700"
                              >
                                Damp Proofing
                              </SelectItem>
                              <SelectItem
                                value="plastering"
                                className="text-white hover:bg-gray-700"
                              >
                                Plastering
                              </SelectItem>
                              <SelectItem
                                value="rendering"
                                className="text-white hover:bg-gray-700"
                              >
                                Rendering
                              </SelectItem>
                              <SelectItem
                                value="external-wall-insulation"
                                className="text-white hover:bg-gray-700"
                              >
                                External Wall Insulation
                              </SelectItem>
                              <SelectItem
                                value="venetian-plastering"
                                className="text-white hover:bg-gray-700"
                              >
                                Venetian Plastering
                              </SelectItem>
                              <SelectItem
                                value="waterproofing"
                                className="text-white hover:bg-gray-700"
                              >
                                Waterproofing
                              </SelectItem>
                              <SelectItem
                                value="multiple-services"
                                className="text-white hover:bg-gray-700"
                              >
                                Multiple Services
                              </SelectItem>
                              <SelectItem
                                value="not-sure"
                                className="text-white hover:bg-gray-700"
                              >
                                Not Sure - Need Advice
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <ValidationError
                            prefix="Service"
                            field="service"
                            errors={state.errors}
                            className="text-red-400 text-sm mt-1"
                          />
                        </div>

                        <div>
                          <Select
                            value={formData.propertyType}
                            onValueChange={(value) =>
                              setFormData({ ...formData, propertyType: value })
                            }
                          >
                            <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                              <SelectValue placeholder="Property Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              <SelectItem
                                value="house"
                                className="text-white hover:bg-gray-700"
                              >
                                House
                              </SelectItem>
                              <SelectItem
                                value="flat-apartment"
                                className="text-white hover:bg-gray-700"
                              >
                                Flat/Apartment
                              </SelectItem>
                              <SelectItem
                                value="commercial"
                                className="text-white hover:bg-gray-700"
                              >
                                Commercial Property
                              </SelectItem>
                              <SelectItem
                                value="heritage-listed"
                                className="text-white hover:bg-gray-700"
                              >
                                Heritage/Listed Building
                              </SelectItem>
                              <SelectItem
                                value="new-build"
                                className="text-white hover:bg-gray-700"
                              >
                                New Build
                              </SelectItem>
                              <SelectItem
                                value="other"
                                className="text-white hover:bg-gray-700"
                              >
                                Other
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <ValidationError
                            prefix="Property Type"
                            field="propertyType"
                            errors={state.errors}
                            className="text-red-400 text-sm mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) =>
                            setFormData({ ...formData, timeline: value })
                          }
                        >
                          <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                            <SelectValue placeholder="Project Timeline" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-600">
                            <SelectItem
                              value="urgent"
                              className="text-white hover:bg-gray-700"
                            >
                              Urgent - Within 1 week
                            </SelectItem>
                            <SelectItem
                              value="asap"
                              className="text-white hover:bg-gray-700"
                            >
                              ASAP - Within 2-4 weeks
                            </SelectItem>
                            <SelectItem
                              value="flexible"
                              className="text-white hover:bg-gray-700"
                            >
                              Flexible - Within 1-3 months
                            </SelectItem>
                            <SelectItem
                              value="planning"
                              className="text-white hover:bg-gray-700"
                            >
                              Planning - 3+ months
                            </SelectItem>
                            <SelectItem
                              value="quote-only"
                              className="text-white hover:bg-gray-700"
                            >
                              Quote Only - No Timeline Yet
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <ValidationError
                          prefix="Timeline"
                          field="timeline"
                          errors={state.errors}
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <Textarea
                          name="message"
                          placeholder="Tell us about your project..."
                          className="min-h-32 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          required
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        {state.submitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-gray-300">07943 51930</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-300">info@jdkplastering.co.uk</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-gray-300">London, England</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Hours</p>
                      <p className="text-gray-300">Mon-Sat: 9am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="bg-gray-700" />

              <div>
                <h4 className="text-lg font-semibold mb-6">
                  Why Choose JDK Plastering?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      25-Year Workmanship Guarantee
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      Fully Insured & Certified
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      Price Match Guaranteed
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      No Overtime Charges, 7 Days a Week
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
