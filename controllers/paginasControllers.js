import { Doctor } from "../models/Doctor.js"


const paginaInicio = async (req, res) => {

    res.render("Inicio", {
        pagina: "Doctores"
    })
}

const paginaPacientes = (req, res) => {

    res.render("pacientes", {
        pagina: "Pacientes"
    })
}

const paginaCitas = (req, res) => {

    res.render("citas", {
        pagina: "Citas"
    })
}



export {
    paginaInicio,
    paginaPacientes,
    paginaCitas
}