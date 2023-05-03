const router = require('express').Router();
const lowStock = require('./lowstock');
const stockOut = require('./stockOut');
const totalInventory = require('./totalInventory');

router.use('/lowstock', lowStock);
router.use('/stockOut', stockOut);
router.use('/inventory', totalInventory);

module.exports = router;