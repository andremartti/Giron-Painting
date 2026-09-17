import type { Translations } from './en';

/**
 * Spanish copy, written for Spanish-speaking customers in the U.S.
 * TypeScript checks that it has exactly the same keys as `en.ts`.
 */
export const es: Translations = {
  meta: {
    title: 'Empresa de construcción y pintura en Plano, TX | {company}',
    description:
      '{company} ofrece construcción residencial y comercial, remodelaciones y pintura interior y exterior en Plano, TX y comunidades cercanas del área DFW. Pida su estimado gratis.',
    privacyTitle: 'Política de privacidad | {company}',
    termsTitle: 'Términos de servicio | {company}',
  },

  common: {
    skipToContent: 'Saltar al contenido principal',
    getEstimate: 'Estimado gratis',
    close: 'Cerrar',
    socialNotSet: '{network}: enlace disponible próximamente',
    newTab: '(se abre en una pestaña nueva)',
  },

  language: {
    label: 'Idioma',
    en: 'English',
    es: 'Español',
  },

  nav: {
    label: 'Navegación principal',
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    projects: 'Proyectos',
    serviceAreas: 'Áreas de servicio',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    homeLink: '{company}: inicio',
    tagline: 'Construcción y pintura',
  },

  hero: {
    badge: 'Con orgullo al servicio de Plano, TX y sus alrededores',
    titleLead: 'Construcción y pintura de calidad,',
    titleAccent: 'hechas para durar.',
    text: 'Servicios profesionales de construcción, remodelación y pintura interior y exterior para casas y negocios en Plano, Texas y áreas cercanas.',
    primaryCta: 'Pida su estimado gratis',
    secondaryCta: 'Ver nuestros servicios',
    imageAlt: 'Casa de piedra de dos pisos recién terminada, con jardín frontal, al atardecer',
    highlightsLabel: 'Lo que hacemos',
    highlights: [
      'Pintura interior y exterior',
      'Remodelaciones y renovaciones',
      'Drywall y reparación de paredes',
      'Residencial y comercial',
    ],
  },

  services: {
    eyebrow: 'Lo que hacemos',
    title: 'Nuestros servicios',
    subtitle: 'Trabajo profesional en cada proyecto, desde la preparación hasta el acabado final.',
    learnMore: 'Más información',
    scopeTitle: 'Lo que puede incluir este servicio',
    scopeNote: 'Cada proyecto es diferente: confirmaremos el alcance exacto con usted durante la consulta.',
    dialogCta: 'Pedir un estimado para este servicio',
    items: {
      interior: {
        title: 'Pintura interior',
        description: 'Transforme sus espacios interiores con una pintura limpia, profesional y bien detallada.',
        details:
          'Desde una pared de acento hasta pintar toda la casa, el trabajo empieza con una buena preparación para lograr un acabado liso, parejo y limpio.',
        scope: [
          'Paredes, techos y paredes de acento',
          'Resanes, lijado y preparación de superficies',
          'Puertas, molduras y zócalos',
          'Protección de pisos y muebles',
          'Limpieza al terminar el trabajo',
        ],
        imageAlt: 'Rodillo aplicando pintura azul sobre una pared interior blanca',
      },
      exterior: {
        title: 'Pintura exterior',
        description: 'Proteja y renueve su propiedad con pintura exterior duradera.',
        details:
          'La pintura exterior ayuda a proteger su propiedad del sol y el clima de Texas, y le da un aspecto renovado y bien cuidado.',
        scope: [
          'Revestimientos, estuco y ladrillo',
          'Fascias, plafones y molduras exteriores',
          'Puertas principales, contraventanas y puertas de garaje',
          'Limpieza, raspado y sellado antes de pintar',
          'Orientación para elegir pintura y colores',
        ],
        imageAlt: 'Dos pintores en escaleras pintando el exterior de una casa de dos pisos',
      },
      residential: {
        title: 'Construcción residencial',
        description: 'Servicios de construcción y mejoras pensados para las necesidades de su hogar.',
        details:
          'Trabajos de construcción y mejoras planeados según su forma de vivir, ya sea para ampliar, reconstruir o modernizar partes de su casa.',
        scope: [
          'Ampliaciones y mejoras estructurales',
          'Estructuras (framing) y acondicionamiento interior',
          'Patios, porches y áreas exteriores',
          'Coordinación de los acabados',
          'Alcance claro y planificación del proyecto',
        ],
        imageAlt: 'Armazón de madera del techo de una casa en construcción bajo un cielo azul',
      },
      commercial: {
        title: 'Construcción comercial',
        description: 'Servicios profesionales de construcción y mejoras para propiedades comerciales.',
        details:
          'Construcción y mejoras para oficinas, locales comerciales y otras propiedades, programadas teniendo en cuenta la operación de su negocio.',
        scope: [
          'Adecuaciones para inquilinos y acondicionamiento interior',
          'Pintura y acabados comerciales',
          'Drywall, estructuras y plafones',
          'Reparaciones y actualizaciones de la propiedad',
          'Horarios de trabajo coordinados con su negocio cuando sea posible',
        ],
        imageAlt: 'Equipo de construcción trabajando dentro de un gran edificio comercial con piso de concreto pulido',
      },
      remodeling: {
        title: 'Remodelaciones',
        description: 'Renueve cocinas, baños, salas y otros espacios con una remodelación profesional.',
        details:
          'Remodelaciones que actualizan los espacios que más usa, cuidando la distribución, los materiales y los detalles del acabado.',
        scope: [
          'Remodelación de cocinas',
          'Remodelación de baños',
          'Salas y recámaras',
          'Pisos, molduras y acabados',
          'Pintura y detalles finales',
        ],
        imageAlt: 'Cocina remodelada con isla de mármol, gabinetes blancos y lámparas colgantes',
      },
      drywall: {
        title: 'Drywall y reparación de paredes',
        description: 'Reparamos paredes dañadas, instalamos drywall y preparamos superficies para un acabado liso.',
        details:
          'Instalación y reparación de drywall para dejar paredes y techos lisos y listos para pintar, desde resanes pequeños hasta cuartos completos.',
        scope: [
          'Instalación de drywall nuevo',
          'Reparación de hoyos, grietas y daños por agua',
          'Cinta, masilla (mudding) y lijado',
          'Igualación de textura y reparación de paredes',
          'Preparación de superficies para pintar',
        ],
        imageAlt: 'Manos con una espátula aplicando compuesto para juntas en una pared',
      },
      cabinets: {
        title: 'Pintura de gabinetes y molduras',
        description: 'Renueve gabinetes, puertas, molduras y otras superficies detalladas.',
        details:
          'Pintura detallada para gabinetes, puertas y molduras: las superficies que hacen que un espacio se vea realmente terminado.',
        scope: [
          'Gabinetes de cocina y baño',
          'Puertas interiores y marcos',
          'Molduras, zócalos y cornisas',
          'Techos y áreas de difícil acceso',
          'Limpieza, lijado y aplicación de primer',
        ],
        imageAlt: 'Cocina con gabinetes pintados de verde salvia y encimeras de mármol',
      },
      renovations: {
        title: 'Renovaciones generales',
        description:
          'Servicios de renovación flexibles para proyectos que requieren varios trabajos de construcción y acabado.',
        details:
          'Renovaciones que combinan varios oficios, manejadas como un solo proyecto desde la demolición hasta la última capa de pintura.',
        scope: [
          'Renovación de varios cuartos o de toda la casa',
          'Demolición y reconstrucción',
          'Drywall, pintura y acabados',
          'Reparaciones antes de vender o mudarse',
          'Mejoras para propietarios y administradores de propiedades',
        ],
        imageAlt: 'Cuarto en plena renovación con estructura expuesta y postes de soporte temporales',
      },
    },
  },

  whyUs: {
    eyebrow: 'Por qué elegirnos',
    title: '¿Por qué elegir a {company}?',
    intro:
      'Contratar a un contratista significa confiarle su propiedad. Esto es lo que puede esperar al trabajar con nuestro equipo.',
    imageAlt: 'Pintor suspendido con cuerdas pintando una gran pared blanca',
    items: {
      quality: {
        title: 'Trabajo de calidad',
        text: 'Nos enfocamos en una preparación cuidadosa, una aplicación precisa y un acabado limpio.',
      },
      detail: {
        title: 'Atención al detalle',
        text: 'Cuidamos en cada proyecto los detalles que hacen que un espacio terminado se vea profesional.',
      },
      reliable: {
        title: 'Servicio confiable',
        text: 'Comunicación clara y un proyecto bien organizado de principio a fin.',
      },
      versatile: {
        title: 'Residencial y comercial',
        text: 'Soluciones para dueños de casa, propietarios de inmuebles y negocios.',
      },
      local: {
        title: 'Servicio local',
        text: 'Con orgullo al servicio de Plano y de las comunidades del área DFW.',
      },
    },
  },

  about: {
    eyebrow: 'Nosotros',
    title: 'Construido con calidad. Terminado con esmero.',
    paragraphs: [
      '{company} ofrece servicios de construcción, remodelación y pintura para clientes residenciales y comerciales en Plano, Texas y el área de Dallas–Fort Worth.',
      'Ya sea que quiera renovar un solo cuarto, actualizar el exterior de su casa o hacer mejoras en un espacio comercial, nuestra forma de trabajar es la misma: preparación cuidadosa, mano de obra de calidad y un acabado limpio y profesional.',
    ],
    storyPlaceholder:
      '[HISTORIA DE LA EMPRESA — Agregue unas líneas sobre cómo empezó el negocio, la experiencia de su equipo y qué distingue su trabajo.]',
    points: [
      'Casas, propiedades de renta y negocios',
      'Pintura, drywall, remodelaciones y construcción',
      'Comunicación desde el estimado hasta la revisión final',
    ],
    photoLabel: '[FOTO DEL EQUIPO O DE UN PROYECTO]',
    imageAlt: 'Pintor en una escalera pintando el exterior de una casa blanca',
    detailAlt: 'Primer plano de un rodillo aplicando pintura blanca en una pared interior',
    cta: 'Conozca más sobre nosotros',
  },

  projects: {
    eyebrow: 'Portafolio',
    title: 'Nuestros trabajos recientes',
    subtitle: 'Una muestra de los proyectos de pintura, remodelación y construcción que realizamos.',
    placeholderNote: '[Fotos de muestra — reemplácelas con imágenes de sus proyectos terminados]',
    filterLabel: 'Filtrar proyectos por categoría',
    all: 'Todos',
    categories: {
      interior: 'Pintura interior',
      exterior: 'Pintura exterior',
      remodeling: 'Remodelaciones',
      construction: 'Construcción',
      commercial: 'Comercial',
    },
    showing: 'Mostrando {count} proyectos',
    open: 'Ver imagen ampliada: {title}',
    lightboxLabel: 'Visor de fotos de proyectos',
    previous: 'Proyecto anterior',
    next: 'Proyecto siguiente',
    counter: '{current} de {total}',
    items: {
      interiorRoom: {
        title: 'Paredes y molduras interiores',
        alt: 'Cuarto vacío con paredes grises recién pintadas, molduras blancas y piso de madera',
      },
      exteriorFarmhouse: {
        title: 'Pintura exterior de dos pisos',
        alt: 'Casa blanca estilo granja con techo oscuro y ventanas iluminadas al anochecer',
      },
      remodelKitchen: {
        title: 'Actualización de cocina',
        alt: 'Cocina con gabinetes blancos, fregadero tipo granja y electrodomésticos de acero inoxidable',
      },
      commercialLobby: {
        title: 'Acabados de recepción comercial',
        alt: 'Recepción comercial moderna con paneles de madera y mostrador de piedra',
      },
      exteriorBrick: {
        title: 'Exterior y molduras de casa de ladrillo',
        alt: 'Casa de ladrillo de dos pisos con jardín frontal en un vecindario residencial',
      },
      constructionFraming: {
        title: 'Estructura de casa nueva',
        alt: 'Casa de dos pisos con estructura de madera en construcción y andamios',
      },
      interiorLiving: {
        title: 'Renovación de sala',
        alt: 'Sala moderna con paredes en tonos neutros, sofá seccional y ventanales',
      },
      remodelBath: {
        title: 'Remodelación de baño',
        alt: 'Baño remodelado con regadera de vidrio, lavabo doble y piso tipo madera',
      },
      constructionInterior: {
        title: 'Estructura interior y drywall',
        alt: 'Espacio interior en construcción con postes metálicos y paneles de drywall nuevos',
      },
      exteriorSiding: {
        title: 'Pintura de revestimiento y porche',
        alt: 'Casa de dos pisos con revestimiento gris, molduras blancas y porche techado',
      },
      commercialOffice: {
        title: 'Renovación de oficina',
        alt: 'Oficina abierta con filas de escritorios, sillas y luces empotradas en el techo',
      },
      interiorOpen: {
        title: 'Pintura de área abierta',
        alt: 'Sala con paredes blancas, techo de madera y ventanales de piso a techo',
      },
    },
  },

  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Nuestro proceso',
    subtitle: 'Un proceso sencillo y organizado, desde la primera conversación hasta la revisión final.',
    steps: [
      {
        title: 'Pida su estimado',
        text: 'Cuéntenos sobre su proyecto y lo que desea lograr.',
      },
      {
        title: 'Consulta del proyecto',
        text: 'Hablamos del alcance, los materiales, los acabados y sus expectativas.',
      },
      {
        title: 'Trabajo profesional',
        text: 'Nuestro equipo realiza el proyecto cuidando la preparación, la mano de obra y los detalles.',
      },
      {
        title: 'Revisión final',
        text: 'Revisamos juntos el trabajo terminado para asegurarnos de que cumpla con sus expectativas.',
      },
    ],
  },

  serviceAreas: {
    eyebrow: 'Áreas de servicio',
    title: 'Al servicio de Plano y el área DFW',
    text: 'Con base en Plano, Texas, {company} trabaja con dueños de casa, propietarios de inmuebles y negocios en comunidades del norte del área metropolitana de Dallas–Fort Worth.',
    listTitle: 'Áreas que atendemos',
    homeBase: 'Nuestra base',
    surrounding: 'Comunidades cercanas del área DFW',
    mapLabel: 'Mapa ilustrado de Plano, Texas y las ciudades cercanas del área de servicio',
    mapNote: 'Mapa ilustrativo, no está a escala',
    toDallas: 'Dallas',
    outsideTitle: '¿Está fuera de estas áreas?',
    outsideText: '¿Su propiedad está fuera de estas áreas? Contáctenos para consultar si podemos atenderle.',
    outsideCta: 'Consultar disponibilidad',
  },

  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen nuestros clientes',
    subtitle: 'Comentarios de los dueños de casa y negocios con los que trabajamos.',
    listLabel: 'Testimonios de clientes',
  },

  estimateCta: {
    title: '¿Listo para transformar su propiedad?',
    text: 'Cuéntenos sobre su próximo proyecto de construcción, remodelación o pintura y pida hoy mismo su estimado gratis.',
    button: 'Pedir un estimado gratis',
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos de su proyecto',
    subtitle:
      'Compártanos algunos detalles de su proyecto y nos pondremos en contacto para hablar de los siguientes pasos y programar su estimado gratis.',
    infoTitle: 'Información de contacto',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    address: 'Dirección',
    hours: 'Horario de atención',
    serviceArea: 'Al servicio de Plano, TX y el área DFW',
    form: {
      title: 'Pida su estimado gratis',
      requiredNote: 'Los campos marcados con * son obligatorios.',
      required: 'obligatorio',
      fullName: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      projectType: 'Tipo de proyecto',
      projectTypePlaceholder: 'Seleccione un tipo de proyecto',
      projectTypes: {
        interior: 'Pintura interior',
        exterior: 'Pintura exterior',
        construction: 'Construcción',
        remodeling: 'Remodelación',
        drywall: 'Reparación de drywall',
        cabinets: 'Pintura de gabinetes',
        commercial: 'Proyecto comercial',
        other: 'Otro',
      },
      propertyType: 'Tipo de propiedad',
      propertyTypes: {
        residential: 'Residencial',
        commercial: 'Comercial',
      },
      contactMethod: 'Método de contacto preferido',
      contactMethods: {
        phone: 'Llamada',
        text: 'Mensaje de texto',
        email: 'Correo electrónico',
      },
      details: 'Detalles del proyecto',
      detailsHint: 'Describa el trabajo que necesita, el tamaño aproximado del área y cuándo le gustaría empezar.',
      honeypot: 'Deje este campo vacío',
      submit: 'Pedir mi estimado gratis',
      submitting: 'Enviando…',
      errorSummary: 'Revise los campos marcados.',
      successTitle: 'Gracias, su solicitud fue enviada.',
      successText: 'Revisaremos los detalles de su proyecto y nos comunicaremos con usted por el medio que prefiera.',
      sendAnother: 'Enviar otra solicitud',
      failureTitle: 'No pudimos enviar su solicitud.',
      failureText: 'Inténtelo de nuevo en un momento o comuníquese con nosotros por teléfono o correo electrónico.',
      notConfiguredTitle: 'Las solicitudes en línea aún no están disponibles.',
      notConfiguredText: 'Llámenos o escríbanos directamente y con gusto le ayudaremos con su estimado.',
    },
    validation: {
      nameRequired: 'Escriba su nombre completo.',
      emailRequired: 'Escriba su correo electrónico.',
      emailInvalid: 'Escriba un correo electrónico válido, por ejemplo: nombre@ejemplo.com.',
      phoneRequired: 'Escriba su número de teléfono.',
      phoneInvalid: 'Escriba un número de teléfono de EE. UU. válido, de 10 dígitos.',
      projectTypeRequired: 'Seleccione un tipo de proyecto.',
      propertyTypeRequired: 'Seleccione un tipo de propiedad.',
      contactMethodRequired: 'Indique cómo prefiere que nos comuniquemos con usted.',
      detailsRequired: 'Cuéntenos un poco sobre su proyecto.',
      detailsShort: 'Agregue un poco más de detalle (al menos {min} caracteres).',
    },
  },

  footer: {
    description:
      'Servicios profesionales de construcción, remodelación y pintura interior y exterior en Plano, Texas y áreas cercanas.',
    linksTitle: 'Enlaces rápidos',
    servicesTitle: 'Servicios',
    contactTitle: 'Contacto',
    socialTitle: 'Síganos',
    social: {
      facebook: 'Facebook',
      instagram: 'Instagram',
      googleBusiness: 'Perfil de Google Business',
    },
    privacy: 'Política de privacidad',
    terms: 'Términos de servicio',
    rights: '© {year} {company}. Todos los derechos reservados.',
    legalLabel: 'Información legal',
    backToTop: 'Volver arriba',
  },

  legal: {
    backHome: 'Volver al inicio',
    updated: 'Última actualización: [FECHA]',
    templateNotice:
      '[PLANTILLA — Esta página es solo un punto de partida. Pida a un profesional legal que la revise y complete antes de publicarla.]',
    privacy: {
      title: 'Política de privacidad',
      intro:
        'Esta Política de privacidad explica cómo {company} recopila y utiliza la información enviada a través de este sitio web.',
      sections: [
        {
          heading: 'Información que recopilamos',
          body: 'Cuando envía el formulario de solicitud de estimado, recopilamos la información que usted decide compartir, como su nombre, correo electrónico, teléfono, tipo de propiedad y detalles del proyecto.',
        },
        {
          heading: 'Cómo usamos su información',
          body: 'Usamos esta información para responder a su solicitud, preparar estimados y comunicarnos con usted sobre su proyecto.',
        },
        {
          heading: 'Cómo compartimos su información',
          body: '[DESCRIBA QUÉ TERCEROS RECIBEN ESTA INFORMACIÓN, COMO SU PROVEEDOR DE FORMULARIOS O DE CORREO ELECTRÓNICO.]',
        },
        {
          heading: 'Cookies y analítica',
          body: 'Este sitio guarda su preferencia de idioma en su navegador. [DESCRIBA LAS HERRAMIENTAS DE ANALÍTICA O SEGUIMIENTO QUE AGREGUE.]',
        },
        {
          heading: 'Contáctenos',
          body: 'Si tiene preguntas sobre esta política, comuníquese con {company} al {email} o al {phone}.',
        },
      ],
    },
    terms: {
      title: 'Términos de servicio',
      intro: 'Al usar este sitio web, usted acepta los siguientes términos.',
      sections: [
        {
          heading: 'Uso de este sitio web',
          body: 'El contenido de este sitio web se ofrece como información general sobre los servicios de {company}.',
        },
        {
          heading: 'Estimados y servicios',
          body: '[DESCRIBA CÓMO SE MANEJAN LOS ESTIMADOS, CONTRATOS, PAGOS Y GARANTÍAS.]',
        },
        {
          heading: 'Fotos y contenido',
          body: '[CONFIRME LA PROPIEDAD O LICENCIA DE LAS FOTOS Y EL CONTENIDO QUE SE MUESTRAN EN ESTE SITIO.]',
        },
        {
          heading: 'Limitación de responsabilidad',
          body: '[AGREGUE UNA CLÁUSULA DE LIMITACIÓN DE RESPONSABILIDAD REVISADA POR UN PROFESIONAL LEGAL.]',
        },
        {
          heading: 'Contáctenos',
          body: 'Puede enviar sus preguntas sobre estos términos a {company} al {email} o al {phone}.',
        },
      ],
    },
  },
};
