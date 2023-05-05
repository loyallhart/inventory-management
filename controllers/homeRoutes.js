const router = require('express').Router();
const { Products, Categories } = require('../../models');

router.get('/products', async (req, res) => {
    try {
      let products = await Products.findall()
      products = products.map(product => product.get({plain:true}))
      res.sendStatus(200).json({products})
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
});

router.post('/categories', async (req, res) => {
  try {
    await Categories.findAll()
    categories = categories.map(categories => categories.get({plain:true}))
    res.sendStatus(200).json({categories})
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

module.exports = router