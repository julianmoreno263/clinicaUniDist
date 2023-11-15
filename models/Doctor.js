import { Sequelize } from "sequelize";
import db from "../config/db.js";

//modelo de Doctor
export const Doctor = db.define("doctor", {
    id_profesional: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombres: {
        type: Sequelize.STRING
    },
    apellidos: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    especialidad: {
        type: Sequelize.STRING
    },
    consultorio: {
        type: Sequelize.STRING
    }

}, {
    freezeTableName: true,
}
);