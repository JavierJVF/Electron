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
    });

    Pago_electronico.associate = function(models){
        models.Pagos_electronicos.belongsTo(models.Pagos,{
            //foreignKey: 'id_pago',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        });
    };

    return Pago_electronico;
}