

module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        category_name: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        
    };
       let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const Genre = sequelize.define(alias, cols, config);

    //relaciones 

    Genre.associate = function(models) {
        Genre.BelongsToMany(models.Movie, {
            as: "movies",
            foreignKey: "movie_id"
        })
    }

    return Genre
};