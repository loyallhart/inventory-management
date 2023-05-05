const router = require('express').Router();
const createRoutes = require('./createRoutes');

router.use('/user', userRoutes);
route.use('/update', updateRoutes)
route.use('/create', createRoutes)

module.exports = router;