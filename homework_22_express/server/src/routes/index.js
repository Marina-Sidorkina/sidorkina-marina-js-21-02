const router = require('express').Router();
const fileRouter = require('./fileRouter');

router.use('/file', fileRouter)

module.exports = router;
