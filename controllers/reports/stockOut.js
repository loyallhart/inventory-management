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

      const outStock = await Product.count({
        where:{quantity:0}
      })

      if (outStock){
        res.status(200).json({count:outStock})
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