const express = require('express');
const route = express.Router();
const controller = require('../controllers/position');

route.get('/:categoryId',
    passport.authenticate('jwt', { session:false }),
    controller.getByCategoryId
);
route.post('/',
    passport.authenticate('jwt', { session:false }),
    controller.create
);
route.patch('/:id',
    passport.authenticate('jwt', { session:false }),
    controller.update
);
route.delete('/:id',
    passport.authenticate('jwt', { session:false }),
    controller.remove
);

module.exports = route;