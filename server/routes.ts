export function registerRoutes(app) {
  app.get("/api/products", (_req, res) => {
    res.json([
      { id: "1", name: "Sample Recipe 1", price: 99 },
      { id: "2", name: "Sample Recipe 2", price: 199 }
    ]);
  });
}
