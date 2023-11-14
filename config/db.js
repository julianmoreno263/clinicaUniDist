import Sequelize from "sequelize"

//configurar sequelize y conectar a la bd
const db = new Sequelize("citas", "root", "", {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})

export default db;