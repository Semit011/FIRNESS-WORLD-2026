export const calendar = [
  [
    "Día 1 · Viernes 22 de mayo de 2026",
    "Apertura del recinto a las 08:00, acreditaciones, primeras conferencias y actividades abiertas hasta las 17:00.",
  ],
  [
    "Día 2 · Sábado 23 de mayo de 2026",
    "Jornada central de 08:00 a 17:00, con competiciones, masterclass, invitados destacados y encuentros con marcas del sector.",
  ],
  [
    "Día 3 · Domingo 24 de mayo de 2026",
    "Finales, exhibiciones, networking profesional, entrega de premios y cierre del evento a las 17:00.",
  ],
];

export const ticketTypes = [
  "Entrada General",
  "Abono 3 días",
  "Pase VIP",
  "Acreditación Profesional",
];

export const ticketPlans = [
  {
    name: "Entrada General",
    price: "25€",
    note: "Acceso de un día",
    benefits: [
      "Acceso al recinto durante una jornada",
      "Acceso a conferencias y zonas de marca",
      "Participación en actividades abiertas al público",
    ],
  },
  {
    name: "Abono 3 días",
    price: "60€",
    note: "Opción recomendada",
    highlighted: true,
    benefits: [
      "Acceso completo los días 22, 23 y 24 de mayo de 2026, de 08:00 a 17:00",
      "Acceso a competiciones, conferencias y actividades",
      "Acreditación digital válida para todo el evento",
    ],
  },
  {
    name: "Pase VIP",
    price: "120€",
    note: "Experiencia ampliada",
    benefits: [
      "Acceso preferente al recinto",
      "Zona VIP y áreas reservadas",
      "Encuentros con invitados sujetos a disponibilidad",
    ],
  },
  {
    name: "Acreditación Profesional",
    price: "90€",
    note: "Sector fitness",
    benefits: [
      "Acceso profesional durante los tres días",
      "Networking con marcas y ponentes",
      "Acreditación específica para profesionales",
    ],
  },
];

export const sponsorGroups = [
  {
    category: "Suplementación deportiva",
    description: "Marcas orientadas a rendimiento, recuperación y apoyo nutricional para deportistas.",
    brands: ["MyProtein", "Prozis", "Optimum Nutrition"],
  },
  {
    category: "Ropa y material deportivo",
    description: "Equipación, calzado y material técnico para entrenamiento, competición y uso diario.",
    brands: ["Gymshark", "Nike", "Adidas"],
  },
  {
    category: "Equipamiento y maquinaria",
    description: "Soluciones profesionales para zonas de fuerza, entrenamiento funcional y espacios fitness.",
    brands: ["Technogym", "Rogue Fitness", "BH Fitness"],
  },
  {
    category: "Nutrición y alimentación",
    description: "Alimentación práctica, bebidas funcionales y productos pensados para asistentes activos.",
    brands: ["Barebells", "Monster Energy", "Fitfood"],
  },
  {
    category: "Centros deportivos",
    description: "Operadores fitness con presencia en instalaciones deportivas y comunidades de entrenamiento.",
    brands: ["Basic-Fit", "VivaGym"],
  },
];

export const sponsorBrands = sponsorGroups.flatMap((group) => group.brands);

