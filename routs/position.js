const express = require('express');
const route = express.Router();
const controller = require('../controllers/position');

route.get('/:categoryId', controller.getByCategoryId );
route.post('/', controller.create);
route.patch('/:id', controller.update);
route.delete('/:id', controller.remove);

module.exports = route;