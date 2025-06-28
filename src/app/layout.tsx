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
  title: 'JDK Plastering & Damp Specialist - Expert Plastering Services London',
  description:
    'Professional damp proofing, plastering, rendering, and Venetian plastering services across London. Over 10 years experience. Free quotes. Call 07943 51930',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
