import { Router } from "express";
import { storage } from "./storage";

const router = Router();

// GET all products
router.get("/products", async (req, res) => {
  const products = await storage.getAllProducts();
  res.json(products);
});

// Create product (optional)
router.post("/products", async (req, res) => {
  const { name, price } = req.body;
  const product = await storage.createProduct({ name, price });
  res.json(product);
});

export default router;
