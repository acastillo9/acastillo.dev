import type { Translations } from "../index";

export const es: Translations = {
  nav: {
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    blog: "Blog",
    contact: "Contacto",
    getInTouch: "Contáctame",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchLanguage: "English",
  },
  hero: {
    greeting: "Hola, soy",
    name: "Andrés Castillo",
    tagline:
      "Construyo aplicaciones web escalables y de alto rendimiento, integrando soluciones impulsadas por IA para resolver problemas complejos del mundo real y ofrecer experiencias de usuario excepcionales.",
    roles: [
      "Ingeniero de IA",
      "Desarrollador Full Stack",
      "Entusiasta de UI/UX",
      "Arquitecto Cloud",
      "Contribuidor Open Source",
    ],
    viewWork: "Ver Mi Trabajo",
    getInTouch: "Contáctame",
    scrollToAbout: "Ir a la sección sobre mí",
  },
  about: {
    label: "Sobre Mí",
    headline: "Diseñando experiencias web inteligentes y escalables.",
    bio: [
      "Soy un Arquitecto Web que diseña sistemas de extremo a extremo en diversas industrias y dominios de negocio complejos. Mi trabajo se encuentra en la intersección de la ingeniería web moderna y la IA — no como disciplinas separadas, sino como un enfoque unificado para construir software más inteligente.",
      "Me especializo en transformar problemas de negocio complejos en arquitecturas limpias y mantenibles — cada vez más potenciadas por flujos de trabajo de desarrollo asistidos por IA. Más allá del código, invierto en el crecimiento de equipos de ingeniería a través de liderazgo técnico, construcción de comunidad y mentoría práctica.",
    ],
    stats: ["12+ años de experiencia", "Medellín, Colombia"],
  },
  skills: {
    label: "Habilidades y Herramientas",
    heading: "Tecnologías con las que Trabajo",
    description:
      "Creo en elegir la herramienta adecuada para cada trabajo. Estas son las tecnologías que uso con más frecuencia.",
    categories: {
      "AI & Intelligent Systems": "IA y Sistemas Inteligentes",
      Frontend: "Frontend",
      Backend: "Backend",
      Database: "Base de Datos",
      "Cloud & DevOps": "Cloud y DevOps",
    },
  },
  projects: {
    label: "Trabajo Seleccionado",
    heading: "Proyectos que He Construido",
    description:
      "Cada proyecto representa un desafío único. Me enfoco en código limpio, rendimiento y entregar valor real.",
    inDevelopment: "En Desarrollo",
    viewSource: "Ver código fuente de {title} en GitHub",
    viewDemo: "Ver demo en vivo de {title}",
    descriptions: {
      Budget:
        "Aplicación de finanzas personales para rastrear ingresos, gastos, facturas y presupuestos con análisis en dashboard. Incluye Google OAuth, soporte multi-moneda e insights financieros con IA próximamente.",
      BarrioAlerta:
        "Aplicación de seguridad vecinal para ciudades colombianas que reemplaza los caóticos grupos de WhatsApp de seguridad con un mapa de incidentes estructurado, red de vecinos verificados, alertas inteligentes de proximidad y tendencias semanales de seguridad del barrio.",
      FincaSegura:
        "Plataforma de reservas por WhatsApp con protección de pago en custodia para alquiler de fincas vacacionales en Colombia. Resuelve el problema de estafas incorporando propietarios rurales vía bot de WhatsApp y reteniendo pagos hasta el check-in verificado.",
      CargaCO:
        "La plataforma unificada de carga de vehículos eléctricos de Colombia. Agrega redes fragmentadas de cargadores en un solo mapa en vivo con disponibilidad en tiempo real, reservas y pagos nativos en COP vía Nequi y PSE. Incluye un dashboard B2B para CPOs en centros comerciales, hoteles y parqueaderos para monetizar sus cargadores con precios dinámicos y analíticas de utilización.",
      FacturApp:
        "Facturación electrónica por WhatsApp para microempresas y freelancers colombianos. Simplifica el cumplimiento DIAN manejando generación XML (UBL 2.1), firma CUFE, transmisión en tiempo real a la DIAN y PDFs listos para el cliente — todo desde un simple mensaje de chat. Incluye gestión de certificados digitales, directorio de clientes frecuentes y dashboard multi-NIT para contadores independientes.",
      ObraLog:
        "Aplicación de documentación de campo nativa de WhatsApp para subcontratistas de construcción colombianos. Convierte fotos dispersas del celular en evidencia georreferenciada y con marca de tiempo organizada por proyecto — generando reportes diarios de progreso y paquetes PDF listos para cobro para eliminar disputas.",
      ArriendoOS:
        "Plataforma de gestión de arriendos para pequeños arrendadores colombianos (2–9 unidades). Automatiza cobro de arriendo vía WhatsApp + Nequi/PSE, calcula incrementos anuales IPC según Ley 820, genera documentos de paz y salvo, y da a los inquilinos un certificado descargable de historial de pagos — reemplazando el caos del cuaderno y WhatsApp con un dashboard ligero.",
    },
  },
  blog: {
    label: "// últimas entradas",
    heading: "Del Blog",
    description:
      "Reflexiones sobre desarrollo, diseño y la construcción de mejor software.",
    viewAll: "Ver Todas las Entradas",
    allPosts: "Todas las Entradas",
    backToHome: "Volver al Inicio",
    backToBlog: "Volver al Blog",
    backToAllPosts: "Volver a todas las entradas",
  },
  contact: {
    label: "Contacto",
    heading: "Trabajemos Juntos",
    description:
      "¿Tienes un proyecto en mente o simplemente quieres conversar? Envíame un mensaje y te responderé lo antes posible.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu Nombre",
    emailLabel: "Correo",
    emailPlaceholder: "tu@correo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntame sobre tu proyecto o idea...",
    send: "Enviar Mensaje",
    sending: "Enviando...",
    successTitle: "¡Mensaje Enviado!",
    successMessage: "Gracias por escribirme. Te responderé pronto.",
    connect: "Conectar",
    availability:
      "Actualmente abierto a oportunidades freelance y roles de tiempo completo. Disponible para trabajo remoto a nivel mundial.",
    errors: {
      FIELDS_REQUIRED: "Todos los campos son obligatorios.",
      INVALID_EMAIL: "Dirección de correo inválida.",
      MESSAGE_TOO_LONG: "El mensaje es muy largo (máximo 5000 caracteres).",
      SEND_FAILED: "Error al enviar el correo. Por favor intenta de nuevo.",
      SERVER_ERROR: "Error de configuración del servidor.",
      UNKNOWN: "Algo salió mal. Por favor intenta de nuevo.",
    },
  },
  footer: {
    copyright:
      "Andrés Castillo © {year}. Construido con Astro & Tailwind CSS.",
    allRights: "© {year} Andrés Castillo. Todos los derechos reservados.",
  },
  meta: {
    homeTitle: "Andrés Castillo — Ingeniero de IA & Desarrollador de Software",
    homeDescription:
      "Portafolio de Andrés Castillo, mostrando proyectos, habilidades y artículos sobre ingeniería de IA y desarrollo de software.",
    blogTitle: "Blog | Andrés Castillo",
    defaultDescription:
      "Desarrollador Full Stack — construyendo aplicaciones web de alto rendimiento y accesibles.",
  },
};
