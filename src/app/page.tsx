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
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Hammer,
  Home,
  Droplets,
  ThermometerSun,
  Menu,
  X
} from 'lucide-react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useState, useEffect } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>London, England</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 9am - 6pm</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600 font-medium">
                <Phone className="w-4 h-4" />
                <span>07943 51930</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <motion.nav 
        className="sticky top-0 w-full bg-[#090909]/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src="/logo/jdk-logo.png" 
                alt="JDK Plastering & Damp Specialist Logo" 
                width={50} 
                height={50}
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-xl font-bold text-white">JDK PLASTERING</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">& DAMP SPECIALIST</div>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors font-medium">Services</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                07943 51930
              </Button>
            </div>

            <Button 
              size="sm" 
              variant="ghost"
              className="md:hidden text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-black z-[60] md:hidden h-screen w-screen flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Top Section - Logo with Close Button */}
              <motion.div 
                className="flex justify-between items-center px-6 pt-12 pb-8"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <Image 
                    src="/logo/jdk-logo.png" 
                    alt="JDK Plastering & Damp Specialist Logo" 
                    width={50} 
                    height={50}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <div className="text-xl font-bold text-white">JDK PLASTERING</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wider">& DAMP SPECIALIST</div>
                  </div>
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-white hover:bg-gray-700/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </motion.div>

              {/* Center Section - Navigation Menu */}
              <div className="flex-1 flex flex-col justify-center items-center px-8">
                <motion.div 
                  className="flex flex-col space-y-12 text-center"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                >
                  <motion.a 
                    href="#home" 
                    className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Home
                  </motion.a>
                  <motion.a 
                    href="#about" 
                    className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    About
                  </motion.a>
                  <motion.a 
                    href="#services" 
                    className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Services
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                  </motion.a>
                  
                  <motion.div
                    className="mt-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-semibold px-8 py-6 text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      07943 51930
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-4 bg-[#090909] text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/logo/jdk-plastering-wall.png" 
            alt="JDK Plastering work showcase" 
            fill
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/40 to-[#090909]/30"></div>
        </div>
        
        <div className="container mx-auto relative">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 px-4 py-2 text-sm font-semibold">
                <Shield className="w-4 h-4 mr-2" />
                25-Year Workmanship Guarantee
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none"
              variants={fadeInUp}
            >
              <span className="text-white leading-tight">JDK Plastering &{' '}</span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                Damp Specialist
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              We bring over a decade of hands-on experience, precision craftsmanship, and reliable service to homes and businesses across the UK. We specialize in damp proofing, plastering, rendering, EWI insulation, Venetian plastering and more.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold border-2 border-white text-[#090909] hover:bg-[#090909] hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              <motion.div className="text-center" variants={fadeInUp}>
                <Award className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-gray-300 font-medium">Fully Qualified & Insured</p>
              </motion.div>
              <motion.div className="text-center" variants={fadeInUp}>
                <Users className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <p className="text-gray-300 font-medium">Trusted by Homeowners & Contractors</p>
              </motion.div>
              <motion.div className="text-center" variants={fadeInUp}>
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-gray-300 font-medium">Free Site Surveys & Transparent Quotes</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Work Speaks for Itself
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional plastering and external wall insulation projects completed across London
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Premium External Wall Insulation & Rendering
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  High-performance EWI systems and decorative renders that enhance both thermal efficiency and kerb appeal. Our expert team delivers exceptional results using premium materials.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Quality Materials</h4>
                    <p className="text-slate-600">Premium K Rend, Wetherby, and breathable render systems</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Expert Craftsmanship</h4>
                    <p className="text-slate-600">10+ years of experience in specialist rendering techniques</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Guaranteed Results</h4>
                    <p className="text-slate-600">25-year workmanship guarantee on all completed projects</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-6 text-lg font-semibold"
                >
                  View More Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
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
              <div className="text-blue-100 font-medium">Homes Damp-Proofed</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold mb-2">180+</div>
              <div className="text-blue-100 font-medium">EWI Completed</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold mb-2">95%</div>
              <div className="text-blue-100 font-medium">Client Satisfaction</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold mb-2">10+</div>
              <div className="text-blue-100 font-medium">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What We Can Help You With
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We use only proven methods — backed by industry guidance and quality materials — to treat damp and prevent it from returning. Each of our core services is outlined below.
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
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Hammer className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Plastering & Finishing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    From standard skim coats to decorative Venetian plaster, including lime and breathable systems for heritage properties.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ThermometerSun className="w-10 h-10 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">External Wall Insulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    Reduce heat loss and save up to 40% on energy bills with high-performance EWI systems like K Rend and Wetherby.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-10 h-10 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Rendering Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    Modern silicone, monocouche, and acrylic renders perfect for weatherproofing and improving kerb appeal.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Droplets className="w-10 h-10 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Damp Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    Rising damp treatment, DPC injection, tanking systems, and breathable wall coatings for complete moisture control.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#090909] text-white">
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
                Trusted Experts in Plastering, Damp Proofing & External Wall Systems
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether it&apos;s rising damp, penetrating damp, or condensation issues—we don&apos;t just cover it up, we fix the root cause. Our expert team uses proven techniques and the latest materials to ensure long-lasting results and clean, professional finishes on every project.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We provide professional, reliable solutions to keep UK homes and buildings dry and healthy. Whether you&apos;re a homeowner, landlord, or property manager, our friendly, expert team will assess the issue and recommend the best long-term fix.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Clean, Courteous & Committed to Quality</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Energy-Saving Wall Systems</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Specialist Damp Solutions</span>
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
                  <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300">Fully Insured</div>
                </div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-xl border border-purple-500/30">
                <h4 className="text-xl font-semibold text-purple-400 mb-4">Not sure what you need?</h4>
                <p className="text-gray-300 mb-4">Let us inspect the problem.</p>
                <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                  Book Free Site Visit
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
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
              Don&apos;t just take our word for it - hear from our satisfied customers
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
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                    &quot;JDK sorted our rising damp quickly. Clean, professional, and no mess left behind — highly recommended.&quot;
                  </p>
                  <p className="font-semibold text-slate-900 text-lg">Sarah T.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                    &quot;From the initial survey to final render, their team were prompt and reliable throughout.&quot;
                  </p>
                  <p className="font-semibold text-slate-900 text-lg">Mark T.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                    &quot;Excellent service, competitive pricing and customer support. Thoroughly refreshing to get such personal service.&quot;
                  </p>
                  <p className="font-semibold text-slate-900 text-lg">Shirley Smith</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-[#090909] text-white">
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
              Ready to transform your property? Contact us for a free, no-obligation quote and expert advice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                  <CardDescription className="text-gray-300">We&apos;ll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" />
                    <Input placeholder="Last Name" className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                  <Input placeholder="Email Address" type="email" className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" />
                  <Input placeholder="Phone Number" type="tel" className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" />
                  <Textarea placeholder="Tell us about your project..." className="min-h-32 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-6 text-lg font-semibold">
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
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
                <h4 className="text-lg font-semibold mb-6">Why Choose JDK Plastering?</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">25-Year Workmanship Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Fully Insured & Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Price Match Guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">No Overtime Charges, 7 Days a Week</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#090909] text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image 
                  src="/logo/jdk-logo.png" 
                  alt="JDK Plastering & Damp Specialist Logo" 
                  width={40} 
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="text-lg font-bold">JDK PLASTERING</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">& DAMP SPECIALIST</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Expert plastering, waterproofing, and energy-saving insulation systems with over a decade of experience across London.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 mb-4">
                <Phone className="w-4 h-4" />
                <span>07943 51930</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3 text-gray-400">
                <div><a href="#home" className="hover:text-white transition-colors">Home</a></div>
                <div><a href="#about" className="hover:text-white transition-colors">About</a></div>
                <div><a href="#services" className="hover:text-white transition-colors">Services</a></div>
                <div><a href="#contact" className="hover:text-white transition-colors">Contact</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <div className="space-y-3 text-gray-400">
                <div>Plastering & Finishing</div>
                <div>External Wall Insulation</div>
                <div>Damp Proofing</div>
                <div>Rendering Systems</div>
                <div>Venetian Plastering</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div>London, England</div>
                <div>Mon-Sat: 9am - 6pm</div>
                <div>info@jdkplastering.co.uk</div>
                <div>07943 51930</div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 JDK Plastering & Damp Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
