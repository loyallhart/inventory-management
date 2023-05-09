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

      let lowStock = await Product.findAll({
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
        order: [['name','asc']],
        where:{
          [Op.or]:{
            [Op.and]:[
              {quantity:{[Op.lt]:10}},
              {quantity:{[Op.gt]:0}}
            ]
          }
        },
        raw:true
      })

      if (lowStock){
        res.status(200).json({lowStock})
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