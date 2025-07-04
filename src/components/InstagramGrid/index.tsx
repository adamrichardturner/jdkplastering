'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Grid3X3 } from 'lucide-react'
import { ElfsightWidget } from 'react-elfsight-widget'

interface InstagramGridProps {
  className?: string
}

const InstagramGrid: React.FC<InstagramGridProps> = ({ className = '' }) => {
  useEffect(() => {
    // Function to remove the specific Elfsight branding link
    const removeBrandingLink = () => {
      const targetUrl =
        'https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instashow&utm_term=localhost&utm_campaign=free-widget'
      const links = document.querySelectorAll('a[href="' + targetUrl + '"]')

      links.forEach((link) => {
        link.remove()
      })
    }

    // Try to remove the branding link multiple times as the widget loads asynchronously
    const intervals = [500, 1000, 2000, 3000, 5000]
    intervals.forEach((delay) => {
      setTimeout(removeBrandingLink, delay)
    })

    // Also set up a mutation observer to catch dynamic content changes
    const observer = new MutationObserver(() => {
      removeBrandingLink()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Cleanup function
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 p-0.5">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Grid3X3 className="w-6 h-6 text-gray-700" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Latest from Instagram
          </h2>
        </div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Follow our work in real-time. See behind-the-scenes content, project
          updates, and professional tips from our expert team.
        </p>
      </motion.div>

      {/* Elfsight Instagram Feed Widget */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ElfsightWidget
          widgetId="7d11d969-2788-4c2a-9e46-88f184f55507"
          lazy={true}
          className="w-full"
        />
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        className="text-center mt-12 pt-8 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-lg text-slate-600 mb-6">
          Want to see more of our work? Follow us on Instagram for daily
          updates!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.instagram.com/jdkplastering"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Grid3X3 className="w-5 h-5" />
            Follow @jdkplastering
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default InstagramGrid
