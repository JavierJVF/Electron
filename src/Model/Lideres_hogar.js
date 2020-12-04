module.exports = (sequelize, DataTypes) => {
    const Lider_hogar = sequelize.define("lideres_hogar",{
        cedula:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        nombre:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        apellido:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        nro_celular:{
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        correo_electronico:{
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
    });

    Lider_hogar.associate = function(models) {
        models.Lideres_hogar.belongsTo(models.Hogares);
        models.Lideres_hogar.hasMany(models.Pagos)
    };

    return Lider_hogar;
}