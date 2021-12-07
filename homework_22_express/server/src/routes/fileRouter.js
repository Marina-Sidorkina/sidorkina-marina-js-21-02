const router = require('express').Router();
const FileService = require('../services/fileService');

router
  .post('/postFile', FileService.postFile);

module.exports = router;
