import styles from './Nosotros.module.css'

const valores = [
  {
    icon: '✦',
    titulo: 'Arte & Precisión',
    texto: 'Cada trazo es intencional. Combinamos técnica profesional con visión artística para crear looks únicos.',
  },
  {
    icon: '✦',
    titulo: 'Contigo siempre',
    texto: 'Te escuchamos. Cada look nace de tu personalidad, tus deseos y la ocasión especial que mereces.',
  },
  {
    icon: '✦',
    titulo: 'Productos Premium',
    texto: 'Solo usamos marcas de alta calidad, hipoalergénicas y con larga duración. Tu piel lo merece.',
  },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.inner}>
        {/* Image side */}
        <div className={styles.imageSide}>
          <div className={styles.imgMain}>
            <img
              src="/images/galeria/nosotros.webp"
              alt="Maquilladora Hana Beauty trabajando"
            />
          </div>
          <div className={styles.imgSecond}>
            <img
              src="/images/galeria/artistico-5.webp"
              alt="Detalle de maquillaje artístico"
            />
          </div>
          <div className={styles.expBadge}>
            <span className={styles.expNum}>5+</span>
            <span className={styles.expText}>Años de<br />experiencia</span>
          </div>
        </div>

        {/* Content side */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>Nuestra historia</p>
          <h2 className={styles.title}>
            El arte de hacer <em>brillar</em> tu belleza
          </h2>

          <p className={styles.text}>
            Hana Beauty nació de la pasión por el maquillaje como arte. Somos un
            estudio especializado en cosmetología donde cada cliente es tratada
            como una obra de arte en proceso.
          </p>
          <p className={styles.text}>
            Ofrecemos desde maquillaje artístico y glam hasta tratamientos de
            pestañas y cejas. Nuestro compromiso es que cada persona que pase
            por nuestra silla salga sintiéndose la mejor versión de sí misma.
          </p>

          <div className={styles.valores}>
            {valores.map((v, i) => (
              <div key={i} className={styles.valor}>
                <span className={styles.valorIcon}>{v.icon}</span>
                <div>
                  <h4 className={styles.valorTitulo}>{v.titulo}</h4>
                  <p className={styles.valorTexto}>{v.texto}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contacto" className={styles.btn}>
            Conocernos mejor
          </a>
        </div>
      </div>
    </section>
  )
}
