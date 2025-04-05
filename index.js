import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import { connectDB } from "./config/connect-db.js";



const app = express();

// 🔗 Connexion à la base de données
connectDB();

// 🛡️ Middleware de sécurité
app.use(helmet());

// ✅ Middleware CORS
app.use(cors());

// 📦 Middleware pour parser les requêtes
app.use(express.json());
app.use(express.static("public"));

// 🏓 Route de test pour vérifier si le serveur fonctionne
app.get("/ping", (req, res) => {
    res.send("pong");
});

// 🚀 Démarrage du serveur
const PORT = process.env.PORT || 5007;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});