import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

// Register API routes
registerRoutes(app);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Start server
const port = parseInt(process.env.PORT || "5000", 10);

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend API running on port ${port}`);
});
