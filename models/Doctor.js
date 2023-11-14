import { Sequelize } from "sequelize";
import db from "../config/db.js";

//modelo de Doctor
export const Doctor = db.define("doctor", {
    nombre: {
        type: Sequelize.STRING
    },
    apellido: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    especialidad: {
        type: Sequelize.STRING
    }
});