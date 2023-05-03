const router = require('express').Router();
const { items } = require('../../models');

router.put('/item', async (req, res) => {
    try {
      // const data = req.body
      // items.create({
      //     name:data.name,
      //     quantity:data.quantity
      //     etc
      // })
  
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router