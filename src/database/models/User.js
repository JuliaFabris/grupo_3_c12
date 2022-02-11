const { DataTypes } = require('sequelize')

module.exports = (sequelize, Datatypes) => {
      let alias = "User";
      let cols={
            id: {
            type: dataTypes.INT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
            },
            name: {
                  type: DataTypes.TINITEXT,
                  alowNull: false,
                },
            last_name: {
                  type: DataTypes.TINITEXT,
                  alowNull: false,
            },
            
            email: {
                  type: DataTypes.VARCHAR(50),
                  alowNull: false,
                  unique: true
            },
            pass: {
                  type: DataTypes.VARCHAR(60),
                  alowNull: false
            },
            avatar: {
                  type: DataTypes.STRING(100),
            },
            
            birthday: {
                  type: DataTypes.DATETIME
            },
            
            address: {
                  type: DataTypes.VARCHAR(50),
            },
            favorite_movie: {
                  type: DataTypes.VARCHAR(50),
            },
            
      };
      let config = {
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }

       const User = sequelize.define(alias,cols,config);

       User.associate = function(models) {

        User.belongsTo(models.User, {
            as: "user", /* le pertenece a un user*/
            foreignKey: "user_id"
        })

        User.HasOne(models.Shop-Cart, { 
            as: "movie",
            through: "shopcart_movie", /* tabla pivot */
            foreignKey: "movie_id",
            otherKey: "user_id", /* es la otra llave */
            timestamps: false 
        })
        
    }

    return Movie
};