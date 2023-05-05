const router = require('express').Router();
const { items } = require('../../models');

router.put('/item/status/:id/:status', async (req, res) => {
    try {
      // const data = req.body
      // const id = req.params.id
      // const status = req.params.status
      //
      // items.update({
      //     status:status,
      //      where:{id:id}
      // })
  
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/item/status/:id/:owner', async (req, res) => {
    try {
      // const data = req.body
      // const id = req.params.id
      // const owner = req.params.owner
      //
      // items.update({
      //     owner:owner,
      //      where:{id:id}
      // })
  
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