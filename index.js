
import express from "express"
import router from "./routes/index.js"
import db from "./config/db.js"

const app = express()

//conectar a la bd
db.authenticate()
    .then(() => console.log("BD conectada!"))
    .catch(error => console.log(error))

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

//agregar body parser para leer datos del formulario
app.use(express.urlencoded({ extended: true }));

//agregar carpeta public
app.use(express.static("public"))


//agregar router
app.use("/", router)


app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
})