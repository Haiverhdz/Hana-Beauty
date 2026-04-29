'use client'

import { useState } from 'react'
import styles from './Contacto.module.css'

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    whatsapp: '',
    servicio: '',
    fecha: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)

  const serviciosList = [
    'Maquillaje Artístico',
    'Maquillaje Social',
    'Maquillaje de Novia',
    'Maquillaje Quinceañeras',
    'Maquillaje Glam',
    'Maquillaje Piel Madura',
    'Body Painting Maternal',
    'Pestañas Punto a Punto',
    'Lifting de Pestañas',
    'Cejas con Henna',
  ]

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message
    const mensaje = `¡Hola Hana Beauty! 🌸%0A%0A*Nombre:* ${form.nombre}%0A*Servicio:* ${form.servicio}%0A*Fecha deseada:* ${form.fecha || 'Por confirmar'}%0A*Mensaje:* ${form.mensaje || '...'}`
    // Replace with your actual WhatsApp number
    window.open(`https://wa.me/573127963323?text=${mensaje}`, '_blank')
    setEnviado(true)
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        {/* Info side */}
        <div className={styles.info}>
          <p className={styles.eyebrow}>Hablemos</p>
          <h2 className={styles.title}>
            Agenda tu <em>cita</em>
          </h2>
          <p className={styles.text}>
            Escríbenos y te responderemos a la menor brevedad. Con gusto te
            asesoramos para encontrar el look perfecto para tu ocasión especial.
          </p>

          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📱</div>
              <div>
                <p className={styles.contactLabel}>WhatsApp</p>
                <a
                  href="https://wa.me/573127963323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactValue}
                >
                  +57 312 796 3323
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📷</div>
              <div>
                <p className={styles.contactLabel}>Instagram</p>
                <a
                  href="https://www.instagram.com/hanadez_beauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactValue}
                >
                  @hanadez_beauty
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
              <div>
                <p className={styles.contactLabel}>Ubicación</p>
                <p className={styles.contactValue}>Colombia</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🕐</div>
              <div>
                <p className={styles.contactLabel}>Horario</p>
                <p className={styles.contactValue}>Lun – Sáb: 8am – 7pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form side */}
        <div className={styles.formWrap}>
          {enviado ? (
            <div className={styles.success}>
              <p className={styles.successIcon}>✦</p>
              <h3 className={styles.successTitle}>¡Mensaje enviado!</h3>
              <p className={styles.successText}>
                Te redirigimos a WhatsApp. Te responderemos muy pronto.
              </p>
              <button className={styles.btnReset} onClick={() => setEnviado(false)}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="nombre">
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className={styles.input}
                    value={form.nombre}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="whatsapp">
                    WhatsApp *
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="+57 312 796 3323"
                    className={styles.input}
                    value={form.whatsapp}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${styles.field} ${styles.fieldFull}`}>
                  <label className={styles.label} htmlFor="servicio">
                    Servicio de interés *
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    className={styles.select}
                    value={form.servicio}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona un servicio</option>
                    {serviciosList.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={`${styles.field} ${styles.fieldFull}`}>
                  <label className={styles.label} htmlFor="fecha">
                    Fecha deseada
                  </label>
                  <input
                    id="fecha"
                    name="fecha"
                    type="date"
                    className={styles.input}
                    value={form.fecha}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${styles.field} ${styles.fieldFull}`}>
                  <label className={styles.label} htmlFor="mensaje">
                    Cuéntanos más
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Describe el look que tienes en mente, el evento, tus referencias..."
                    className={styles.textarea}
                    value={form.mensaje}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Enviar por WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
