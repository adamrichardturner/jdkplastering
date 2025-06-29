import type { Metadata } from 'next'
import { Lato, Poppins } from 'next/font/google'
import './globals.css'

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    "JDK Plastering & Damp Specialist - London's Leading Damp Proofing & Plastering Specialists",
  description:
    'JDK Plastering provides expert damp proofing, plastering, rendering & external wall insulation across London. 10+ years experience, fully insured, free quotes. Call 07943 51930',
  keywords: [
    'JDK Plastering',
    'plastering London',
    'damp proofing London',
    'rendering services',
    'external wall insulation',
    'Venetian plastering',
    'rising damp treatment',
    'waterproofing',
    'lime plastering',
    'EWI systems',
  ],
  authors: [{ name: 'JDK Plastering & Damp Specialist' }],
  creator: 'JDK Plastering & Damp Specialist',
  publisher: 'JDK Plastering & Damp Specialist',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title:
      "JDK Plastering and Damp Specialist - London's Leading Damp Proofing & Plastering Specialists",
    description:
      'Expert plastering, damp proofing & rendering services across London. 10+ years experience, fully insured, free quotes.',
    url: 'https://jdkplastering.com',
    siteName: 'JDK Plastering & Damp Specialist',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/jdk-plastering-social.png',
        width: 1200,
        height: 630,
        alt: 'JDK Plastering & Damp Specialist - Professional Plastering Services London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "JDK Plastering & Damp Specialist - London's Leading Damp Proofing & Plastering Specialists",
    description:
      'Expert plastering, damp proofing & rendering services across London. 10+ years experience, fully insured, free quotes.',
    images: ['/jdk-plastering-social.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://jdkplastering.com/#LocalBusiness',
        name: 'JDK Plastering & Damp Specialist',
        alternateName: 'JDK Plastering & Damp Specialist',
        description:
          'Expert plastering, damp proofing, rendering & external wall insulation services across London. Over 10 years experience with fully qualified & insured professionals.',
        url: 'https://jdkplastering.com',
        telephone: '07943 51930',
        email: 'info@jdkplastering.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'London',
          addressCountry: 'GB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '51.5074',
          longitude: '-0.1278',
        },
        openingHours: ['Mo-Sa 09:00-18:00'],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '51.5074',
            longitude: '-0.1278',
          },
          geoRadius: '50000',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'JDK Plastering Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Damp Proofing',
                description:
                  'Rising damp treatment, DPC injection, and waterproofing solutions',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Plastering Services',
                description:
                  'Internal plastering, skim coats, and decorative plaster finishes',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'External Wall Insulation',
                description:
                  'EWI systems with render finishes for improved thermal efficiency',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Venetian Plastering',
                description:
                  'Premium decorative Venetian plaster finishes and lime plastering',
              },
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '150',
        },
        sameAs: [
          'https://www.facebook.com/jdkplastering',
          'https://www.instagram.com/jdkplastering',
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://jdkplastering.com/#Organization',
        name: 'JDK Plastering & Damp Specialist',
        url: 'https://jdkplastering.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://jdkplastering.com/jdk-plastering-social.png',
          width: '1200',
          height: '630',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '07943 51930',
          contactType: 'customer service',
          areaServed: 'GB',
          availableLanguage: 'English',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://jdkplastering.com/#WebSite',
        url: 'https://jdkplastering.com',
        name: 'JDK Plastering & Damp Specialist',
        description:
          'Professional plastering, damp proofing & rendering services in London',
        inLanguage: 'en-GB',
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${lato.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
