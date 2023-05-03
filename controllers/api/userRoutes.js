const router = require('express').Router();
const { User } = require('../../models');

let validPassword
let userDataJson

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { name: req.body.user } })

    if (userData) {
      userDataJson = userData.toJSON()
      validPassword = await userData.checkPass(req.body.password)
    }

    if (userData && validPassword) {
      req.session.save(() => {
        req.session.user_id = userDataJson.id
        req.session.logged_in = true
        res.json({ user: userDataJson, message: 'You are now logged in!' })
      })
    }
    
    res.status(400)
    .json({ message: 'Incorrect email or password, please try again' });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;