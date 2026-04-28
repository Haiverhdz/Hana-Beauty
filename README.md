# 🌸 Hana Beauty — Landing Page

> Landing page profesional para estudio de cosmetología especializado en maquillaje artístico, tratamientos de pestañas, cejas y más.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-orange?style=flat-square&logo=css3)
![License](https://img.shields.io/badge/licencia-privada-red?style=flat-square)

---

## Tabla de contenidos

- [Vista general](#vista-general)
- [Servicios incluidos](#servicios-incluidos)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Agregar imágenes](#agregar-imágenes)
- [Personalización](#personalización)
- [Scripts disponibles](#scripts-disponibles)

---

## Vista general

Hana Beauty es una landing page de una sola página (SPA) construida con Next.js 15 y App Router. Incluye las siguientes secciones:

| Sección | Descripción |
|---|---|
| **Navbar** | Fijo, con blur al hacer scroll y menú hamburguesa en móvil |
| **Hero** | Pantalla completa con imagen principal, estadísticas y CTA |
| **Servicios** | Grid de 10 cards con imagen, descripción y conteo de fotos |
| **Galería** | Masonry de 30 fotos con filtros por categoría y lightbox |
| **Nosotros** | Layout editorial con imágenes superpuestas y valores |
| **Testimonios** | Slider de 5 reseñas de clientas |
| **Contacto** | Formulario que genera mensaje y abre WhatsApp directamente |
| **Footer** | Links completos, redes sociales y horarios |
| **WhatsApp** | Botón flotante con animación pulse |

---

## Servicios incluidos

| # | Servicio | Fotos en galería |
|---|---|---|
| 1 | Maquillaje Artístico | 7 |
| 2 | Maquillaje Social | 7 |
| 3 | Maquillaje de Novia | 2 |
| 4 | Maquillaje Quinceañeras | 3 |
| 5 | Maquillaje Glam | 3 |
| 6 | Maquillaje Piel Madura | 2 |
| 7 | Body Painting Maternal | 1 |
| 8 | Pestañas Punto a Punto | 2 |
| 9 | Lifting de Pestañas | 2 |
| 10 | Cejas con Henna | 1 |

---

## Tecnologías

- **[Next.js 15](https://nextjs.org/)** — App Router, Server Components
- **TypeScript** — tipado estático
- **CSS Modules** — estilos encapsulados por componente, sin colisiones
- **Google Fonts** — Cormorant Garamond (display) + Jost (cuerpo)
- **next/image** — optimización automática de imágenes

---

## Estructura del proyecto

```
hana-beauty/
├── public/
│   └── images/
│       ├── logo.png                  ← logo del negocio
│       ├── hero-main.jpg             ← imagen principal del Hero
│       ├── nosotros-main.jpg         ← foto sección Nosotros
│       ├── nosotros-detalle.jpg      ← foto detalle Nosotros
│       └── galeria/
│           ├── 1.webp                ← Maquillaje Artístico (card)
│           ├── 2.webp                ← Maquillaje Social (card)
│           ├── ...
│           ├── artistico-1.webp      ← fotos galería filtrable
│           ├── artistico-2.webp
│           ├── social-1.webp
│           └── ...
├── src/
│   ├── app/
│   │   ├── globals.css               ← variables CSS, reset, fuentes
│   │   ├── layout.tsx                ← metadata SEO, fuentes
│   │   └── page.tsx                  ← ensamblador de secciones
│   └── components/
│       ├── Navbar.tsx / .module.css
│       ├── Hero.tsx / .module.css
│       ├── Servicios.tsx / .module.css
│       ├── Galeria.tsx / .module.css
│       ├── Nosotros.tsx / .module.css
│       ├── Testimonios.tsx / .module.css
│       ├── Contacto.tsx / .module.css
│       ├── Footer.tsx / .module.css
│       └── WhatsAppBtn.tsx / .module.css
└── README.md
```

---

## Instalación

### Requisitos

- Node.js 18 o superior
- npm, yarn o pnpm

### Pasos

```bash
# 1. Clona o descarga el proyecto
git clone https://github.com/tu-usuario/hana-beauty.git
cd hana-beauty

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Agregar imágenes

Las imágenes van en la carpeta `public/` y Next.js las sirve automáticamente desde la raíz `/`.

### Imágenes de los cards de servicios

Nombra las fotos con el ID del servicio correspondiente:

```
public/images/galeria/1.webp   ← Maquillaje Artístico
public/images/galeria/2.webp   ← Maquillaje Social
...
public/images/galeria/10.webp  ← Cejas con Henna
```

### Imágenes de la galería filtrable

```
public/images/galeria/artistico-1.webp
public/images/galeria/artistico-2.webp
...hasta artistico-7.webp

public/images/galeria/social-1.webp
...hasta social-7.webp

public/images/galeria/novia-1.webp
public/images/galeria/novia-2.webp

public/images/galeria/quince-1.webp  (hasta 3)
public/images/galeria/glam-1.webp    (hasta 3)
public/images/galeria/madura-1.webp  (hasta 2)
public/images/galeria/body-painting-1.webp
public/images/galeria/pestanas-1.webp (hasta 2)
public/images/galeria/lifting-1.webp  (hasta 2)
public/images/galeria/henna-1.webp
```

> Se recomienda formato `.webp` para mejor rendimiento. Si usas `.jpg` o `.png`, actualiza la extensión en `Servicios.tsx` y `Galeria.tsx`.

---

## Personalización

### Número de WhatsApp

Busca `573000000000` en los siguientes archivos y reemplázalo con tu número real (código de país sin `+`):

- `src/components/Contacto.tsx`
- `src/components/WhatsAppBtn.tsx`
- `src/components/Footer.tsx`

### Colores y tipografía

Todas las variables de diseño están centralizadas en `src/app/globals.css`:

```css
:root {
  --cream: #FAF7F2;
  --rose: #C97B6B;
  --mauve: #8B5E6A;
  --deep: #3D2535;
  --gold: #C9A96E;
  /* ... */
}
```

### SEO y metadata

Edita `src/app/layout.tsx`:

```tsx
export const metadata = {
  title: 'Hana Beauty | Maquillaje Artístico y Estética',
  description: 'Tu descripción aquí...',
}
```

### Logo

Reemplaza la imagen en `public/images/logo.png` y ajusta el `width` y `height` en `Navbar.tsx` según las dimensiones reales de tu logo.

---

## Scripts disponibles

```bash
npm run dev      # servidor de desarrollo en localhost:3000
npm run build    # build de producción
npm run start    # inicia el servidor de producción (requiere build previo)
npm run lint     # revisa errores de ESLint
```

---

## Despliegue

La forma más sencilla es [Vercel](https://vercel.com), la plataforma oficial de Next.js:

1. Sube el proyecto a GitHub
2. Conecta el repositorio en [vercel.com](https://vercel.com)
3. Vercel detecta Next.js automáticamente y despliega en segundos

Otras opciones: Netlify, Railway, o cualquier servidor con soporte para Node.js.

---

<p align="center">
  Hecho con ❤️ para <strong>Hana Beauty</strong>
</p>