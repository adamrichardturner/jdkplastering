export interface CookiePreferences {
  essential: boolean
  analytics: boolean
}

export const COOKIE_CONSENT_KEY = 'cookie-consent'

export const getCookiePreferences = (): CookiePreferences => {
  if (typeof window === 'undefined') {
    return {
      essential: true,
      analytics: false,
    }
  }

  const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
  if (!consent) {
    return {
      essential: true,
      analytics: false,
    }
  }

  try {
    return JSON.parse(consent)
  } catch {
    return {
      essential: true,
      analytics: false,
    }
  }
}

export const setCookiePreferences = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined') return

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences))

  // Handle Google Analytics based on analytics preference
  if (preferences.analytics) {
    enableGoogleAnalytics()
  } else {
    disableGoogleAnalytics()
  }
}

export const enableGoogleAnalytics = (): void => {
  if (typeof window === 'undefined') return

  // Enable Google Analytics
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(args)
    }
  }

  // Set consent mode
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
  })

  // Send page view if consent is granted
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    send_page_view: true,
  })
}

export const disableGoogleAnalytics = (): void => {
  if (typeof window === 'undefined') return

  // Disable Google Analytics
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(args)
    }
  }

  // Set consent mode to denied
  window.gtag('consent', 'update', {
    analytics_storage: 'denied',
  })

  // Clear existing analytics cookies
  const cookies = document.cookie.split(';')
  cookies.forEach((cookie) => {
    const [name] = cookie.split('=')
    if (
      name.trim().startsWith('_ga') ||
      name.trim().startsWith('_gid') ||
      name.trim().startsWith('_gat')
    ) {
      document.cookie = `${name.trim()}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    }
  })
}

export const clearAllCookies = (): void => {
  if (typeof window === 'undefined') return

  // Clear all cookies except essential ones
  const cookies = document.cookie.split(';')
  cookies.forEach((cookie) => {
    const [name] = cookie.split('=')
    const cookieName = name.trim()

    // Don't clear essential cookies (session, security, etc.)
    if (
      !cookieName.startsWith('_ga') &&
      !cookieName.startsWith('_gid') &&
      !cookieName.startsWith('_gat') &&
      !cookieName.startsWith('cookie-consent')
    ) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    }
  })
}

// Initialize consent mode on page load
export const initializeConsentMode = (): void => {
  if (typeof window === 'undefined') return

  const preferences = getCookiePreferences()

  // Set up Google Analytics consent mode
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(args)
    }
  }

  // Set default consent state
  window.gtag('consent', 'default', {
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    functionality_storage: 'granted',
    personalization_storage: 'granted',
    security_storage: 'granted',
  })

  // If analytics is enabled, initialize GA
  if (preferences.analytics) {
    enableGoogleAnalytics()
  }
}

// Declare global types for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
