'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  Award,
  Users,
  Shield,
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
import { useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrustIndicators from '@/components/TrustIndicators'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [state, handleSubmit] = useForm('mvgrloed')
  const [formData, setFormData] = useState({
    service: '',
  })

  // Reset form data when submission is successful
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        service: '',
      })
    }
  }, [state.succeeded])

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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '07943 51930',
      description: 'Call us for immediate assistance',
      action: 'tel:07943519301',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@jdkplastering.co.uk',
      description: 'Send us your enquiry anytime',
      action: 'mailto:info@jdkplastering.co.uk',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'London, England',
      description: 'We serve all areas across London',
      action: null,
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Sat: 9am - 6pm',
      description: 'Sunday: Emergency calls only',
      action: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center px-3 md:pt-0 bg-[#090909] text-white relative overflow-hidden touch-manipulation"
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
              src="/images/contact-hero-bg-mobile.jpg"
              alt="JDK Plastering contact showcase mobile"
              fill
              className="object-cover object-right"
              priority
            />
          </div>

          {/* Desktop Background Image */}
          <div className="hidden md:block">
            <Image
              src="/images/contact-hero-bg-desktop.jpg"
              alt="JDK Plastering contact showcase desktop"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/80 to-[#090909]/40"></div>
        </div>

        <div className="container h-full flex items-center mx-auto relative px-4 py-4 md:py-10">
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
              <span className="text-white">Get In </span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-4 leading-regular"
              variants={fadeInUp}
            >
              <strong className="text-white">
                Ready to transform your property?
              </strong>{' '}
              Get your free, no-obligation quote today from London&apos;s
              trusted specialists. <br className="hidden sm:block" />
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-regular"
              variants={fadeInUp}
            >
              <strong className="text-blue-400">
                Expert team ready to help
              </strong>{' '}
              — all your plastering, damp-proofing & rendering needs across
              London.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={fadeInUp}
            >
              <StandardButton
                variant="primary"
                href="/contact#contact-form"
                icon="arrow"
              >
                Get Free Quote
              </StandardButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TrustIndicators />

      {/* Contact Information */}
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
              Contact Information
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us. Choose what works best for you and
              we&apos;ll respond promptly to discuss your project requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg text-center">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-slate-900 mb-2">
                      {info.details}
                    </p>
                    <p className="text-slate-600 text-sm mb-4">
                      {info.description}
                    </p>
                    {info.action && (
                      <StandardButton
                        variant="outline-white"
                        size="sm"
                        onClick={() => (window.location.href = info.action)}
                        icon="arrow"
                      >
                        Contact
                      </StandardButton>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Send Us A Message
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours with a detailed quote for your project. The more
                information you provide, the more accurate our quote will be.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Free Consultation
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Every enquiry includes a free consultation and quote
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Quick Response
                    </h3>
                    <p className="text-slate-600 text-sm">
                      We respond to all enquiries within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Expert Advice
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Professional guidance tailored to your specific needs
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
              <Card className="shadow-2xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    Request Your Free Quote
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Tell us about your project and we&apos;ll provide a detailed
                    estimate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {state.succeeded ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-slate-600">
                        Thank you for your enquiry. We&apos;ll be in touch
                        within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="John"
                          />
                          <ValidationError
                            prefix="First Name"
                            field="firstName"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Smith"
                          />
                          <ValidationError
                            prefix="Last Name"
                            field="lastName"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="john.smith@example.com"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="07xxx xxxxxx"
                        />
                        <ValidationError
                          prefix="Phone"
                          field="phone"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Property Location *
                        </label>
                        <Input
                          id="location"
                          name="location"
                          type="text"
                          required
                          className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g. Camden, North London"
                        />
                        <ValidationError
                          prefix="Location"
                          field="location"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Service Required *
                        </label>
                        <input
                          type="hidden"
                          name="service"
                          value={formData.service}
                        />
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plastering">
                              Plastering Services
                            </SelectItem>
                            <SelectItem value="damp-proofing">
                              Damp Proofing
                            </SelectItem>
                            <SelectItem value="rendering">
                              Rendering (Internal & External)
                            </SelectItem>
                            <SelectItem value="insulation">
                              Wall Insulation & Repairs
                            </SelectItem>
                            <SelectItem value="mould-removal">
                              Mould Removal & Prevention
                            </SelectItem>
                            <SelectItem value="multiple">
                              Multiple Services Required
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <ValidationError
                          prefix="Service"
                          field="service"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Please describe your project, including the size of the area, timeline, and any specific requirements..."
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
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

                      <p className="text-xs text-slate-500 text-center">
                        By submitting this form, you agree to be contacted about
                        our services. We respect your privacy and never share
                        your information.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
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
              Need Emergency Assistance?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              For urgent damp issues or emergency plastering repairs, call us
              directly. We provide emergency callouts across London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StandardButton
                variant="secondary"
                onClick={() => (window.location.href = 'tel:07943519301')}
                icon="phone"
              >
                Emergency: 07943 51930
              </StandardButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
