var app          = require('../app');
var consolidate  = require('consolidate');
var swig         = require('swig');

app.engine('.html', consolidate.swig);
app.set('view engine', '.html');

swig.init({
    root: 'views',
    allowErrors: true
});
