

const guardarDoctor = async (req, res) => {

    //validar formulario
    const { nombres, apellidos, email, especialidad, consultorio } = req.body;

    const errores = []

    // if (nombres == "" || apellidos == "" || email == "" || especialidad == "" || consultorio == "") {
    //     errores.push({ mensaje: "Los campos del formulario no pueden estar vacios" })
    //     // alert("Los campos del formulario no pueden estar vacios");
    // }
    if (nombres.trim() === "") {
        errores.push({ mensaje: "El nombre está vacio" })
    }
    if (apellidos.trim() === "") {
        errores.push({ mensaje: "El apellido está vacio" })
    }
    if (email.trim() === "") {
        errores.push({ mensaje: "El email está vacio" })
    }
    if (especialidad.trim() === "") {
        errores.push({ mensaje: "Especialidad está vacio" })
    } if (consultorio.trim() === "") {
        errores.push({ mensaje: "El consultorio está vacio" })
    }

    //Validar los errores en la vista si los hay recorriendo el array de errores
    if (errores.length > 0) {

        //Mostrar la vista con errores
        res.render("inicio", {
            pagina: "inicio",
            errores,
            nombres,
            apellidos,
            email,
            especialidad,
            consultorio
        })
    } else {
        //almacenar en la bd
    }

    // if (nombres.trim() === "") {
    //     errores.push({ mensaje: "El nombre está vacio" })
    // }
    // if (apellidos.trim() === "") {
    //     errores.push({ mensaje: "El apellido está vacio" })
    // }
    // if (email.trim() === "") {
    //     errores.push({ mensaje: "El campo email está vacio" })

    // }
    // if (especialidad.trim() === "") {
    //     errores.push({ mensaje: "La especialidad está vacia" })
    // }
    // if (consultorio.trim() === "") {
    //     errores.push({ mensaje: "El campo consultorio está vacio" })
    // }
    // if (errores.length > 0) {
    //     //mostrar errores en la misma vista
    //     res.render("inicio", {
    //         pagina: "Doctores",
    //         errores,

    //     })
    // }
}



export {
    guardarDoctor
}