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
    });

    Pago.associate = function(models) {
        models.Pagos.belongsTo(models.Lideres_hogar,{
            //foreignKey: 'cedula_lider_hogar',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        });

        models.Pagos.hasOne(models.Pagos_electronicos);

        models.Pagos.belongsToMany(models.Mensualidades,{
            through: models.Pagos_mensualidades,
            foreignKey: 'id_pago',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        });

        models.Pagos.belongsToMany(models.Contribuciones,{
            through: models.Pagos_contribuciones,
            foreignKey: 'id_pago',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        });

        models.Pagos.belongsToMany(models.Reparaciones,{
            through: models.Pagos_reparaciones,
            foreignKey: 'id_pago',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        });
    };

    return Pago;
};