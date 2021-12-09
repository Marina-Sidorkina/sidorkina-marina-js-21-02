const router = require('express').Router();
const UserService = require('../services/userService');

router
  .get('', UserService.getUsersList)
  .get('/:id', UserService.getUserById)
  .put('/:id', UserService.updateUserById)
  .post('/create', UserService.createUser)
  .delete('/:id', UserService.deleteUserById);

module.exports = router;