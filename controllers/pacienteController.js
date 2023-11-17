import { Paciente } from "../models/Paciente.js";


const guardarPaciente = async (req, res) => {

    const { nombres, apellidos, telefono, edad, especialidad, id_numeroCedula } = req.body
    //almacenar en la bd
    try {

        await Paciente.create({
            nombres,
            apellidos,
            telefono,
            edad,
            especialidad,
            id_numeroCedula

        })
        res.redirect("/pacientes")

    } catch (error) {
        console.log(error)
    }
}


export {
    guardarPaciente
}