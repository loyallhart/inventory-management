const router = require('express').Router();
const { Product, Category, Users } = require('../../models');
const {transporter, options} = require('../../nodemailer')
router.put('/product/:id', async (req, res) => {
    try {
      let product
      if (!req.session.logged_in) {
        res.sendStatus(401) 
        return
      }

      await Product.update(req.body, {where:{id:req.params.id}})
      .then(async (prod) =>{
        if (req.body.quantity === 0){
          product = await Product.findOne({
            where:{id:req.params.id},
            raw:true
          })

          let users = await Users.findAll({raw:true})
          let emailList = users.map(user => user.email)
          options.to = emailList.join(',')
          options.text = `${product.name} is out of stock`
          transporter.sendMail(options)
        }
      })
      .then((prod) => {
        res.status(200).json({message:'Product Updated!'})
      })
      .catch((err) => {
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