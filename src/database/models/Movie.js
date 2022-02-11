module.exports = (sequelize, dataTypes) => {//se empieza con module.exports para exportar el modelo
    let alias = 'Movie'; 
    let cols = {//se crean las columnas
        id: {
            type: dataTypes.INT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        title: {
            type: dataTypes.VARCHAR(500),
            allowNull: false
        },
        description: {
            type: dataTypes.VARCHAR(500),
            allowNull: false
        },
        direction: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        actors: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        rating: {
            type: dataTypes.INT(11).UNSIGNED,
            allowNull: false
        },
        price: {
            type: dataTypes.INT(10).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.INT(11).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        duration: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        genre: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Movie = sequelize.define(alias,cols,config);

    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    Movie.associate = function(models) {

        Movie.HasMany(models.Genre, {
            as: "genres", /* le pertenece a uno o más generos */
            foreignKey: "genre_id"
        })

        Movie.HasMany(models.Actor, { 
            as: "actors",
            through: "actor_movie", /* tabla pivot */
            foreignKey: "movie_id",
            otherKey: "actor_id", /* es la otra llave */
            timestamps: false /* si queremos que se guarde el timestamps tenemos que configurar el createdAt y el updatedAt */
        })

        Movie.BelongsToMany(models.Shop-Cart, { 
            as: "shop-carts",
            through: "movie_cart", /* tabla pivot */
            foreignKey: "shop_cart_id",
            otherKey: "user_id", /* es la otra llave */
            timestamps: false /* si queremos que se guarde el timestamps tenemos que configurar el createdAt y el updatedAt */
        })
        
    }

    return Movie
};