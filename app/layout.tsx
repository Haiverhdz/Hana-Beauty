import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://hanabeauty.com.co'),

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
    description: 'Maquillaje profesional y estética en Supia y Armenia.',
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
    description: 'Maquillaje profesional y estética en Supia y Armenia.',
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

const GTM_ID = 'GTM-MX996HTX'
const GA_ID = 'G-VTNCN4KZCV'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  )
}