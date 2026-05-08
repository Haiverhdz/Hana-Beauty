import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://hanabeauty.com'),

  title: {
    default: 'Hana Beauty | Maquillaje Profesional en Supia y Armenia',
    template: '%s | Hana Beauty',
  },

  description:
    'Estudio de belleza especializado en maquillaje artístico, maquillaje para novias, quinceañeras, lifting de pestañas, cejas con henna y body painting en Supia y Armenia.',

  keywords: [
    'Hana Beauty',
    'maquillaje profesional Supia',
    'maquillaje profesional Armenia',
    'maquillaje artístico Supia',
    'maquillaje artístico Armenia',
    'maquillaje para novias Supia',
    'maquillaje para quinceañeras Supia',
    'body painting maternal',
    'lifting de pestañas',
    'cejas con henna Supia',
    'pestañas pelo a pelo',
  ],

  authors: [{ name: 'Hana Beauty' }],

  creator: 'Hana Beauty',

  openGraph: {
    title: 'Hana Beauty',
    description:
      'Maquillaje profesional y estética en Supia y Armenia.',
    url: 'https://hanabeauty.com',
    siteName: 'Hana Beauty',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hana Beauty',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hana Beauty',
    description:
      'Maquillaje profesional y estética en Supia y Armenia.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}


