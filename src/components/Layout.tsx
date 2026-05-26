import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Globe, Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n";
import { useCart } from "../CartContext";
import { CONTACT_INFO } from "../data";
import { CartDrawer } from "../Cart";

export function Layout({ children, scrolled }: { children: ReactNode; scrolled: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  const { items, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-[#FFD700] selection:text-black flex flex-col">
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? "bg-black/90 backdrop-blur-md border-[#FFD700]/20 py-4 shadow-xl" 
            : "bg-gradient-to-b from-black/80 to-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-4 cursor-pointer">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFD700] flex items-center justify-center bg-black shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <img 
                src="/logo.jpg" 
                alt="Toumamari Tour Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-[#FFD700] font-bold text-xl">TT</span>';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-widest text-white">TOUMAMARI</span>
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-[#FFD700]">Tour Rapa Nui</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="text-neutral-300 hover:text-[#FFD700] transition-colors">{t.navInicio}</Link>
            <a href="/#tours" className="text-neutral-300 hover:text-[#FFD700] transition-colors">{t.navTours}</a>
            <Link to="/guia" className="text-neutral-300 hover:text-[#FFD700] transition-colors">{t.navGuia}</Link>
            <Link to="/impacto" className="text-neutral-300 hover:text-[#FFD700] transition-colors">{t.navImpacto}</Link>
          </nav>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-neutral-400" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as "es" | "en")}
                className="bg-transparent text-sm text-neutral-300 outline-none cursor-pointer focus:text-white"
              >
                <option value="es" className="bg-neutral-900">ES</option>
                <option value="en" className="bg-neutral-900">EN</option>
              </select>
            </div>
            <button onClick={() => setIsCartOpen(true)} className="relative group text-white hover:text-[#FFD700] transition-colors flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:block text-sm font-medium">{t.cart}</span>
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 sm:-right-4 w-5 h-5 bg-[#FFD700] text-black text-xs font-bold flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                  {items.reduce((sum, item) => sum + item.travelers, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md overflow-hidden bg-white/5 border border-neutral-800">
                <img src="/logo.jpg" alt="Toumamari Tour" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl text-white tracking-widest">TOUMAMARI</span>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              {t.footerDesc}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t.footerLinks}</h4>
             <div className="space-y-3 font-medium text-sm">
               <p><Link to="/" className="hover:text-yellow-500 transition-colors">{t.navInicio}</Link></p>
               <p><Link to="/guia" className="hover:text-yellow-500 transition-colors">{t.navGuia}</Link></p>
               <p><Link to="/impacto" className="hover:text-yellow-500 transition-colors">{t.navImpacto}</Link></p>
               <p><Link to="/terminos" className="hover:text-yellow-500 transition-colors">{t.navTerminos}</Link></p>
             </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t.footerFollow}</h4>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </a>
             </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600 font-medium flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Toumamari Tour Rapa Nui. Todos los derechos reservados.</p>
        </div>
      </footer>

      <CartDrawer />
      
      {/* Botón flotante de WhatsApp */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.phone.replace(/\+/g, '').replace(/\s/g, '')}?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20los%20tours.`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 z-[95] flex items-center justify-center animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
