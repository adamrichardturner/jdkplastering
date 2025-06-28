'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, MapPin, Clock, Menu, X } from 'lucide-react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const pathname = usePathname()

  const isActivePage = (path: string) => {
    if (path === '/' && pathname === '/') {
      return true
    }
    return pathname === path
  }

  return (
    <>
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>London, England</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 9am - 6pm</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600 font-medium">
                <Phone className="w-4 h-4" />
                <span>07943 51930</span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-[#090909]/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
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
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
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
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 font-semibold cursor-pointer">
                <Phone className="w-4 h-4 mr-2" />
                07943 51930
              </Button>
            </div>

            <Button
              size="sm"
              variant="ghost"
              className="md:hidden text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black z-[60] md:hidden h-screen w-screen flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* Top Section - Logo with Close Button */}
              <motion.div
                className="flex justify-between items-center px-6 pt-12 pb-8"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {/* Logo */}
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

                {/* Close Button */}
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-white hover:bg-gray-700/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </motion.div>

              {/* Center Section - Navigation Menu */}
              <div className="flex-1 flex flex-col justify-center items-center px-8">
                <motion.div
                  className="flex flex-col space-y-12 text-center"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/"
                      className={`text-2xl font-bold hover:text-blue-400 transition-all duration-300 relative ${
                        isActivePage('/') ? 'text-blue-400' : 'text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                      {isActivePage('/') && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
                      )}
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/about"
                      className={`text-2xl font-bold hover:text-blue-400 transition-all duration-300 relative ${
                        isActivePage('/about') ? 'text-blue-400' : 'text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                      {isActivePage('/about') && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
                      )}
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/services"
                      className={`text-2xl font-bold hover:text-blue-400 transition-all duration-300 relative ${
                        isActivePage('/services')
                          ? 'text-blue-400'
                          : 'text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                      {isActivePage('/services') && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
                      )}
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className={`text-2xl font-bold hover:text-blue-400 transition-all duration-300 relative ${
                        isActivePage('/contact')
                          ? 'text-blue-400'
                          : 'text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                      {isActivePage('/contact') && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
                      )}
                    </Link>
                  </motion.div>

                  <motion.div
                    className="mt-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Button
                      className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      07943 51930
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  )
}
