import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SitoIdealist — Sito web professionale in 24 ore',
  description:
    'Ricevi un sito web moderno, veloce e ottimizzato per acquisire nuovi clienti. Design professionale con consegna garantita in sole 24 ore.',
  keywords: [
    'sito web professionale',
    'realizzazione sito web',
    'sito web 24 ore',
    'web design',
    'landing page',
    'sito internet',
    'SitoIdealist',
  ],
  authors: [{ name: 'SitoIdealist', url: 'https://sitoidealist.it' }],
  creator: 'SitoIdealist',
  metadataBase: new URL('https://sitoidealist.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://sitoidealist.it',
    title: 'SitoIdealist — Sito web professionale in 24 ore',
    description:
      'Ricevi un sito web moderno, veloce e ottimizzato per acquisire nuovi clienti. Consegna garantita in 24 ore.',
    siteName: 'SitoIdealist',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SitoIdealist — Sito web professionale in 24 ore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SitoIdealist — Sito web professionale in 24 ore',
    description:
      'Ricevi un sito web moderno e ottimizzato per acquisire nuovi clienti. Consegna in 24 ore.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'SitoIdealist',
  description:
    'Realizziamo siti web professionali in 24 ore. Design moderno, responsive e ottimizzato per la conversione.',
  url: 'https://sitoidealist.it',
  email: 'info@sitoidealist.it',
  telephone: '+39-000-000-0000',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IT',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Piani di sviluppo web',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Piano Starter',
        price: '248',
        priceCurrency: 'EUR',
        description: 'Landing page professionale con consegna in 24 ore',
      },
      {
        '@type': 'Offer',
        name: 'Piano Premium',
        price: '458',
        priceCurrency: 'EUR',
        description: 'Sito fino a 5 pagine con design personalizzato',
      },
      {
        '@type': 'Offer',
        name: 'Piano Business',
        price: '998',
        priceCurrency: 'EUR',
        description: 'Sito fino a 15 pagine con SEO avanzata e blog',
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#07152F] text-white antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
