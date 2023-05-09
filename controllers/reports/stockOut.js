const router = require('express').Router();
const {Product} = require('../../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', async (req, res) => {
    try {
      if (!req.session.logged_in) {
        res.sendStatus(401) 
        return
      }

      const stockOut = await Product.findAll({
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
        where:{quantity:0},
        order: [['name','asc']],
        raw:true
      })

      if (stockOut){
        res.status(200).json({stockOut})
      }else{
        res.status(500)
        .json({ message: 'Database Error' })
      }    
    } catch (err) {
      res.status(500).json(err)
      console.log(err)
    }
  })

module.exports = router;