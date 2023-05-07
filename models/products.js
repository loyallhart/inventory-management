const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection') 
const Category = require('../models/category')

//creating Product Model
class Product extends Model {}

//create fields and columns for Product Model
Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          model: {
            type: DataTypes.STRING,
            allowNull: false
          },
          manufacturer: {
            type: DataTypes.STRING,
            allowNull: false
          },
          purchaseDate: {
            type: DataTypes.DATE,
            allowNull: false
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          status: {
            type: DataTypes.STRING,
            allowNull: false
          },
          owner: {
            type: DataTypes.STRING,
            allowNull: true
          }
        //   categoryId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //       model: 'category',
        //       key: 'id'
        //     }
        //   }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product'
    }
)

module.exports = Product

