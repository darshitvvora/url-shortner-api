const express = require('express');
const http = require('http');

const config = require('./config/environment');
const logger = require('./components/logger');

const app = express();
const server = http.createServer(app);

require('./config/express')(app);
require('./routes')(app);
require('./components/shortener');

function startServer() {
  server.listen(config.port, config.ip, () => {
    logger.debug(`Server listening on ${config.port}, in ${app.get('env')} mode`);
  });
}

startServer();

// Expose app
module.exports = app;