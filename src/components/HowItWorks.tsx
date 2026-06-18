'use client'

import { motion } from 'framer-motion'
import { FileText, Cpu, Rocket } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Compila il modulo',
    description:
      'Invia le informazioni del tuo progetto attraverso il nostro modulo semplice e veloce. Più dettagli fornisci, migliore sarà il risultato finale.',
    color: 'from-[#5A54FF] to-[#7977FF]',
  },
  {
    icon: Cpu,
    title: 'Realizziamo il sito',
    description:
      'Il nostro team di designer e sviluppatori crea il tuo sito web professionale entro 24 ore dalla ricezione del briefing completo.',
    color: 'from-[#7977FF] to-[#9B99FF]',
  },
  {
    icon: Rocket,
    title: 'Ricevi il sito pronto',
    description:
      'Ti consegniamo il sito completo, testato e pronto per essere pubblicato online. Inizia subito ad acquisire nuovi clienti.',
    color: 'from-[#9B99FF] to-[#A8A5FF]',
  },
]

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#050F24' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07152F] via-[#050F24] to-[#050F24] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-[#5A54FF] text-sm font-semibold uppercase tracking-widest mb-3">
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Dal tuo briefing al sito online
            <br />
            <span className="text-white/40">in un solo giorno</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-10 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px">
            <div className="h-full bg-gradient-to-r from-[#5A54FF]/40 via-[#7977FF]/40 to-[#A8A5FF]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#5A54FF] via-[#7977FF] to-[#A8A5FF] opacity-20 blur-sm" />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Icon + number */}
                <div className="relative mb-7">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-2xl shadow-[#5A54FF]/20`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-3 -right-3 w-7 h-7 bg-[#050F24] border-2 border-[#5A54FF] rounded-full flex items-center justify-center">
                    <span className="text-[#5A54FF] text-xs font-bold">{index + 1}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm max-w-xs lg:max-w-none">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 text-[#5A54FF] hover:text-[#7977FF] text-sm font-medium transition-colors group"
          >
            Inizia adesso
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
