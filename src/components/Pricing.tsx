'use client'

import { motion } from 'framer-motion'
import { Check, Zap, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '248',
    description: 'Ideale per freelance e professionisti.',
    badge: 'Più scelto',
    featured: true,
    cta: 'Inizia con Starter',
    features: [
      'Landing page professionale',
      'Design responsive',
      'Modulo contatti',
      'SEO base',
      'Consegna in 24 ore',
      '1 revisione inclusa',
    ],
  },
  {
    name: 'Premium',
    price: '458',
    description: 'Perfetto per piccole aziende.',
    badge: null,
    featured: false,
    cta: 'Scegli Premium',
    features: [
      'Fino a 5 pagine',
      'Design personalizzato',
      'SEO avanzata base',
      'Modulo contatti',
      'Collegamento social',
      'Google Maps integrato',
      'WhatsApp integrato',
      '2 revisioni incluse',
      'Consegna in 24 ore',
    ],
  },
  {
    name: 'Business',
    price: '998',
    description: 'Per aziende che vogliono crescere online.',
    badge: null,
    featured: false,
    cta: 'Richiedi Business',
    features: [
      'Fino a 15 pagine',
      'Design premium personalizzato',
      'SEO avanzata',
      'Blog integrato',
      'Ottimizzazione performance',
      'Analytics configurato',
      'Moduli avanzati',
      'Supporto prioritario',
      'Revisioni illimitate',
      'Consegna in 24 ore',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="prezzi" className="relative py-24 md:py-32 bg-[#07152F] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#5A54FF]/[0.08] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block text-[#5A54FF] text-sm font-semibold uppercase tracking-widest mb-3">
            Prezzi trasparenti
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Scegli il piano giusto per te
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Tutti i piani includono consegna in 24 ore e design professionale. Pagamento unico, nessun abbonamento.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-center mt-14">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl flex flex-col ${
                plan.featured
                  ? 'bg-gradient-to-b from-[#5A54FF] to-[#4A44EF] shadow-2xl shadow-[#5A54FF]/35 scale-100 md:scale-105 z-10'
                  : 'bg-white/[0.035] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.055] transition-all duration-300'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-[#5A54FF] text-xs font-bold rounded-full shadow-xl whitespace-nowrap">
                    <Zap className="w-3 h-3 fill-[#5A54FF]" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-7 md:p-8 flex flex-col h-full">
                {/* Plan name & description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className={`text-sm ${plan.featured ? 'text-white/70' : 'text-white/45'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-5xl font-bold text-white tracking-tight">{plan.price}€</span>
                  <span className={`text-sm ${plan.featured ? 'text-white/55' : 'text-white/35'}`}>
                    una tantum
                  </span>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${plan.featured ? 'bg-white/20' : 'bg-white/[0.07]'}`} />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured ? 'bg-white/20' : 'bg-[#5A54FF]/15'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.featured ? 'text-white' : 'text-[#5A54FF]'}`} strokeWidth={2.5} />
                      </div>
                      <span className={plan.featured ? 'text-white/85' : 'text-white/60'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contatti"
                  className={`group flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.featured
                      ? 'bg-white text-[#5A54FF] hover:bg-white/95 shadow-xl shadow-black/10'
                      : 'bg-[#5A54FF] hover:bg-[#4A44EF] text-white shadow-lg shadow-[#5A54FF]/20'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          Tutti i prezzi sono IVA esclusa. Nessun abbonamento, nessun costo ricorrente.
        </motion.p>
      </div>
    </section>
  )
}
