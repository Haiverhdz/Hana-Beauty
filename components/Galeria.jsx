'use client'

import { useState } from 'react'
import styles from './Galeria.module.css'

const fotos = [
  { id: 1, src: '/images/galeria/artistico-1.webp', servicio: 'Maquillaje Artístico', categoria: 'artistico' },
  { id: 2, src: '/images/galeria/artistico-2.webp', servicio: 'Maquillaje Artístico', categoria: 'artistico' },
  { id: 3, src: '/images/galeria/artistico-3.webp', servicio: 'Maquillaje Artístico', categoria: 'artistico' },
  { id: 4, src: '/images/galeria/artistico-4.webp', servicio: 'Maquillaje Artístico', categoria: 'artistico' },
  { id: 5, src: '/images/galeria/artistico-5.webp', servicio: 'Maquillaje Artístico', categoria: 'artistico' },
  { id: 6, src: '/images/galeria/1.webp', servicio: 'Maquillaje Artístico', categoria: 'artistico' },
  { id: 7, src: '/images/galeria/artistico-7.webp', servicio: 'Maquillaje Artístico', categoria: 'artistico' },
  { id: 8, src: '/images/galeria/7.webp', servicio: 'Body Painting Maternal', categoria: 'body' },
  { id: 9, src: '/images/galeria/quince-1.webp', servicio: 'Maquillaje Quinceañeras', categoria: 'quince' },
  { id: 10, src: '/images/galeria/quince-2.webp', servicio: 'Maquillaje Quinceañeras', categoria: 'quince' },
  { id: 11, src: '/images/galeria/4.webp', servicio: 'Maquillaje Quinceañeras', categoria: 'quince' },
  { id: 12, src: '/images/galeria/3.webp', servicio: 'Maquillaje de Novia', categoria: 'novia' },
  { id: 13, src: '/images/galeria/novia-1.webp', servicio: 'Maquillaje de Novia', categoria: 'novia' },
  { id: 14, src: '/images/galeria/6.webp', servicio: 'Maquillaje Piel Madura', categoria: 'madura' },
  { id: 15, src: '/images/galeria/madura-2.webp', servicio: 'Maquillaje Piel Madura', categoria: 'madura' },
  { id: 16, src: '/images/galeria/social-1.webp', servicio: 'Maquillaje Social', categoria: 'social' },
  { id: 17, src: '/images/galeria/social-2.webp', servicio: 'Maquillaje Social', categoria: 'social' },
  { id: 18, src: '/images/galeria/social-3.webp', servicio: 'Maquillaje Social', categoria: 'social' },
  { id: 19, src: '/images/galeria/social-4.webp', servicio: 'Maquillaje Social', categoria: 'social' },
  { id: 20, src: '/images/galeria/social-5.webp', servicio: 'Maquillaje Social', categoria: 'social' },
  { id: 21, src: '/images/galeria/social-6.webp', servicio: 'Maquillaje Social', categoria: 'social' },
  { id: 22, src: '/images/galeria/2.webp', servicio: 'Maquillaje Social', categoria: 'social' },
  { id: 23, src: '/images/galeria/glam-1.webp', servicio: 'Maquillaje Glam', categoria: 'glam' },
  { id: 24, src: '/images/galeria/5.webp', servicio: 'Maquillaje Glam', categoria: 'glam' },
  { id: 25, src: '/images/galeria/glam-3.webp', servicio: 'Maquillaje Glam', categoria: 'glam' },
  { id: 26, src: '/images/galeria/pestanas-1.webp', servicio: 'Pestañas Punto a Punto', categoria: 'pestanas' },
  { id: 27, src: '/images/galeria/8.webp', servicio: 'Pestañas Punto a Punto', categoria: 'pestanas' },
  { id: 28, src: '/images/galeria/10.webp', servicio: 'Cejas con Henna', categoria: 'henna' },
  { id: 29, src: '/images/galeria/lifting-1.webp', servicio: 'Lifting de Pestañas', categoria: 'lifting' },
  { id: 30, src: '/images/galeria/9.webp', servicio: 'Lifting de Pestañas', categoria: 'lifting' },
  { id: 31, src: '/images/galeria/laminado-1.webp', servicio: 'Laminado de Cejas', categoria: 'laminado' },
  { id: 32, src: '/images/galeria/11.webp', servicio: 'Laminado de Cejas', categoria: 'laminado' },
]

