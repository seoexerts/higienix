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
    eyebrow:     'Servicio de limpieza por fallecimiento con máxima discreción en Barcelona',
    h1main:      'Limpieza por Fallecimiento',
    h1accent:    'Con discreción y respeto en Barcelona',
    description: 'Higienix acompaña a las familias en uno de los momentos más difíciles. Nos encargamos de toda la limpieza tras un fallecimiento en Barcelona con la máxima discreción, para que puedas centrarte en lo que de verdad importa.',
    badge1:      'Disponibles 24 horas, todos los días',
    badge2:      'Trato cercano y confidencial en {{city}}',
    badge3:      'Precio cerrado por escrito, sin sorpresas',
    badge4:      'Toda Barcelona y comarca',
    cardStat:    '+600',
    cardLabel:   'familias atendidas en Barcelona',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'heart',
      title:       'Un servicio pensado para las familias',
      description: 'Entendemos que estás pasando un momento muy duro. Por eso nuestro equipo actúa con la máxima empatía y discreción, coordinándose directamente con quien la familia designe para no añadir más carga en {{city}}.',
    },
    {
      icon: 'clock',
      title:       'Respuesta rápida cuando más lo necesitas',
      description: 'Estamos disponibles las 24 horas, los 365 días del año. Te damos respuesta en menos de 30 minutos y nos desplazamos a tu domicilio en {{city}} el mismo día que lo necesites, sin burocracia ni esperas.',
    },
    {
      icon: 'shield',
      title:       'Precio cerrado, sin sorpresas',
      description: 'Antes de empezar te entregamos el precio por escrito. No hay costes ocultos ni modificaciones de última hora. Sabemos que en estos momentos lo último que necesitas es incertidumbre económica.',
    },
    {
      icon: 'check',
      title:       'Lo dejamos todo listo para los herederos',
      description: 'Higienix se encarga de que el inmueble quede completamente limpio, sin rastro de olores y listo para ser entregado a herederos, puesto en alquiler o preparado para su venta en {{city}}.',
    },
    {
      icon: 'box',
      title:       'Discreción total en el vecindario',
      description: 'Trabajamos sin señalización exterior, con vehículos sin rotulación y en horarios que protejan la privacidad de la familia. Nadie en el vecindario tiene por qué saber qué está pasando en {{city}}.',
    },
    {
      icon: 'users',
      title:       'Equipo propio, sin subcontratas',
      description: 'Todos los profesionales que entran en tu domicilio son empleados directos de Higienix, formados y seleccionados por nosotros. Nunca enviamos personal externo ni subcontratado para trabajos de este tipo.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'retirada-de-enseres-y-materiales-afectados',
      nombre:      'Retirada de enseres y materiales afectados',
      description: 'Higienix se encarga de retirar con cuidado los objetos personales, muebles y enseres afectados. Lo hacemos con respeto y discreción, colaborando con la familia para identificar qué debe conservarse y qué puede retirarse en Barcelona.',
      features:    ['Coordinación previa con la familia', 'Retirada discreta sin señalización exterior', 'Gestión responsable de residuos', 'Servicio disponible en Barcelona y alrededores'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-y-descontaminacion-de-la-zona-afectada',
      nombre:      'Limpieza y descontaminación de la zona afectada',
      description: 'Limpiamos en profundidad las zonas afectadas utilizando productos profesionales que eliminan cualquier rastro biológico. Higienix deja el espacio en condiciones óptimas de higiene para que la familia pueda retomar su vida con tranquilidad en Barcelona.',
      features:    ['Limpieza profunda con productos homologados', 'Eliminación de restos biológicos', 'Resultado visible y verificable', 'Servicio urgente disponible en Barcelona y comarca'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'desinfeccion-y-sanitizacion-profesional',
      nombre:      'Desinfección y sanitización profesional',
      description: 'Tras la limpieza, Higienix aplica un tratamiento completo de desinfección que garantiza un ambiente sano y libre de gérmenes. El resultado es un hogar completamente higienizado y listo para ser habitado o visitado en Barcelona.',
      features:    ['Desinfección completa de todas las estancias', 'Productos seguros para personas y mascotas', 'Ambiente higienizado y sin riesgo', 'Cobertura en toda el área metropolitana'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'eliminacion-de-olores-persistentes',
      nombre:      'Eliminación de olores persistentes',
      description: 'Los olores tras un fallecimiento pueden impregnar paredes, suelos y tejidos. Higienix utiliza técnicas específicas para eliminarlos completamente, devolviendo al hogar un ambiente fresco y neutro para que la familia pueda entrar sin dificultad en Barcelona.',
      features:    ['Tratamiento específico según tipo de olor', 'Eliminación en paredes, suelos y tejidos', 'Resultado duradero garantizado', 'Disponible 24 horas en toda Barcelona'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'gestion-de-residuos-biologicos-y-materiales-contaminados',
      nombre:      'Gestión de residuos biológicos y materiales contaminados',
      description: 'Higienix gestiona la retirada y eliminación correcta de todos los residuos biológicos, cumpliendo con la normativa vigente. La familia no tiene que preocuparse de nada: nosotros nos encargamos de todos los trámites y la gestión completa en Barcelona.',
      features:    ['Sin gestiones por parte de la familia', 'Cumplimiento normativa sanitaria vigente', 'Eliminación en gestores autorizados', 'Documentación disponible si se necesita'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-integral-y-recuperacion-de-la-vivienda',
      nombre:      'Limpieza integral y recuperación de la vivienda',
      description: 'El servicio más completo de Higienix: dejamos el inmueble completamente limpio, desinfectado y sin olores, listo para ser entregado a herederos, puesto en alquiler o preparado para su venta. Una solución completa para aliviar la carga de la familia en Barcelona.',
      features:    ['Inmueble listo para herederos o venta', 'Limpieza de suelos, paredes y techos', 'Eliminación total de olores', 'Coordinación directa con quien la familia designe'],
      featured:    true,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosH2:   '¿Por qué confiar en Higienix en {{city}}?',
    beneficiosSub:  'Trato cercano, precio cerrado y el máximo respeto hacia la familia en cada intervención.',
    serviciosH2:    'Cómo te ayudamos en {{city}}',
    serviciosSub:   'Nos encargamos de todo para que tú no tengas que hacerlo.',
    zonaH2:         'Atendemos en {{city}} y toda la comarca',
    procesoH2:      'Así de sencillo es trabajar con Higienix',
    testimoniosH2:  'Familias que confiaron en Higienix en {{city}}',
    testimoniosSub: 'Más de 600 familias nos han confiado uno de los momentos más difíciles.',
    preciosH2:      'Precios orientativos en {{city}}',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También atendemos los barrios de {{city}}:',
    preciosSub:     'Precio cerrado por escrito antes de empezar. Sin sorpresas ni costes adicionales.',
    faqH2:          'Lo que las familias nos preguntan en {{city}}',
    preciosNota:    'Precios orientativos para {{city}}. El precio definitivo se confirma por escrito antes de iniciar el servicio. Presupuesto gratuito y sin compromiso.',
    faqSub:         'Resolvemos las dudas más habituales de las familias antes de contratar.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'LM',
      name:     'Laura M.',
      location: 'Sant Andreu, Barcelona',
      service:  'Limpieza integral tras fallecimiento',
      quote:    'Higienix llegó el mismo día que llamé. El equipo fue increíblemente respetuoso y discreto. No tuve que preocuparme de nada: ellos se encargaron de todo y me explicaron cada paso. En un momento tan duro, esa tranquilidad no tiene precio.',
    },
    {
      initials: 'FO',
      name:     'Francesc O.',
      location: 'Horta-Guinardó, Barcelona',
      service:  'Retirada de enseres y eliminación de olores',
      quote:    'Lo que más valoro es que me dijeron el precio exacto antes de empezar y así fue. Sin sorpresas. Además vinieron en el horario que les pedí para que los vecinos no lo vieran. Muy agradecido con el trato que tuvieron.',
    },
    {
      initials: 'IG',
      name:     'Isabel G.',
      location: 'Nou Barris, Barcelona',
      service:  'Limpieza completa para poner el piso en alquiler',
      quote:    'El piso de mi tío llevaba tiempo sin ventilarse. Higienix lo dejó completamente nuevo: sin olor, limpio y listo para alquilar. La gestora que visitó el piso no podía creer el cambio. Los recomiendo sin dudarlo.',
    },
    {
      initials: 'TK',
      name:     'Toni K.',
      location: 'Sants-Montjuïc, Barcelona',
      service:  'Servicio urgente de limpieza por fallecimiento',
      quote:    'Llamé un domingo por la tarde y vinieron ese mismo día. No esperaba esa respuesta tan rápida. El equipo fue muy amable y profesional. Hicieron el trabajo sin interrupciones y sin que los vecinos se enteraran.',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Limpieza básica (1-2 habitaciones)',
      precio:    'desde 545 €',
      highlight: false,
      features:  ['Limpieza profunda de la zona afectada', 'Eliminación de restos y olores básicos', 'Desinfección completa'],
    },
    {
      tipo:      'Limpieza completa (3+ habitaciones)',
      precio:    'desde 895 €',
      highlight: false,
      badge:     'Más solicitado',
      features:  ['Todo el inmueble limpio y desinfectado', 'Retirada de enseres afectados', 'Eliminación total de olores persistentes', 'Gestión de residuos incluida', 'Precio cerrado sin sorpresas'],
    },
    {
      tipo:      'Inmueble listo para venta o herencia',
      precio:    'Presupuesto personalizado',
      highlight: true,
      badge:     'Desde 1.100€',
      features:  ['Limpieza y desinfección integral', 'Vaciado completo coordinado con la familia', 'Inmueble listo para visitas o escritura', 'Coordinación con notaría o agencia inmobiliaria', 'Un punto de contacto para todo el proceso'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Puedo llamar en cualquier momento, también de noche o en fin de semana?',
      respuesta: 'Sí. Higienix está disponible las 24 horas del día, los 365 días del año. Sabemos que estos momentos no se planifican, así que respondemos siempre, también en festivos, noches y fines de semana. Te damos respuesta en menos de 30 minutos.',
    },
    {
      pregunta:  '¿Tengo que estar presente durante la limpieza?',
      respuesta: 'No es necesario que estés presente. Muchas familias prefieren no estarlo y lo entendemos perfectamente. Podemos coordinar el acceso con quien la familia designe: otro familiar, el administrador de la finca o un abogado. Te informamos al terminar y te enviamos fotos del resultado si lo deseas.',
    },
    {
      pregunta:  '¿Cómo sé cuánto va a costar antes de que empiecen?',
      respuesta: 'Siempre entregamos el precio por escrito antes de iniciar cualquier trabajo. El presupuesto es gratuito y sin compromiso. Una vez aceptado, ese es el precio final: no añadimos costes adicionales ni sorpresas al terminar.',
    },
    {
      pregunta:  '¿Se enterarán los vecinos de lo que está pasando?',
      respuesta: 'Tomamos todas las medidas para que la intervención sea completamente discreta. Trabajamos con vehículos sin rotulación, sin señalización exterior y adaptamos el horario de trabajo a tus preferencias para proteger la privacidad de la familia.',
    },
    {
      pregunta:  '¿Qué pasa con los objetos personales del fallecido?',
      respuesta: 'Antes de retirar nada, coordinamos con la familia para saber qué debe conservarse. Solo retiramos lo que la familia nos indique expresamente. Los objetos de valor, documentos y pertenencias personales importantes se apartan y se entregan a quien la familia designe.',
    },
    {
      pregunta:  '¿Quedará el piso completamente limpio y sin olor para enseñárselo a compradores o herederos?',
      respuesta: 'Sí, ese es exactamente nuestro objetivo. Higienix deja el inmueble completamente limpio, sin olores y en condiciones óptimas para ser visitado, alquilado o vendido. Si al terminar no estás satisfecho con el resultado, revisamos el trabajo sin coste adicional.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '1. Nos llamas y te respondemos en 30 minutos',
      descripcion: 'Llámanos o escríbenos a cualquier hora. Te escuchamos, te explicamos cómo trabajamos y te damos un precio orientativo por teléfono. Sin rodeos ni formularios complicados. Solo una llamada para empezar a quitarte ese peso de encima desde {{city}}.',
    },
    {
      titulo:      '2. Visitamos el inmueble y confirmamos el precio por escrito',
      descripcion: 'Un miembro del equipo visita el inmueble para ver la situación real y confirmarte el precio exacto por escrito. Sin compromisos hasta que tú lo apruebes. Muchas familias nos lo agradecen: saber el precio antes es fundamental para tomar la decisión con calma.',
    },
    {
      titulo:      '3. Realizamos el servicio en el horario que necesites',
      descripcion: 'Nuestro equipo llega puntual, trabaja con discreción y se coordina únicamente con la persona que tú designes. No tienes que estar presente si no quieres. Trabajamos en {{city}} de forma ordenada y sin interrupciones hasta que el resultado sea impecable.',
    },
    {
      titulo:      '4. Te entregamos el inmueble listo y te informamos de todo',
      descripcion: 'Al terminar, te informamos del trabajo realizado, te entregamos la documentación necesaria y, si lo deseas, te hacemos un recorrido fotográfico del resultado. El inmueble queda listo para herederos, para la venta o para lo que necesites.',
    }
  ],

} as const;

export type Content = typeof content;
