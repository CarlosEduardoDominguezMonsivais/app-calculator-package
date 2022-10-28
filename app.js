const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

//Engine template
const { Liquid } = require('liquidjs');

global.engine = new Liquid({
    root:  ['./views',  './views/layouts'],
    extname: '.liquid',
});
app.engine('liquid', engine.express());
app.set("view engine","liquid");
app.use(express.static(path.join(__dirname, 'views/assets')));
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//routes
const routes = require('./routes');
Object.keys(routes).forEach(attr => {
    app.use('/', routes[attr]);
});

//mongoDb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log('conected to mongoDB'))
    .catch((error) => console.log(error))

app.listen(PORT, ()=> console.log('listening on port ' +PORT));