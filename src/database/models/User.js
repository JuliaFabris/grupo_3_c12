const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const User = sequelize.define('User', {
            first_name: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false,
                },
            last_name: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false
            },
            user_name: {
                  type: DataTypes.STRING(20),
                  alowNull: false
            },
            email: {
                  type: DataTypes.STRING(50),
                  alowNull: false,
                  unique: true
            },
            pass1: {
                  type: DataTypes.STRING(100),
                  alowNull: false
            },
            avatar: {
                  type: DataTypes.STRING(100),
            },
            phone: {
                  type: DataTypes.STRING(20),
            },
            birth: {
                  type: DataTypes.DATE
            },
            
            address: {
                  type: DataTypes.STRING(100),
            },
            
      }, {
            sequelize: sequelize,
            modelName: 'user'
      })
}