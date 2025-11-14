import type { Express } from "express";
import { storage } from "./storage";

export async function registerRoutes(app: Express) {
  // Simple sample API route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Products route
  app.get("/api/products", (req, res) => {
    res.json([
      { id: "1", name: "Sample Recipe 1", price: 99 },
      { id: "2", name: "Sample Recipe 2", price: 199 }
    ]);
  });
}
