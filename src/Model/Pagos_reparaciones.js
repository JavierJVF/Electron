module.exports = (sequelize, DataTypes) => {
    const Pago_reparacion = sequelize.define("pagos_reparaciones",{
        id_pago:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Pagos',
                key: 'id_pago'
              }
        },
        id_reparacion:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Reparaciones',
                key: 'id_reparacion'
            }
        },
        monto:{
            type: DataTypes.REAL,
            allowNull: false,
        },
    });

    return Pago_reparacion;
};