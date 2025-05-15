// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { db } from "./models/index.js"; // ambil dari model
import NotesRoute from "./routes/NotesRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(NotesRoute);

// Database Connection & Sync
(async () => {
  try {
    await db.authenticate();
    console.log("Database connected...");

    // Sync database schema with models (development only)
    await db.sync({ alter: true }); // <- Perubahan di sini
    console.log("Database synchronized...");
  } catch (error) {
    console.error("Connection error:", error);
  }
})();

// Jalankan server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
