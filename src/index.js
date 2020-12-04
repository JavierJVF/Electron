const { remote } = require('electron')
const main = remote.require('./main')

const newLider = {
    cedula: 25888779,
    nombre: "Alejandro",
    apellido: "Carreras",
    nro_celular: "0416 987982",
    nro_casa: "A7",
    correo_electronico: "MiCorreo2@email.com"
}

const newHogar = {
    nro_casa: "A7",
    calle: "calleja",
    manzana: "manzano"
}

const newPago = {
    monto: 100000,
    fecha_pago: "11/11/2020",
    tipo_pago: "transferencia",
    es_dolar: false,
    lideresHogarCedula: 25888779
}

const newPagoElectronico = {
    nro_referencia : 797854478,
    nombre_banco: 'banco venezuela'
}

const newMensualidad ={
    mes: "Febrero",
    anio: "2020",
    costo: 250
}

const newPagoMensualidad = {
    id_pago: 16,
    id_mensualidad: 1,
    monto: 250,
    parte: 0

}

const newPagoReparacion = {
    id_pago: 16,
    id_reparacion: 1,
    monto: 100

}

const newPagoContribucion = {
    id_pago: 16,
    id_contribucion: 1,
    monto: 50

}

const newReparacion = {
    descripcion: 'Porton nuevo',
    fecha_creacion: '10/10/2019',
    costo: 100
}

const newContribucion = {
    descripcion: 'Evvento X',
    fecha_creacion: '10/10/2019'
}
//llama al metodo desde aqui
const controllerHogar = require('./Controller/hogaresController.js')
//controllerHogar.create(newHogar)
//controllerHogar.findById("A8")


const controllerLider = require('./Controller/lideresHogarController.js')
//controllerLider.findById(25888779)
//controllerLider.create(newLider)
//controllerLider.asignarHogar(25888779,"A7")
//controllerLider.read()
//console.log(controllerHogar.read())
//controller.update(newHogar)
//controller.delete_(newHogar.nro_casa)

//llama al metodo desde el hilo principal
//main.createHogar(newHogar)
const controllerPago = require('./Controller/pagosController.js')
//controllerPago.create(newPago,newPagoElectronico);
//console.log(controllerPago.read());
//controllerPago.findByLider(25888777);


const controllerMensualidad = require('./Controller/mensualidadesController.js')
//controllerMensualidad.create(newMensualidad);
//console.log(controllerMensualidad.findPagosByMensualidad(2));
//console.log(controllerMensualidad.findPagosByLider(25888777))


//controllerMensualidad.Pagar(newPagoMensualidad);

const controllerReparacion = require('./Controller/reparacionesController.js')
//controllerReparacion.create(newReparacion);
//controllerReparacion.Pagar(newPagoReparacion);
//controllerReparacion.findPagosByLider(25888777);

const controllerContribucion = require('./Controller/contribucionesController.js')
//controllerContribucion.create(newContribucion);
//controllerContribucion.Pagar(newPagoContribucion);
//controllerContribucion.findPagosByLider(25888777);