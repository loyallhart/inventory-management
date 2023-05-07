const router = require('express').Router();
const userRoutes = require('./userRoutes')
const createRoutes = require('./createRoutes');
const updateRoutes = require('./updateRoutes')
const delRoutes = require('./delRoutes')

router.use('/user', userRoutes);
router.use('/update', updateRoutes)
router.use('/create', createRoutes)
router.use('/del', delRoutes)

module.exports = router;