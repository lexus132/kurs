const express = require('express');
const route = express.Router();
const controller = require('../controllers/analitics');

route.get('/overview', controller.overview);
route.get('/analitics', controller.analitics);

module.exports = route;