const bodyParser = require('body-parser');
const explress = require('express');

const cors   = require('cors');         // прием кросдомемных запросов
const morgan = require('morgan');       // файный логер

const app = explress();

const analiticsRouth = require('./routs/analitics');
const authRouth = require('./routs/auth');
const categoryRouth = require('./routs/category');
const orderRouth = require('./routs/order');
const positionRouth = require('./routs/position');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/analitics', analiticsRouth);
app.use('/api/auth', authRouth);
app.use('/api/category', categoryRouth);
app.use('/api/order', orderRouth);
app.use('/api/position', positionRouth);

module.exports = app;