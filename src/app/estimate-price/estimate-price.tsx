'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Mail } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuoteCalculator from '@/components/QuoteCalculator'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  DEFAULT_SERVICE_ID,
  ESTIMATE_ENQUIRY_ID,
  ESTIMATE_GUIDE_INTRO,
  buildPriceEstimatePayload,
  buildSelectedLines,
  createDefaultQuantities,
  isContactService,
} from '@/lib/quote-rates'
import type { ContactService, PriceEstimatePayload } from '@/lib/quote-rates'

const ESTIMATE_FORMSPREE_ID = 'mvgrloed'

const PROPERTY_TYPE_OPTIONS = [
  { value: 'house', label: 'House' },
  { value: 'flat-apartment', label: 'Flat/Apartment' },
  { value: 'commercial', label: 'Commercial Property' },
  { value: 'heritage-listed', label: 'Heritage/Listed Building' },
  { value: 'new-build', label: 'New Build' },
  { value: 'other', label: 'Other' },
] as const

const TIMELINE_OPTIONS = [
  { value: 'urgent', label: 'Urgent - Within 1 week' },
  { value: 'asap', label: 'ASAP - Within 2-4 weeks' },
  { value: 'flexible', label: 'Flexible - Within 1-3 months' },
  { value: 'planning', label: 'Planning - 3+ months' },
  { value: 'quote-only', label: 'Quote Only - No Timeline Yet' },
] as const

const SERVICE_OPTIONS: readonly { value: ContactService; label: string }[] = [
  { value: 'plastering', label: 'Plastering Services' },
  { value: 'damp-proofing', label: 'Damp Proofing' },
  { value: 'rendering', label: 'Rendering (Internal & External)' },
  { value: 'insulation', label: 'Wall Insulation & Repairs' },
  { value: 'mould-removal', label: 'Mould Removal & Prevention' },
  { value: 'multiple', label: 'Multiple Services Required' },
]

type PropertyType = (typeof PROPERTY_TYPE_OPTIONS)[number]['value']
type ProjectTimeline = (typeof TIMELINE_OPTIONS)[number]['value']

type EstimateFormData = {
  service: ContactService | ''
  propertyType: PropertyType | ''
  timeline: ProjectTimeline | ''
  priceEstimate: string
}

function isOptionValue<TValue extends string>(
  options: readonly { readonly value: TValue; readonly label: string }[],
  value: string
): value is TValue {
  for (const option of options) {
    if (option.value === value) {
      return true
    }
  }

  return false
}

