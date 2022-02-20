const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes')

const app = express();

//Setup
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

//Engine setup
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

//Routes
app.use(apiRoutes);

//Starting server
app.listen(5300, () => {
    console.log('Server has started on port http://localhost:5300');
});