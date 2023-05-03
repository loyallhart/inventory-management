const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const reportRoutes = require('./reports')


router.use('/api', apiRoutes);
router.use('/reports',reportRoutes)
router.use('/', homeRoutes);

router.use('*',(req,res)=>{
    res.redirect('/')
})

module.exports = router;