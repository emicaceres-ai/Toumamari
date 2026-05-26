import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CalendarDays, MapPin, Clock, ArrowRight, Compass, Mail, Phone, X, Check, XCircle, Star, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n";
import { useCart } from "../CartContext";
import { CONTACT_INFO, getAbout, getReviews, getTours, Tour } from "../data";
import { TourCard } from "../components/TourCard";
import { Layout } from "../components/Layout";

function SectionLogo({ className = "top-12 right-4 md:right-8" }: { className?: string }) {
  return (
    <div className={`absolute ${className} z-0 hidden md:flex items-center justify-center opacity-30 hover:opacity-100 transition-all duration-500 pointer-events-none select-none`}>
      <div className="w-20 h-20 rounded-full overflow-hidden border border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.15)] bg-black">
        <img src="/logo.jpg" alt="Logo de sección" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export function Home() {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");

  const TOURS = getTours(language);
  const ABOUT = getAbout(language);
  const REVIEWS = getReviews(language);

  const filteredTours = activeFilter === "all" ? TOURS : TOURS.filter(t => t.categoryId === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedTour) {
      document.body.style.overflow = "hidden";
      setSelectedDate("");
      setTravelers(1);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedTour]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <Layout scrolled={scrolled}>
      {/* ----------------- HERO SECTION ----------------- */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <SectionLogo className="top-32 right-4 md:right-12" />
        
        {/* Background Video Implementation */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-80"
          >
            {/* Si existe el video en local, si no cae al degradado estático o placeholder */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-ocean-waves-crashing-on-a-beach-at-sunset-1065-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.span variants={fadeUp} className="text-[#FFD700] border border-[#FFD700]/50 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-semibold mb-6 flex items-center gap-2 bg-black/40 backdrop-blur-sm">
              <MapPin className="w-3 h-3" /> {t.heroSub}
            </motion.span>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tight leading-[1.1]">
              {t.heroTitle1} <br/> {t.heroTitle2} <span className="text-[#FFD700]">{t.heroTitle3}</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              {t.heroText}
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a 
                href="#tours" 
                className="bg-[#FFD700] text-black px-8 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-wider hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,215,0,0.4)] flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                {t.exploreBtn} <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.phone.replace(/\+/g, '').replace(/\s/g, '')}?text=Hola,%20Quiero%20viajar%20a%20Rapa%20Nui.`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-wider hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" /> {t.heroWhatsAppBtn}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ----------------- SECCIÓN DE VIDEO PROMOCIONAL ----------------- */}
      <section className="py-24 bg-black relative border-y border-neutral-900 border-[#FFD700]/10">
         <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-12">{t.promoVideoTitle} <span className="text-[#FFD700]">{t.promoVideoSubtitle}</span></h2>
            <div className="relative pt-[56.25%] max-w-5xl mx-auto bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
               <iframe 
                 src="https://www.youtube.com/embed/fW4o2w3k4Ww?autoplay=0&mute=1&controls=1&loop=1&playlist=fW4o2w3k4Ww" 
                 title="Rapa Nui Landscape" 
                 className="absolute inset-0 w-full h-full border-0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
            </div>
         </div>
      </section>

      {/* ----------------- CATÁLOGO DE TOURS ----------------- */}
      <section id="tours" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative bg-neutral-50">
        <SectionLogo className="top-12 right-4 md:right-8" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900">{t.toursTitle1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-[#FFD700]">{t.toursTitle2}</span></h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg mb-10">
            {t.toursSubtitle}
          </p>
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {[
              { id: "all", label: t.filterAll },
              { id: "half-day", label: t.filterHalfDay },
              { id: "full-day", label: t.filterFullDay },
              { id: "packs", label: t.filterPacks }
            ].map((f) => (
              <button 
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${activeFilter === f.id ? "bg-black text-white border-black" : "bg-white text-neutral-500 border-neutral-200 hover:border-black hover:text-black"}`}
              >
                {f.label}
              </button>
            ))}
          </div>

        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredTours.map((tour) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                fadeUp={fadeUp} 
                onClick={() => setSelectedTour(tour)}
                btnText={t.tourDetailsBtn}
                ofertaText={t.ofertaBadge}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ----------------- SECCIÓN NOSOTROS ----------------- */}
      <section id="nosotros" className="py-24 bg-black text-white relative overflow-hidden">
        <SectionLogo className="top-12 right-4 md:right-12" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[100px]-translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src={ABOUT.image}
              alt="Cultura Rapa Nui" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-[#FFD700]/30 p-6 rounded-2xl max-w-xs">
              <Compass className="w-10 h-10 text-[#FFD700] mb-3" />
              <p className="font-bold text-lg mb-1">{ABOUT.badges.title}</p>
              <p className="text-sm text-neutral-400">{ABOUT.badges.desc}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-[#FFD700] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              {t.aboutTag}
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              {ABOUT.title}
            </h2>
            <div className="text-neutral-300 text-lg font-light leading-relaxed space-y-6">
              <p>{ABOUT.description}</p>
              <p>{ABOUT.description2}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12 py-8 border-y border-white/10">
              <div>
                <p className="text-4xl font-black text-[#FFD700]">15+</p>
                <p className="text-sm text-neutral-400 font-medium uppercase tracking-wider mt-2">{t.aboutStats1}</p>
              </div>
              <div>
                <p className="text-4xl font-black text-[#FFD700]">100%</p>
                <p className="text-sm text-neutral-400 font-medium uppercase tracking-wider mt-2">{t.aboutStats2}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ----------------- SECCIÓN SOCIAL PROOF (RESEÑAS) ----------------- */}
      <section className="py-24 bg-neutral-100 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-neutral-900">{t.reviewsTitle} <span className="text-yellow-600">{t.reviewsSubtitle}</span></h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {REVIEWS.map((r) => (
                <div key={r.id} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />)}
                  </div>
                  <p className="italic text-neutral-600 mb-6 flex-grow">"{r.text}"</p>
                  <div className="border-t border-neutral-100 pt-4 flex justify-between items-end">
                    <div>
                      <p className="font-bold text-neutral-900">{r.name}</p>
                      <p className="text-xs text-neutral-500 uppercase font-semibold">{r.country}</p>
                    </div>
                    <span className="text-xs font-bold text-neutral-400 uppercase bg-neutral-100 px-3 py-1 rounded-full">{r.platform}</span>
                  </div>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* ----------------- SECCIÓN CONTACTO ----------------- */}
      <section id="contacto" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
        <SectionLogo className="top-12 right-4 md:right-8" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Info de contacto */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{t.contactTitle1} <span className="text-yellow-600">{t.contactTitle2}</span></h2>
            <p className="text-neutral-500 text-lg mb-12">
              {t.contactSubtitle}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-neutral-100 flex items-center justify-center rounded-2xl text-neutral-900">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">{t.emailLabel}</p>
                  <p className="text-xl font-bold">{CONTACT_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-neutral-100 flex items-center justify-center rounded-2xl text-neutral-900">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">{t.phoneLabel}</p>
                  <p className="text-xl font-bold">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-neutral-100 flex items-center justify-center rounded-2xl text-neutral-900">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">{t.locationLabel}</p>
                  <p className="text-xl font-bold">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div variants={fadeUp} className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-neutral-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-2">{t.formName}</label>
                  <input 
                    type="text" 
                    placeholder={t.formNameP}
                    className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 rounded-2xl px-5 py-4 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-2">{t.formEmail}</label>
                  <input 
                    type="email" 
                    placeholder="correo@ejemplo.com"
                    className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 rounded-2xl px-5 py-4 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-2">{t.formSubj}</label>
                <input 
                  type="text" 
                  placeholder={t.formSubjP}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 rounded-2xl px-5 py-4 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-2">{t.formMsg}</label>
                <textarea 
                  rows={4}
                  placeholder={t.formMsgP}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 rounded-2xl px-5 py-4 outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <button className="w-full bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-[#FFD700] hover:text-black hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300">
                {t.formBtn}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* ----------------- MODAL DE DETALLES DEL TOUR ----------------- */}
      <AnimatePresence>
        {selectedTour && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTour(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 top-10 md:top-20 z-[70] bg-white rounded-t-[2.5rem] overflow-hidden flex flex-col shadow-2xl mx-auto md:max-w-5xl"
            >
              <div className="absolute top-6 right-6 z-10 flex gap-4">
                <button 
                  onClick={() => setSelectedTour(null)}
                  className="w-12 h-12 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-white/20 text-neutral-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="relative h-64 md:h-96 w-full">
                  <img src={selectedTour.image} alt={selectedTour.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 md:p-12">
                    <div>
                      <span className="text-[#FFD700] text-sm font-bold uppercase tracking-wider mb-2 block">{selectedTour.type}</span>
                      <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">{selectedTour.title}</h2>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 max-w-4xl mx-auto space-y-12">
                  <div className="flex flex-wrap gap-8 py-6 border-y border-neutral-100">
                    <div>
                      <p className="text-sm text-neutral-400 font-bold uppercase tracking-wider mb-1">{t.modalPrice}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-black text-yellow-600">${selectedTour.price} USD</p>
                        {selectedTour.originalPrice && <p className="text-sm font-semibold text-neutral-400 line-through">${selectedTour.originalPrice}</p>}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 font-bold uppercase tracking-wider mb-1">{t.modalDuration}</p>
                      <p className="text-xl font-bold flex items-center gap-2">
                        <Clock className="w-5 h-5 text-neutral-400" /> {selectedTour.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 font-bold uppercase tracking-wider mb-1">{t.modalLocation}</p>
                      <p className="text-xl font-bold flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-neutral-400" /> Rapa Nui
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black mb-4">{t.modalExperience}</h3>
                    <p className="text-neutral-600 leading-relaxed text-lg">{selectedTour.longDescription}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-neutral-900">
                        <Check className="w-5 h-5 text-emerald-500" /> {t.modalIncludes}
                      </h4>
                      <ul className="space-y-3">
                        {selectedTour.included.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-neutral-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-neutral-900">
                        <XCircle className="w-5 h-5 text-rose-500" /> {t.modalNotIncludes}
                      </h4>
                      <ul className="space-y-3">
                        {selectedTour.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-neutral-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black mb-6">{t.modalItinerary}</h3>
                    <div className="space-y-6">
                      {selectedTour.itinerary.map((step, idx) => (
                        <div key={idx} className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            {idx !== selectedTour.itinerary.length - 1 && (
                              <div className="w-px h-full bg-neutral-200 mt-2" />
                            )}
                          </div>
                          <div className="pb-6">
                            <div className="flex flex-wrap items-baseline gap-3 mb-1">
                              <span className="text-sm font-bold text-yellow-600">{step.time}</span>
                              <h4 className="text-lg font-bold">{step.title}</h4>
                            </div>
                            <p className="text-neutral-500">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selector de Fecha y Viajeros */}
                  <div id="booking-section" className="bg-neutral-50 p-6 md:p-8 rounded-3xl border border-neutral-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1 w-full relative">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 block ml-2">{t.modalAddDate}</label>
                      <input 
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-white border border-neutral-200 focus:border-yellow-500 rounded-2xl px-5 py-4 outline-none font-semibold text-neutral-900" 
                      />
                    </div>
                    <div className="flex-1 w-full">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 block ml-2">{t.cartTravelers}</label>
                      <div className="flex items-center bg-white border border-neutral-200 rounded-2xl px-5 py-3">
                        <button 
                          onClick={() => setTravelers(Math.max(1, travelers - 1))}
                          className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-500 hover:bg-neutral-200 transition-colors"
                        >-</button>
                        <span className="flex-1 text-center font-bold text-xl">{travelers}</span>
                        <button 
                          onClick={() => setTravelers(travelers + 1)}
                          className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-500 hover:bg-neutral-200 transition-colors"
                        >+</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Botón Flotante Fijo Abajo */}
              <div className="p-6 md:p-8 bg-white border-t border-neutral-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] flex items-center justify-between gap-6">
                 <div>
                   <p className="text-neutral-500 text-sm font-semibold">{t.modalTotal}</p>
                   <p className="text-3xl font-black text-neutral-900">${selectedTour.price * travelers}</p>
                 </div>
                 <button 
                    onClick={() => {
                      if (!selectedDate) {
                        alert(language === 'es' ? "Por favor selecciona una fecha para el tour." : "Please select a date for the tour.");
                        return;
                      }
                      addToCart(selectedTour, selectedDate, travelers);
                      setSelectedTour(null);
                    }}
                    className="bg-black text-white px-8 md:px-12 py-4 rounded-2xl font-bold uppercase tracking-wider hover:bg-[#FFD700] hover:text-black hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 flex items-center gap-3"
                 >
                    {t.modalReserve} <ShoppingCart className="w-5 h-5" />
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
}
