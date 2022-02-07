
module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        guest: {
            type: dataTypes.INT(2),
            allowNull: false
        },
        user: {
            type: dataTypes.INT(2),
            allowNull: false
        },
        admin: {
            type: dataTypes.INT(2),
            allowNull: false
        }
        
    };
       let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const Genre = sequelize.define(alias, cols, config);

    //relaciones con el modelo Movie

    Rol.associate = function(models) {
        Role.hasMany(models.User, {
            as: "users",
            foreignKey: "role_id"
        })
    }

    return Role
};