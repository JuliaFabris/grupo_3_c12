
module.exports = (sequelize, dataTypes) => {
    let alias = 'Role';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        guest: {
            type: dataTypes.INTEGER(2),
            allowNull: false
        },
        user: {
            type: dataTypes.INTEGER(2),
            allowNull: false
        },
        admin: {
            type: dataTypes.INTEGER(2),
            allowNull: false
        }
        
    };
       let config = {
        tableName: "role",
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const Role = sequelize.define(alias, cols, config);

    //relaciones con el modelo Movie

    Role.associate = function(models) {
        Role.hasMany(models.User, {
            as: "users",
            foreignKey: "user_id"
        })
    }

    return Role;
};
