var express = require('express');
var app = express();
/*
app.get('/', function(req,res){
       res.send('Hello World!');
});

app.get('/students', function(req,res){
       res.send('Hi Janel!');
});


*/

app.use(require('body-parser')()); //body parser
app.use(require('method-override')());
app.use(require(__dirname + '/config/router')(express.Router()));

var server = app.listen(5000, function(){
       var host = server.address().address;
       var port = server.address().port;
       console.log('Example app listening at http://%s:%s',  host,port);
});
