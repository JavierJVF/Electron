module.exports = (sequelize, DataTypes) => {
    const Pago_contribucion = sequelize.define("pagos_contribuciones",{
        monto:{
            type: DataTypes.REAL,
            allowNull: false,
        },
    });

    return Pago_contribucion;
};