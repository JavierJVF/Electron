module.exports = (sequelize, DataTypes) => {
    const Hogares = sequelize.define("hogares", {
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
    
    return Hogares;
};