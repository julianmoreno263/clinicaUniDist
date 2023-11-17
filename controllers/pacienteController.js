import { Paciente } from "../models/Paciente.js";


const guardarPaciente = async (req, res) => {

    const { nombres, apellidos, telefono, edad, especialidad, documento } = req.body
    //almacenar en la bd
    try {

        await Paciente.create({
            nombres,
            apellidos,
            telefono,
            edad,
            especialidad,
            documento

        })
        res.redirect("/pacientes")

    } catch (error) {
        console.log(error)
    }
}


export {
    guardarPaciente
}