"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// mandamos llamar la db
const db = new sequelize_1.Sequelize('node', 'root', 'leonardo', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // muestra querys en consola (LOGS)
});
exports.default = db;
//# sourceMappingURL=conncetion.js.map