const path = require('path');
const express = require('express');
const logger = require('morgan');
const BodyParser = require('body-parser');

const app = express();

const indexRoutes = require('./routes/index')

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(BodyParser.urlencoded({extended: false}));

// Routes
app.use('/', indexRoutes);

// Start server
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})