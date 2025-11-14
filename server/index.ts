import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes";

export const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Register only API routes
registerRoutes(app);

// Start server
const port = parseInt(process.env.PORT || "5000", 10);

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Backend API running on port ${port}`);
});
