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

    Contribucion.associate = function(models){
        models.Contribuciones.belongsToMany(models.Pagos,{
            through: models.Pagos_contribuciones
        });
    }

    return Contribucion;
};