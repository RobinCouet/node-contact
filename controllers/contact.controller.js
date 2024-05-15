import { Contact } from "../models/index.js";

// J'export directement ma fonction
// Ca me permet d'eviter de faire un export en fin de fichier
export const sendMail = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
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
