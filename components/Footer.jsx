import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoHana}>Hana</span>
            <span className={styles.logoBeauty}>Beauty</span>
          </a>
          <p className={styles.tagline}>
            Arte que transforma. Belleza que inspira.
          </p>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/hanadez_beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://wa.me/573127963323"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="WhatsApp"
            >
              WA
            </a>
          </div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Servicios</h4>
            <ul className={styles.colList}>
              {[
                'Maquillaje Artístico',
                'Maquillaje Social',
                'Maquillaje de Novia',
                'Maquillaje Quinceañeras',
                'Maquillaje Glam',
                'Maquillaje Piel Madura',
              ].map((s) => (
                <li key={s}>
                  <a href="#servicios" className={styles.colLink}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Tratamientos</h4>
            <ul className={styles.colList}>
              {[
                'Body Painting Maternal',
                'Pestañas Punto a Punto',
                'Lifting de Pestañas',
                'Cejas con Henna',
              ].map((s) => (
                <li key={s}>
                  <a href="#servicios" className={styles.colLink}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contacto</h4>
            <ul className={styles.colList}>
              <li>
                <a href="https://wa.me/573127963323" target="_blank" rel="noopener noreferrer" className={styles.colLink}>
                  +57 312 796 3323
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hanadez_beauty/" target="_blank" rel="noopener noreferrer" className={styles.colLink}>
                  @hanabeauty
                </a>
              </li>
              <li className={styles.colText}>Lun – Sáb: 8am – 7pm</li>
              <li className={styles.colText}>Colombia</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {year} Hana Beauty. Todos los derechos reservados.
        </p>
        <a href="#" className={styles.backTop}>
          Volver arriba ↑
        </a>
      </div>
    </footer>
  )
}
