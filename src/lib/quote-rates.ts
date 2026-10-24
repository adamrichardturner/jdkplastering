/**
 * 2026 UK guide bands in pounds. London jobs often sit at the top of the range.
 * These are rough guides, not fixed quotes.
 */

export type ContactService =
  | 'plastering'
  | 'damp-proofing'
  | 'rendering'
  | 'insulation'
  | 'mould-removal'
  | 'multiple'

export type RateUnit = 'm2' | 'day' | 'linear-metre'

export type ServiceGroup = 'plastering' | 'external' | 'specialist' | 'damp'

export type EstimateFilter = 'all' | ServiceGroup

export type ServiceIconName =
  | 'layers'
  | 'paintbrush'
  | 'gem'
  | 'grid'
  | 'sparkles'
  | 'wrench'
  | 'hammer'
  | 'house'
  | 'palette'
  | 'thermometer'
  | 'brick'
  | 'leaf'
  | 'star'
  | 'blend'
  | 'droplets'
  | 'shield'

export type QuoteService = {
  id: string
  name: string
  summary: string
  unit: RateUnit
  rateLow: number
  rateHigh: number
  contactService: ContactService
  groups: readonly ServiceGroup[]
  icon: ServiceIconName
  note?: string
}

export type UnitConfig = {
  defaultQuantity: number
  min: number
  max: number
  presets: readonly number[]
  singular: string
  plural: string
  perLabel: string
  quantityLabel: string
  emptyMessage: string
  missingSizePhrase: string
}

export type EstimateRange = {
  low: number
  high: number
  quantity: number
}

export type CombinedEstimate = {
  low: number
  high: number
  pricedLineCount: number
}

export type SelectedLineInput = {
  service: QuoteService
  quantityInput: string
}

export type PriceEstimatePayload = {
  service: ContactService
  priceEstimate: string
}

export type HomepageService =
  | 'damp-proofing'
  | 'plastering'
  | 'rendering'
  | 'external-wall-insulation'
  | 'venetian-plastering'
  | 'waterproofing'
  | 'multiple-services'
  | 'not-sure'

export type HomepageEstimatePayload = {
  service: HomepageService
  priceEstimate: string
}

export type EstimateFilterOption = {
  id: EstimateFilter
  label: string
}

const CONTACT_SERVICE_VALUES: readonly ContactService[] = [
  'plastering',
  'damp-proofing',
  'rendering',
  'insulation',
  'mould-removal',
  'multiple',
]

const HOMEPAGE_SERVICE_VALUES: readonly HomepageService[] = [
  'damp-proofing',
  'plastering',
  'rendering',
  'external-wall-insulation',
  'venetian-plastering',
  'waterproofing',
  'multiple-services',
  'not-sure',
]

const HOMEPAGE_SERVICE_BY_ID: Record<string, HomepageService> = {
  skimming: 'plastering',
  ceilings: 'plastering',
  'full-replaster': 'plastering',
  'plasterboard-skim': 'plastering',
  'polished-plaster': 'plastering',
  'feature-walls': 'plastering',
  'lime-plaster': 'plastering',
  microcement: 'plastering',
  repairs: 'plastering',
  rendering: 'rendering',
  'silicone-k-rend': 'rendering',
  'external-wall-insulation': 'external-wall-insulation',
  'venetian-plaster': 'venetian-plastering',
  'rising-damp': 'damp-proofing',
  repointing: 'damp-proofing',
  tanking: 'waterproofing',
}

export const QUOTE_FORM_ID = 'quote-form'

export const HOMEPAGE_ESTIMATE_STORAGE_KEY = 'jdk-homepage-price-estimate'

const gbpFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0,
})

export const ESTIMATE_DISCLAIMER =
  'These are rough guides only — every job is different. Access, condition and finish all affect the final price. A minimum charge may apply to small jobs.'

export const ESTIMATE_GUIDE_INTRO =
  'These are typical UK guide prices for 2026. London jobs often sit toward the top of the range.'

export const DEFAULT_SERVICE_ID = 'skimming'

