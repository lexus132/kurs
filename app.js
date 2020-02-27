const explress = require('express');
const bodyParser = require('body-parser');  // parse запросов
const cors   = require('cors');             // прием кросдомемных запросов
const morgan = require('morgan');           // файный логер

const passport = require('passport');

const app = explress();

const DB_connect = require('./config/config').mongoDB;
const mongoose = require('mongoose');
mongoose.connect(DB_connect, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=>{ console.log( `-- DB connect - Ok` ); })
  .catch( (error)=>{ console.log( error ); });

const analiticsRouth = require('./routs/analitics');
const authRouth = require('./routs/auth');
const categoryRouth = require('./routs/category');
const orderRouth = require('./routs/order');
const positionRouth = require('./routs/position');

app.use(passport.initialize());
require('./middleware/passport')(passport);

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