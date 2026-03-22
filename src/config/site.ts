/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║  CONFIGURACIÓN CENTRAL DEL SITIO — src/config/site.ts ║
 * ║  Generado automáticamente · 17/3/2026             ║
 * ╚═══════════════════════════════════════════════════════╝
 */

export const siteConfig = {

  // ── Identidad del negocio ──────────────────────────────
  businessName:      'Higienix',
  businessNameLegal: 'Higienix Barcelona',
  cif:   'B12345678',
  logo:  '/logo.png',

  // ── Servicio y área ────────────────────────────────────
  serviceType:  'Limpiezas por fallecimiento',
  area:         'Barcelona, municipios cercanos y provincia',
  mainCity:     'Barcelona',
  comarca:      'Barcelonés',
  foundingYear: '2017',

  // ── Contacto ──────────────────────────────────────────
  phone:    '+34 633 75 96 49',
  email:    'seoexpertsslu@gmail.com',
  whatsapp: '34633759649',
  web:      'https://higienix.onrender.com',

  // ── Horario ───────────────────────────────────────────
  horario:      'Mo-Fr 09:00-20:00',
  horarioTexto: 'Lunes a Viernes, 9:00–20:00',
  horarioDias:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as string[],
  horarioAbre:  '09:00',
  horarioCierra:'20:00',

  // ── SEO ───────────────────────────────────────────────
  description: 'Especialistas en servicios profesionales de limpieza por fallecimiento en todo Barcelona. Presupuesto gratuito y garantía por escrito.',
  priceRange:  '€',
  aggregateRating: {
    ratingValue:  4.9,
    reviewCount:  21,
    bestRating:   5,
    worstRating:  1,
  },

  // ── Colores corporativos ──────────────────────────────
  colorPrimary: '#16a34a',
  colorText:    '#0f172a',


  // ── Diseño visual ─────────────────────────────────────
  // fontFamily: Inter | Plus Jakarta Sans | Outfit | Nunito | DM Sans | Sora
  fontFamily:  'Inter',
  // designStyle: sharp | rounded | pill
  designStyle: 'rounded',
  // brandIcon: ◈ | ◆ | ⬡ | ✦ | ◉ | ⬢ | ▲ | ●
  brandIcon:   '◈',
  // mapZoom: 13–16
  mapZoom:     15,


  // ── SEO avanzado ──────────────────────────────────────
  // titleFormula: 1 | 2 | 3 | 4
  titleFormula: 1,
  // schemaType: LocalBusiness | Plumber | Electrician | HousePainter | MovingCompany | CleaningService
  schemaType:  'LocalBusiness',
  // sectionOrder: orden y visibilidad de secciones en la home
  // Elimina una sección del array para ocultarla
  // Hero (①) y CTA final (⑨) son siempre fijos
  sectionOrder: ['beneficios','servicios','zona','proceso','testimonios','precios','faq'] as string[],

  // ── Navegación ────────────────────────────────────────
  navAbout:    'Quiénes somos',   // alt: 'Sobre nosotros' | 'La empresa' | 'Equipo'
  navFaq:      'FAQ',             // alt: 'Preguntas' | 'Dudas frecuentes' | 'Ayuda'
  navCta:      'PRESUPUESTO GRATIS', // alt: 'LLAMAR AHORA' | 'CONSULTA GRATIS' | 'SOLICITAR CITA'
  navCtaShort: 'PRESUPUESTO',     // versión corta para móvil
  navCtaEmoji: '📋',              // alt: '📞' | '✉️' | '🔥' | '⚡' | '🛠️' | '✅' | '💬'

  // ── Enlaces externos ──────────────────────────────────
  // Dejar url vacía para ocultar el enlace
  // rel: 'nofollow' | 'follow'  (nofollow = no pasa PageRank)
  externalLink1: { url: '', anchor: '', rel: 'nofollow' },  // aparece en el hero
  externalLink2: { url: '', anchor: '', rel: 'nofollow' },  // aparece en el footer

    // ── Redes sociales ────────────────────────────────────
  social: {
    facebook:  '',
    instagram: '',
    linkedin:  '',
  },

  // ── Verificación de sitio ─────────────────────────────
  googleVerification: '"VecKxVtQt7zzzW_RNZbxeAsYQ66Ih20xCXJu00z2fAA" />',
  bingVerification:   '',

} as const;

export type SiteConfig = typeof siteConfig;
