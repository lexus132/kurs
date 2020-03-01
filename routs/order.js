const express = require('express');
const route = express.Router();
const controller = require('../controllers/order');

route.get('/',
    passport.authenticate('jwt', { session:false }),
    controller.getAll
);
route.post('/',
    passport.authenticate('jwt', { session:false }),
    controller.create
);

module.exports = route;