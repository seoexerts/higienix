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
    h1accent:    'en Barcelona y el Área Metropolitana',
    description: 'Higienix ofrece servicios discretos, profesionales y respetuosos para la limpieza de viviendas tras un fallecimiento en Barcelona. Nos encargamos de todo, desde la retirada de muebles hasta la eliminación de olores persistentes, brindando apoyo en momentos difíciles.',
    badge1:      'Presupuesto en 30 minutos',
    badge2:      'Más de 15 años de experiencia en {{city}}',
    badge3:      'Certificación Sanitaria COVID-19',
    badge4:      'Cobertura total del Baix Llobregat y comarcas',
    cardStat:    '+700',
    cardLabel:   'viviendas limpiadas en Barcelona',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Desinfección integral y segura',
      description: 'Utilizamos productos desinfectantes homologados y equipos profesionales para garantizar la eliminación de gérmenes y bacterias. Cumplimos con las normativas sanitarias vigentes en el Àrea Metropolitana de Barcelona.',
    },
    {
      icon: 'clock',
      title:       'Intervención rápida y flexible',
      description: 'Ofrecemos disponibilidad 24/7, incluyendo fines de semana y festivos, para atender sus necesidades con la mayor urgencia posible. Nuestro equipo se desplaza a su domicilio en {{city}} en menos de una hora en casos prioritarios.',
    },
    {
      icon: 'check',
      title:       'Servicios completos y personalizados',
      description: 'Adaptamos nuestros servicios a cada situación específica, desde limpiezas básicas hasta intervenciones más complejas que requieren tratamientos especiales.  Incluimos la gestión de residuos peligrosos según normativa municipal de Barcelona.',
    },
    {
      icon: 'box',
      title:       'Cobertura en todo el Barcelonés y alrededores',
      description: 'Prestamos nuestros servicios en toda la ciudad de Barcelona, incluyendo barrios como Sarrià-Sant Gervasi, Les Corts, Gràcia y Sant Martí.  También atendemos municipios del Baix Llobregat y Vallès Occidental.',
    },
    {
      icon: 'heart',
      title:       'Atención humana y discreta',
      description: 'Comprendemos la delicada situación que está atravesando y ofrecemos un trato cercano, respetuoso y confidencial. Nuestro equipo se presenta con uniforme profesional para preservar su privacidad en {{city}}.',
    },
    {
      icon: 'users',
      title:       'Equipo especializado y cualificado',
      description: 'Contamos con un equipo de profesionales formados específicamente en limpiezas por fallecimiento y traumatismos.  Todos nuestros técnicos están debidamente equipados y capacitados para afrontar cualquier situación delicada.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'retirada-de-enseres-y-materiales-afectados',
      nombre:      'Retirada de enseres y materiales afectados',
      description: 'En Higienix, nos encargamos de la retirada discreta y profesional de objetos y mobiliario afectados en Barcelona. Ofrecemos un servicio integral para facilitar el proceso tras una pérdida, cubriendo toda la zona del Barcelonés.',
      features:    ['Recogida rápida y eficiente', 'Certificado de destrucción', 'Gestión responsable de residuos', 'Servicio disponible en Barcelona ciudad y alrededores'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-y-descontaminacion-de-la-zona-afectada',
      nombre:      'Limpieza y descontaminación de la zona afectada',
      description: 'Higienix ofrece servicios especializados de limpieza profunda y descontaminación en Barcelona, eliminando cualquier rastro biológico o químico. Nos aseguramos de que el espacio se prepare adecuadamente para los siguientes pasos, operando en todo el Barcelonés.',
      features:    ['Utilizamos productos homologados', 'Eliminación de bacterias y virus', 'Cumplimiento normativo vigente', 'Servicio urgente disponible en Barcelona y comarca.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'desinfeccion-y-sanitizacion-profesional',
      nombre:      'Desinfección y sanitización profesional',
      description: 'Garantizamos una desinfección y sanitización completa de la vivienda o espacio afectado en Barcelona con Higienix. Nuestros protocolos eliminan cualquier riesgo de contaminación, ofreciendo tranquilidad a familiares y profesionales del Barcelonés.',
      features:    ['Tecnología de niebla fría', 'Productos biodegradables y seguros', 'Certificación de limpieza', 'Amplia cobertura en el área metropolitana de Barcelona.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'eliminacion-de-olores-persistentes',
      nombre:      'Eliminación de olores persistentes',
      description: 'Higienix elimina eficazmente los olores difíciles y persistentes tras un fallecimiento en Barcelona, utilizando técnicas profesionales. Recuperamos la normalidad ambiental en el espacio con nuestro servicio especializado para el Barcelonés.',
      features:    ['Neutralización de olores orgánicos', 'Tratamiento enzimático avanzado', 'Olor fresco garantizado', 'Servicio disponible 24/7 en toda la provincia de Barcelona.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'gestion-de-residuos-biologicos-y-materiales-contaminados',
      nombre:      'Gestión de residuos biológicos y materiales contaminados',
      description: 'Higienix gestiona legalmente los residuos biológicos y materiales contaminados generados en Barcelona, cumpliendo con todas las normativas vigentes. Ofrecemos un servicio seguro y confidencial para el Barcelonés y sus alrededores.',
      features:    ['Albarán de entrega de residuos', 'Transporte autorizado por la Generalitat', 'Eliminación en gestor certificado', 'Servicio integral de gestión de residuos en Barcelona ciudad.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-integral-y-recuperacion-de-la-vivienda',
      nombre:      'Limpieza integral y recuperación de la vivienda',
      description: 'Higienix ofrece una limpieza integral y profunda para recuperar la habitabilidad de la vivienda en Barcelona, tras un fallecimiento.  Restauramos el espacio a su estado original, brindando apoyo al proceso duelo en todo el Barcelonés.',
      features:    ['Preparación completa para herederos', 'Limpieza de alfombras y tapicerías', 'Desinfección del aire', 'Servicio personalizado para cada cliente en Barcelona y comarca.'],
      featured:    true,
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
      initials: 'MC',
      name:     'María C.',
      location: 'Gràcia, Barcelona',
      service:  'Limpieza integral tras fallecimiento',
      quote:    'Después del fallecimiento de mi madre, Higienix fue una bendición. Limpiaron su piso en Gràcia con mucho cuidado y profesionalidad, dejándolo impecable. Agradezco enormemente su trato humano y discreción.',
    },
    {
      initials: 'JR',
      name:     'Jordi R.',
      location: 'Sarrià, Barcelona',
      service:  'Retirada de muebles y eliminación de olores',
      quote:    'La retirada de los muebles y la limpieza profunda para eliminar los olores en el piso de mi abuelo en Sarrià fue impecable. El equipo fue muy profesional y me explicaron todo el proceso con paciencia.',
    },
    {
      initials: 'AL',
      name:     'Ana L.',
      location: 'Les Corts, Barcelona',
      service:  'Limpieza por fallecimiento y vaciado de vivienda',
      quote:    'Necesitaba una limpieza urgente en Les Corts tras un familiar. Higienix respondió rápido, con un precio justo y un servicio excelente. ¡Los recomiendo totalmente!',
    },
    {
      initials: 'PG',
      name:     'Pedro G.',
      location: 'Sant Martí, Barcelona',
      service:  'Limpieza traumática de vivienda',
      quote:    'He utilizado los servicios de Higienix en varias ocasiones para limpiezas por fallecimiento. Siempre han sido profesionales y eficientes. Su equipo es de confianza.',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Limpieza básica (1-2 habitaciones)',
      precio:    'desde 595 €',
      highlight: false,
      features:  ['Retirada de pertenencias básicas', 'Limpieza general de superficies', 'Desinfección estándar'],
    },
    {
      tipo:      'Limpieza completa (3+ habitaciones)',
      precio:    'desde 949 €',
      highlight: false,
      badge:     'Más solicitado',
      features:  ['Retirada integral de muebles y objetos personales', 'Limpieza profunda de suelos, paredes y techos', 'Eliminación de olores persistentes', 'Gestión de residuos peligrosos', 'Desinfección completa con productos homologados'],
    },
    {
      tipo:      'Vaciado completo y limpieza extrema',
      precio:    'Presupuesto personalizado',
      highlight: true,
      badge:     '1200€',
      features:  ['Retirada total del contenido de la vivienda', 'Limpieza a fondo de todas las áreas afectadas', 'Tratamiento de manchas difíciles', 'Desinfección especializada contra agentes patógenos', 'Gestión integral de residuos'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Cuánto cuesta una limpieza por fallecimiento en Barcelona?',
      respuesta: 'El precio varía según el tamaño de la vivienda, el grado de suciedad y los servicios requeridos. Una limpieza básica puede costar desde 195€, mientras que una limpieza completa con vaciado puede superar los 349€. Ofrecemos presupuestos personalizados sin compromiso.',
    },
    {
      pregunta:  '¿Cuánto tarda en realizarse una limpieza por fallecimiento?',
      respuesta: 'Una limpieza básica puede tardar entre 2 y 4 horas. Una limpieza más completa, incluyendo el vaciado de la vivienda, puede requerir un día completo o incluso varios días, dependiendo del volumen de trabajo.',
    },
    {
      pregunta:  '¿Qué incluye el servicio de limpieza tras fallecimiento?',
      respuesta: 'El servicio incluye la retirada de pertenencias, la limpieza general, la eliminación de olores, la desinfección y la gestión de residuos.  Adaptamos los servicios a sus necesidades específicas.',
    },
    {
      pregunta:  '¿Trabajáis en toda la comarca de Barcelona?',
      respuesta: 'Sí, ofrecemos nuestros servicios en toda la ciudad de Barcelona (Sarrià-Sant Gervasi, Les Corts, Gràcia, Sant Martí, etc.) y en municipios del Baix Llobregat como Esplugues de Llobregat, Sant Just Desvern y Gavà.  También cubrimos zonas del Vallès Occidental.',
    },
    {
      pregunta:  '¿Qué debo hacer antes de que lleguen los profesionales?',
      respuesta: 'No es necesario realizar ninguna preparación especial. Simplemente asegúrese de tener acceso a la vivienda y de haber informado a cualquier persona que pueda estar presente en el momento de la limpieza.',
    },
    {
      pregunta:  '¿Ofrecen garantías sobre su trabajo?',
      respuesta: 'Garantizamos un servicio profesional, discreto y respetuoso. Utilizamos productos homologados y seguimos protocolos de higiene estrictos para asegurar la completa desinfección de la vivienda.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '1. Contacto inicial y presupuesto gratuito',
      descripcion: 'Llámenos o contáctenos a través de nuestra página web para solicitar un presupuesto sin compromiso. Evaluaremos sus necesidades y le proporcionaremos una cotización detallada en menos de 30 minutos, respondiendo a su consulta desde {{city}}.',
    },
    {
      titulo:      '2. Evaluación del espacio y confirmación',
      descripcion: 'Uno de nuestros técnicos visitará la vivienda para evaluar el alcance del trabajo y confirmar los servicios necesarios.  Este paso nos permite ofrecerle un presupuesto preciso y adaptado a sus necesidades específicas.',
    },
    {
      titulo:      '3. Ejecución de la limpieza con equipo profesional',
      descripcion: 'Nuestro equipo se desplazará a su domicilio con todo el equipamiento necesario para realizar una limpieza profunda y completa, utilizando productos desinfectantes homologados y siguiendo protocolos sanitarios estrictos.',
    },
    {
      titulo:      '4. Entrega del informe detallado y documentación',
      descripcion: 'Le entregaremos un informe detallado de los trabajos realizados, incluyendo la gestión de residuos peligrosos (si aplica) y cualquier otra documentación relevante.  Nos aseguramos de que se sienta completamente satisfecho con el resultado.',
    }
  ],

} as const;

export type Content = typeof content;
