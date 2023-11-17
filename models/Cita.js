import { Sequelize } from "sequelize";
import db from "../config/db.js";

//modelo de Paciente
export const Cita = db.define("cita", {
    fecha: {
        type: Sequelize.DATE,
        primaryKey: true,
    },
    nombrePaciente: {
        type: Sequelize.STRING
    },
    nombreDoctor: {
        type: Sequelize.STRING
    },
    especialidad: {
        type: Sequelize.STRING
    },
    documento: {
        type: Sequelize.INTEGER
    }

}, {
    freezeTableName: true,
}
);