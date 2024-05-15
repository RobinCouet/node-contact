import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`API ouverte à l'URL http://localhost:${PORT}`);
})