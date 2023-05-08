const path = require('path')
const express = require('express');
const session = require('express-session')
const exphbs = require('express-handlebars');
const routes = require('./controllers')
// const helpers = require('./utils/helpers')
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express();

//setup session
const sess = {
  secret: 't2InventoryManagement',
  cookie: {maxAge: 30 * 60 * 1000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

//setup express
app.use(session(sess))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public'))) 
app.use(routes)

const PORT = process.env.PORT || 3001

//configure view engine
const hbs = exphbs.create()
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//test get routes
app.get('/', (req, res) => {
  res.render('login', {
    style: 'login.css'
  });
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    style: 'dashboard.css'
  });
});

app.get('/signup', (req, res) => {
  res.render('signup', {
    style: 'signup.css'
  });
});

//sync sequelize and start listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'))
})




