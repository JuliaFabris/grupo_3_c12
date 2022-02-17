module.exports = (sequelize, dataTypes) => {

    let alias = 'Actor';

    let cols = {
        
        id: {
            type: dataTypes.INTEGER(20).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }  
    };
    let config = {
        tableName: "actor",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Actor = sequelize.define(alias, cols, config); 

    //Relaciones
    Actor.associate = function(models) {

        Actor.belongsToMany(models.Movie, {
             as: "movies",
             through: "actor_movie",
             foreignKey: "movie_id",
             otherKey: "actor_id",
             timestamps: false
        })
    }

    return Actor;
};