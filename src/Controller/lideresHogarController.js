const DB = require('./../database');
const Lideres_hogar = DB.Lideres_hogar;

async function create(_lider_hogar){
    try {
        const lideres_hogar = Lideres_hogar.build(_lider_hogar);
        result = await lideres_hogar.save();
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
        const result = await Lideres_hogar.findAll();
        if(result){console.log(result)}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }

}

async function update(_lider_hogar){
    try {
        result = await Lideres_hogar.update(_lider_hogar,{ where: { cedula: _lider_hogar.cedula }})
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

async function delete_(cedula){
    try {
        const result = await Lideres_hogar.destroy({
            where: {
                cedula: cedula
            }
        });
        if(result){console.log("Registro borrado con exito...")}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }
    //console.log(result);

}

module.exports = {create, read, update, delete_}