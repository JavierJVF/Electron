module.exports = (sequelize, DataTypes) => {
    const Pago_contribucion = sequelize.define("pagos_contribuciones",{
        id_pago:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_contribucion:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        monto:{
            type: DataTypes.REAL,
            allowNull: false,
        },
    });

    return Pago_contribucion;
};