const sequelize = require('../config/connection')
const { Product } = require('..models')
const productSeedData = require('./productSeedData.json')
const categorySeedData = [
    { name: 'Total Products/Inventory' },
    { name: 'Low Stock Products' },
    { name: 'Out of Stock Products' },
    { name: 'Damaged Inventory' },
    { name: 'Products Deployed Internally' },
  ]

//seed db function
const seedDB = async () => {
    await sequelize.sync({force: true})
    const products = await Product.bulkCreate(productSeedData)
    const categories = await Category.bulkCreate(categorySeedData);

    console.log(`Seeded ${products.length} products and ${categories.length} categories`);
}

seedDB()