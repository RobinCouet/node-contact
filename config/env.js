import dotenv from 'dotenv';
// Permet d'utiliser le fichier .env via process.env
dotenv.config();

export default {
    PORT: process.env.PORT,
    DATABASE_URI: process.env.DATABASE_URI,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_TYPE: process.env.DATABASE_TYPE,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    MAIL_FROM: process.env.MAIL_FROM
}