const router = require('express').Router();
const { Product, Category, Users } = require('../../models');

router.delete('/product/:id', async (req, res) => {
    try {
      if (!req.session.logged_in) {
        res.sendStatus(401) 
        return
      }
      Product.destroy({where:{id:req.params.id}})
      .then((prod) => {
        res.status(200).json({message:'Product Deleted!'})
      }).catch((err) => {
        res.status(500).json({message:"Database Error"})
      })
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/category/:id', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.sendStatus(401) 
      return
    }
    Category.destroy({where:{id:req.params.id}})
    .then((cat) => {
      res.status(200).json({message:'Category Deleted!'})
    }).catch((err) => {
      res.status(500).json({message:"Database Error"})
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/user/:id', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.sendStatus(401) 
      return
    }
    Users.destroy({where:{id:req.params.id}})
    .then((user) => {
      res.status(200).json({message:'User Deleted!'})
    }).catch((err) => {
      res.status(500).json({message:"Database Error"})
    })
  } catch (err) {
    res.status(400).json(err);
  }
});
  
module.exports = router;