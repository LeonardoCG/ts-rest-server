import { Sequelize } from "sequelize";

// mandamos llamar la db
const db = new Sequelize('node', 'root', 'leonardo', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,  // muestra querys en consola (LOGS)
});


export default db;


