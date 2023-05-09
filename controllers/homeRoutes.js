const router = require('express').Router();
const { Product, Category } = require('../models');
const { Sequelize } = require('sequelize')

router.get('/products', async (req, res) => {
    try {
      let products = await Product.findAll({
        attributes:[
        'id',
        'name',
        'model',
        'manufacturer',
        'purchase_date',
        'quantity',
        'status',
        [Sequelize.fn('DATE_FORMAT', Sequelize.col('purchase_date'), '%m-%d-%Y'), 'formatted_date']
      ],
      order: [['name','DESC']],
      raw:true
    })
      // products = products.map(product => product.get({plain:true}))
      res.status(200).json({products})
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
});

router.get('/categories', async (req, res) => {
  try {
    let categories = await Category.findAll()
    categories = categories.map(categories => categories.get({plain:true}))
    res.status(200).json({categories})
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/dashboard', async (req, res) => {
  res.status(200).render('dashboard',{style: 'dashboard.css'})
})

router.get('/inventory', async (req, res) => {
  res.status(200).render('inventory')
})

router.get('/signup', async (req, res) => {
  res.status(200).render('signup',{style: 'signup.css'})
})

router.get('/', async (req, res) => {
  res.status(200).render('login',{style: 'login.css'})
})

module.exports = router