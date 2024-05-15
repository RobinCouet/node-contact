// Lors de la creation de la base de donnée dans PhpMyAdmin, bien penser a choisir UTF8mb4 pour ne pas avoir de soucis avec les emojis 😊😊😊😊😊😊😊
export default (connection, DataType) => {
    connection.define(
        // 1er argument : Nom du model
        'Contact',
        // 2eme argument : Objet qui défini les valeurs du model
        {
            firstName: {
                type: DataType.STRING,
                allowNull: false // required
            },
            lastName: {
                type: DataType.STRING,
                allowNull: false // required
            },
            phone: {
                type: DataType.STRING,
                allowNull: true // Non obligatoire
            },
            email: {
                type: DataType.STRING,
                allowNull: false // required
            },
            message: {
                type: DataType.TEXT, // TEXT permet de stocker plus de caracteres que le STRING qui est limité a 255
                allowNull: false
            }
        },
        { timestamps: true }
    )
}