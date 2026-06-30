'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/3512529115?text=Ciao!%20Vorrei%20richiedere%20un%20preventivo%20per%20il%20mio%20sito%20web.'

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.4, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl shadow-green-500/40 transition-colors duration-200"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </a>
    </motion.div>
  )
}
