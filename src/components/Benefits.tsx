'use client'

import { motion } from 'framer-motion'
import { Clock, Award, Smartphone, Search, Headphones, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Consegna in 24 ore',
    description:
      'Il tuo sito è pronto il giorno successivo alla tua richiesta. Consegna garantita, senza compromessi sulla qualità.',
  },
  {
    icon: Award,
    title: 'Design professionale',
    description:
      "Ogni sito è progettato su misura per fare un'ottima prima impressione e convertire i visitatori in clienti.",
  },
  {
    icon: Smartphone,
    title: 'Responsive su tutti i dispositivi',
    description:
      'Perfettamente ottimizzato per desktop, tablet e smartphone. I tuoi clienti ti trovano ovunque.',
  },
  {
    icon: Search,
    title: 'SEO base inclusa',
    description:
      'Ottimizzato per i motori di ricerca fin dal primo giorno, per essere trovato facilmente su Google.',
  },
  {
    icon: Headphones,
    title: 'Assistenza dedicata',
    description:
      'Supporto rapido e professionale incluso in ogni piano. Non sarai mai lasciato solo.',
  },
  {
    icon: ShieldCheck,
    title: 'Nessun costo nascosto',
    description:
      'Prezzi chiari e trasparenti. Paghi esattamente quello che vedi, senza sorprese o costi aggiuntivi.',
  },
]

export default function Benefits() {
  return (
    <section id="benefici" className="relative py-24 md:py-32 bg-[#07152F] overflow-hidden">
      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#5A54FF]/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#5A54FF] text-sm font-semibold uppercase tracking-widest mb-3">
            I nostri vantaggi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Perché scegliere{' '}
            <span className="bg-gradient-to-r from-[#5A54FF] to-[#A8A5FF] bg-clip-text text-transparent">
              SitoIdealist
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-6 md:p-7 rounded-2xl bg-white/[0.035] border border-white/[0.08] hover:border-[#5A54FF]/40 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                {/* Corner gradient on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5A54FF]/0 to-[#5A54FF]/0 group-hover:from-[#5A54FF]/[0.04] group-hover:to-transparent transition-all duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#5A54FF]/[0.12] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#5A54FF]/[0.22] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#5A54FF]" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
