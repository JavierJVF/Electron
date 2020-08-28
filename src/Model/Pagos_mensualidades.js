module.exports = (sequelize, DataTypes) => {
    const Pago_mensualidad = sequelize.define("pagos_mensualidades",{
        id_pago:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Pagos',
                key: 'id_pago'
            }
        },
        id_mensualidad:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Mensualidades',
                key: 'id_mensualidad'
            }
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