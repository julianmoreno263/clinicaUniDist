import express from "express"
import { paginaInicio, paginaPacientes, paginaCitas } from "../controllers/paginasControllers.js"
import { guardarDoctor } from "../controllers/doctorController.js"


const router = express.Router()

router.get("/", paginaInicio)
router.post("/", guardarDoctor)

router.get("/pacientes", paginaPacientes)

router.get("/citas", paginaCitas)





export default router