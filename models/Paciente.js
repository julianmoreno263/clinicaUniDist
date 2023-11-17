import { Sequelize } from "sequelize";
import db from "../config/db.js";

//modelo de Paciente
export const Paciente = db.define("paciente", {
    documento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nombres: {
        type: Sequelize.STRING
    },
    apellidos: {
        type: Sequelize.STRING
    },
    telefono: {
        type: Sequelize.STRING
    },
    especialidad: {
        type: Sequelize.STRING
    },
    edad: {
        type: Sequelize.INTEGER
    }

}, {
    freezeTableName: true,
}
);