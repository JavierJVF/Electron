module.exports = (sequelize, DataTypes) => {
    const Pago_reparacion = sequelize.define("pagos_reparaciones",{
        id_pago:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_reparacion:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        monto:{
            type: DataTypes.REAL,
            allowNull: false,
        },
    });

    return Pago_reparacion;
};