import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware para procesar JSON (esencial para los webhooks y APIs)
  app.use(express.json());

  // ============================================================================
  // API ROUTES (BACKEND)
  // Aquí mantendremos las llamadas a Supabase Admin y PayPal seguras.
  // ============================================================================
  
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Toumamari Backend API funcionando" });
  });

  // 1. Endpoint para crear la orden de PayPal desde el lado del servidor
  app.post("/api/payments/create-order", async (req, res) => {
    try {
      // TODO: Usar el SDK de PayPal aquí con PAYPAL_CLIENT_SECRET
      // 1. Recibir los items del carrito desde req.body
      // 2. Comunicarse con la API de PayPal para generar el Order ID
      // 3. Crear el registro en Supabase (Booking y Payment en estado 'pending')
      res.json({ success: true, message: "Placeholder para Create Order" });
    } catch (error) {
      res.status(500).json({ error: "Error creando orden de PayPal" });
    }
  });

  // 2. Webhook seguro de PayPal (Notificaciones asíncronas de pago)
  app.post("/api/payments/webhook", async (req, res) => {
    // TODO: 
    // 1. Validar la firma enviada por PayPal usando PAYPAL_WEBHOOK_ID
    // 2. Extraer el estado (ej. PAYMENT.CAPTURE.COMPLETED)
    // 3. Actualizar la tabla de 'Payments' y 'Bookings' en Supabase a 'confirmed'
    res.status(200).send("Webhook recibido");
  });

  // ============================================================================
  // VITE MIDDLEWARE (FRONTEND SERVING)
  // ============================================================================
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // SPA Fallback para React Router
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
