const router = require('express').Router();
const lowStock = require('./lowstock');
const stockOut = require('./stockOut');
const totalInventory = require('./totalInventory');
const damaged = require('./damaged');

router.use('/lowstock', lowStock);
router.use('/stockout', stockOut);
router.use('/inventory', totalInventory);
router.use('/damaged', damaged)

module.exports = router;