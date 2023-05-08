const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')

class Users extends Model {
    async setPassword(password) {
        const rounds = 10;
        const hashedPassword = await bcrypt.hash(password, rounds);
        this.password = hashedPassword;
      }
    
      // compare entered password with hashed password in database
      async checkPassword(password) {
        const match = await bcrypt.compare(password, this.password);
        return match;
      }
}

Users.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [8],
          },
        },
      },
      {
        hooks: {
          beforeCreate: async (newUserData) => {
            console.log('Before create hook triggered');
            await newUserData.setPassword(newUserData.password);
          },
          beforeUpdate: async (updatedUserData) => {
            if (updatedUserData.password){
              await updatedUserData.setPassword(updatedUserData.password);
            }
          },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
    );
    
module.exports = Users