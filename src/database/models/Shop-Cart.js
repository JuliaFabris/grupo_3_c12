module.exports = (sequelize, dataTypes) => {//se empieza con module.exports para exportar el modelo
    let alias = 'ShopCart'; 
    let cols = {//se crean las columnas
        id: {
            type: dataTypes.INT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        movie_title: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        
        price: {
            type: dataTypes.INT(10).UNSIGNED,
            allowNull: false
        },
        total: {
            type: dataTypes.INT(11).UNSIGNED,
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

    //relaciones con los otros modelos (Genre - Actor)

    ShopCart.associate = function(models) {

        ShopCart.belongsTo(models.User, {
            as: "user", /* le pertenece a un user*/
            foreignKey: "user_id"
        })

        ShopCart.HasMany(models.Movie, { 
            as: "movies",
            through: "shopcart_movie", /* tabla pivot */
            foreignKey: "movie_id",
            otherKey: "user_id", /* es la otra llave */
            timestamps: false 
        })
        
    }

    return Movie
};