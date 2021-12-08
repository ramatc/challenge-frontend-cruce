module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100)
        },
        price: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING(100)
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stock: {
            type: DataTypes.INTEGER
        },
    
    };
    
    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
};