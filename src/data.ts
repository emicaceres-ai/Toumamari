export interface Tour {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  categoryId: string;
  type: string;
  duration: string;
  description: string;
  longDescription: string;
  image: string;
  included: string[];
  notIncluded: string[];
  itinerary: { time: string; title: string; desc: string }[];
}

export const getTours = (lang: 'es' | 'en'): Tour[] => [
  {
    id: "1",
    title: "Full Day Ruta Anakena y Moai",
    price: 45000,
    originalPrice: 60000,
    discountPercentage: 25,
    categoryId: "full-day",
    type: "Full Day",
    duration: lang === 'es' ? "Día completo" : "Full Day",
    description: lang === 'es' ? "Descubre los mayores secretos arqueológicos y descansa en la playa de Anakena." : "Discover the greatest archaeological secrets and rest on Anakena beach.",
    longDescription: lang === 'es' ? "Recorrido: Vaihu, Rano Raraku, Ahu Tongariki, Te Pito Kura, Ovahe, Playa Anakena y Ahu Nau Nau. Almuerzo opcional: + CLP $20.000 por persona." : "Route: Vaihu, Rano Raraku, Ahu Tongariki, Te Pito Kura, Ovahe, Anakena Beach and Ahu Nau Nau. Optional lunch: + CLP $20.000 per person.",
    image: "https://images.unsplash.com/photo-1594917585501-8bf7913ed878?q=80&w=2670&auto=format&fit=crop",
    included: lang === 'es' ? ["Traslado", "Guía local", "Experiencia cultural", "Tiempo para fotografías"] : ["Transfer", "Local guide", "Cultural experience", "Time for photographs"],
    notIncluded: lang === 'es' ? ["Almuerzo (Opcional +$20.000)", "Ticket Parque Nacional"] : ["Lunch (Optional +$20.000)", "National Park Ticket"],
    itinerary: [
      { time: "09:00 AM", title: "Vaihu & Rano Raraku", desc: "Inicio de la ruta ancestral." },
      { time: "12:00 PM", title: "Ahu Tongariki & Te Pito Kura", desc: "Visita a la plataforma más grande y ombligo del mundo." },
      { time: "02:00 PM", title: "Ovahe & Anakena", desc: "Relajo en la emblemática playa y visita al Ahu Nau Nau." }
    ]
  },
  {
    id: "2",
    title: "Tour Orongo y Ruta Tangata Manu",
    price: 45000,
    originalPrice: 55000,
    discountPercentage: 18,
    categoryId: "half-day",
    type: "Medio Día",
    duration: lang === 'es' ? "Medio Día" : "Half Day",
    description: lang === 'es' ? "Recorre el imponente cráter Rano Kau y la aldea ceremonial Orongo." : "Explore the imposing Rano Kau crater and the Orongo ceremonial village.",
    longDescription: lang === 'es' ? "Recorrido: Rano Kau, Aldea ceremonial Orongo, Vinapu, Puna Pau, Ahu Akivi y Ahu Te Peu. Almuerzo opcional: + CLP $20.000 por persona." : "Route: Rano Kau, Orongo ceremonial village, Vinapu, Puna Pau, Ahu Akivi and Ahu Te Peu. Optional lunch: + CLP $20.000 per person.",
    image: "https://images.unsplash.com/photo-1599580665790-252f896b01b6?q=80&w=2670&auto=format&fit=crop",
    included: lang === 'es' ? ["Traslado", "Guía local", "Interpretación cultural", "Fotografías"] : ["Transfer", "Local guide", "Cultural interpretation", "Photographs"],
    notIncluded: lang === 'es' ? ["Almuerzo (Opcional +$20.000)", "Ticket Parque Nacional"] : ["Lunch (Optional +$20.000)", "National Park Ticket"],
    itinerary: [
      { time: "09:00 AM", title: "Rano Kau & Orongo", desc: "Visita al cráter del volcán y aldea ceremonial." },
      { time: "11:30 AM", title: "Vinapu & Puna Pau", desc: "Centro de extracción de Pukaos." },
      { time: "01:00 PM", title: "Ahu Akivi & Ahu Te Peu", desc: "Los 7 exploradores de Rapa Nui." }
    ]
  },
  {
    id: "3",
    title: "Amanecer en Ahu Tongariki",
    price: 35000,
    categoryId: "half-day",
    type: "Medio Día",
    duration: "3 - 4 hrs",
    description: lang === 'es' ? "Un espectáculo místico inigualable para comenzar el día." : "An unparalleled mystical spectacle to start the day.",
    longDescription: lang === 'es' ? "Disfruta de la magia del amanecer frente a los quince imponentes moáis de Ahu Tongariki. Considera un momento inolvidable." : "Enjoy the magic of sunrise in front of the fifteen imposing moais of Ahu Tongariki. Consider an unforgettable moment.",
    image: "/tongariki.jpg",
    included: lang === 'es' ? ["Traslado", "Guía local"] : ["Transfer", "Local guide"],
    notIncluded: lang === 'es' ? ["Ticket Parque Nacional"] : ["National Park Ticket"],
    itinerary: [
      { time: "06:00 AM", title: "Recogida", desc: "Alojamiento en Hanga Roa." },
      { time: "06:45 AM", title: "Amanecer en Tongariki", desc: "Espera de la salida del sol con vista a las plataformas." }
    ]
  },
  {
    id: "4",
    title: "Experiencia Motu (Con Snorkel)",
    price: 45000,
    categoryId: "half-day",
    type: "Mar",
    duration: "Medio Día",
    description: lang === 'es' ? "Aventura marítima visitando los Motu con opción a snorkel." : "Maritime adventure visiting the Motus with snorkeling option.",
    longDescription: lang === 'es' ? "Vive la experiencia Tangata Manu desde el agua. Acércate a los islotes sagrados (Motu) y disfruta de sus cristalinas aguas haciendo snorkel en un entorno privilegiado. Opción sin snorkel por $35.000." : "Live the Tangata Manu experience from the water. Get close to the sacred islets (Motu) and enjoy snorkeling in a privileged environment. Option without snorkeling for $35.000.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670&auto=format&fit=crop",
    included: lang === 'es' ? ["Transporte marítimo", "Equipo Snorkel"] : ["Maritime transport", "Snorkeling equipment"],
    notIncluded: lang === 'es' ? ["Almuerzo"] : ["Lunch"],
    itinerary: [
      { time: "10:00 AM", title: "Zarpe", desc: "Salida desde el puerto." },
      { time: "11:00 AM", title: "Snorkel", desc: "Tiempo libre para descubrir el fondo marino." }
    ]
  },
  {
    id: "5",
    title: "Tour Navegable Anakena",
    price: 120000,
    categoryId: "full-day",
    type: "Navegación",
    duration: "Día Completo",
    description: lang === 'es' ? "Navega hacia Anakena y disfruta de un exclusivo almuerzo a bordo o en la costa." : "Sail to Anakena and enjoy an exclusive lunch on board or on the coast.",
    longDescription: lang === 'es' ? "Una jornada completa de relajación y cultura navegando hacia la mítica playa de Anakena. Incluye almuerzo y traslados completos Anakena - Pueblo." : "A full day of relaxation and culture sailing to the mythical Anakena beach. Includes lunch and full transfers Anakena - Town.",
    image: "https://images.unsplash.com/photo-1620803732440-2051610e7b28?q=80&w=2670&auto=format&fit=crop",
    included: lang === 'es' ? ["Navegación", "Almuerzo", "Traslado Anakena - Pueblo"] : ["Navigation", "Lunch", "Transfer Anakena - Town"],
    notIncluded: [],
    itinerary: [
      { time: "09:00 AM", title: "Salida", desc: "Navegación bordeando la costa norte." },
      { time: "01:00 PM", title: "Almuerzo", desc: "Descanso y comida." },
      { time: "04:00 PM", title: "Retorno", desc: "Traslado en vehículo hacia el pueblo." }
    ]
  },
  {
    id: "6",
    title: "Super Full Day Privado",
    price: 100000,
    categoryId: "packs",
    type: "Privado",
    duration: "Día Completo",
    description: lang === 'es' ? "Tu día perfecto, a tu ritmo. Experiencia diseñada para ti." : "Your perfect day, at your own pace. Experience designed for you.",
    longDescription: lang === 'es' ? "Recorre la isla de manera exclusiva con conductor/guía a tu disposición. Mínimo 2 pasajeros." : "Tour the island exclusively with driver/guide at your disposal. Minimum 2 passengers.",
    image: "https://images.unsplash.com/photo-1596706917953-ce20c1511ae6?q=80&w=2670&auto=format&fit=crop",
    included: lang === 'es' ? ["Traslado privado", "Adaptación de rutas"] : ["Private transfer", "Route adaptation"],
    notIncluded: lang === 'es' ? ["Almuerzo", "Ticket Parque Nacional"] : ["Lunch", "National Park Ticket"],
    itinerary: [
      { time: "Flexible", title: "A Convenir", desc: "Rutas armadas según preferencias del viajero." }
    ]
  }
];

