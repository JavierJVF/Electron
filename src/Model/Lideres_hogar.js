module.exports = (sequelize, DataTypes) => {
    const Lider_hogar = sequelize.define("lideres_hogar",{
        cedula:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        nombre:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        apellido:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        nro_celular:{
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        correo_electronico:{
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        nro_casa:{
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        }
    });

    return Lider_hogar;
}