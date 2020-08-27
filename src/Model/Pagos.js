module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define("pagos",{
        id_pago:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        monto:{
            type: DataTypes.REAL,
            allowNull: false,
        },
        fecha_pago:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        tipo_pago:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        es_dolar:{
            type: DataTypes.INTEGER,
        },
        cedula_lider_hogar:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Pago;
};