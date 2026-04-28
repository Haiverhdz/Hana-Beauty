'use client'

import { useState } from 'react'
import styles from './Testimonios.module.css'

const testimonios = [
  {
    id: 1,
    nombre: 'Valentina R.',
    servicio: 'Maquillaje de Novia',
    texto:
      'El día de mi boda me sentí la mujer más hermosa del mundo. El maquillaje duró todo el día, desde la ceremonia hasta el último baile. ¡Gracias, Hana Beauty!',
    estrellas: 5,
  },
  {
    id: 2,
    nombre: 'Daniela M.',
    servicio: 'Maquillaje Artístico',
    texto:
      'Vine con una idea muy vaga y el resultado superó todas mis expectativas. La creatividad y el detalle son increíbles. Definitivamente volvería para cada sesión de fotos.',
    estrellas: 5,
  },
  {
    id: 3,
    nombre: 'Laura C.',
    servicio: 'Body Painting Maternal',
    texto:
      'La sesión de body painting fue mágica. Capturaron el amor por mi bebé de una manera tan artística y especial. Guardamos esas fotos como un tesoro.',
    estrellas: 5,
  },
  {
    id: 4,
    nombre: 'Sofía P.',
    servicio: 'Lifting de Pestañas',
    texto:
      'Llevaba tiempo queriendo hacerme el lifting y no me arrepiento para nada. Mis pestañas se ven espectaculares y súper naturales. Volveré cada dos meses.',
    estrellas: 5,
  },
  {
    id: 5,
    nombre: 'Isabella T.',
    servicio: 'Maquillaje Quinceañeras',
    texto:
      'Mi hija quedó radiante para sus 15 años. La artista entendió exactamente el look que queríamos: glamuroso pero acorde a su edad. ¡Perfecta!',
    estrellas: 5,
  },
]

export default function Testimonios() {
  const [activo, setActivo] = useState(0)

  const prev = () => setActivo((i) => (i - 1 + testimonios.length) % testimonios.length)
  const next = () => setActivo((i) => (i + 1) % testimonios.length)

  const t = testimonios[activo]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Decorative */}
        <div className={styles.deco}>"</div>

        <div className={styles.header}>
          <p className={styles.eyebrow}>Testimonios</p>
          <h2 className={styles.title}>
            Lo que dicen <em>nuestras clientas</em>
          </h2>
        </div>

        <div className={styles.slider}>
          <button className={`${styles.navBtn} ${styles.prev}`} onClick={prev} aria-label="Anterior">
            ‹
          </button>

          <div className={styles.card} key={t.id}>
            <div className={styles.stars}>
              {Array.from({ length: t.estrellas }).map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>
            <blockquote className={styles.quote}>"{t.texto}"</blockquote>
            <div className={styles.author}>
              <div className={styles.authorInitials}>
                {t.nombre.charAt(0)}
              </div>
              <div>
                <p className={styles.authorName}>{t.nombre}</p>
                <p className={styles.authorService}>{t.servicio}</p>
              </div>
            </div>
          </div>

          <button className={`${styles.navBtn} ${styles.next}`} onClick={next} aria-label="Siguiente">
            ›
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {testimonios.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activo ? styles.dotActive : ''}`}
              onClick={() => setActivo(i)}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
