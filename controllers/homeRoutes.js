const router = require('express').Router();
const { Products, Categories } = require('../../models');

router.get('/products', async (req, res) => {
    try {
      const data = req.body
      let products = await Products.findall({
        name: data.name,
        model: data.model,
        manufacturer: data.manufacturer,
        purchaseDate: data.purchase.date,
        quantity: data.quantity,
        status: data.status,
        owner: data.owner,
        categoryId: data.category
      })
      products = products.map((product) => product.get({plain:true}))
      res.sendStatus(200).toJSON({products})
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
});

router.post('/category', async (req, res) => {
  try {
    const data = req.body
    await Categories.create({
      name: req.body.name,
    })
    res.sendStatus(200)
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

module.exports = router