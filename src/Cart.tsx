import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, CreditCard, ShoppingCart, ShieldCheck, CalendarCheck } from "lucide-react";
import { useCart } from "./CartContext";
import { useLanguage } from "./i18n";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, removeFromCart, updateTravelers, total } = useCart();
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-white shadow-2xl z-[90] flex flex-col"
          >
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-black text-white">
              <h2 className="text-xl font-black">{t.cartTitle}</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-neutral-50">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-neutral-400">
                  <ShoppingCart className="w-16 h-16 mb-4 opacity-20" />
                  <p className="font-medium text-lg">{t.cartEmpty}</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-neutral-100">
                    <img src={item.tour.image} alt={item.tour.title} className="w-24 h-24 object-cover rounded-xl" />
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-bold text-sm leading-tight mb-2 text-neutral-900">{item.tour.title}</h4>
                      <p className="text-xs text-neutral-500 mb-auto">{t.cartDate}: <span className="font-semibold text-neutral-900">{item.date}</span></p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateTravelers(item.id, Math.max(1, item.travelers - 1))}
                            className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-sm font-bold text-neutral-500 hover:bg-neutral-100"
                          >-</button>
                          <span className="text-sm font-bold w-4 text-center">{item.travelers}</span>
                          <button 
                            onClick={() => updateTravelers(item.id, item.travelers + 1)}
                            className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-sm font-bold text-neutral-500 hover:bg-neutral-100"
                          >+</button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-black text-yellow-600">
                            ${item.tour.price * item.travelers}
                          </span>
                          <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-rose-500 transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-neutral-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-neutral-500 uppercase tracking-wider text-sm">{t.cartTotal}</span>
                  <span className="text-3xl font-black text-black">${total} USD</span>
                </div>
                <button 
                  onClick={() => alert("La API de PayPal será integrada pronto con las variables de entorno.")}
                  className="w-full bg-[#FFC439] hover:bg-[#F4BB33] text-black py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(255,196,57,0.2)] mb-4"
                >
                  <CreditCard className="w-6 h-6" />
                  {t.cartPayPayPal}
                </button>
                <div className="flex flex-col gap-2 mt-4 text-xs font-semibold text-neutral-500 items-center justify-center text-center">
                  <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> {t.cartSecurePayment}</p>
                  <p className="flex items-center gap-2"><CalendarCheck className="w-4 h-4 text-blue-500" /> {t.cartFlexibleCancel}</p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
