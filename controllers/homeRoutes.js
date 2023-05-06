const router = require('express').Router();
const { Product, Category } = require('../models');

router.get('/products', async (req, res) => {
    try {
      let products = await Product.findall()
      products = products.map(product => product.get({plain:true}))
      res.sendStatus(200).json({products})
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
});

router.post('/categories', async (req, res) => {
  try {
    let categories = await Category.findAll()
    categories = categories.map(categories => categories.get({plain:true}))
    res.sendStatus(200).json({categories})
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/login', async (req, res) => {
  res.status(200).render('login')
})

module.exports = router