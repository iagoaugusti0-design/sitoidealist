import { Zap, Mail, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Benefici', href: '#benefici' },
  { label: 'Come funziona', href: '#come-funziona' },
  { label: 'Prezzi', href: '#prezzi' },
  { label: 'Testimonianze', href: '#testimonianze' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contatti', href: '#contatti' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie' },
  { label: 'Termini di servizio', href: '/termini' },
]

export default function Footer() {
  return (
    <footer className="bg-[#040D1F] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 mb-5 group">
              <div className="w-8 h-8 bg-[#5A54FF] rounded-lg flex items-center justify-center shadow-lg shadow-[#5A54FF]/20">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Sito<span className="text-[#5A54FF]">Idealist</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Realizziamo siti web professionali in 24 ore. Velocità, qualità e affidabilità
              senza compromessi. Dal 2022.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:sitoidealist@gmail.com"
                className="flex items-center gap-2.5 text-white/40 hover:text-white text-sm transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#5A54FF] group-hover:text-[#7977FF] transition-colors" />
                info@sitoidealist.it
              </a>
              <a
                href="https://wa.me/3512529115?text=Ciao!%20Vorrei%20un%20preventivo."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-green-400 text-sm transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-green-500 group-hover:text-green-400 transition-colors" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Navigazione</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Legale</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </div>
                <span className="text-white/45 text-xs">Operativi 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} SitoIdealist. Tutti i diritti riservati.
          </p>
          <p className="text-white/25 text-xs">Made with ♥ in Italy</p>
        </div>
      </div>
    </footer>
  )
}
