module.exports = (sequelize, DataTypes) => {
    const Contribucion = sequelize.define("contribuciones",{
        id_contribucion:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descripcion:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        fecha_creacion:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    return Contribucion;
};