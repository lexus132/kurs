const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const controller = require('../controllers/category');
const route = express.Router();

route.get('/',
    passport.authenticate('jwt', { session:false }),
    controller.getAll
);
route.get('/:id',
    passport.authenticate('jwt', { session:false }),
    controller.getBy
);
route.delete('/:id',
    controller.remove
);
route.post('/',
    passport.authenticate('jwt', { session:false }),
    upload.single('image'),
    controller.create
);
route.patch('/:id',
    passport.authenticate('jwt', { session:false }),
    upload.single('image'),
    controller.update
);

module.exports = route;