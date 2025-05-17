import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { db } from "./models/index.js";
import NotesRoute from "./routes/NotesRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// === CORS Configuration ===
const corsOptions = {
  origin: [
    "https://notes-fe027-dot-if-b-08.uc.r.appspot.com", // frontend deploy
    "http://localhost:3000", // pengembangan lokal
  ],
  credentials: true, // untuk cookie/token
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions)); // Gunakan opsi CORS
app.options("*", cors(corsOptions)); // Tangani preflight request

// === Middleware ===
app.use(cookieParser());
app.use(express.json());
app.use(NotesRoute);

// === Database Connection & Sync ===
(async () => {
  try {
    await db.authenticate();
    console.log("Database connected...");

    await db.sync({ alter: true }); // sync schema saat development
    console.log("Database synchronized...");
  } catch (error) {
    console.error("Connection error:", error);
  }
})();

// === Start Server ===
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
