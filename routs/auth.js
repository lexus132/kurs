const express = require('express');
const route = express.Router();
const controller = require('../controllers/auth');

route.post('/login', controller.login);
route.post('/registre', controller.registre);

module.exports = route;