export const getReviews = (lang: 'es' | 'en') => [
  {
    id: 1,
    name: "Carolina M.",
    country: lang === 'es' ? "Chile" : "Chile",
    text: lang === 'es' ? "Hicimos el pack de 4 días y la organización fue perfecta. Nuestro guía Tuki nos transmitió un amor por su cultura que nunca olvidaremos. ¡100% recomendados!" : "We did the 4-day pack and the organization was perfect. Our guide Tuki passed on a love for his culture that we will never forget. 100% recommended!",
    rating: 5,
    platform: "TripAdvisor"
  },
  {
    id: 2,
    name: "James D.",
    country: lang === 'es' ? "Estados Unidos" : "United States",
    text: lang === 'es' ? "El amanecer en Tongariki fue la experiencia más mágica de mi vida. Puntuales, atentos y con un café caliente que se agradece mucho por la mañana." : "The sunrise at Tongariki was the most magical experience of my life. Punctual, attentive and with a hot coffee that is much appreciated in the morning.",
    rating: 5,
    platform: "Google"
  },
  {
    id: 3,
    name: "Laura G.",
    country: lang === 'es' ? "España" : "Spain",
    text: lang === 'es' ? "Anakena es el paraíso. Me encantó que el grupo era pequeño, se sintió como hacer un tour con amigos. ¡Gracias familia Toumamari!" : "Anakena is paradise. I loved that the group was small, it felt like doing a tour with friends. Thank you Toumamari family!",
    rating: 5,
    platform: "Instagram"
  }
];


