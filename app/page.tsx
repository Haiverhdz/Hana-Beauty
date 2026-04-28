import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import Galeria from '@/components/Galeria'
import Nosotros from '@/components/Nosotros'
import Testimonios from '@/components/Testimonios'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import WhatsAppBtn from '@/components/WhatsAppBtn'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Galeria />
        <Nosotros />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppBtn />
    </>
  )
}