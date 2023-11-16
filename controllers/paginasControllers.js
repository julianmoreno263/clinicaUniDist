
import { Doctor } from "../models/Doctor.js"



const paginaInicio = async (req, res) => {

    try {
        //traemos los doctores de la bd
        const doctores = await Doctor.findAll()

        console.log(doctores)



        res.render("inicio", {
            pagina: "Doctores",
            doctores
        })
    } catch (error) {
        console.log(error)
    }

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