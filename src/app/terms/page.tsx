'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  FileText,
  Lock,
  Eye,
  Users,
  Calendar,
  Phone,
  Mail,
} from 'lucide-react'
import { StandardButton } from '@/components/ui/standard-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <Header isMenuOpen={false} setIsMenuOpen={() => {}} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-3xl text-sm font-semibold mb-6"
              variants={fadeInUp}
            >
              <Shield className="w-4 h-4" />
              <span>Legal & Privacy</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Terms & Conditions
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 leading-relaxed"
              variants={fadeInUp}
            >
              Our commitment to transparency, privacy, and legal compliance in
              all our services
            </motion.p>

            <motion.div
              className="flex items-center justify-center space-x-6 mt-8 text-sm text-blue-200"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>
                  Last updated: {new Date().toLocaleDateString('en-GB')}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>GDPR & DPA Compliant</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Introduction */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <span>Introduction</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    These Terms and Conditions (&quot;Terms&quot;) govern your
                    use of JDK Plastering Services&apos; website and services.
                    By accessing our website or using our services, you agree to
                    be bound by these Terms.
                  </p>
                  <p>
                    JDK Plastering Services (&quot;we&quot;, &quot;our&quot;,
                    &quot;us&quot;) is a UK-based plastering and damp proofing
                    company operating in London and surrounding areas. We are
                    committed to protecting your privacy and ensuring compliance
                    with UK data protection laws including the Data Protection
                    Act 2018 and GDPR.
                  </p>
                  <p>
                    <strong>Company Details:</strong>
                    <br />
                    JDK Plastering Services
                    <br />
                    London, England
                    <br />
                    Phone: 07946 817967
                    <br />
                    Email: info@jdkplastering.com
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <span>Our Services</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    We provide professional plastering, damp proofing,
                    rendering, and external wall insulation services to
                    residential and commercial properties across London and the
                    UK.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Core Services
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Damp proofing & treatment</li>
                        <li>• Plastering & finishing</li>
                        <li>• External wall insulation</li>
                        <li>• Rendering systems</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">
                        Guarantees
                      </h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• 25-year workmanship guarantee</li>
                        <li>• Fully insured & certified</li>
                        <li>• Price match guarantee</li>
                        <li>• Free site visits & quotes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Privacy Policy */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
                    <Lock className="w-6 h-6 text-purple-600" />
                    <span>Privacy Policy & Data Protection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-slate-700 leading-relaxed">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Data Controller
                    </h4>
                    <p>
                      JDK Plastering Services is the data controller for any
                      personal information we collect about you. We are
                      committed to protecting your privacy and ensuring
                      compliance with UK data protection laws.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Information We Collect
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-900 mb-2">
                          Contact Information
                        </h5>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• Name and contact details</li>
                          <li>• Phone number and email</li>
                          <li>• Property address</li>
                          <li>• Service requirements</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-indigo-900 mb-2">
                          Website Usage
                        </h5>
                        <ul className="text-sm text-indigo-800 space-y-1">
                          <li>• Google Analytics data</li>
                          <li>• Form submissions</li>
                          <li>• Website interactions</li>
                          <li>• Technical information</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      How We Use Your Information
                    </h4>
                    <p>We use your personal information to:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                      <li>Provide quotes and estimates for our services</li>
                      <li>Schedule site visits and appointments</li>
                      <li>
                        Carry out requested plastering and damp proofing work
                      </li>
                      <li>Communicate about project progress and completion</li>
                      <li>Send invoices and process payments</li>
                      <li>Provide customer support and aftercare</li>
                      <li>Comply with legal and regulatory obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Legal Basis for Processing
                    </h4>
                    <p>We process your personal data based on:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                      <li>
                        <strong>Contract:</strong> To fulfil our service
                        obligations
                      </li>
                      <li>
                        <strong>Legitimate Interest:</strong> To provide
                        customer service and improve our services
                      </li>
                      <li>
                        <strong>Consent:</strong> For marketing communications
                        (where applicable)
                      </li>
                      <li>
                        <strong>Legal Obligation:</strong> To comply with UK
                        laws and regulations
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Data Sharing
                    </h4>
                    <p>
                      We do not sell, trade, or rent your personal information
                      to third parties. We may share your information only with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                      <li>
                        Service providers who assist in our operations (e.g.,
                        payment processors)
                      </li>
                      <li>Regulatory authorities when required by law</li>
                      <li>Professional advisors and insurers</li>
                      <li>
                        Subcontractors directly involved in your project (with
                        your consent)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Data Retention
                    </h4>
                    <p>
                      We retain your personal information for as long as
                      necessary to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                      <li>
                        Provide our services and fulfil contractual obligations
                      </li>
                      <li>Comply with legal and regulatory requirements</li>
                      <li>Resolve disputes and enforce agreements</li>
                      <li>
                        Maintain business records for tax and insurance purposes
                      </li>
                    </ul>
                    <p className="mt-3">
                      Typically, we retain customer data for 7 years after
                      project completion, in line with UK business and tax
                      requirements.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Your Rights
                    </h4>
                    <p>
                      Under UK data protection law, you have the following
                      rights:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900 mb-2">
                          Access & Control
                        </h5>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Right to access your data</li>
                          <li>• Right to rectification</li>
                          <li>• Right to erasure</li>
                          <li>• Right to restrict processing</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-900 mb-2">
                          Portability & Objection
                        </h5>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Right to data portability</li>
                          <li>• Right to object</li>
                          <li>• Right to withdraw consent</li>
                          <li>• Right to lodge complaints</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Contact Us About Your Data
                    </h4>
                    <p>
                      To exercise your rights or make a data protection enquiry,
                      contact us:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mt-3">
                      <div className="flex items-center space-x-3 mb-2">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold">Email:</span>
                        <span>info@jdkplastering.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold">Phone:</span>
                        <span>07946 817967</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cookies & Analytics */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
                    <Eye className="w-6 h-6 text-orange-600" />
                    <span>Cookies & Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Our website uses cookies and Google Analytics to improve
                    user experience and understand how visitors interact with
                    our site.
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Google Analytics
                    </h4>
                    <p>
                      We use Google Analytics to collect anonymous information
                      about website usage, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                      <li>Pages visited and time spent on site</li>
                      <li>Traffic sources and user demographics</li>
                      <li>Device and browser information</li>
                      <li>User interactions and conversions</li>
                    </ul>
                    <p className="mt-3">
                      Google Analytics data is processed in accordance with
                      Google&apos;s privacy policy and our data processing
                      agreement. You can opt out of Google Analytics tracking
                      using browser extensions or settings.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Essential Cookies
                    </h4>
                    <p>We use essential cookies to:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                      <li>Maintain your session and preferences</li>
                      <li>Process form submissions securely</li>
                      <li>Ensure website functionality</li>
                      <li>Remember your cookie consent choices</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">
                      Cookie Consent
                    </h4>
                    <p className="text-orange-800 text-sm">
                      By using our website, you consent to our use of cookies in
                      accordance with this policy. You can manage cookie
                      preferences through your browser settings.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Terms */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
                    <Users className="w-6 h-6 text-red-600" />
                    <span>Service Terms & Conditions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-slate-700 leading-relaxed">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Quotes & Estimates
                    </h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        All quotes are valid for 30 days from the date of issue
                      </li>
                      <li>
                        Quotes are based on information provided at the time of
                        assessment
                      </li>
                      <li>
                        Additional work may incur extra charges if not included
                        in the original quote
                      </li>
                      <li>
                        We reserve the right to revise quotes if site conditions
                        differ from initial assessment
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Booking & Scheduling
                    </h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Work will be scheduled based on availability and project
                        requirements
                      </li>
                      <li>
                        We will provide reasonable notice of start dates and any
                        changes
                      </li>
                      <li>
                        Delays due to weather, materials, or unforeseen
                        circumstances may occur
                      </li>
                      <li>
                        Cancellation fees may apply for late cancellations (less
                        than 48 hours notice)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Payment Terms
                    </h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Payment is due upon completion of work unless otherwise
                        agreed
                      </li>
                      <li>We accept cash, bank transfer, and card payments</li>
                      <li>
                        Invoices will be provided with full breakdown of
                        services
                      </li>
                      <li>Late payment may result in additional charges</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Warranties & Guarantees
                    </h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        25-year workmanship guarantee on all completed work
                      </li>
                      <li>Manufacturer warranties apply to materials used</li>
                      <li>
                        Guarantees are subject to proper maintenance and care
                      </li>
                      <li>
                        We will rectify any defects covered by our guarantee at
                        no additional cost
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Health & Safety
                    </h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        We comply with all relevant health and safety
                        regulations
                      </li>
                      <li>Our team is fully trained and certified</li>
                      <li>
                        We carry appropriate insurance for all work undertaken
                      </li>
                      <li>
                        We will take reasonable steps to minimise disruption and
                        mess
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-gray-600" />
                    <span>Limitation of Liability</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Our liability is limited to the extent permitted by UK law:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      We are not liable for indirect or consequential losses
                    </li>
                    <li>
                      Our total liability is limited to the value of the work
                      undertaken
                    </li>
                    <li>
                      We are not responsible for damage caused by normal wear
                      and tear
                    </li>
                    <li>
                      Claims must be reported within 30 days of work completion
                    </li>
                  </ul>
                  <div className="bg-red-50 p-4 rounded-lg mt-4">
                    <p className="text-red-800 text-sm">
                      <strong>Important:</strong> These limitations do not
                      affect your statutory rights as a consumer under UK law,
                      including your rights under the Consumer Rights Act 2015.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact & Complaints */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <span>Contact & Complaints</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    We are committed to providing excellent service. If you have
                    any concerns or complaints:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Contact Information
                      </h4>
                      <div className="space-y-2 text-sm text-blue-800">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>07946 817967</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>info@jdkplastering.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">
                        Complaints Process
                      </h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Contact us directly first</li>
                        <li>• We aim to respond within 24 hours</li>
                        <li>• Formal complaints in writing</li>
                        <li>• Escalation to relevant authorities if needed</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Updates & Changes */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-indigo-600" />
                    <span>Updates to These Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    We may update these Terms and Conditions from time to time
                    to reflect changes in our services, legal requirements, or
                    business practices.
                  </p>
                  <p>
                    Significant changes will be communicated to existing
                    customers via email or through our website. Continued use of
                    our services after changes constitutes acceptance of the
                    updated terms.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-indigo-800 text-sm">
                      <strong>Last Updated:</strong>{' '}
                      {new Date().toLocaleDateString('en-GB')}
                      <br />
                      <strong>Version:</strong> 1.0
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={fadeInUp} className="text-center">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Questions About Our Terms?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    If you have any questions about these terms or our privacy
                    practices, please don&apos;t hesitate to contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <StandardButton
                      variant="white"
                      href="/contact"
                      icon="arrow"
                    >
                      Contact Us
                    </StandardButton>
                    <StandardButton
                      variant="outline-white"
                      href="/"
                      icon="none"
                    >
                      Back to Home
                    </StandardButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