export const UNIT_CONFIG: Record<RateUnit, UnitConfig> = {
  m2: {
    defaultQuantity: 20,
    min: 1,
    max: 200,
    presets: [10, 20, 35, 60, 100],
    singular: 'm²',
    plural: 'm²',
    perLabel: 'per m²',
    quantityLabel: 'Approximate area in square metres',
    emptyMessage: 'Enter an approximate area to see an estimate.',
    missingSizePhrase: 'Approximate area was not entered.',
  },
  day: {
    defaultQuantity: 1,
    min: 1,
    max: 14,
    presets: [1, 2, 3, 5],
    singular: 'day',
    plural: 'days',
    perLabel: 'per day',
    quantityLabel: 'Number of days',
    emptyMessage: 'Enter an approximate number of days to see an estimate.',
    missingSizePhrase: 'Number of days was not entered.',
  },
  'linear-metre': {
    defaultQuantity: 8,
    min: 1,
    max: 40,
    presets: [4, 8, 12, 20],
    singular: 'linear metre',
    plural: 'linear metres',
    perLabel: 'per linear metre',
    quantityLabel: 'Approximate wall length in linear metres',
    emptyMessage: 'Enter an approximate length to see an estimate.',
    missingSizePhrase: 'Approximate wall length was not entered.',
  },
}

export const ESTIMATE_FILTERS: readonly EstimateFilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'plastering', label: 'Plastering' },
  { id: 'external', label: 'External' },
  { id: 'specialist', label: 'Specialist' },
  { id: 'damp', label: 'Damp & repairs' },
]

export const QUOTE_SERVICES: readonly QuoteService[] = [
  {
    id: 'skimming',
    name: 'Skimming',
    summary: 'Smooth finish coat over sound plaster',
    unit: 'm2',
    rateLow: 13,
    rateHigh: 18,
    contactService: 'plastering',
    groups: ['plastering'],
    icon: 'layers',
  },
  {
    id: 'rendering',
    name: 'Rendering',
    summary: 'External render to weatherproof and refresh walls',
    unit: 'm2',
    rateLow: 40,
    rateHigh: 60,
    contactService: 'rendering',
    groups: ['external'],
    icon: 'paintbrush',
    note: 'Scaffold quoted separately.',
  },
  {
    id: 'polished-plaster',
    name: 'Polished Plaster',
    summary: 'Decorative plaster brought to a polished sheen',
    unit: 'm2',
    rateLow: 60,
    rateHigh: 100,
    contactService: 'plastering',
    groups: ['specialist'],
    icon: 'gem',
  },
  {
    id: 'ceilings',
    name: 'Ceilings',
    summary: 'Skim or overboard for a flat ceiling',
    unit: 'm2',
    rateLow: 15,
    rateHigh: 25,
    contactService: 'plastering',
    groups: ['plastering'],
    icon: 'grid',
  },
  {
    id: 'feature-walls',
    name: 'Feature Walls',
    summary: 'Statement finishes and textured plaster',
    unit: 'm2',
    rateLow: 50,
    rateHigh: 90,
    contactService: 'plastering',
    groups: ['specialist'],
    icon: 'sparkles',
  },
  {
    id: 'repairs',
    name: 'Repairs',
    summary: 'Patching, making good and small repair visits',
    unit: 'day',
    rateLow: 250,
    rateHigh: 350,
    contactService: 'plastering',
    groups: ['damp'],
    icon: 'wrench',
  },
  {
    id: 'full-replaster',
    name: 'Full re-plaster',
    summary: 'Backing coat plus skim',
    unit: 'm2',
    rateLow: 25,
    rateHigh: 45,
    contactService: 'plastering',
    groups: ['plastering'],
    icon: 'hammer',
  },
  {
    id: 'plasterboard-skim',
    name: 'Plasterboard & skim',
    summary: 'Dot-and-dab boarding plus a skim coat',
    unit: 'm2',
    rateLow: 25,
    rateHigh: 40,
    contactService: 'plastering',
    groups: ['plastering'],
    icon: 'house',
  },
  {
    id: 'silicone-k-rend',
    name: 'Silicone & K-Rend',
    summary: 'Through-coloured silicone and K-Rend systems',
    unit: 'm2',
    rateLow: 55,
    rateHigh: 95,
    contactService: 'rendering',
    groups: ['external'],
    icon: 'palette',
    note: 'Scaffold is extra.',
  },
  {
    id: 'external-wall-insulation',
    name: 'External Wall Insulation',
    summary: 'EWI systems, including K Rend and Wetherby',
    unit: 'm2',
    rateLow: 90,
    rateHigh: 170,
    contactService: 'insulation',
    groups: ['external'],
    icon: 'thermometer',
    note: 'Scaffold, thickness and reveals are extra.',
  },
  {
    id: 'repointing',
    name: 'Repointing',
    summary: 'Rake out and renew mortar joints',
    unit: 'm2',
    rateLow: 40,
    rateHigh: 80,
    contactService: 'damp-proofing',
    groups: ['external', 'damp'],
    icon: 'brick',
    note: 'Cement or lime mortar; scaffold extra.',
  },
  {
    id: 'lime-plaster',
    name: 'Lime plaster',
    summary: 'Breathable lime for period and solid walls',
    unit: 'm2',
    rateLow: 50,
    rateHigh: 90,
    contactService: 'plastering',
    groups: ['plastering'],
    icon: 'leaf',
  },
  {
    id: 'venetian-plaster',
    name: 'Venetian plaster',
    summary: 'Hand-applied decorative marble plaster',
    unit: 'm2',
    rateLow: 100,
    rateHigh: 250,
    contactService: 'plastering',
    groups: ['specialist'],
    icon: 'star',
    note: 'Intricate marble effects sit at the top.',
  },
  {
    id: 'microcement',
    name: 'Microcement',
    summary: 'Seamless thin coating for walls and floors',
    unit: 'm2',
    rateLow: 90,
    rateHigh: 160,
    contactService: 'plastering',
    groups: ['specialist'],
    icon: 'blend',
  },
  {
    id: 'rising-damp',
    name: 'Rising damp treatment',
    summary: 'Chemical damp-proof course injection',
    unit: 'linear-metre',
    rateLow: 70,
    rateHigh: 120,
    contactService: 'damp-proofing',
    groups: ['damp'],
    icon: 'droplets',
    note: 'Chemical DPC injection only; salt-resistant replastering is extra.',
  },
  {
    id: 'tanking',
    name: 'Tanking & waterproofing',
    summary: 'Waterproof tanking for basements and wet walls',
    unit: 'm2',
    rateLow: 90,
    rateHigh: 220,
    contactService: 'damp-proofing',
    groups: ['damp'],
    icon: 'shield',
    note: 'Drainage and pumps are extra.',
  },
]

