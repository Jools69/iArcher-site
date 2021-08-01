const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const homeRoutes = require('./routes/home');
const roundsRoutes = require('./routes/rounds');
const contactRoutes = require('./routes/contact');

// create an instance of Express.
const app = express();

// Configure Express settings
//---------------------------

// install the ejs-mate templating functions
app.engine('ejs', ejsMate);
// set ejs to be the template rendering engine
app.set('view engine', 'ejs');
// set the path to the ejs views
app.set('views', path.join(__dirname, 'views'));

// Configure Express middleware
//-----------------------------
app.use(express.static(path.join(__dirname, 'public')));

// Configure the Express Routes
//-----------------------------

app.use('/', homeRoutes);
app.use('/rounds', roundsRoutes);
app.use('/contact', contactRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Serving on port ${process.env.PORT || 3000}`);
});