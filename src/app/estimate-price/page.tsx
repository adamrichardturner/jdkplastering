import type { Metadata } from 'next'
import EstimatePrice from './estimate-price'

export const metadata: Metadata = {
  title: 'Price Estimate | JDK Plastering & Damp Specialist',
  description:
    'Get a guide price for plastering, rendering, damp proofing and insulation in London, then send it with your enquiry for an exact quote.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function EstimatePricePage() {
  return <EstimatePrice />
}
