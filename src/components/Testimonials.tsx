'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marco Rossi',
    role: 'Avvocato',
    company: 'Studio Legale Rossi & Associati',
    text: 'Avevo bisogno di un sito urgente per una conferenza imminente. In 24 ore avevo un sito professionale che ha stupito tutti i partecipanti. Qualità eccellente, tempi rispettati al minuto. Consiglio vivamente.',
    avatar: 'MR',
    rating: 5,
  },
  {
    name: 'Laura Bianchi',
    role: 'Nutrizionista',
    company: 'Studio Nutrizione Bianchi',
    text: 'Pensavo fosse impossibile avere un sito del genere in così poco tempo. Mi sbagliavo. Design elegante, veloce e ottimizzato per i motori di ricerca. Il numero di nuovi clienti è cresciuto subito dopo il lancio.',
    avatar: 'LB',
    rating: 5,
  },
  {
    name: 'Giovanni Ferrari',
    role: 'CEO',
    company: 'Ferrari Consulting Srl',
    text: 'Abbiamo scelto il piano Business per il nostro nuovo sito aziendale. Risultato impeccabile, rispetto assoluto dei tempi e assistenza sempre disponibile. Un team davvero professionale e affidabile.',
    avatar: 'GF',
    rating: 5,
  },
]

const avatarColors = ['bg-[#5A54FF]', 'bg-[#7B77FF]', 'bg-[#4A44EF]']

export default function Testimonials() {
  return (
    <section
      id="testimonianze"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#050F24' }}
    >
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#5A54FF]/[0.05] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#5A54FF]/[0.04] rounded-full blur-[70px] pointer-events-none" />

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
            Testimonianze
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Cosa dicono i nostri clienti
          </h2>
          {/* Stars row */}
          <div className="flex items-center justify-center gap-1.5 mt-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-2 text-white/50 text-sm">4.9/5 · 200+ recensioni</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative flex flex-col p-7 rounded-2xl bg-white/[0.035] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
            >
              {/* Quote mark */}
              <Quote className="w-8 h-8 text-[#5A54FF]/35 mb-4 flex-shrink-0" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-white/55 text-sm leading-relaxed flex-grow mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div
                  className={`w-10 h-10 ${avatarColors[index]} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-lg`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