export const featuredGuests = [
  {
    name: "Sergio Peinado",
    specialty: "Entrenamiento funcional y hábitos saludables",
    bio: "Entrenador y comunicador fitness con un enfoque práctico y cercano al público general.",
    image: "https://www.encastillalamancha.es/wp-content/uploads/2025/10/IMG_1115-1.jpg",
    imagePosition: "50% 18%",
    imageSize: "cover",
    imageAlt: "Fotografía real de Sergio Peinado",
    socials: {
      instagram: "@sergiopeinadotrainer",
      instagramUrl: "https://www.instagram.com/sergiopeinadotrainer/",
      youtube: "Entrena con Sergio Peinado",
      youtubeUrl: "https://www.youtube.com/@EntrenaSergioPeinado",
    },
  },
  {
    name: "Power Explosive",
    specialty: "Fuerza, powerlifting y divulgación",
    bio: "Proyecto centrado en fuerza, rendimiento y entrenamiento basado en evidencia.",
    image: "https://mgnutrition.es/wp-content/uploads/powerexplosive.webp",
    imagePosition: "50% 20%",
    imageSize: "cover",
    imageAlt: "Fotografía real de David Marchante, Power Explosive",
    socials: {
      instagram: "@powerexplosive",
      instagramUrl: "https://www.instagram.com/powerexplosive/",
      youtube: "Powerexplosive",
      youtubeUrl: "https://www.youtube.com/@Powerexplosive",
    },
  },
  {
    name: "Vikika Costa",
    specialty: "Fitness, hábitos saludables y nutrición",
    bio: "Entrenadora y creadora de contenido vinculada a hábitos saludables, fuerza y bienestar.",
    image: "https://imagenes.elpais.com/resizer/v2/5FANMXBPHZH75A72QVPKY3OF7U.jpg?auth=03b8533dc30c23dca35d25a66efa48be2262130dd0712549f7901855d313f806&width=414",
    imagePosition: "50% 30%",
    imageSize: "cover",
    imageAlt: "Fotografía real de Vikika Costa",
    socials: {
      instagram: "@vikikacosta",
      instagramUrl: "https://www.instagram.com/vikikacosta/",
      youtube: "VikikaTeam",
      youtubeUrl: "https://www.youtube.com/@VikikaTeam",
    },
  },
  {
    name: "Joan Pradells",
    specialty: "Culturismo profesional IFBB",
    bio: "Creador y culturista profesional, con una fuerte presencia en el fitness español.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Joan_Pradells_3.jpg",
    imagePosition: "50% 20%",
    imageSize: "cover",
    imageAlt: "Fotografía real de Joan Pradells",
    socials: {
      instagram: "@joanpradells",
      instagramUrl: "https://www.instagram.com/joanpradells/",
      youtube: "Joan Pradells",
      youtubeUrl: "https://www.youtube.com/@joanpradells",
    },
  },
  {
    name: "Jeff Nippard",
    specialty: "Entrenamiento basado en evidencia",
    bio: "Referente internacional en entrenamiento de fuerza y culturismo con base científica.",
    image: "https://media.gq.com/photos/693c546d4fc73ac0d063b1ac/master/w_2560%2Cc_limit/2025-Wellness-Creator-Awards-1.jpg",
    imagePosition: "50% 28%",
    imageSize: "cover",
    imageAlt: "Fotografía real de Jeff Nippard",
    socials: {
      instagram: "@jeffnippard",
      instagramUrl: "https://www.instagram.com/jeffnippard/",
      youtube: "Jeff Nippard",
      youtubeUrl: "https://www.youtube.com/@JeffNippard",
    },
  },
  {
    name: "Chris Bumstead (CBum)",
    specialty: "Classic Physique",
    bio: "Figura internacional del culturismo y uno de los nombres más reconocidos del Classic Physique.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Chris_Bumstead_on_Gymshark.jpg",
    imagePosition: "50% 18%",
    imageSize: "cover",
    imageAlt: "Fotografía real de Chris Bumstead",
    socials: {
      instagram: "@cbum",
      instagramUrl: "https://www.instagram.com/cbum/",
      youtube: "Chris Bumstead",
      youtubeUrl: "https://www.youtube.com/@ChrisBumstead",
    },
  },
];

export const eventGallery = [
  {
    title: "Zona de competición",
    label: "Competición",
    description:
      "Espacio principal para pruebas funcionales, seguimiento del público y apoyo audiovisual.",
    image: "/assets/gallery-competition-floor-v2.png",
    featured: true,
  },
  {
    title: "Zona de preparación",
    label: "Preparación",
    description:
      "Área destinada al calentamiento, la coordinación de participantes y la preparación previa.",
    image: "/assets/gallery-backstage-training-v2.png",
  },
  {
    title: "Entrada al escenario",
    label: "Apertura",
    description:
      "Acceso a la zona principal con iluminación escénica y ambiente propio de una feria fitness.",
    image: "/assets/gallery-stage-crowd-v2.png",
  },
];

export const eventActivities = [
  {
    title: "Conferencias",
    label: "Escenario técnico",
    description:
      "Charlas sobre entrenamiento, nutrición, gestión de proyectos fitness y evolución del sector.",
    icon: "mic",
  },
  {
    title: "Competiciones",
    label: "Arena principal",
    description:
      "Pruebas funcionales y retos por categorías, con seguimiento abierto al público asistente.",
    icon: "trophy",
  },
  {
    title: "Masterclass",
    label: "Sesiones guiadas",
    description:
      "Sesiones dirigidas por profesionales para trabajar técnica, movilidad y fuerza.",
    icon: "graduation",
  },
  {
    title: "Networking",
    label: "Área profesional",
    description:
      "Espacios de encuentro entre marcas, gimnasios, entrenadores y profesionales del fitness.",
    icon: "networking",
  },
  {
    title: "Zona outdoor",
    label: "Exterior",
    description:
      "Actividades al aire libre, retos participativos y espacios de descanso para asistentes.",
    icon: "outdoor",
  },
  {
    title: "Food trucks",
    label: "Restauración",
    description:
      "Oferta de comida saludable, opciones rápidas y puntos de recuperación durante la jornada.",
    icon: "food",
  },
];

export function runBasicChecks() {
  return {
    hasThreeCalendarDays: calendar.length === 3,
    hasTicketTypes: ticketTypes.length === 4,
    includesVipTicket: ticketTypes.includes("Pase VIP"),
    hasSponsorBrands: sponsorBrands.length === 14,
    hasSponsorGroups: sponsorGroups.length === 5,
    hasTicketPlans: ticketPlans.length === 4,
    hasFeaturedGuests: featuredGuests.length === 6,
    hasEventGallery: eventGallery.length === 3,
    hasEventActivities: eventActivities.length === 6,
  };
}
