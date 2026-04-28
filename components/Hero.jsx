import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Decorative background elements */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Studio de Cosmetología</p>

          <h1 className={styles.title}>
            Donde el arte
            <br />
            <em>transforma</em>
            <br />
            tu belleza
          </h1>

          <p className={styles.subtitle}>
            Maquillaje artístico de alta costura, tratamientos de pestañas y
            cejas. Cada look, una obra de arte diseñada solo para ti.
          </p>

          <div className={styles.actions}>
            <a href="#galeria" className={styles.btnPrimary}>
              Ver galería
            </a>
            <a href="#contacto" className={styles.btnSecondary}>
              Agendar cita
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>+500</span>
              <span className={styles.statLabel}>Clientas felices</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>10</span>
              <span className={styles.statLabel}>Servicios</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Años de experiencia</span>
            </div>
          </div>
        </div>

        <div className={styles.imageBlock}>
          <div className={styles.imageFrame}>
            {/* Replace src with actual hero image */}
            <img
              src="/images/galeria/Hero.webp"
              alt="Maquillaje artístico Hana Beauty"
              className={styles.heroImg}
            />
            <div className={styles.imageTag}>
              <span>Maquillaje Artístico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
