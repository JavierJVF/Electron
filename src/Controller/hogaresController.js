const DB = require('./../database');
const Hogares = DB.Hogares;

async function create(_hogar){
    try {
        const hogar = Hogares.build(_hogar);
        result = await hogar.save();
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
        const result = await Hogares.findAll();
        if(result){console.log(result)}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }

}

async function update(_hogar){
    try {
        result = await Hogares.update(_hogar,{ where: { nro_casa: _hogar.nro_casa }})
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

async function delete_(nro_casa){
    try {
        const result = await Hogares.destroy({
            where: {
                nro_casa: nro_casa
            }
        });
        if(result){console.log("Registro borrado con exito...")}
        return result
    } catch (error) {
        console.log(error)
        return 0;
    }
    console.log(_hogar)

}

module.exports = {create, read, update, delete_}