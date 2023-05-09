const router = require('express').Router();
//const { itemTable } = require('../../models')

router.get('/', async (req, res) => {
    try {
      const items = //items.findAll({
    //     where:'quantity low',
    //     group: itemname,
    //     count: itemname,
    //     order:itemname asc
    // })

      //res.send(200).toJSON(items)
  
      res.status(400)
      .json({ message: 'No items' })
      
    } catch (err) {
      res.status(400).json(err)
      console.log(err)
    }
  })

module.exports = router;