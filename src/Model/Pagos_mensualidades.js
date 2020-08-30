module.exports = (sequelize, DataTypes) => {
    const Pago_mensualidad = sequelize.define("pagos_mensualidades",{
        monto:{
            type: DataTypes.REAL,
            allowNull: false,
        },
        parte:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Pago_mensualidad;
};