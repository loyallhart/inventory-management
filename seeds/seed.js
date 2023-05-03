const sequelize = require('../config/connection')
const categorySeedData = require('./categorySeedData.json')
const productSeedData = require('./productSeedData.json')

//seed db function
const seedDB = async () => {
    await sequelize.sync({force: true})
    const products = await Product.bulkCreate(productSeedData)
    const categories = await Category.bulkCreate(categorySeedData);

    process.exit(0)
}

seedDB()