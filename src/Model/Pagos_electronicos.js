module.exports = (sequelize, DataTypes) => {
    const Pago_electronico = sequelize.define("pagos_electronicos",{
        nro_referencia:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        nombre_banco:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        id_pago:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Pago_electronico;
}