"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conncetion_1 = __importDefault(require("../db/conncetion"));
const Usuario = conncetion_1.default.define('usuario', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    createdAt: {
        type: sequelize_1.DataTypes.TIME
    },
    updatedAt: {
        type: sequelize_1.DataTypes.TIME
    },
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map