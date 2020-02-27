const express = require('express');
const route = express.Router();
const controller = require('../controllers/category');
const passport = require('passport');

route.get('/', passport.authenticate('jwt', {session:false}) , controller.getAll);
route.get('/:id', controller.getBy);
route.delete('/:id', controller.remove);
route.post('/', controller.create);
route.patch('/:id', controller.update);

module.exports = route;