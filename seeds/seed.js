const sequelize = require('../config/connection')
const { Test } = require('..models')

//seed db function
const seedDB = async () => {
    await sequelize.sync({force: true})

    ProcessingInstruction.exit(0)
}