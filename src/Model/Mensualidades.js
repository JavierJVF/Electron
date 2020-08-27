module.exports = (sequelize, DataTypes) =>{
    const mensualidad = sequelize.define("mensualidades",{
        id_mensualidad:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mes:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        anio:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        costo:{
            type: DataTypes.REAL,
            allowNull: false,
        },
    });

    return mensualidad;
};