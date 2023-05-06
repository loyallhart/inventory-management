const router = require('express').Router();
const { Users } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    let validPassword
    let userDataJson

    const userData = await Users.findOne({ where: { username: req.body.user } })
    if (userData) {
      userDataJson = userData.toJSON()
      validPassword = (req.body.password === userDataJson.password) ? true : false
    }

    if (userData && validPassword) {
      req.session.save(() => {
        req.session.user_id = userDataJson.id
        req.session.logged_in = true
      })
      res.status(200).json({ user: userDataJson, message: 'You are now logged in!' })
    }else{    
      res.status(400)
      .json({ message: 'Incorrect username or password, please try again' });
    }
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

module.exports = router;