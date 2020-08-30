const { remote } = require('electron')
const main = remote.require('./main')

const newLider = {
    cedula: 25888777,
    nombre: "Alejandro",
    apellido: "Carreras",
    nro_celular: "0416 987987",
    nro_casa: "A8",
    correo_electronico: "MiCorreo@email.com"
}

const newHogar = {
    nro_casa: "A8",
    calle: "calleja",
    manzana: "manzano"
}

//llama al metodo desde aqui
const controllerHogar = require('./Controller/hogaresController.js')
//controllerHogar.create(newHogar)
controllerHogar.read()

const controllerLider = require('./Controller/lideresHogarController.js')
//controllerLider.create(newLider)
//controllerLider.read()

//controller.update(newHogar)
//controller.delete_(newHogar.nro_casa)

//llama al metodo desde el hilo principal
//main.createHogar(newHogar)