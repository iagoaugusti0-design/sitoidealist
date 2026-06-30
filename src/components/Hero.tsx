'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowRight, Star, CheckCircle, Users, ChevronDown } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.21, 1.02, 0.73, 1.0] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#07152F] pt-20">
      {/* Gradient blobs */}
      <div className="absolute top-[-120px] right-[-80px] w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full bg-[#5A54FF] opacity-[0.10] blur-[80px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-120px] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#5A54FF] opacity-[0.06] blur-[60px] sm:blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Delivery badge */}
        <motion.div {...fadeUp(0)} className="mb-8 inline-flex">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/[0.12] text-sm font-medium">
            <Clock className="w-4 h-4 text-[#5A54FF]" />
            <span className="text-white/85">Consegna garantita in 24h</span>
            <span className="inline-flex rounded-full h-2 w-2 bg-green-400" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] tracking-tight text-white mb-6"
        >
          Il tuo sito web professionale
          <br />
          <span className="bg-gradient-to-r from-[#5A54FF] via-[#7977FF] to-[#A8A5FF] bg-clip-text text-transparent">
            pronto in 24 ore
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Ricevi un sito web moderno, veloce e ottimizzato per acquisire nuovi clienti.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <a
            href="#contatti"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5A54FF] hover:bg-[#4A44EF] text-white font-semibold text-base rounded-xl transition-all duration-200 shadow-xl shadow-[#5A54FF]/30 hover:shadow-[#5A54FF]/50 hover:-translate-y-0.5"
          >
            Richiedi il tuo sito
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#prezzi"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.07] hover:bg-white/[0.11] text-white font-semibold text-base rounded-xl border border-white/[0.15] hover:border-white/25 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Scopri i piani
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-white/50"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span>500+ siti consegnati</span>
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-1">4.7/5 valutazione media</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#5A54FF] flex-shrink-0" />
            <span>200+ clienti soddisfatti</span>
          </div>
        </motion.div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: 'easeOut' }}
          className="relative mt-20 mx-auto max-w-3xl"
        >
          {/* Glow under mockup */}
          <div className="absolute -inset-2 bg-[#5A54FF]/15 rounded-3xl blur-2xl" />

          <div className="relative bg-[#0B1A38] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.07]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]/80" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]/80" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]/80" />
              </div>
              <div className="flex-1 mx-4 max-w-xs mx-auto">
                <div className="bg-white/[0.06] rounded-md px-3 py-1.5 text-xs text-white/30 text-center font-mono tracking-wide">
                  tuaazienda.it
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Fake website content */}
            <div className="p-6 md:p-8 bg-[#0B1A38]">
              {/* Fake nav */}
              <div className="flex items-center justify-between mb-8">
                <div className="h-4 w-20 bg-[#5A54FF]/50 rounded" />
                <div className="hidden sm:flex gap-4">
                  <div className="h-3 w-10 bg-white/[0.12] rounded" />
                  <div className="h-3 w-10 bg-white/[0.12] rounded" />
                  <div className="h-3 w-14 bg-white/[0.12] rounded" />
                </div>
              </div>
              {/* Fake hero */}
              <div className="max-w-sm">
                <div className="h-2 w-24 bg-[#5A54FF]/40 rounded mb-4" />
                <div className="h-6 w-4/5 bg-white/[0.18] rounded mb-2" />
                <div className="h-6 w-3/5 bg-[#5A54FF]/40 rounded mb-5" />
                <div className="h-3 w-full bg-white/[0.08] rounded mb-2" />
                <div className="h-3 w-4/5 bg-white/[0.08] rounded mb-7" />
                <div className="flex gap-3">
                  <div className="h-10 w-32 bg-[#5A54FF]/65 rounded-lg" />
                  <div className="h-10 w-24 bg-white/[0.08] border border-white/[0.12] rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating time badge */}
          <div className="absolute -top-5 -left-3 md:-left-8 bg-[#5A54FF] rounded-2xl px-4 py-3 shadow-2xl shadow-[#5A54FF]/30 flex items-center gap-2">
            <Clock className="w-4 h-4 text-white/80" />
            <div className="text-xs font-bold text-white whitespace-nowrap">⚡ 24h garantite</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  )
}
