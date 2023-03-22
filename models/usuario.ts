import { DataTypes } from 'sequelize';
import db from '../db/conncetion';


const Usuario = db.define('usuario', {

    nombre: {
       type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.TIME
    },
    updatedAt: {
        type: DataTypes.TIME
    },
});


export default Usuario;