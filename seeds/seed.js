const sequelize = require('../config/connection');
const { Product, Category, ProductCategory, Users } = require('../models')
const categorySeedData = require('./categorySeedData.json');
const productSeedData = require('./productSeedData.json');
const userSeedData = require('./userSeedData.json')

// seed db function
const seedDB = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(userSeedData, {
    individualHooks: true
  });

  const categories = await Category.bulkCreate(categorySeedData);
  const products = await Product.bulkCreate(productSeedData);
  //running into bugs here

  // Create an array of product_category data to bulk create
  const productCategorySeedData = products.map((product) => {
    const categoryIds = [1, 2, 3]; // replace with actual category ids
    const productCategoryData = categoryIds.map((categoryId) => {
      return { product_id: product.id, category_id: categoryId };
    });
    return productCategoryData;
  }).flat();

  // Bulk create product_category data
  await ProductCategory.bulkCreate(productCategorySeedData);

  process.exit(0);
};

seedDB();
