import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleWishlistSubmit } from "./routes/wishlist";
import { handleContactSubmit } from "./routes/contact";
import { connectToDatabase } from "./db";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Connect to MongoDB
  connectToDatabase().catch(console.error);

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Wishlist API routes
  app.post("/api/wishlist", handleWishlistSubmit);

  // Contact API routes
  app.post("/api/contact", handleContactSubmit);

  return app;
}
