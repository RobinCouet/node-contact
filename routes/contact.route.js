import express from "express";
import { sendMail } from "../controllers/contact.controller.js";
// Permet de créer la base de notre router pour les URLs de contact
const router = express.Router();

// L'url pour appeler cette route :
// http://localhost:3001/contact/post
// Car il y a un prefix défini dans server.js
router.post('/post', sendMail)

// Va nous permettre de récuperer la variable de routeur dans notre server.js
// Le default va nous permettre de le renommer a notre guise lors de l'import
export default router;