import { Cita } from "../models/Cita.js";


const guardarCita = async (req, res) => {

    const { fecha, nombrePaciente, nombreDoctor, especialidad, documento } = req.body
    //almacenar en la bd
    try {

        await Cita.create({
            fecha,
            nombrePaciente,
            nombreDoctor,
            especialidad,
            documento,

        })
        res.redirect("/citas")

    } catch (error) {
        console.log(error)
    }
}


export {
    guardarCita
}