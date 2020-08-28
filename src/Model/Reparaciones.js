module.exports = () => {
    const Reparacion = sequelize.define("reparaciones",{
        id_reparacion:{
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
        costo:{
            type: DataTypes.REAL,
            allowNull: false,
        },
    });

    Reparacion.associate = function(models){
        models.Reparaciones.belongsToMany(models.Pagos,{
            through: models.Pagos_reparaciones
        });
    }

    return Reparacion;
};