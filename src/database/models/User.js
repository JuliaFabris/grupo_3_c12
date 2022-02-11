module.exports = (sequelize, dataTypes) => {
      let alias = "User";
      let cols = {
            id: {
                  type: dataTypes.INTEGER(11).UNSIGNED,
                  primaryKey: true,
                  allowNull: false,
                  autoIncrement: true
            },
            name: {
                  type: dataTypes.STRING(50),
                  alowNull: false,
            },
            last_name: {
                  type: dataTypes.STRING(50),
                  alowNull: false,
            },

            email: {
                  type: dataTypes.STRING(50),
                  alowNull: false,
                  unique: true
            },
            pass: {
                  type: dataTypes.STRING(60),
                  alowNull: false
            },
            avatar: {
                  type: dataTypes.STRING(100),
            },

            birthday: {
                  type: dataTypes.DATE,
            },

            address: {
                  type: dataTypes.STRING(50),
            },
            favorite_movie: {
                  type: dataTypes.STRING(50),
            },

      };
      let config = {
            tableName: "user",
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
      }

      const User = sequelize.define(alias, cols, config);

      User.associate = function (models) {

            User.belongsTo(models.User, {
                  as: "user",
                  /* le pertenece a un user*/
                  foreignKey: "user_id"
            })

      }

      return User;
};