function createInitialFormData(): EstimateFormData {
  const estimate = buildPriceEstimatePayload(
    buildSelectedLines([DEFAULT_SERVICE_ID], createDefaultQuantities())
  )

  return {
    service: estimate?.service ?? '',
    propertyType: '',
    timeline: '',
    priceEstimate: estimate?.priceEstimate ?? '',
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function EstimatePrice() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [state, handleSubmit] = useForm(ESTIMATE_FORMSPREE_ID)
  const [serviceTouched, setServiceTouched] = useState(false)
  const [formData, setFormData] = useState<EstimateFormData>(
    createInitialFormData
  )

  useEffect(() => {
    const unlockScroll = () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    if (!isMenuOpen) {
      unlockScroll()
      return unlockScroll
    }

    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'

    return unlockScroll
  }, [isMenuOpen])

  function handleEstimateChange(payload: PriceEstimatePayload | null) {
    setFormData((current) => {
      const priceEstimate = payload?.priceEstimate ?? ''
      if (serviceTouched) {
        return { ...current, priceEstimate }
      }

      return {
        ...current,
        priceEstimate,
        service: payload?.service ?? '',
      }
    })
  }

  function handleServiceChange(value: string) {
    if (!isContactService(value)) {
      return
    }

    setServiceTouched(true)
    setFormData((current) => {
      return { ...current, service: value }
    })
  }

  function handlePropertyTypeChange(value: string) {
    if (!isOptionValue(PROPERTY_TYPE_OPTIONS, value)) {
      return
    }

    setFormData((current) => {
      return { ...current, propertyType: value }
    })
  }

  function handleTimelineChange(value: string) {
    if (!isOptionValue(TIMELINE_OPTIONS, value)) {
      return
    }

    setFormData((current) => {
      return { ...current, timeline: value }
    })
  }

  const estimateHelp =
    formData.priceEstimate === ''
      ? 'Select one or more services above. The guide price will be included when you send this form.'
      : 'This estimate will be sent with your enquiry.'

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <section className="relative overflow-hidden bg-[#090909] px-4 pt-32 pb-16 text-white md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute top-24 right-10 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute bottom-8 left-16 h-28 w-28 rounded-full border border-blue-400/20" />
        </div>
        <div className="relative container mx-auto">
          <motion.div
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-blue-400 uppercase">
              Guide prices
            </p>
            <h1 className="mt-3 text-4xl leading-tight font-bold md:text-6xl">
              <span className="text-white">Price </span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Estimate
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              {ESTIMATE_GUIDE_INTRO} Choose one or more services, set an
              approximate size, then send the guide price with your details.
            </p>
          </motion.div>
        </div>
      </section>

      <QuoteCalculator onEstimateChange={handleEstimateChange} />

      <section
        id={ESTIMATE_ENQUIRY_ID}
        className="scroll-mt-28 bg-slate-50 py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Send your estimate
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Add your details and we&apos;ll include the guide price with
                your enquiry.
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
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
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600">
                      Thank you for your enquiry. We&apos;ll be in touch within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      type="hidden"
                      name="_subject"
                      value="Price estimate enquiry"
                    />
                    <input
                      type="hidden"
                      name="enquiryType"
                      value="Price estimate"
                    />

                    <div>
                      <label
                        htmlFor="priceEstimate"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Price estimate
                      </label>
                      <Textarea
                        id="priceEstimate"
                        name="priceEstimate"
                        readOnly
                        rows={5}
                        value={formData.priceEstimate}
                        aria-describedby="price-estimate-help"
                        placeholder="Your guide price will appear here"
                        className="resize-none border-slate-300 bg-slate-50 break-words text-slate-800"
                      />
                      <p
                        id="price-estimate-help"
                        className="mt-2 text-xs text-slate-500"
                      >
                        {estimateHelp}
                      </p>
                      <ValidationError
                        prefix="Price estimate"
                        field="priceEstimate"
                        errors={state.errors}
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-2 block text-sm font-medium text-slate-700"
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
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-2 block text-sm font-medium text-slate-700"
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
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700"
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
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-slate-700"
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
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="mb-2 block text-sm font-medium text-slate-700"
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
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-slate-700"
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
                        onValueChange={handleServiceChange}
                      >
                        <SelectTrigger
                          id="service"
                          className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((option) => {
                            return (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      <ValidationError
                        prefix="Service"
                        field="service"
                        errors={state.errors}
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="propertyType"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Property Type
                        </label>
                        <input
                          type="hidden"
                          name="propertyType"
                          value={formData.propertyType}
                        />
                        <Select
                          value={formData.propertyType}
                          onValueChange={handlePropertyTypeChange}
                        >
                          <SelectTrigger
                            id="propertyType"
                            className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                          >
                            <SelectValue placeholder="Property Type" />
                          </SelectTrigger>
                          <SelectContent>
                            {PROPERTY_TYPE_OPTIONS.map((option) => {
                              return (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              )
                            })}
                          </SelectContent>
                        </Select>
                        <ValidationError
                          prefix="Property Type"
                          field="propertyType"
                          errors={state.errors}
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="timeline"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Project Timeline
                        </label>
                        <input
                          type="hidden"
                          name="timeline"
                          value={formData.timeline}
                        />
                        <Select
                          value={formData.timeline}
                          onValueChange={handleTimelineChange}
                        >
                          <SelectTrigger
                            id="timeline"
                            className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                          >
                            <SelectValue placeholder="Project Timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {TIMELINE_OPTIONS.map((option) => {
                              return (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              )
                            })}
                          </SelectContent>
                        </Select>
                        <ValidationError
                          prefix="Timeline"
                          field="timeline"
                          errors={state.errors}
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-slate-700"
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
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {state.submitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-500">
                      By submitting this form, you agree to be contacted about
                      our services. We respect your privacy and never share your
                      information.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
