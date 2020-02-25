const body_parser = require('body-parser');
const explress = require('express');
const app = explress();

const analiticsRouth = require('./routs/analitics');
const authRouth = require('./routs/auth');
const categoryRouth = require('./routs/category');
const orderRouth = require('./routs/order');
const positionRouth = require('./routs/position');

app.use(body_parser.urlencoded({ extended:true }));
app.use(body_parser.json());

app.use('/api/analitics', analiticsRouth);
app.use('/api/auth', authRouth);
app.use('/api/category', categoryRouth);
app.use('/api/order', orderRouth);
app.use('/api/position', positionRouth);

module.exports = app;