export function isContactService(value: string): value is ContactService {
  for (const service of CONTACT_SERVICE_VALUES) {
    if (service === value) {
      return true
    }
  }

  return false
}

export function formatGbp(amount: number): string {
  return gbpFormatter.format(amount)
}

export function getQuoteServiceById(id: string): QuoteService {
  for (const service of QUOTE_SERVICES) {
    if (service.id === id) {
      return service
    }
  }

  const fallback = QUOTE_SERVICES[0]
  if (fallback === undefined) {
    throw new Error('Quote services are not configured')
  }

  return fallback
}

export function serviceMatchesFilter(
  service: QuoteService,
  filter: EstimateFilter
): boolean {
  if (filter === 'all') {
    return true
  }

  return service.groups.includes(filter)
}

export function parseQuantity(value: string): number | null {
  if (!/^\d+$/.test(value)) {
    return null
  }

  const quantity = Number(value)
  if (!Number.isInteger(quantity)) {
    return null
  }

  if (quantity <= 0) {
    return null
  }

  return quantity
}

export function sanitizeQuantityInput(raw: string, max: number): string {
  const digits = raw.replace(/\D/g, '')
  if (digits === '') {
    return ''
  }

  const quantity = Number(digits)
  if (quantity > max) {
    return String(max)
  }

  return String(quantity)
}

export function quantityForSlider(value: string, unit: RateUnit): number {
  const config = UNIT_CONFIG[unit]
  const quantity = parseQuantity(value)
  if (quantity === null) {
    return config.min
  }

  if (quantity < config.min) {
    return config.min
  }

  if (quantity > config.max) {
    return config.max
  }

  return quantity
}

export function calculateEstimate(
  service: QuoteService,
  quantityInput: string
): EstimateRange | null {
  const quantity = parseQuantity(quantityInput)
  if (quantity === null) {
    return null
  }

  return {
    quantity,
    low: Math.round(service.rateLow * quantity),
    high: Math.round(service.rateHigh * quantity),
  }
}

export function formatQuantity(quantity: number, unit: RateUnit): string {
  const config = UNIT_CONFIG[unit]
  if (quantity === 1) {
    return `${quantity} ${config.singular}`
  }

  return `${quantity} ${config.plural}`
}

export function formatBreakdown(
  service: QuoteService,
  quantity: number
): string {
  const config = UNIT_CONFIG[service.unit]
  const quantityLabel = formatQuantity(quantity, service.unit)
  const low = formatGbp(service.rateLow)
  const high = formatGbp(service.rateHigh)

  return `${quantityLabel} × ${low} – ${high} ${config.perLabel}`
}

