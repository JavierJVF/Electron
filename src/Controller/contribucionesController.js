const DB = require('./../database');
const Contribuciones = DB.Contribuciones;
const Pagos = DB.Pagos;

async function create(_contribucion){
    try {
        const contribucion = Contribuciones.build(_contribucion);
        result = await Contribuciones.create(_contribucion);
        if(result){
            console.log("Registro guardado con exito...")
            console.log(result)
        }
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }

}

async function read(){
    try {
        const result = await Contribuciones.findAll();
        if(result){console.log(result)}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }

}

async function update(_contribucion){
    try {
        result = await Contribuciones.update(_contribucion,{ where: { id_contribucion: _contribucion.id_contribucion }})
        if(result){
            console.log("Registro actualizado con exito...")
            console.log(result)
        }
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }

}

async function delete_(id_contribucion){
    try {
        const result = await Contribuciones.destroy({
            where: {
                id_contribucion: id_contribucion
            }
        });
        if(result){console.log("Registro borrado con exito...")}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }
    console.log(_contribucion)

}

async function Pagar(data){
    const pago =  result = await Pagos.findOne({ where: { id_pago : data['id_pago'] } });
    const contribucion =  result = await Contribuciones.findOne({ where: { id_contribucion : data['id_contribucion'] } });

    if (pago === null) {
        console.log('pago Not found!');
        return 0;

    } else if(contribucion === null){
        console.log('contribucion Not found!');
        return 0;

    } else {
        result = pago.addContribuciones(contribucion, { through: { monto: data['monto'] } });
        if (result) {
            console.log('Operacion Exitosa');
            return pago;
        }else{
            console.log('Operacion fallida');
            return 0;
        }

    }
}

async function findPagosByContribucion(id_contribucion){
    try {
        const result = await Contribuciones.findOne({ where: {id_contribucion: id_contribucion}, include : Pagos});
        if(result){console.log(result)}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }

}

async function findPagosByLider(id_lider){
    try {
        const result = await Pagos.findOne({ where: {lideresHogarCedula: id_lider}, include : Contribuciones});
        if(result){console.log(result)}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }

}

module.exports = {create, read, update, delete_,Pagar,findPagosByLider,findPagosByContribucion}