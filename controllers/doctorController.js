import { Doctor } from "../models/Doctor.js";


const guardarDoctor = async (req, res) => {

    const { nombres, apellidos, email, especialidad, consultorio } = req.body
    //almacenar en la bd
    try {

        await Doctor.create({
            nombres,
            apellidos,
            email,
            especialidad,
            consultorio,

        })
        res.redirect("/")

    } catch (error) {
        console.log(error)
    }
}


export {
    guardarDoctor
}