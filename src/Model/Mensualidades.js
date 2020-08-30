module.exports = (sequelize, DataTypes) =>{
    const Mensualidad = sequelize.define("mensualidades",{
        id_mensualidad:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mes:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        anio:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        costo:{
            type: DataTypes.REAL,
            allowNull: false,
        },
    });

    Mensualidad.associate = function(models){
        models.Mensualidades.belongsToMany(models.Pagos,{
            through: models.Pagos_mensualidades,
            foreignKey: 'id_mensualidad',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        });
    }

    return Mensualidad;
};