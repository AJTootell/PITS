const
express = require('express'),
app = express(),
path = require('path'),
routes = require(path.join(__dirname, '../routes'));

app.use('/', express.static('client/public'));

// view engine setup
app.set('views', 'server/views');
app.set('view engine', 'hbs');

app.use('/func', routes);

app.listen(process.env.PORT || 5000);
