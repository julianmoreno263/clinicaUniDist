import express from "express"


const router = express.Router()

router.get("/", (req, res) => {

    res.render("Inicio", {
        pagina: "Doctores"
    })
})

router.get("/pacientes", (req, res) => {

    res.render("pacientes", {
        pagina: "Pacientes"
    })
})

router.get("/citas", (req, res) => {

    res.render("citas", {
        pagina: "Citas"
    })
})


export default router