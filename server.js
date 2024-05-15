import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact.route.js';
import env from './config/env.js';

// Import de mon fichier de configuration de base de donnée
import './models/index.js';
// Création de notre serveur nodeJs / Express
const app = express();

// MIDDLEWARE
// Permet a express de recevoir de JSON et de le decoder
app.use(express.json());
// Permet à l'API de recevoir des appels depuis n'importe quelle URL
// Par defaut, express bloque les appels d'API depuis des URLs différente de la sienne
app.use(cors());


// ROUTES
// le 1er param est un prefix pour toutes les routes dans le fichier contact.route.js
app.use('/contact', contactRoutes);

// Si on a un .env avec un PORT renseigné, la constante prendra sa valeur, sinon prendra 8080
const PORT = env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`API ouverte à l'URL http://localhost:${PORT}`);
})