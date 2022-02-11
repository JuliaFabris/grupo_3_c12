module.exports = (sequelize, dataTypes) => {
    let alias = 'movies';
    let cols = {
        id: {
            type: dataTypes.INT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        shop_cart_id: {
            type: dataTypes.INT(11).UNSIGNED,
            allowNull: false
        },
        movie_id: {
            type: dataTypes.INT(11).UNSIGNED,
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

   // tengo    que ver qué va acà en la pivot, corregir
  //  Genre.associate = function(models) {
     //   Genre.BelongsToMany(models.Movie, {
       //     as: "movies",
      //      foreignKey: "movie_id"
      //  })
  //  }
};
