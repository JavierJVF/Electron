module.exports = (sequelize, DataTypes) => {
    const Hogar = sequelize.define("hogares", {
        nro_casa: {
            type: DataTypes.TEXT,
            primaryKey: true,
            allowNull: false,
        },
        calle: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        manzana: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    Hogar.associate = function(models) {
        models.Hogares.hasOne(models.Lideres_hogar);
    };
    
    return Hogar;
};