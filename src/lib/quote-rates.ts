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

export const ESTIMATE_ENQUIRY_ID = 'estimate-enquiry'

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

export function createDefaultQuantities(): Record<string, string> {
  const quantities: Record<string, string> = {}

  for (const service of QUOTE_SERVICES) {
    quantities[service.id] = String(UNIT_CONFIG[service.unit].defaultQuantity)
  }

  return quantities
}

export function buildSelectedLines(
  selectedIds: readonly string[],
  quantities: Record<string, string>
): SelectedLineInput[] {
  const lines: SelectedLineInput[] = []

  for (const service of QUOTE_SERVICES) {
    if (!selectedIds.includes(service.id)) {
      continue
    }

    const quantityInput =
      quantities[service.id] ??
      String(UNIT_CONFIG[service.unit].defaultQuantity)

    lines.push({ service, quantityInput })
  }

  return lines
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
