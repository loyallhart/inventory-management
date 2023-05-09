const router = require('express').Router();
const { Users } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    let validPassword
    let userDataJson
    if (req.session.logged_in){
      res.sendStatus(301)
    }else{
      const userData = await Users.findOne({ where: { username: req.body.username } })

      if (userData) {
        userDataJson = userData.toJSON()
        validPassword = await userData.checkPassword(req.body.password)
      }
      
        if (userData && validPassword) {
          req.session.save(() => {
            req.session.user_id = userDataJson.id
            req.session.logged_in = true
            res.json({ user: userDataJson, message: 'You are now logged in!' })
          })
          return
        }else{    
        res.status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      }
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

module.exports = router;