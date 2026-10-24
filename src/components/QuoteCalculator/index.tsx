'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  Blend,
  BrickWall,
  CheckCircle,
  Droplets,
  Gem,
  Grid3x3,
  Hammer,
  House,
  Layers,
  Leaf,
  Paintbrush,
  Palette,
  Shield,
  Sparkles,
  Star,
  ThermometerSun,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { StandardButton } from '@/components/ui/standard-button'
import { cn } from '@/lib/utils'
import {
  DEFAULT_SERVICE_ID,
  EMPTY_ESTIMATE_MESSAGE,
  ESTIMATE_DISCLAIMER,
  ESTIMATE_FILTERS,
  ESTIMATE_GUIDE_INTRO,
  QUOTE_SERVICES,
  UNIT_CONFIG,
  buildHomepageEstimatePayload,
  buildHomepageQuoteHref,
  calculateEstimate,
  clearStoredHomepageEstimate,
  combineEstimates,
  formatBreakdown,
  formatGbp,
  formatLivePriceEstimate,
  formatQuantity,
  quantityForSlider,
  sanitizeQuantityInput,
  scrollToQuoteForm,
  serviceMatchesFilter,
  storeHomepageEstimate,
} from '@/lib/quote-rates'
import type {
  EstimateFilter,
  HomepageEstimatePayload,
  QuoteService,
  SelectedLineInput,
  ServiceIconName,
} from '@/lib/quote-rates'

const SERVICE_ICONS: Record<ServiceIconName, LucideIcon> = {
  layers: Layers,
  paintbrush: Paintbrush,
  gem: Gem,
  grid: Grid3x3,
  sparkles: Sparkles,
  wrench: Wrench,
  hammer: Hammer,
  house: House,
  palette: Palette,
  thermometer: ThermometerSun,
  brick: BrickWall,
  leaf: Leaf,
  star: Star,
  blend: Blend,
  droplets: Droplets,
  shield: Shield,
}

const listVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.045,
    },
  },
}

const rowVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
}

type AnimatedGbpProps = {
  value: number
}

function AnimatedGbp({ value }: AnimatedGbpProps) {
  const reduceMotion = useReducedMotion() === true
  const [shown, setShown] = useState(value)
  const shownRef = useRef(value)

  useEffect(() => {
    if (reduceMotion) {
      return
    }

    if (shownRef.current === value) {
      return
    }

    const controls = animate(shownRef.current, value, {
      duration: 0.4,
      ease: 'easeOut',
      onUpdate: (latest) => {
        const next = Math.round(latest)
        shownRef.current = next
        setShown(next)
      },
      onComplete: () => {
        shownRef.current = value
        setShown(value)
      },
    })

    return () => {
      controls.stop()
    }
  }, [reduceMotion, value])

  const displayValue = reduceMotion ? value : shown

  return <>{formatGbp(displayValue)}</>
}

type ServiceRowProps = {
  service: QuoteService
  isSelected: boolean
  onSelect: (service: QuoteService) => void
}