export const getAbout = (lang: 'es' | 'en') => ({
  title: lang === 'es' ? "Caminando con los Ancestros" : "Walking with the Ancestors",
  description: lang === 'es' ? "Toumamari Tour es una agencia familiar con raíces profundas en la cultura Rapanui. Durante generaciones hemos navegado, caminado y protegido los secretos de Te Pito O Te Henua (El Ombligo del Mundo). Nuestra misión no es solo realizar excursiones, sino ofrecer una inmersión genuina en la sabiduría de nuestros ancestros, guiados por locales apasionados por preservar y compartir su herencia." : "Toumamari Tour is a family agency with deep roots in the Rapanui culture. For generations we have sailed, walked and protected the secrets of Te Pito O Te Henua (The Navel of the World). Our mission is not only to carry out excursions, but to offer a genuine immersion in the wisdom of our ancestors, guided by passionate locals to preserve and share their heritage.",
  description2: lang === 'es' ? "Nos enorgullece ser un eslabón entre el pasado milenario y el viajero moderno. Cuando recorres estas tierras con Toumamari, no eres un turista; eres un invitado a nuestra casa, a nuestra historia y a nuestra familia." : "We are proud to be a link between the ancient past and the modern traveler. When you tour these lands with Toumamari, you are not a tourist; you are a guest in our home, our history and our family.",
  badges: {
    title: lang === 'es' ? "Guías Locales" : "Local Guides",
    desc: lang === 'es' ? "Expertos nacidos en el ombligo del mundo." : "Experts born in the navel of the world."
  },
  image: "/nosotros.jpg"
});

export const CONTACT_INFO = {
  email: "info@touamamari.com",
  phone: "+56 9 1234 5678",
  location: "Hanga Roa, Rapa Nui (Isla de Pascua)",
};
