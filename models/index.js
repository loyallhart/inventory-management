const Category = require('./category')
const Product = require('./products')
const ProductCategory = require('./productCategory')
const sequelize = require('../config/connection');

Category.belongsToMany(Product, {
    through: 'product_category',
    foreignKey: 'category_id'
  });

Product.belongsToMany(Category, {
    through: 'product_category',
    foreignKey: 'product_id'
  });
  
  module.exports = { Product, Category, ProductCategory };