const router = require('express').Router();
const FileService = require('../services/fileService');

router
  .post('/postFile', FileService.postFile)
  .get('/getFile', FileService.getFile);

module.exports = router;
