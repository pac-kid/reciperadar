import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // HEALTH CHECK
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // TEST PRODUCTS ROUTE
  app.get("/api/products", (_req, res) => {
    res.json([
      { id: 1, name: "Sample Product A", price: 199 },
      { id: 2, name: "Sample Product B", price: 499 }
    ]);
  });

  const httpServer = createServer(app);
  return httpServer;
}