export const PRICE_ESTIMATE_STORAGE_KEY = 'jdk-price-estimate'

export const EMPTY_ESTIMATE_MESSAGE =
  'Select one or more services to see a price estimate.'

function rateBand(service: QuoteService): string {
  const config = UNIT_CONFIG[service.unit]

  return `${formatGbp(service.rateLow)}–${formatGbp(service.rateHigh)} ${config.perLabel}`
}

export function formatLineEstimate(
  service: QuoteService,
  quantityInput: string
): string {
  const config = UNIT_CONFIG[service.unit]
  const band = rateBand(service)
  const estimate = calculateEstimate(service, quantityInput)
  if (!estimate) {
    return `${service.name}, ${config.missingSizePhrase} ${band}.`
  }

  const quantityLabel = formatQuantity(estimate.quantity, service.unit)
  const total = `${formatGbp(estimate.low)}–${formatGbp(estimate.high)}`

  return `${service.name}, ${quantityLabel}, ${band}, line ${total}.`
}

export function combineEstimates(
  lines: readonly SelectedLineInput[]
): CombinedEstimate | null {
  let low = 0
  let high = 0
  let pricedLineCount = 0

  for (const line of lines) {
    const estimate = calculateEstimate(line.service, line.quantityInput)
    if (!estimate) {
      continue
    }

    low += estimate.low
    high += estimate.high
    pricedLineCount += 1
  }

  if (pricedLineCount === 0) {
    return null
  }

  return { low, high, pricedLineCount }
}

export function contactServiceForSelection(
  services: readonly QuoteService[]
): ContactService | null {
  const first = services[0]
  if (!first) {
    return null
  }

  if (services.length === 1) {
    return first.contactService
  }

  return 'multiple'
}

export function buildPriceEstimateText(
  lines: readonly SelectedLineInput[]
): string {
  if (lines.length === 0) {
    return ''
  }

  const parts: string[] = []
  let low = 0
  let high = 0
  let pricedLineCount = 0

  for (const line of lines) {
    parts.push(formatLineEstimate(line.service, line.quantityInput))
    const estimate = calculateEstimate(line.service, line.quantityInput)
    if (!estimate) {
      continue
    }

    low += estimate.low
    high += estimate.high
    pricedLineCount += 1
  }

  const detail = parts.join(' ')
  if (pricedLineCount === 0) {
    return detail
  }

  return `${detail} Combined guide ${formatGbp(low)}–${formatGbp(high)}.`
}

export function formatLivePriceEstimate(
  lines: readonly SelectedLineInput[]
): string {
  const text = buildPriceEstimateText(lines)
  if (text === '') {
    return EMPTY_ESTIMATE_MESSAGE
  }

  return text
}

export function buildPriceEstimatePayload(
  lines: readonly SelectedLineInput[]
): PriceEstimatePayload | null {
  const services: QuoteService[] = []
  for (const line of lines) {
    services.push(line.service)
  }

  const service = contactServiceForSelection(services)
  if (!service) {
    return null
  }

  const priceEstimate = buildPriceEstimateText(lines)
  if (priceEstimate === '') {
    return null
  }

  return { service, priceEstimate }
}

export function isHomepageService(value: string): value is HomepageService {
  for (const service of HOMEPAGE_SERVICE_VALUES) {
    if (service === value) {
      return true
    }
  }

  return false
}

export function homepageServiceForQuote(
  service: QuoteService
): HomepageService {
  return HOMEPAGE_SERVICE_BY_ID[service.id] ?? 'plastering'
}

export function homepageServiceForSelection(
  services: readonly QuoteService[]
): HomepageService | null {
  const first = services[0]
  if (!first) {
    return null
  }

  if (services.length === 1) {
    return homepageServiceForQuote(first)
  }

  return 'multiple-services'
}

export function buildHomepageEstimatePayload(
  lines: readonly SelectedLineInput[]
): HomepageEstimatePayload | null {
  const services: QuoteService[] = []
  for (const line of lines) {
    services.push(line.service)
  }

  const service = homepageServiceForSelection(services)
  if (!service) {
    return null
  }

  const priceEstimate = buildPriceEstimateText(lines)
  if (priceEstimate === '') {
    return null
  }

  return { service, priceEstimate }
}