function ServiceRow({ service, isSelected, onSelect }: ServiceRowProps) {
  const Icon = SERVICE_ICONS[service.icon]
  const unit = UNIT_CONFIG[service.unit]

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={() => {
        onSelect(service)
      }}
      className={cn(
        'w-full rounded-2xl border px-4 py-4 text-left transition-all duration-300',
        'cursor-pointer hover:-translate-y-0.5 hover:shadow-md',
        'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none',
        isSelected
          ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md ring-1 ring-blue-600/15'
          : 'border-slate-200 bg-white hover:border-blue-300'
      )}
    >
      <span className="grid grid-cols-1 items-center gap-3 md:grid-cols-[minmax(0,1fr)_9rem_5.25rem_5.25rem] md:gap-4">
        <span className="flex min-w-0 items-start gap-3">
          <span
            className={cn(
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
              isSelected
                ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white'
                : 'bg-slate-100 text-blue-600'
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">
                {service.name}
              </span>
              {isSelected ? (
                <CheckCircle
                  className="h-4 w-4 shrink-0 text-green-500"
                  aria-hidden="true"
                />
              ) : null}
            </span>
            <span className="mt-0.5 block text-sm leading-snug text-slate-600">
              {service.summary}
            </span>
          </span>
        </span>
        <span className="hidden text-sm text-slate-600 md:block md:text-right">
          {unit.perLabel}
        </span>
        <span className="hidden font-semibold text-slate-900 md:block md:text-right">
          {formatGbp(service.rateLow)}
        </span>
        <span className="hidden font-semibold text-slate-900 md:block md:text-right">
          {formatGbp(service.rateHigh)}
        </span>
      </span>
      <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm md:hidden">
        <span className="text-slate-600">{unit.perLabel}</span>
        <span>
          <span className="text-slate-500">From </span>
          <span className="font-semibold text-slate-900">
            {formatGbp(service.rateLow)}
          </span>
        </span>
        <span>
          <span className="text-slate-500">Up to </span>
          <span className="font-semibold text-slate-900">
            {formatGbp(service.rateHigh)}
          </span>
        </span>
      </span>
    </button>
  )
}

function initialQuantities(): Record<string, string> {
  const quantities: Record<string, string> = {}

  for (const service of QUOTE_SERVICES) {
    quantities[service.id] = String(UNIT_CONFIG[service.unit].defaultQuantity)
  }

  return quantities
}

type ResultShellProps = {
  live: string
  children: ReactNode
}

function ResultShell({ live, children }: ResultShellProps) {
  return (
    <div
      id="estimate-result"
      className="scroll-mt-28 w-full min-w-0 overflow-hidden rounded-3xl bg-[#090909] text-white shadow-[0_24px_80px_-28px_rgba(37,99,235,0.75)]"
    >
      <div className="relative p-5 sm:p-8">
        <div
          className="pointer-events-none absolute -top-20 -right-12 h-52 w-52 rounded-full bg-blue-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-indigo-500/25 blur-3xl"
          aria-hidden="true"
        />
        <p className="sr-only" aria-live="polite">
          {live}
        </p>
        <div className="relative min-w-0">{children}</div>
      </div>
    </div>
  )
}

type ExactQuoteLinkProps = {
  lines: readonly SelectedLineInput[]
  onApplyQuote?: (payload: HomepageEstimatePayload | null) => void
}

function persistHomepageEstimate(payload: HomepageEstimatePayload | null) {
  if (!payload) {
    clearStoredHomepageEstimate()
    return
  }

  storeHomepageEstimate(payload)
}

function ExactQuoteLink({ lines, onApplyQuote }: ExactQuoteLinkProps) {
  const payload = buildHomepageEstimatePayload(lines)
  const href = buildHomepageQuoteHref(payload)

  function handleClick() {
    persistHomepageEstimate(payload)
    if (!onApplyQuote) {
      return
    }

    onApplyQuote(payload)
    scrollToQuoteForm()
  }

  if (onApplyQuote) {
    return (
      <div className="mt-6 w-full [&>button]:w-full">
        <StandardButton
          variant="primary"
          type="button"
          icon="arrow"
          fullWidth
          className="!min-w-0 !px-6"
          onClick={handleClick}
        >
          Get an Exact Quote
        </StandardButton>
      </div>
    )
  }

  return (
    <div className="mt-6 [&>a]:block [&>a]:w-full">
      <StandardButton
        variant="primary"
        href={href}
        icon="arrow"
        fullWidth
        className="!min-w-0 !px-6"
        onClick={handleClick}
      >
        Get an Exact Quote
      </StandardButton>
    </div>
  )
}

type SelectedLineCardProps = {
  line: SelectedLineInput
  onQuantityChange: (serviceId: string, value: string) => void
  onRemove: (service: QuoteService) => void
}

function SelectedLineCard({
  line,
  onQuantityChange,
  onRemove,
}: SelectedLineCardProps) {
  const { service, quantityInput } = line
  const unit = UNIT_CONFIG[service.unit]
  const estimate = calculateEstimate(service, quantityInput)
  const sliderValue = quantityForSlider(quantityInput, service.unit)
  const unitLabel = estimate?.quantity === 1 ? unit.singular : unit.plural
  const inputId = `estimate-quantity-${service.id}`

  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg break-words text-white">{service.name}</h3>
          <p className="mt-0.5 text-sm text-gray-400">{unit.perLabel}</p>
        </div>
        <button
          type="button"
          aria-label={`Remove ${service.name}`}
          onClick={() => {
            onRemove(service)
          }}
          className="shrink-0 cursor-pointer rounded-full px-3 py-1 text-sm text-gray-300 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
        >
          Remove
        </button>
      </div>

      <div className="mt-4">
        <label htmlFor={inputId} className="block text-sm text-gray-300">
          {unit.quantityLabel}
        </label>
        <div className="mt-3 flex items-center gap-3">
          <input
            id={inputId}
            inputMode="numeric"
            autoComplete="off"
            value={quantityInput}
            placeholder={String(unit.defaultQuantity)}
            onChange={(event) => {
              onQuantityChange(
                service.id,
                sanitizeQuantityInput(event.target.value, unit.max)
              )
            }}
            className="w-24 max-w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-lg font-semibold text-white outline-none placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-400"
          />
          <span className="text-sm text-gray-300">{unitLabel}</span>
        </div>
        <input
          type="range"
          min={unit.min}
          max={unit.max}
          step={1}
          value={sliderValue}
          aria-label={unit.quantityLabel}
          aria-valuetext={estimate ? undefined : 'Not entered'}
          onChange={(event) => {
            onQuantityChange(service.id, event.target.value)
          }}
          className="mt-4 w-full max-w-full cursor-pointer accent-blue-500"
        />
        <div className="mt-1 flex justify-between gap-3 text-xs text-gray-500">
          <span>{formatQuantity(unit.min, service.unit)}</span>
          <span>{formatQuantity(unit.max, service.unit)}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {unit.presets.map((preset) => {
            const isActive = quantityInput === String(preset)

            return (
              <button
                key={preset}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  onQuantityChange(service.id, String(preset))
                }}
                className={cn(
                  'min-h-11 cursor-pointer rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  'focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none',
                  isActive
                    ? 'bg-white text-slate-900'
                    : 'bg-white/10 text-gray-200 hover:bg-white/20'
                )}
              >
                {preset}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-4">
        {estimate ? (
          <>
            <p className="text-sm break-words text-gray-300">
              {formatBreakdown(service, estimate.quantity)}
            </p>
            <p className="mt-2 text-sm break-words text-white tabular-nums">
              <span className="text-gray-400">Line </span>
              {formatGbp(estimate.low)}–{formatGbp(estimate.high)}
            </p>
          </>
        ) : (
          <p className="text-sm leading-relaxed text-gray-200">
            {unit.emptyMessage}
          </p>
        )}
      </div>

      {service.note ? (
        <p className="mt-3 text-sm leading-relaxed break-words text-blue-100">
          {service.note}
        </p>
      ) : null}
    </div>
  )
}

type ResultPanelProps = {
  lines: readonly SelectedLineInput[]
  onQuantityChange: (serviceId: string, value: string) => void
  onRemove: (service: QuoteService) => void
  onApplyQuote?: (payload: HomepageEstimatePayload | null) => void
}

function ResultPanel({
  lines,
  onQuantityChange,
  onRemove,
  onApplyQuote,
}: ResultPanelProps) {
  const live = formatLivePriceEstimate(lines)
  const combined = combineEstimates(lines)

  if (lines.length === 0) {
    return (
      <ResultShell live={live}>
        <p className="text-xs font-semibold tracking-[0.16em] text-blue-300 uppercase">
          Price estimate
        </p>
        <h3 className="mt-2 text-2xl text-white">No services selected</h3>
        <p className="mt-3 text-base leading-relaxed text-gray-200">
          {EMPTY_ESTIMATE_MESSAGE}
        </p>
        <p className="mt-4 text-xs leading-relaxed text-gray-400">
          {ESTIMATE_DISCLAIMER}
        </p>
        <ExactQuoteLink lines={lines} onApplyQuote={onApplyQuote} />
      </ResultShell>
    )
  }

  return (
    <ResultShell live={live}>
      <p className="text-xs font-semibold tracking-[0.16em] text-blue-300 uppercase">
        Price estimate
      </p>
      <h3 className="mt-2 text-2xl text-white">
        {lines.length === 1 ? '1 service' : `${lines.length} services`}
      </h3>
      <div className="mt-5 space-y-3">
        <AnimatePresence initial={false}>
          {lines.map((line) => {
            return (
              <motion.div
                key={line.service.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <SelectedLineCard
                  line={line}
                  onQuantityChange={onQuantityChange}
                  onRemove={onRemove}
                />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">
        {combined ? (
          <>
            <p className="text-xs font-semibold tracking-[0.16em] text-blue-300 uppercase">
              Combined
            </p>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  From
                </p>
                <p className="mt-1 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-3xl font-bold break-words text-transparent tabular-nums sm:text-4xl">
                  <AnimatedGbp value={combined.low} />
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  Up to
                </p>
                <p className="mt-1 text-3xl font-bold break-words text-white tabular-nums sm:text-4xl">
                  <AnimatedGbp value={combined.high} />
                </p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-base leading-relaxed text-gray-200">
            Enter a quantity for each selected service to see a combined total.
          </p>
        )}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-gray-400">
        {ESTIMATE_DISCLAIMER}
      </p>
      <ExactQuoteLink lines={lines} onApplyQuote={onApplyQuote} />
    </ResultShell>
  )
}

type QuoteCalculatorProps = {
  onApplyQuote?: (payload: HomepageEstimatePayload | null) => void
}

export default function QuoteCalculator({
  onApplyQuote,
}: QuoteCalculatorProps) {
  const [filter, setFilter] = useState<EstimateFilter>('all')
  const [selectedIds, setSelectedIds] = useState<string[]>([DEFAULT_SERVICE_ID])
  const [quantities, setQuantities] =
    useState<Record<string, string>>(initialQuantities)

  const visibleServices = QUOTE_SERVICES.filter((service) => {
    return serviceMatchesFilter(service, filter)
  })

  const selectedLines: SelectedLineInput[] = []
  for (const service of QUOTE_SERVICES) {
    if (!selectedIds.includes(service.id)) {
      continue
    }

    const quantityInput =
      quantities[service.id] ??
      String(UNIT_CONFIG[service.unit].defaultQuantity)
    selectedLines.push({ service, quantityInput })
  }

  function handleToggleService(service: QuoteService) {
    setSelectedIds((current) => {
      if (current.includes(service.id)) {
        return current.filter((id) => {
          return id !== service.id
        })
      }

      return [...current, service.id]
    })
  }

  function handleQuantityChange(serviceId: string, value: string) {
    setQuantities((current) => {
      return { ...current, [serviceId]: value }
    })
  }

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="estimate"
        className="scroll-mt-28 max-w-full bg-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-blue-600 uppercase">
                Price estimate
              </p>
              <h2 className="mt-3 text-4xl text-slate-900 md:text-5xl">
                Price Estimate
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {ESTIMATE_GUIDE_INTRO} Choose one or more services and set an
                approximate size for each.
              </p>
            </motion.div>

            <div
              className="mt-8 flex max-w-full flex-wrap justify-center gap-2"
              role="group"
              aria-label="Filter services"
            >
              {ESTIMATE_FILTERS.map((option) => {
                const isActive = filter === option.id

                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => {
                      setFilter(option.id)
                    }}
                    className={cn(
                      'cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                      'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none',
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    )}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>

            <div className="mt-8 grid min-w-0 grid-cols-1 items-start gap-6 lg:grid-cols-5 lg:gap-8">
              <div className="min-w-0 lg:col-span-3">
                <div className="mb-3 hidden px-4 text-xs font-semibold tracking-wide text-slate-500 uppercase md:grid md:grid-cols-[minmax(0,1fr)_9rem_5.25rem_5.25rem] md:gap-4">
                  <span>Service</span>
                  <span className="text-right">Unit</span>
                  <span className="text-right">From</span>
                  <span className="text-right">Up to</span>
                </div>
                <motion.ul
                  key={filter}
                  className="space-y-3"
                  variants={listVariants}
                  initial="initial"
                  animate="animate"
                  aria-label="Services, select one or more"
                >
                  {visibleServices.map((service) => {
                    return (
                      <motion.li key={service.id} variants={rowVariants}>
                        <ServiceRow
                          service={service}
                          isSelected={selectedIds.includes(service.id)}
                          onSelect={handleToggleService}
                        />
                      </motion.li>
                    )
                  })}
                </motion.ul>
              </div>

              <div className="min-w-0 lg:sticky lg:top-28 lg:col-span-2">
                <ResultPanel
                  lines={selectedLines}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleToggleService}
                  onApplyQuote={onApplyQuote}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
