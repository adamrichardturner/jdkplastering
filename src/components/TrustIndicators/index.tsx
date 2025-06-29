'use client'

import { motion } from 'framer-motion'
import { Award, Users, CheckCircle, Shield } from 'lucide-react'
import { StandardButton } from '@/components/ui/standard-button'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function TrustIndicators() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose JDK Plastering?
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Trusted professionals delivering exceptional results across London
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          {[
            {
              icon: Award,
              title: 'Fully Qualified & Insured',
              description:
                'PCA-compliant systems with comprehensive warranties',
              gradient: 'from-yellow-400 to-orange-500',
              bg: 'from-yellow-500/20 to-orange-500/20',
            },
            {
              icon: Users,
              title: 'Trusted by Homeowners',
              description: 'Hundreds of satisfied customers across London',
              gradient: 'from-green-400 to-emerald-500',
              bg: 'from-green-500/20 to-emerald-500/20',
            },
            {
              icon: CheckCircle,
              title: 'Free Site Surveys',
              description: 'Transparent quotes with clear communication',
              gradient: 'from-blue-400 to-cyan-500',
              bg: 'from-blue-500/20 to-cyan-500/20',
            },
            {
              icon: Shield,
              title: 'Price Match Guaranteed',
              description: 'Competitive pricing with quality guarantees',
              gradient: 'from-purple-400 to-pink-500',
              bg: 'from-purple-500/20 to-pink-500/20',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="group"
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-500 ease-out h-full">
                {/* Icon with animated background */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${item.bg} rounded-2xl flex items-center justify-center mb-6 mx-auto relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                  >
                    <item.icon className="w-8 h-8 text-white relative z-10" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-indigo-100 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <StandardButton variant="primary" href="/contact" icon="phone">
            Get Free Quote Today
          </StandardButton>
        </motion.div>
      </div>
    </section>
  )
}
