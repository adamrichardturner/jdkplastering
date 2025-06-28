import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#090909] text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity">
                <Image
                  src="/logo/jdk-logo.svg"
                  alt="JDK Plastering & Damp Specialist Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="text-lg font-bold">JDK PLASTERING</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    & DAMP SPECIALIST
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Expert plastering, waterproofing, and energy-saving insulation
              systems with over a decade of experience across London.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <Phone className="w-4 h-4" />
              <span>07943 51930</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </div>
              <div>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <div className="space-y-3 text-gray-400">
              <div>Plastering & Finishing</div>
              <div>External Wall Insulation</div>
              <div>Damp Proofing</div>
              <div>Rendering Systems</div>
              <div>Venetian Plastering</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div>London, England</div>
              <div>Mon-Sat: 9am - 6pm</div>
              <div>info@jdkplastering.co.uk</div>
              <div>07943 51930</div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="text-center text-gray-400">
          <p>
            &copy; {year} JDK Plastering & Damp Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
