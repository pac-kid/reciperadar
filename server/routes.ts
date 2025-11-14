import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // ✅ Health check route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Backend is running ✅" });
  });

  // ✅ Mock products route for testing
  app.get("/api/products", (req, res) => {
    res.json([
      { id: 1, name: "Mamaearth Shampoo", price: 299 },
      { id: 2, name: "Mamaearth Face Wash", price: 249 },
      { id: 3, name: "Mamaearth Lotion", price: 199 },
    ]);
  });

  const httpServer = createServer(app);
  return httpServer;
}
