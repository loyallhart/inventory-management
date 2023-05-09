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

      const damaged = await Product.findAll({
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
        where:{status:"damaged"},
        order: [['name','asc']],
        raw:true
      })

      if (damaged){
        res.status(200).json({damaged})
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