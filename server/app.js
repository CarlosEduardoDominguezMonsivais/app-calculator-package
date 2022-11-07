const express = require('express');
const dbConnect = require('./config/mongo');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
app.use(cors())

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
    app.use('/calculator', routes[attr]);
});

//mongoDb connection
dbConnect()

//Handle production
if(process.env.NODE_ENV === 'production'){
    //Static folder
    app.use(express.static(__dirname + '/public/'));
    //Handle SPA
    app.get(/.*/, (_req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
}

app.listen(PORT, ()=> console.log('listening on port ' +PORT));