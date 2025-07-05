'use client'

import { useEffect } from 'react'
import CookieConsent from './CookieConsent'
import { CookiePreferences, initializeConsentMode } from '@/lib/cookie-utils'

export default function CookieConsentWrapper() {
  useEffect(() => {
    // Initialize consent mode on component mount
    initializeConsentMode()
  }, [])

  const handlePreferencesChange = (preferences: CookiePreferences) => {
    // This function is called whenever cookie preferences change
    // The actual cookie management is handled in the utility functions
    console.log('Cookie preferences updated:', preferences)
  }

  return <CookieConsent onPreferencesChange={handlePreferencesChange} />
}
