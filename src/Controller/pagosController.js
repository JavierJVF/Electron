const DB = require('./../database');
const Pagos = DB.Pagos;
const Lideres_hogar = DB.Lideres_hogar;
const Pagos_electronicos = DB.Pagos_electronicos;

async function create(_pago,_pagoElectronico){
    try {
        const lider_hogar =  result = await Lideres_hogar.findOne({ where: { cedula: _pago['lideresHogarCedula'] } });
        if(lider_hogar!==null){
            pago = await Pagos.create(_pago);
            if(pago){


                if(!_pago['es_dolar']){
                    pagoE = await Pagos_electronicos.create({nro_referencia: _pagoElectronico['nro_referencia'],nombre_banco: _pagoElectronico['nombre_banco'],pagoIdPago: pago['id_pago']});
                    //res = pagoE.addPagos(pago);
                    if(!pagoE){
                        _delete(pago['id_pago'])
                        console.log("Registro de pago fallido, referencia o banco con errores")
                        return 0
                    }
                }
                
                result = lider_hogar.addPagos(pago);
                    

                if(result){
                    console.log("Registro de pago exxitoso")
                    //console.log(pago)
                    return pago
                }else{
                    console.log('Operacion fallida');
                    return 0;
                }

                
            }else{
                console.log('Registro de pago fallido');
                return 0;
            }
        }

    } catch (error) {
        console.log(error)
        return 0;
    }

}

async function read(){
    try {
        const result = await Pagos.findAll({include : Pagos_electronicos});
        if(result){console.log(result)}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }

}

async function update(_pago){
    try {
        result = await Pagos.update(_pago,{ where: { id_pago: _pago.id_pago }})
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

async function delete_(id_pago){
    try {
        const result = await Pagos.destroy({
            where: {
                id_pago: id_pago
            }
        });
        if(result){console.log("Registro borrado con exito...")}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }
    console.log(_pago)

}

async function findById(id){
    try {
        const pago = (await Pagos.findOne({ where: { id_pago: id }, include : Pagos_electronicos}));
        if(pago!== null){
            console.log(pago)
            return pago;
        }else {
            console.log("pago no encontrado")
            return 0
        }
        
    } catch (error) {
        console.log(error)
        return 0;
    }

}

async function findByLider(id_lider){
    try {
        const result = await Pagos.findAll({ where: {lideresHogarCedula: id_lider}, include : Pagos_electronicos});
        if(result){console.log(result)}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }

}


module.exports = {create, read, update, delete_,findById,findByLider}