'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Il sito è davvero pronto in 24 ore?',
    a: 'Sì, garantiamo la consegna entro 24 ore dalla ricezione di tutte le informazioni necessarie al progetto. Il nostro team lavora in modo dedicato per rispettare ogni scadenza. In caso di ritardi imputabili a noi, prevediamo un rimborso parziale del costo del servizio.',
  },
  {
    q: 'Posso richiedere modifiche dopo la consegna?',
    a: 'Assolutamente sì. Ogni piano include un numero definito di revisioni: 1 per Starter, 2 per Premium e illimitate per Business. Le revisioni devono essere richieste entro 7 giorni dalla consegna. Revisioni aggiuntive possono essere acquistate separatamente a tariffe convenienti.',
  },
  {
    q: 'Dominio e hosting sono inclusi nel prezzo?',
    a: 'Il servizio non include dominio e hosting di default, che rimangono a carico del cliente per garantire la massima flessibilità nella scelta del provider. Possiamo però guidarti nella scelta e nella configurazione del miglior servizio per le tue esigenze specifiche, senza costi aggiuntivi.',
  },
  {
    q: 'Posso passare a un piano superiore in seguito?',
    a: "Certamente! Puoi effettuare l'upgrade a un piano superiore in qualsiasi momento, pagando solo la differenza di prezzo tra i piani. Non ci sono penali o costi nascosti per il cambio piano. Contattaci via email o WhatsApp per gestire l'upgrade in modo semplice e rapido.",
  },
]

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
        open ? 'border-[#5A54FF]/40 bg-white/[0.05]' : 'border-white/[0.08] bg-white/[0.025] hover:border-white/[0.14]'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-sm md:text-base leading-snug">{item.q}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
            open ? 'bg-[#5A54FF] text-white' : 'bg-white/[0.07] text-white/50'
          }`}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-white/55 text-sm leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#07152F]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#5A54FF] text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Domande frequenti</h2>
          <p className="text-white/45 mt-4 text-sm">
            Non trovi la risposta che cerchi?{' '}
            <a href="#contatti" className="text-[#5A54FF] hover:text-[#7977FF] transition-colors">
              Contattaci direttamente.
            </a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
