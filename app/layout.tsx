import './globals.css'

export const metadata = {
  title: 'Hana Beauty | Maquillaje Artístico y Estética',
  description:
    'Estudio de cosmetología especializado en maquillaje artístico, maquillaje de novia, quinceañeras, body painting maternal y más. Transforma tu belleza con Hana Beauty.',
  keywords: 'maquillaje artístico, maquillaje novia, quinceañeras, body painting, lifting pestañas, cejas henna',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}