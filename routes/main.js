var app = require('../app');

app.get('/', function(request, response) {
    response.render('index', {
        date: new Date().getFullYear()
    });
});
