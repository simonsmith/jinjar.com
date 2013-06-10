var app   = require('../app');
var http  = require('http');

module.exports = {
    start: function() {
        http.createServer(app).listen(app.get('port'), function(){
            console.log('Express is listening on port ' + app.get('port'));
        });
    }
};
