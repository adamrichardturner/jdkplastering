'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings, Shield, Eye, CheckCircle } from 'lucide-react'
import { StandardButton } from '@/components/ui/standard-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  CookiePreferences,
  getCookiePreferences,
  setCookiePreferences,
} from '@/lib/cookie-utils'

interface CookieConsentProps {
  onPreferencesChange: (preferences: CookiePreferences) => void
}

export default function CookieConsent({
  onPreferencesChange,
}: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
  })

  useEffect(() => {
    const savedPreferences = getCookiePreferences()
    if (!localStorage.getItem('cookie-consent')) {
      setShowBanner(true)
    } else {
      setPreferences(savedPreferences)
      onPreferencesChange(savedPreferences)
    }
  }, [onPreferencesChange])

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
    }
    setPreferences(allAccepted)
    setCookiePreferences(allAccepted)
    setShowBanner(false)
    onPreferencesChange(allAccepted)
  }

  const handleDeclineAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
    }
    setPreferences(essentialOnly)
    setCookiePreferences(essentialOnly)
    setShowBanner(false)
    onPreferencesChange(essentialOnly)
  }

  const handleSavePreferences = () => {
    setCookiePreferences(preferences)
    setShowBanner(false)
    setShowSettings(false)
    onPreferencesChange(preferences)
  }

  const handlePreferenceChange = (
    type: keyof CookiePreferences,
    value: boolean
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: value,
    }))
  }

  const handleResetPreferences = () => {
    localStorage.removeItem('cookie-consent')
    setShowBanner(true)
    setShowSettings(false)
    // Reset to default preferences
    const defaultPreferences = {
      essential: true,
      analytics: false,
    }
    setPreferences(defaultPreferences)
    onPreferencesChange(defaultPreferences)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-2 left-2 right-2 md:bottom-6 md:left-auto md:right-6 z-50 w-auto md:max-w-sm"
        >
          <Card className="border-0 shadow-2xl bg-white">
            <CardContent>
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Cookie Preferences
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We use cookies to improve your experience and analyze site
                traffic.
                <a
                  href="/terms"
                  className="text-blue-600 hover:text-blue-700 underline font-medium ml-1"
                >
                  Learn more
                </a>
              </p>

              <div className="flex flex-col gap-2">
                <StandardButton
                  variant="primary"
                  onClick={handleAcceptAll}
                  icon="none"
                  className="w-full"
                >
                  Accept All
                </StandardButton>
                <div className="flex gap-2">
                  <StandardButton
                    variant="white"
                    onClick={() => setShowSettings(true)}
                    icon="none"
                    className="flex-1"
                    size="sm"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Customize
                  </StandardButton>
                  <StandardButton
                    variant="white"
                    onClick={handleDeclineAll}
                    icon="none"
                    className="flex-1"
                    size="sm"
                  >
                    Decline
                  </StandardButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            key="cookie-settings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-[10000]"
            >
              <Card className="border-0 shadow-2xl">
                <CardHeader className="border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-slate-900 flex items-center space-x-3">
                      <Settings className="w-6 h-6 text-blue-600" />
                      <span>Cookie Settings</span>
                    </CardTitle>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500 cursor-pointer" />
                    </button>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  <p className="text-slate-600 leading-relaxed">
                    Manage your cookie preferences below. Essential cookies are
                    always enabled as they are necessary for the website to
                    function properly.
                  </p>

                  {/* Essential Cookies */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-green-900">
                            Essential Cookies
                          </h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Always Active
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-green-800">
                          These cookies are necessary for the website to
                          function and cannot be disabled. They include session
                          management, security, and basic functionality.
                        </p>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-blue-900">
                            Analytics Cookies
                          </h4>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={preferences.analytics}
                              onChange={(e) =>
                                handlePreferenceChange(
                                  'analytics',
                                  e.target.checked
                                )
                              }
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        <p className="text-sm text-blue-800">
                          Help us understand how visitors interact with our
                          website by collecting and reporting information
                          anonymously. This includes Google Analytics data.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex flex-col sm:flex-row gap-3 justify-end">
                    <StandardButton
                      variant="secondary"
                      onClick={() => setShowSettings(false)}
                      icon="none"
                    >
                      Cancel
                    </StandardButton>
                    <StandardButton
                      variant="primary"
                      onClick={handleSavePreferences}
                      icon="none"
                    >
                      Save Preferences
                    </StandardButton>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handleResetPreferences}
                      className="text-sm text-gray-500 hover:text-gray-700 underline"
                    >
                      Reset all preferences
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}
