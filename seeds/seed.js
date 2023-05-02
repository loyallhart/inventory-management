const sequelize = require('../config/connection')
const { Products } = require('..models')

const productSeedData = require('./productSeedData.json')

//seed db function
const seedDB = async () => {
    await sequelize.sync({force: true})

    const products = await Products.bulkCreate(productSeedData)

    ProcessingInstruction.exit(0)
}

seedDB()