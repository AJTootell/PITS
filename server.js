const
express = require('express'),
app = express(),
path = require('path'),
routes = require(path.join(__dirname, 'server/routes.js')),
mongoose = require('mongoose');

mongoose.connect('mongodb+srv://webres:webres@solacecluster-ihwta.mongodb.net/PITS?retryWrites=true', { useNewUrlParser: true });
const db = mongoose.connection;

app.use('/', express.static('client/dist'));

// view engine setup
app.set('views', 'server/views');
app.set('view engine', 'hbs');

app.use('/', routes);

app.listen(process.env.PORT || 5000);

console.log('Server Started on port 5000');
