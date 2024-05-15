import { Contact } from "../models/index.js";
import nodemailer from 'nodemailer';
import env from '../config/env.js'

const transport = nodemailer.createTransport({
    host: env.MAIL_HOST,
    port: env.MAIL_PORT,
    auth: {
        user: env.MAIL_USER,
        pass: env.MAIL_PASSWORD
    }
});

// J'export directement ma fonction
// Ca me permet d'eviter de faire un export en fin de fichier
export const sendMail = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);

        await transport.sendMail({
            from: env.MAIL_FROM, // sender address
            to: "couetrobin@gmail.com", // list of receivers
            subject: "Nouvelle prise de contact via le site", // Subject line
            text: "Hello world?", // plain text body
            html: `
                <ul>
                    <li>Prénom : ${contact.firstName}</li>
                    <li>Nom : ${contact.lastName}</li>
                    <li>Numéro de téléphone : ${contact.phone}</li>
                    <li>Email : ${contact.email}</li>
                    <li>Message : ${contact.message}</li>
                </ul>
            `, // html body
        });


        res.status(201).json(contact);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Erreur lors de l'envois",
            trace: err
        })
    }
}

/**
export {
    sendMail
}
*/
