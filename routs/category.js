const express = require('express');
const passport = require('passport');
const uploads = require('../middleware/upload');
const controller = require('../controllers/category');
const route = express.Router();



route.get('/', passport.authenticate('jwt', { session:false }) , controller.getAll);
route.get('/:id', controller.getBy);
route.delete('/:id', controller.remove);
route.post('/', uploads.single('image'), controller.create);
route.patch('/:id', uploads.single('image'), controller.update);

module.exports = route;