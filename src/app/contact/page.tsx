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

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
      <section className="pt-20 pb-20 bg-[#090909] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/logo/jdk-plastering-wall.png"
            alt="JDK Plastering contact us"
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
              <span className="text-white">Get In </span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Ready to transform your property? Get your free, no-obligation
              quote today. Our expert team is here to help with all your
              plastering and damp-proofing needs across London.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <StandardButton
                variant="primary"
                onClick={() =>
                  document
                    .getElementById('contact-form')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                icon="message"
              >
                Get Free Quote
              </StandardButton>
              <StandardButton
                variant="white"
                onClick={() => (window.location.href = 'tel:07943519301')}
                icon="phone"
              >
                Call Now
              </StandardButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
                  {isSubmitted ? (
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
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Service Required *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select a service</option>
                          <option value="plastering">
                            Plastering Services
                          </option>
                          <option value="damp-proofing">Damp Proofing</option>
                          <option value="rendering">
                            Rendering (Internal & External)
                          </option>
                          <option value="insulation">
                            Wall Insulation & Repairs
                          </option>
                          <option value="mould-removal">
                            Mould Removal & Prevention
                          </option>
                          <option value="multiple">
                            Multiple Services Required
                          </option>
                        </select>
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
                      </div>

                      <StandardButton
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting}
                        icon={isSubmitting ? 'none' : 'send'}
                        fullWidth={true}
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </StandardButton>

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
