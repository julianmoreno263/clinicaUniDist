import express from "express"
import { paginaInicio, paginaPacientes, paginaCitas } from "../controllers/paginasControllers.js"
import { guardarDoctor } from "../controllers/doctorController.js"
import { guardarPaciente } from "../controllers/pacienteController.js"



const router = express.Router()

router.get("/", paginaInicio)
router.post("/", guardarDoctor)

router.get("/pacientes", paginaPacientes)
router.post("/pacientes", guardarPaciente)

router.get("/citas", paginaCitas)





export default router