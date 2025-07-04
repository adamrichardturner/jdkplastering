'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActivePage = (path: string) => {
    if (path === '/' && pathname === '/') {
      return true
    }
    return pathname === path
  }

  return (
    <>
      {/* Navigation - Always fixed to top */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-[100] overflow-hidden transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-gradient-to-r from-black/95 via-gray-900/95 to-slate-900/95 backdrop-blur-md shadow-2xl border-b border-white/10'
            : 'bg-transparent backdrop-blur-none shadow-none border-b border-transparent'
        }`}
      >
        {/* Subtle background pattern for desktop - only visible when scrolled */}
        <div
          className={`absolute inset-0 opacity-3 pointer-events-none transition-opacity duration-500 ${
            isScrolled ? 'opacity-3' : 'opacity-0'
          }`}
        >
          <div className="absolute top-2 right-20 w-16 h-16 border border-white/10 rounded-full"></div>
          <div className="absolute top-3 left-32 w-12 h-12 border border-blue-400/10 rounded-full"></div>
          <div className="absolute bottom-2 right-40 w-14 h-14 border border-slate-400/10 rounded-full"></div>
        </div>
        <div className="md:container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo/jdk-logo.svg"
                  alt="JDK Plastering & Damp Specialist Logo"
                  width={50}
                  height={50}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <div className="text-xl font-bold text-white">
                    JDK PLASTERING
                  </div>
                  <div className="text-xs text-gray-300 uppercase tracking-wider">
                    & DAMP SPECIALIST
                  </div>
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-4 md:space-x-8">
              <Link
                href="/"
                className={`text-gray-300 hover:text-white transition-colors font-medium relative ${
                  isActivePage('/') ? 'text-white' : ''
                }`}
              >
                Home
                {isActivePage('/') && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </Link>
              <Link
                href="/about"
                className={`text-gray-300 hover:text-white transition-colors font-medium relative ${
                  isActivePage('/about') ? 'text-white' : ''
                }`}
              >
                About
                {isActivePage('/about') && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </Link>
              <Link
                href="/services"
                className={`text-gray-300 hover:text-white transition-colors font-medium relative ${
                  isActivePage('/services') ? 'text-white' : ''
                }`}
              >
                Services
                {isActivePage('/services') && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </Link>
              <Link
                href="/projects"
                className={`text-gray-300 hover:text-white transition-colors font-medium relative ${
                  isActivePage('/projects') ? 'text-white' : ''
                }`}
              >
                Projects
                {isActivePage('/projects') && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </Link>
              <Link
                href="/contact"
                className={`text-gray-300 hover:text-white transition-colors font-medium relative ${
                  isActivePage('/contact') ? 'text-white' : ''
                }`}
              >
                Contact
                {isActivePage('/contact') && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </Link>
              <Link href="tel:079468179671">
                <Button
                  className={`bg-gradient-to-r hidden lg:flex from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 font-semibold cursor-pointer shadow-lg hover:shadow-xl backdrop-blur-sm border transition-all duration-300 ${
                    isScrolled
                      ? 'border-blue-400/20'
                      : 'border-blue-400/40 shadow-2xl'
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  07946 817967
                </Button>
              </Link>
            </div>

            <Button
              size="sm"
              variant="ghost"
              className={`md:hidden text-white hover:bg-white/10 backdrop-blur-sm border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isScrolled ? 'border-white/20' : 'border-white/40 bg-black/20'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside navigation for proper positioning */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900 z-[9999] md:hidden w-screen flex flex-col"
            style={{ pointerEvents: 'auto' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute top-40 right-16 w-24 h-24 border border-blue-400/20 rounded-full"></div>
              <div className="absolute bottom-32 left-20 w-40 h-40 border border-slate-400/20 rounded-full"></div>
              <div className="absolute bottom-20 right-8 w-20 h-20 border border-indigo-400/20 rounded-full"></div>
            </div>

            {/* Top Section - Close Button */}
            <motion.div
              className="flex justify-end items-center px-8 pt-8 pb-4"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            >
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/15 transition-all duration-300 border border-white/20 shadow-2xl hover:shadow-white/20 hover:border-white/40"
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>

            {/* Navigation Menu */}
            <div className="flex-1 flex flex-col justify-center px-8">
              <motion.div
                className=""
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              >
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/services', label: 'Services' },
                  { href: '/projects', label: 'Projects' },
                  { href: '/contact', label: 'Contact' },
                ].map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between py-3 border-b border-white/10 hover:border-white/30 transition-all duration-300 hover:translate-x-2 w-full block cursor-pointer relative z-10"
                    onClick={(e) => {
                      e.stopPropagation()
                      // Let navigation happen first, then close menu with delay
                      setTimeout(() => {
                        setIsMenuOpen(false)
                      }, 100)
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-between w-full"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        duration: 0.5,
                        ease: 'easeOut',
                      }}
                    >
                      <span
                        className={`text-3xl font-bold transition-all duration-300 ${
                          isActivePage(item.href)
                            ? 'bg-gradient-to-r from-slate-300 to-blue-400 bg-clip-text text-transparent'
                            : 'text-white group-hover:text-blue-400'
                        }`}
                      >
                        {item.label}
                      </span>
                      <div className="text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                        →
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>

              {/* Call to Action Section */}
              <motion.div
                className="mt-6 space-y-3"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
              >
                <div className="text-sm text-gray-400 font-medium">
                  GET IN TOUCH
                </div>

                <motion.a
                  href="tel:079468179671"
                  className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group"
                  onClick={() => {
                    // Let phone action happen first, then close menu
                    setTimeout(() => {
                      setIsMenuOpen(false)
                    }, 100)
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">
                        Call Now
                      </div>
                      <div className="text-blue-100 text-sm">07946 817967</div>
                    </div>
                  </div>
                  <motion.div
                    className="text-white/80 group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
