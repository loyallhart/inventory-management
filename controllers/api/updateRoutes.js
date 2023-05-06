const router = require('express').Router();
const { Products, Categories } = require('../../models');

router.put('/item/status/:id/:status', async (req, res) => {
    try {
  
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/item/status/:id/:owner', async (req, res) => {
    try {
      
  
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/item/status/:id/:quantity', async (req, res) => {
    try {
      // const data = req.body
      // const quantity = req.params.quantity
      // const id = req.params.id
      //
      // items.update({
      //     quantity:quantity,
      //      where:{id:id}
      // })
  
    } catch (err) {
      res.status(400).json(err);
    }
});

  
module.exports = router;