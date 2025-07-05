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
    // Function to completely remove the Elfsight branding button from DOM
    const removeBrandingButton = () => {
      const targetUrl =
        'https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instashow&utm_term=www.jdkplastering.com&utm_campaign=free-widget'

      // Target by exact href and remove from DOM
      const linksByHref = document.querySelectorAll(
        'a[href="' + targetUrl + '"]'
      )
      linksByHref.forEach((link) => {
        console.log('Removing Elfsight branding button by href:', link)
        link.remove()
      })

      // Also target by the specific style content and remove from DOM
      const allLinks = document.querySelectorAll('a')
      allLinks.forEach((link) => {
        const style = link.getAttribute('style')
        if (
          style &&
          style.includes(
            'animation:none!important;background-color:rgba(238,238,238,0.9)!important'
          )
        ) {
          console.log('Removing Elfsight branding button by style:', link)
          link.remove()
        }
      })

      // Target by href containing elfsight branding patterns
      const brandingLinks = document.querySelectorAll(
        'a[href*="elfsight.com/instagram-feed-instashow"][href*="utm_campaign=free-widget"]'
      )
      brandingLinks.forEach((link) => {
        console.log('Removing Elfsight branding button by pattern:', link)
        link.remove()
      })

      // Add CSS as a backup to hide any that slip through
      const styleId = 'hide-elfsight-branding'
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style')
        style.id = styleId
        style.textContent = `
          a[href*="elfsight.com/instagram-feed-instashow"][href*="utm_campaign=free-widget"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }
          
          a[style*="animation:none!important;background-color:rgba(238,238,238,0.9)!important"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }
        `
        document.head.appendChild(style)
      }
    }

    // Try to remove the branding button multiple times as the widget loads asynchronously
    const intervals = [500, 1000, 2000, 3000, 5000, 7000, 10000]
    intervals.forEach((delay) => {
      setTimeout(removeBrandingButton, delay)
    })

    // Set up a mutation observer to catch dynamic content changes
    const observer = new MutationObserver((mutations) => {
      let shouldRemove = false

      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          // Check if the added node is an element
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element

            // Check if it's the branding link or contains one
            if (element.tagName === 'A') {
              const href = element.getAttribute('href')
              const style = element.getAttribute('style')

              if (
                (href &&
                  href.includes('elfsight.com/instagram-feed-instashow') &&
                  href.includes('utm_campaign=free-widget')) ||
                (style &&
                  style.includes(
                    'animation:none!important;background-color:rgba(238,238,238,0.9)!important'
                  ))
              ) {
                shouldRemove = true
              }
            } else {
              // Check if the element contains branding links
              const brandingLinks = element.querySelectorAll(
                'a[href*="elfsight.com/instagram-feed-instashow"][href*="utm_campaign=free-widget"]'
              )
              const styledLinks = element.querySelectorAll(
                'a[style*="animation:none!important;background-color:rgba(238,238,238,0.9)!important"]'
              )

              if (brandingLinks.length > 0 || styledLinks.length > 0) {
                shouldRemove = true
              }
            }
          }
        })
      })

      if (shouldRemove) {
        removeBrandingButton()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Run immediately
    removeBrandingButton()

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
