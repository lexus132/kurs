const express = require('express');
const route = express.Router();
const controller = require('../controllers/category');

route.get('/', controller.getAll);
route.get('/:id', controller.getBy);
route.delete('/:id', controller.remove);
route.post('/', controller.create);
route.patch('/:id', controller.update);

module.exports = route;