export function buildHomepageQuoteHref(
  payload: HomepageEstimatePayload | null
): string {
  if (!payload) {
    return `/#${QUOTE_FORM_ID}`
  }

  const params = new URLSearchParams()
  params.set('fromEstimate', '1')
  params.set('service', payload.service)
  params.set('priceEstimate', payload.priceEstimate)

  return `/?${params.toString()}#${QUOTE_FORM_ID}`
}

export function scrollToQuoteForm(): void {
  if (typeof window === 'undefined') {
    return
  }

  const form = document.getElementById(QUOTE_FORM_ID)
  if (!form) {
    return
  }

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  form.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start',
  })
}

export function buildQuoteHref(payload: PriceEstimatePayload | null): string {
  if (!payload) {
    return '/contact#contact-form'
  }

  const params = new URLSearchParams()
  params.set('service', payload.service)
  params.set('fromEstimate', '1')
  params.set('priceEstimate', payload.priceEstimate)

  return `/contact?${params.toString()}#contact-form`
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export function parsePriceEstimatePayload(
  raw: string
): PriceEstimatePayload | null {
  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return null
  }

  if (!isRecord(parsed)) {
    return null
  }

  const service = parsed.service
  const priceEstimate = parsed.priceEstimate
  if (typeof service !== 'string') {
    return null
  }

  if (typeof priceEstimate !== 'string') {
    return null
  }

  if (!isContactService(service)) {
    return null
  }

  return { service, priceEstimate }
}

export function storePriceEstimate(payload: PriceEstimatePayload): void {
  if (typeof window === 'undefined') {
    return
  }

  window.sessionStorage.setItem(
    PRICE_ESTIMATE_STORAGE_KEY,
    JSON.stringify(payload)
  )
}

export function readStoredPriceEstimate(): PriceEstimatePayload | null {
  if (typeof window === 'undefined') {
    return null
  }

  const raw = window.sessionStorage.getItem(PRICE_ESTIMATE_STORAGE_KEY)
  if (raw === null) {
    return null
  }

  return parsePriceEstimatePayload(raw)
}

export function clearStoredPriceEstimate(): void {
  if (typeof window === 'undefined') {
    return
  }

  window.sessionStorage.removeItem(PRICE_ESTIMATE_STORAGE_KEY)
}

export function parseHomepageEstimatePayload(
  raw: string
): HomepageEstimatePayload | null {
  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return null
  }

  if (!isRecord(parsed)) {
    return null
  }

  const service = parsed.service
  const priceEstimate = parsed.priceEstimate
  if (typeof service !== 'string') {
    return null
  }

  if (typeof priceEstimate !== 'string') {
    return null
  }

  if (!isHomepageService(service)) {
    return null
  }

  return { service, priceEstimate }
}

export function storeHomepageEstimate(payload: HomepageEstimatePayload): void {
  if (typeof window === 'undefined') {
    return
  }

  window.sessionStorage.setItem(
    HOMEPAGE_ESTIMATE_STORAGE_KEY,
    JSON.stringify(payload)
  )
}

export function readStoredHomepageEstimate(): HomepageEstimatePayload | null {
  if (typeof window === 'undefined') {
    return null
  }

  const raw = window.sessionStorage.getItem(HOMEPAGE_ESTIMATE_STORAGE_KEY)
  if (raw === null) {
    return null
  }

  return parseHomepageEstimatePayload(raw)
}

export function clearStoredHomepageEstimate(): void {
  if (typeof window === 'undefined') {
    return
  }

  window.sessionStorage.removeItem(HOMEPAGE_ESTIMATE_STORAGE_KEY)
}

export function readHomepageEstimateFromLocation(): HomepageEstimatePayload | null {
  if (typeof window === 'undefined') {
    return null
  }

  const params = new URLSearchParams(window.location.search)
  if (params.get('fromEstimate') !== '1') {
    return null
  }

  const stored = readStoredHomepageEstimate()
  const queryService = params.get('service') ?? ''
  const queryEstimate = params.get('priceEstimate') ?? ''
  let service: HomepageService | null = null
  if (isHomepageService(queryService)) {
    service = queryService
  }

  if (!service) {
    service = stored?.service ?? null
  }

  let priceEstimate = queryEstimate
  if (priceEstimate === '') {
    priceEstimate = stored?.priceEstimate ?? ''
  }

  if (!service) {
    return null
  }

  if (priceEstimate === '') {
    return null
  }

  return { service, priceEstimate }
}
