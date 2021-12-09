const router = require('express').Router();
const UserService = require('../services/userService');

router
  .get('', UserService.getUsersList)
  .get('/:id', UserService.getUserById)
  .put('/:id', UserService.updateUserById);

module.exports = router;