module.exports = (sequelize, DataTypes) => {
    const Pago_reparacion = sequelize.define("pagos_reparaciones",{
        monto:{
            type: DataTypes.REAL,
            allowNull: false,
        },
    });

    return Pago_reparacion;
};