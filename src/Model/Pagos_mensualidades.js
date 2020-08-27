module.exports = (sequelize, DataTypes) => {
    const Pago_mensualidad = sequelize.define("pagos_mensualidades",{
        id_pago:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_mensualidad:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
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