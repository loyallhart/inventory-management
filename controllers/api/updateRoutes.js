const router = require('express').Router();
const { Product, Category, Users } = require('../../models');

router.put('/product/:id', async (req, res) => {
    try {
      if (!req.session.logged_in) {
        res.sendStatus(401) 
        return
      }
      Product.update(req.body, {where:{id:req.params.id}})
      .then((prod) => {
        res.status(200).json({message:'Product Updated!'})
      }).catch((err) => {
        res.status(500).json({message:"Database Error"})
      })
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/category/:id', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.sendStatus(401) 
      return
    }
    Category.update(req.body, {where:{id:req.params.id}})
    .then((cat) => {
      res.status(200).json({message:'Category Updated!'})
    }).catch((err) => {
      res.status(500).json({message:"Database Error"})
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/user/:id', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.sendStatus(401) 
      return
    }
    Users.update(req.body, {where:{id:req.params.id}})
    .then((user) => {
      res.status(200).json({message:'User Updated!'})
    }).catch((err) => {
      res.status(500).json({message:"Database Error"})
    })
  } catch (err) {
    res.status(400).json(err);
  }
});
  
module.exports = router;