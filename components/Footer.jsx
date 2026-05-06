import styles from "./Footer.module.css";
import Image from "next/image";
import { Instagram } from "./svg/Instagram";
import { WhatsApp } from "./svg/WhatsApp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <Image
              src="/images/galeria/logo.webp"
              alt="Hana Beauty"
              width={120}
              height={60}
              priority
            />
          </a>
          <p className={styles.tagline}>
            No transformamos quién eres, resaltamos lo mejor de ti.
          </p>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/hanadez_beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="Instagram"
            >
              <Instagram width={24} height={24} />
            </a>
            <a
              href="https://wa.me/573127963323"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="WhatsApp"
            >
              <WhatsApp width={24} height={24} />
            </a>
          </div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Servicios</h4>
            <ul className={styles.colList}>
              {[
                "Maquillaje Artístico",
                "Maquillaje Social",
                "Maquillaje de Novia",
                "Maquillaje Quinceañeras",
                "Maquillaje Glam",
                "Maquillaje Piel Madura",
                "laminado de cejas",
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
                "Body Painting Maternal",
                "Pestañas Punto a Punto",
                "Lifting de Pestañas",
                "Cejas con Henna",
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
                <a
                  href="https://wa.me/573127963323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.colLink}
                >
                  +57 312 796 3323
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hanadez_beauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.colLink}
                >
                  @hanabeauty
                </a>
              </li>
              <li className={styles.colText}>Lun – Sáb: 8am – 7pm</li>
              <li className={styles.colText}>Supía-Armenía. Colombia</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {year} Hana Beauty. Todos los derechos reservados.
        </p>
        <div>
          <p className={styles.copy} style={{ color: "#ffff" }}>
            creado por
            <a
              href="https://haiverhdez.me/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffff43" }}
            >
              Haiver Hernandez-Desarrollador web
            </a>
          </p>
          <a className={styles.copy}  href="https://haiverhdez.me/" style={{ color: "#ffff43" }}>
            https://haiverhdez.me/
          </a>
        </div>
        <a href="#" className={styles.backTop}>
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
