require('./models/mongodb');

// import packages that were downloaded 
const express = require('express');
var app = express();
const path = require('path');
const exphb = require('express-handlebars');
const bodyparser = require('body-parser');

const inventoryController = require('./controllers/inventoryController');

app.use(bodyparser.urlencoded({
    extended:true
}));

// create a welcome message and direct them to the main page 
app.get('/', (req,res) => {
    res.send(`
 
    <h2 style="font-family: Malgun Gothic; color: midnightblue ">Welcome to Inventory CMS</h2>
     
     
     Click Here to go to <b> <a href="/inventory">Inventory Page</a> </b>`);
    });
app.use(bodyparser.json());

// configuring express  middleware for the handlers 
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphb({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

// establish a server connection 
// port environment variable 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
// set the controller path which will be responding to the user actions 
app.use('/inventory', inventoryController );