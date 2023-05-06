const router = require('express').Router();
const userRoutes = require('./userRoutes')
const createRoutes = require('./createRoutes');
const updateRoutes = require('./updateRoutes')

router.use('/user', userRoutes);
router.use('/update', updateRoutes)
router.use('/create', createRoutes)

module.exports = router;