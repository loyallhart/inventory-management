const router = require('express').Router();
const { Product, Category, Users } = require('../../models');

router.post('/product', async (req, res) => {
    try {
      const data = req.body
      Product.create({
        name: data.name,
        model: data.model,
        manufacturer: data.manufacturer,
        purchaseDate: data.purchaseDate,
        quantity: data.quantity,
        status: data.status,
        owner: data.owner,
      })
      .then((prod) => {
        res.status(200).json({message:'Product Added!'})
      }).catch((err) => {
        console.log(err)
        res.status(500).json({message:"Database Error"})
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
});

router.post('/category', async (req, res) => {
  try {
    const data = req.body
    Category.create({
      name: req.body.name,
    })
    .then((prod) => {
      res.status(200).json({message:'Category Added!'})
    }).catch((err) => {
      console.log(err)
      res.status(500).json({message:"Database Error"})
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/user', async (req, res) => {
  try {
    const data = req.body
    let currentUsers = await Users.findAll({
      attributes:['username'],
      raw: true
    })
    currentUsers = currentUsers.map(user => user.username)
    console.log(currentUsers)
    if (currentUsers.includes(req.body.username)){
      res.status(301).json({message: "Username Already Exists"})
      return
    }

    Users.create(data)
    .then((prod) => {
      res.status(200).json({message:'User Added!'})
    }).catch((err) => {
      console.log(err)
      res.status(500).json({message:"Database Error"})
    })

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router