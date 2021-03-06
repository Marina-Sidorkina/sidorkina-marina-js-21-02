const express = require('express');
const { host, port } = require('../config/serverConfig');
const routes = require('./routes/index');

const app = express()

app.use(express.json());

app.use((req, res, next) => {
  res.type('text/plain')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', routes);

app.listen(port, host, () => console.log('App started'));