const categorias = [
  { key: 'all', label: 'Todos' },
  { key: 'artistico', label: 'Artístico' },
  { key: 'social', label: 'Social' },
  { key: 'novia', label: 'Novias' },
  { key: 'quince', label: 'Quinceañeras' },
  { key: 'glam', label: 'Glam' },
  { key: 'body', label: 'Body Painting' },
  { key: 'madura', label: 'Piel Madura' },
  { key: 'pestanas', label: 'Pestañas' },
  { key: 'henna', label: 'Cejas Henna' },
  { key: 'lifting', label: 'Lifting' },
  { key: 'laminado', label: 'Laminado' },
]

const INITIAL_COUNT = 8

export default function Galeria() {
  const [filtro, setFiltro] = useState('all')
  const [visibles, setVisibles] = useState(INITIAL_COUNT)
  const [lightbox, setLightbox] = useState(null)
  const [lightboxList, setLightboxList] = useState([])

  const filtered = filtro === 'all' ? fotos : fotos.filter((f) => f.categoria === filtro)
  const mostradas = filtered.slice(0, visibles)
  const hayMas = visibles < filtered.length

  const handleFiltro = (key) => {
    setFiltro(key)
    setVisibles(INITIAL_COUNT)
  }

  const openLightbox = (foto, list) => {
    const idx = list.findIndex((f) => f.id === foto.id)
    setLightboxList(list)
    setLightbox(idx)
  }

  const closeLightbox = () => setLightbox(null)

  const prev = () => {
    setLightbox((i) => (i - 1 + lightboxList.length) % lightboxList.length)
  }

  const next = () => {
    setLightbox((i) => (i + 1) % lightboxList.length)
  }

  // ← corregido: cerrar también con tecla Escape
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  const currentFoto = lightbox !== null ? lightboxList[lightbox] : null

  return (
    <section id="galeria" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <p className={styles.eyebrow}>Nuestro trabajo</p>
          <h2 className={styles.title}>La <em>Galería</em></h2>
          <p className={styles.subtitle}>
            {fotos.length} obras de arte. Cada imagen, una historia de transformación.
          </p>
        </div>

        <div className={styles.filtros}>
          {categorias.map((c) => (
            <button
              key={c.key}
              className={`${styles.filtro} ${filtro === c.key ? styles.filtroActive : ''}`}
              onClick={() => handleFiltro(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {mostradas.map((foto, i) => (
            <button
              key={foto.id}
              className={styles.item}
              style={{ animationDelay: `${(i % 9) * 0.05}s` }}
              onClick={() => openLightbox(foto, filtered)}
              aria-label={`Ver ${foto.servicio}`}
            >
              <img src={foto.src} alt={foto.servicio} loading="lazy" />
              <div className={styles.itemOverlay}>
                <span className={styles.itemService}>{foto.servicio}</span>
                <span className={styles.itemZoom}>＋</span>
              </div>
            </button>
          ))}
        </div>

        {hayMas && (
          <div className={styles.verMasWrap}>
            <button
              className={styles.verMasBtn}
              onClick={() => setVisibles((v) => v + INITIAL_COUNT)}
            >
              Ver más fotos
              <span className={styles.verMasCount}>{filtered.length - visibles} imágenes</span>
              <span className={styles.verMasArrow}>↓</span>
            </button>
          </div>
        )}

      </div>

      {/* ← onKeyDown en el overlay para navegar con teclado */}
      {currentFoto && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imagen"
        >
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Cerrar">
            ✕
          </button>

          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={currentFoto.src} alt={currentFoto.servicio} />
            <p className={styles.lightboxLabel}>{currentFoto.servicio}</p>
            <p className={styles.lightboxCounter}>
              {lightbox + 1} / {lightboxList.length}
            </p>
          </div>

          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}