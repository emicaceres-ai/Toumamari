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
    title: lang === 'es' ? "Amanecer en Ahu Tongariki" : "Sunrise at Ahu Tongariki",
    price: 80,
    type: lang === 'es' ? "Medio Día" : "Half Day",
    duration: lang === 'es' ? "3 horas" : "3 hours",
    description: lang === 'es' ? "Contempla el espectáculo más asombroso de Rapa Nui. Quince moais monumentales delineados por los primeros rayos del sol." : "Behold the most amazing spectacle in Rapa Nui. Fifteen monumental moais outlined by the first rays of the sun.",
    longDescription: lang === 'es' ? "Vive la magia del amanecer en Ahu Tongariki, la plataforma ceremonial más grande de Rapa Nui con sus 15 majestuosos moais. Este tour está diseñado para fotografiar y admirar cómo los primeros rayos de luz tiñen el cielo del océano Pacífico, entregando una atmósfera mística inigualable. Sentirás el 'mana' de nuestros ancestros en el mejor momento del día." : "Experience the magic of sunrise at Ahu Tongariki, the largest ceremonial platform in Rapa Nui with its 15 majestic moais. This tour is designed to photograph and admire how the first rays of light dye the Pacific Ocean sky, delivering an unparalleled mystical atmosphere. You will feel the 'mana' of our ancestors at the best time of day.",
    image: "/tongariki.jpg",
    included: lang === 'es' ? ["Transporte ida y vuelta desde el hotel", "Guía local experto (Español/Inglés)", "Café caliente y snack"] : ["Round trip transportation from the hotel", "Expert local guide (Spanish/English)", "Hot coffee and snack"],
    notIncluded: lang === 'es' ? ["Ticket Parque Nacional Rapa Nui"] : ["Rapa Nui National Park Ticket"],
    itinerary: lang === 'es' ? [
      { time: "06:00 AM", title: "Recogida", desc: "Te pasamos a buscar a tu alojamiento en Hanga Roa." },
      { time: "06:45 AM", title: "Llegada a Tongariki", desc: "Ubicación en el mejor punto fotográfico esperando el amanecer." },
      { time: "08:30 AM", title: "Desayuno Ligero", desc: "Disfrutamos de un café frente a los monumentos." },
      { time: "09:00 AM", title: "Regreso", desc: "Retorno a los hoteles en Hanga Roa." }
    ] : [
      { time: "06:00 AM", title: "Pick up", desc: "We will pick you up at your accommodation in Hanga Roa." },
      { time: "06:45 AM", title: "Arrival at Tongariki", desc: "Location at the best photographic point waiting for the sunrise." },
      { time: "08:30 AM", title: "Light Breakfast", desc: "We enjoy a coffee in front of the monuments." },
      { time: "09:00 AM", title: "Return", desc: "Return to the hotels in Hanga Roa." }
    ]
  },
  {
    id: "2",
    title: lang === 'es' ? "Ruta de los Volcanes & Anakena" : "Volcanoes Route & Anakena",
    price: 120,
    type: "Full Day",
    duration: lang === 'es' ? "8 horas" : "8 hours",
    description: lang === 'es' ? "Explora la cantera de Rano Raraku, donde nacieron los moais. Culmina relajándote en Anakena." : "Explore the Rano Raraku quarry, where the moais were born. Finish up relaxing in Anakena.",
    longDescription: lang === 'es' ? "Un viaje completo por los hitos más emblemáticos de nuestra cultura. Iniciaremos recorriendo la costa sur para llegar al Volcán Rano Raraku, la 'fábrica' donde casi todos los moais de la isla fueron tallados. Luego, tras visitar las principales plataformas ancestrales, finalizaremos la jornada descansando y nadando en Anakena, la playa de reyes de aguas turquesas." : "A complete journey through the most emblematic milestones of our culture. We will start by touring the south coast to reach the Rano Raraku Volcano, the 'factory' where almost all the island's moais were carved. Then, after visiting the main ancestral platforms, we will end the day resting and swimming in Anakena, the kings' beach of turquoise waters.",
    image: "/anakena.jpg",
    included: lang === 'es' ? ["Transporte durante todo el día", "Guía local experto", "Almuerzo estilo picnic"] : ["Transportation throughout the day", "Expert local guide", "Picnic style lunch"],
    notIncluded: lang === 'es' ? ["Ticket Parque Nacional Rapa Nui", "Traje de baño y toalla"] : ["Rapa Nui National Park Ticket", "Swimsuit and towel"],
    itinerary: lang === 'es' ? [
      { time: "09:30 AM", title: "Inicio del Tour", desc: "Recogida en Hanga Roa y salida hacia la Ruta Sur." },
      { time: "11:00 AM", title: "Rano Raraku", desc: "Trekking suave por la cantera de los moais." },
      { time: "01:30 PM", title: "Almuerzo", desc: "Picnic tradicional al aire libre." },
      { time: "03:00 PM", title: "Playa de Anakena", desc: "Tiempo libre para nadar y visitar el Ahu Nau Nau." },
      { time: "05:30 PM", title: "Regreso", desc: "Fin de la excursión en tu alojamiento." }
    ] : [
      { time: "09:30 AM", title: "Tour Start", desc: "Pick up in Hanga Roa and departure to the South Route." },
      { time: "11:00 AM", title: "Rano Raraku", desc: "Gentle trekking through the moais quarry." },
      { time: "01:30 PM", title: "Lunch", desc: "Traditional outdoor picnic." },
      { time: "03:00 PM", title: "Anakena Beach", desc: "Free time to swim and visit the Ahu Nau Nau." },
      { time: "05:30 PM", title: "Return", desc: "End of the excursion at your accommodation." }
    ]
  },
  {
    id: "3",
    title: lang === 'es' ? "Orongo y el Hombre Pájaro" : "Orongo and the Birdman",
    price: 75,
    type: lang === 'es' ? "Medio Día" : "Half Day",
    duration: lang === 'es' ? "4 horas" : "4 hours",
    description: lang === 'es' ? "Asciende al imponente cráter del volcán Rano Kau y recorre la aldea ceremonial de Orongo." : "Ascend to the imposing crater of the Rano Kau volcano and tour the ceremonial village of Orongo.",
    longDescription: lang === 'es' ? "Conéctate con la historia más reciente del pueblo Rapanui y la extrema competencia del Tangata Manu (Hombre Pájaro). Subiremos al majestuoso cráter del Volcán Rano Kau, un oasis de biodiversidad. En su borde, visitaremos la aldea ceremonial de Orongo, un lugar sagrado compuesto de casas de piedra con una vista espectacular a los islotes Motu Nui, Motu Iti y Motu Kao Kao." : "Connect with the most recent history of the Rapanui people and the extreme competition of the Tangata Manu (Birdman). We will climb the majestic crater of the Rano Kau Volcano, an oasis of biodiversity. At its edge, we will visit the ceremonial village of Orongo, a sacred place composed of stone houses with a spectacular view of the islets Motu Nui, Motu Iti and Motu Kao Kao.",
    image: "/orongo.jpg",
    included: lang === 'es' ? ["Transporte ida y vuelta", "Guía certificado", "Botella de agua"] : ["Round trip transportation", "Certified guide", "Water bottle"],
    notIncluded: lang === 'es' ? ["Ticket Parque Nacional Rapa Nui"] : ["Rapa Nui National Park Ticket"],
    itinerary: lang === 'es' ? [
      { time: "09:30 AM", title: "Subida al Volcán", desc: "Ascenso panorámico hacia Rano Kau." },
      { time: "10:15 AM", title: "Mirador Rano Kau", desc: "Contemplación del gigantesco cráter y su laguna interior." },
      { time: "11:00 AM", title: "Aldea de Orongo", desc: "Recorrido guiado por las casas ceremoniales y petroglifos." },
      { time: "01:00 PM", title: "Retorno", desc: "Regreso al pueblo de Hanga Roa." }
    ] : [
      { time: "09:30 AM", title: "Climb the Volcano", desc: "Panoramic ascent towards Rano Kau." },
      { time: "10:15 AM", title: "Rano Kau Viewpoint", desc: "Contemplation of the gigantic crater and its internal lagoon." },
      { time: "11:00 AM", title: "Orongo Village", desc: "Guided tour through the ceremonial houses and petroglyphs." },
      { time: "01:00 PM", title: "Return", desc: "Return to the town of Hanga Roa." }
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
  email: "reservas@toumamaritour.com",
  phone: "+56 9 1234 5678",
  location: "Hanga Roa, Rapa Nui (Isla de Pascua)",
};
