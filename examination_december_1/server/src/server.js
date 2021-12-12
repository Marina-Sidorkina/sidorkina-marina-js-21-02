const express = require('express');
const { host, port, statuses } = require('../config/serverConfig');
const routes = require('./routes/index');
const logger = require('./logger');
const context = require('request-context');
const { v4: generateUUID } = require('uuid');
const fs = require('fs')

if(!fs.existsSync('./logs')) {
  fs.mkdirSync('./logs');
}

const app = express();

app.use(express.json());
app.use(context.middleware('request'));

app.use((request, response, next) => {
  context.set('uuid', generateUUID());
  response.type('text/plain')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.use('/proxy', routes);

app.use((error, request, response, next) => {
  console.log(error);
  logger.fatal(error);

  response.status(statuses.SERVER_ERROR).json({
    error: error.toString()
  });

  next();
})

app.listen(port, host, () => console.log('App started'));
