module.exports = (sequelize, dataTypes) => {//se empieza con module.exports para exportar el modelo
    let alias = 'Movie'; 
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
        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        direction: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        duration: dataTypes.BIGINT(10),
        genre_id: {
            type: dataTypes.BIGINT(10),
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

        Movie.belongsTo(models.Genre, {
            as: "genre", /* le pertenece a un genero */
            foreignKey: "genre_id"
        })

        Movie.belongsToMany(models.Actor, { 
            as: "actors",
            through: "actor_movie", /* tabla pivot */
            foreignKey: "movie_id",
            otherKey: "actor_id", /* es la otra llave */
            timestamps: false /* si queremos que se guarde el timestamps tenemos que configurar el createdAt y el updatedAt */
        })
        
    }

    return Movie
};