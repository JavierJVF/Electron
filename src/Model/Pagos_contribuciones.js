module.exports = (sequelize, DataTypes) => {
    const Pago_contribucion = sequelize.define("pagos_contribuciones",{
        id_pago:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Pagos',
                key: 'id_pago'
            }
        },
        id_contribucion:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Contribuciones',
                key: 'id_contribucion'
            }
        },
        monto:{
            type: DataTypes.REAL,
            allowNull: false,
        },
    });

    return Pago_contribucion;
};