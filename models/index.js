import { Sequelize } from "sequelize";
import contactModel from "./contact.model.js";
import env from '../config/env.js';

const connection = new Sequelize(
    env.DATABASE_NAME, // Nom de la DB
    env.DATABASE_USER, // Identifiant DB
    env.DATABASE_PASSWORD, // Password DB
    {
        host: env.DATABASE_URI,// URL de la DB
        dialect: env.DATABASE_TYPE // Type de DB
    }
);

try {
    await connection.authenticate();
    console.log("Connexion à la BDD OK");
} catch (error) {
    console.error("Probleme lors de la connexion à la BDD", error);
}

// J'appel mon model en lui passant en params :
// 1 : la connexion à la DB
// 2 : La classe Sequelize dans laquelle je vais retrouver mes DataTypes
contactModel(connection, Sequelize);

const {
    Contact
} = connection.models; // Dans connection.models, on retrouve sous forme d'objet tous les models qui ont été define via la connection

await connection.sync();

console.log("Synchro OK");

export {
    Contact
}