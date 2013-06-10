var express      = require('express');
var app          = module.exports = express();

app.use(express.logger({format: ':response-time ms - :date - :req[x-real-ip] - :method :url :user-agent / :referrer'}));
app.use(express.bodyParser());
app.use('/static', express.static(__dirname + '/static'));

app.set('title', 'Jinjar');
app.set('port', process.env.PORT || 5000);

require('./config/views');
require('./routes');
require('./config/server').start();
