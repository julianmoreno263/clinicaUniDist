
import express from "express"
import router from "./routes/index.js"

const app = express()

//definir puerto
const port = process.env.PORT || 4000

//habilitar PUG(template engine)
app.set("view engine", "pug")

//middleware para obtener el año actual
app.use((req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = "Clínica UniDist"

    return next()
})

//agregar carpeta public
app.use(express.static("public"))


//agregar router
app.use("/", router)


app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
})