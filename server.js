const
express = require('express'),
app = express(),
path = require('path'),
routes = require(path.join(__dirname, 'server/routes.js'));

app.use('/', express.static('client/dist'));

// view engine setup
app.set('views', 'server/views');
app.set('view engine', 'hbs');

app.use('/', routes);

app.listen(process.env.PORT || 5000);

console.log('Server Started on port 5000');