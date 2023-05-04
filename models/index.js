const Category = require('./category')
const Product = require('./products')

// Product.belongsToMany(Category, {
//     through: {
//         model: ,
//     }
// })

module.exports = {Category, Product}