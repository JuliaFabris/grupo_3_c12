module.exports = (sequelize, dataTypes) => {//se empieza con module.exports para exportar el modelo
    let alias = 'ShopCart'; 
    let cols = {//se crean las columnas
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        
        price: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        total: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
       
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const ShopCart = sequelize.define(alias,cols,config);

    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    ShopCart.associate = function(models) {

        ShopCart.belongsTo(models.User, {
            as: "user", /* le pertenece a un genero */
            foreignKey: "user_id"
        })

        ShopCart.belongsToMany(models.Movie, { 
            as: "actors",
            through: "shopcart_movie", /* tabla pivot */
            foreignKey: "movie_id",
            otherKey: "user_id", /* es la otra llave */
            timestamps: false 
        })
        
    }

    return Movie
};