import styles from "./Servicios.module.css";

const servicios = [
  {
    id: 1,
    nombre: "Maquillaje Artístico",
    descripcion:
      "Expresión pura del arte sobre tu piel. Creaciones únicas para editoriales, eventos temáticos y cada ocasión que merece un look inolvidable.",
    fotos: 7,
    categoria: "Arte",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Maquillaje Social",
    descripcion:
      "Elegancia y sofisticación para cada evento. Un look pulido, radiante y completamente tuyo para brillar en cualquier ocasión especial.",
    fotos: 7,
    categoria: "Social",
    destacado: false,
  },
  {
    id: 3,
    nombre: "Maquillaje de Novia",
    descripcion:
      "El día más especial merece el look más hermoso. Diseñamos un maquillaje que perdure en el tiempo y en cada fotografía.",
    fotos: 2,
    categoria: "Novias",
    destacado: true,
  },
  {
    id: 4,
    nombre: "Maquillaje Quinceañeras",
    descripcion:
      "Un momento único en tu vida. Creamos el look de tus sueños para que brilles con toda la magia de tus 15 años.",
    fotos: 3,
    categoria: "Quinceañeras",
    destacado: false,
  },
  {
    id: 5,
    nombre: "Maquillaje Glam",
    descripcion:
      "Intensidad, glamour y sofisticación al máximo. Para quienes quieren una presencia irresistible y magnética.",
    fotos: 3,
    categoria: "Glam",
    destacado: false,
  },
  {
    id: 6,
    nombre: "Maquillaje Piel Madura",
    descripcion:
      "Técnicas especializadas que realzan la belleza natural. Un acabado luminoso y fresco que celebra cada etapa de la vida.",
    fotos: 2,
    categoria: "Especializado",
    destacado: false,
  },
  {
    id: 7,
    nombre: "Body Painting Maternal",
    descripcion:
      "Celebra el milagro de la maternidad con arte. Una sesión mágica que convierte tu panza en un lienzo lleno de amor y vida.",
    fotos: 1,
    categoria: "Arte",
    destacado: true,
  },
  {
    id: 8,
    nombre: "Pestañas Punto a Punto",
    descripcion:
      "Extensiones de pestañas aplicadas una a una con precisión artesanal. Mirada profunda, natural y completamente personalizada.",
    fotos: 2,
    categoria: "Pestañas",
    destacado: false,
  },
  {
    id: 9,
    nombre: "Lifting de Pestañas",
    descripcion:
      "Eleva y curva tus pestañas naturales sin extensiones. El efecto rizador que dura semanas y abre tu mirada al instante.",
    fotos: 2,
    categoria: "Pestañas",
    destacado: false,
  },
  {
    id: 10,
    nombre: "Cejas con Henna",
    descripcion:
      "Define, rellena y da forma a tus cejas con henna natural. Color intenso con un acabado perfecto que dura hasta cuatro semanas.",
    fotos: 1,
    categoria: "Cejas",
    destacado: false,
  },
  {
    id: 11,
    nombre: "Laminado de Cejas",
    descripcion:
      "Logra cejas más definidas, peinadas y con efecto natural gracias al laminado de cejas. Ideal para dar volumen, fijación y una apariencia impecable por semanas.",
    fotos: 2,
    categoria: "Cejas",
    destacado: false,
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Lo que ofrecemos</p>
          <h2 className={styles.title}>
            Nuestros <em>Servicios</em>
          </h2>
          <p className={styles.subtitle}>
            Cada servicio es una experiencia diseñada con precisión, pasión y el
            cuidado que mereces.
          </p>
        </div>

        {/* Services grid */}
        <div className={styles.grid}>
          {servicios.map((s, i) => (
            <article
              key={s.id}
              className={`${styles.card} ${s.destacado ? styles.cardDestacado : ""}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className={styles.cardImg}>
                {/* Replace with actual images */}
                <img
                  src={`/images/galeria/${s.id}.webp`}
                  alt={s.nombre}
                  loading="lazy"
                />
                <div className={styles.cardOverlay} />
                {s.destacado && <span className={styles.badge}>Destacado</span>}
              </div>

              <div className={styles.cardBody}>
                <span className={styles.categoria}>{s.categoria}</span>
                <h3 className={styles.cardTitle}>{s.nombre}</h3>
                <p className={styles.cardDesc}>{s.descripcion}</p>
                <div className={styles.cardFotos}>
                  <span className={styles.fotosNum}>{s.fotos}</span>
                  <span className={styles.fotosLabel}>
                    {s.fotos === 1 ? "foto en galería" : "fotos en galería"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="#contacto" className={styles.ctaBtn}>
            Agendar mi cita
          </a>
        </div>
      </div>
    </section>
  );
}
