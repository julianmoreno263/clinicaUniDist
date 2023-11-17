
import { Doctor } from "../models/Doctor.js"
import { Paciente } from "../models/Paciente.js"
import { Cita } from "../models/Cita.js"



const paginaInicio = async (req, res) => {

    try {
        //traemos los doctores de la bd
        const doctores = await Doctor.findAll()

        res.render("inicio", {
            pagina: "Doctores",
            doctores

        })
    } catch (error) {
        console.log(error)
    }

}

const paginaPacientes = async (req, res) => {

    try {
        //traemos los pacientes de la bd
        const pacientes = await Paciente.findAll()

        res.render("pacientes", {
            pagina: "Pacientes",
            pacientes

        })
    } catch (error) {
        console.log(error)
    }
}

const paginaCitas = async (req, res) => {

    try {
        //traemos los pacientes de la bd
        const citas = await Cita.findAll()

        res.render("citas", {
            pagina: "Citas",
            citas

        })
    } catch (error) {
        console.log(error)
    }
}



export {
    paginaInicio,
    paginaPacientes,
    paginaCitas
}