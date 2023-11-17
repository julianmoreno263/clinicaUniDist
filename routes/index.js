import express from "express"
import { paginaInicio, paginaPacientes, paginaCitas } from "../controllers/paginasControllers.js"
import { guardarDoctor } from "../controllers/doctorController.js"
import { guardarPaciente } from "../controllers/pacienteController.js"
import { guardarCita } from "../controllers/citaController.js"




const router = express.Router()

router.get("/", paginaInicio)
router.post("/", guardarDoctor)

router.get("/pacientes", paginaPacientes)
router.post("/pacientes", guardarPaciente)

router.get("/citas", paginaCitas)
router.post("/citas", guardarCita)






export default router