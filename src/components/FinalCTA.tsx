'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, Send, CheckCircle, Loader2, Shield, Clock } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/3512529115?text=Ciao!%20Vorrei%20richiedere%20un%20preventivo%20per%20il%20mio%20sito%20web.'

interface FormState {
  name: string
  email: string
  phone: string
  plan: string
  message: string
}

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    plan: 'premium',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // Replace with your email service (Resend, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  const inputClass =
    'w-full bg-white/[0.05] border border-white/[0.12] rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#5A54FF]/70 focus:bg-white/[0.08] transition-all duration-200'

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-14 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Richiesta inviata!</h3>
        <p className="text-white/55 text-sm max-w-xs">
          Perfetto! Ti contatteremo entro 2 ore per iniziare a lavorare al tuo progetto.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/50 text-xs font-medium mb-1.5 ml-1">
            Nome e cognome <span className="text-[#5A54FF]">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder="Mario Rossi"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-white/50 text-xs font-medium mb-1.5 ml-1">
            Email <span className="text-[#5A54FF]">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="mario@email.com"
            className={inputClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/50 text-xs font-medium mb-1.5 ml-1">Telefono</label>
          <input
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="+39 000 000 0000"
            className={inputClass}
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="block text-white/50 text-xs font-medium mb-1.5 ml-1">Piano</label>
          <select
            value={form.plan}
            onChange={update('plan')}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="starter" className="bg-[#0B1A38]">
              Starter — 248€
            </option>
            <option value="premium" className="bg-[#0B1A38]">
              Premium — 458€
            </option>
            <option value="business" className="bg-[#0B1A38]">
              Business — 998€
            </option>
            <option value="custom" className="bg-[#0B1A38]">
              Non so ancora
            </option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-white/50 text-xs font-medium mb-1.5 ml-1">
          Descrivi brevemente il tuo progetto
        </label>
        <textarea
          value={form.message}
          onChange={update('message')}
          rows={4}
          placeholder="Settore, tipo di attività, obiettivi del sito..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 py-4 bg-[#5A54FF] hover:bg-[#4A44EF] disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-[#5A54FF]/25 hover:shadow-[#5A54FF]/40 hover:-translate-y-px"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Invio in corso...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Invia richiesta
          </>
        )}
      </button>

      <p className="text-center text-white/30 text-xs pt-1">
        Risposta garantita entro 24 ore lavorative · Nessun impegno
      </p>
    </form>
  )
}

export default function FinalCTA() {
  return (
    <section id="contatti" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#050F24' }}>
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#5A54FF]/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-block text-[#5A54FF] text-sm font-semibold uppercase tracking-widest mb-4">
              Inizia oggi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Domani potresti
              <br />
              <span className="bg-gradient-to-r from-[#5A54FF] via-[#7977FF] to-[#A8A5FF] bg-clip-text text-transparent">
                già essere online.
              </span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Richiedi oggi il tuo sito web professionale e inizia ad acquisire nuovi clienti
              entro 24 ore.
            </p>

            {/* WhatsApp button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 mb-10"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Scrivici su WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Trust points */}
            <div className="space-y-4">
              {[
                { icon: Clock, text: 'Risposta entro 24 ore lavorative' },
                { icon: Shield, text: 'Preventivo gratuito e senza impegno' },
                { icon: CheckCircle, text: 'Pagamento solo dopo la tua approvazione' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-white/55 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#5A54FF]/[0.12] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#5A54FF]" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="bg-white/[0.035] border border-white/[0.08] rounded-2xl p-7 md:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-1">Richiedi il tuo preventivo</h3>
            <p className="text-white/45 text-sm mb-7">
              Compila il modulo e ti risponderemo entro 2 ore.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
