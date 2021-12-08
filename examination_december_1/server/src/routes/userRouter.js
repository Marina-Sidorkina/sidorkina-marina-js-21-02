const router = require('express').Router();
const UserService = require('../services/userService');

router
  .get('', UserService.getUsersList);

module.exports = router;