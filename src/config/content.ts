/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Empresa especializada en limpieza por fallecimiento en Barcelona',
    h1main:      'Limpiezas por Fallecimiento',
    h1accent:    'en Barcelona y alrededores',
    description: 'En Higienix somos especialistas en limpieza tras fallecimiento, descontaminación de viviendas y vaciado integral en Barcelona. Ofrecemos soluciones discretas, profesionales y con el máximo respeto hacia la sensibilidad del momento.',
    badge1:      'Presupuesto en 30 minutos',
    badge2:      'Más de 15 años de experiencia en {{city}}',
    badge3:      'Certificación ISO 9001:2015',
    badge4:      'Cobertura total del Barcelonés y comarcas',
    cardStat:    '+500',
    cardLabel:   'viviendas descontaminadas en Barcelona',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       '',
      description: '',
    },
    {
      icon: 'clock',
      title:       '',
      description: '',
    },
    {
      icon: 'check',
      title:       '',
      description: '',
    },
    {
      icon: 'box',
      title:       '',
      description: '',
    },
    {
      icon: 'heart',
      title:       '',
      description: '',
    },
    {
      icon: 'users',
      title:       '',
      description: '',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'limpieza-por-fallecimiento',
      nombre:      'Limpieza por fallecimiento',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'descontaminacion-de-viviendas',
      nombre:      'Descontaminación de viviendas',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'desinfeccion-profesional',
      nombre:      'Desinfección profesional',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'eliminacion-de-olores',
      nombre:      'Eliminación de olores',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'retirada-de-enseres-afectados',
      nombre:      'Retirada de enseres afectados',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'vaciado-y-recuperacion-de-inmuebles',
      nombre:      'Vaciado y recuperación de inmuebles',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosSub:  'Más de 10 años de experiencia. Equipo propio, sin subcontratas y con gestión de residuos certificada.',
    serviciosSub:   'Todo lo que necesitas para dejar el inmueble listo.',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en nosotros.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosSub:     'Presupuesto final gratuito y sin compromiso. Estos precios son orientativos — el coste real depende del volumen y accesibilidad.',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula según el volumen real, accesibilidad y distancia al punto limpio. Siempre gratuito y sin compromiso.',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: '',
      name:     '',
      location: '{{city}}',
      service:  '',
      quote:    '',
    },
    {
      initials: '',
      name:     '',
      location: '{{city}}',
      service:  '',
      quote:    '',
    },
    {
      initials: '',
      name:     '',
      location: '{{city}}',
      service:  '',
      quote:    '',
    },
    {
      initials: '',
      name:     '',
      location: '{{city}}',
      service:  '',
      quote:    '',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      '',
      precio:    '',
      highlight: false,
      features:  [],
    },
    {
      tipo:      '',
      precio:    '',
      highlight: true,
      badge:     'Más popular',
      features:  [],
    },
    {
      tipo:      '',
      precio:    '',
      highlight: false,
      features:  [],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '',
      respuesta: '',
    },
    {
      pregunta:  '',
      respuesta: '',
    },
    {
      pregunta:  '',
      respuesta: '',
    },
    {
      pregunta:  '',
      respuesta: '',
    },
    {
      pregunta:  '',
      respuesta: '',
    },
    {
      pregunta:  '',
      respuesta: '',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '',
      descripcion: '',
    },
    {
      titulo:      '',
      descripcion: '',
    },
    {
      titulo:      '',
      descripcion: '',
    },
    {
      titulo:      '',
      descripcion: '',
    }
  ],

} as const;

export type Content = typeof content;
